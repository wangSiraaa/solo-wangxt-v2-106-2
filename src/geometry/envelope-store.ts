/**
 * 公差包络分析作业的持久化与运行器。
 *
 * 作业以"参数快照"为边界：
 *  - 快照冻结基准齿轮参数（mm）、基准中心距与采样 spec，并带指纹 key；
 *  - 每个组合结果逐次落盘，刷新页面后只恢复未完成组合并保留已完成统计；
 *  - 参数或单位在运行中改变时，旧作业仍归旧快照（按 key 区分），绝不覆盖新面板；
 *  - 非法范围 / 不兼容齿轮在创建前被 validateEnvelopeSpec 拦截，存储层不会写入半份结果。
 *
 * 存储后端抽象为 JobStorage：浏览器用 IndexedDB（envelope-idb.ts），
 * 脚本测试用内存实现（createMemoryStorage）。
 *
 * 执行模型：同一时刻只有一个扫描循环（WASM 线程占用 + 避免卡顿），其余作业排队；
 * 每个排队的循环持有独立令牌（每作业一个递增 token），取消/删除/重算只使该作业
 * 自己的令牌失效，不会误杀其它作业。
 */
import {
  buildCombos,
  computeExtrema,
  evaluateCombo,
  evaluateComboWithRegions,
  initialCombos,
  makeSnapshot,
  validateEnvelopeSpec,
  type BaselineParams,
  type ComboResult,
  type EnvelopeJob,
  type EnvelopeSpec,
  type EvaluatedCombo,
  type JobExtrema
} from './envelope'

// ---------------------------------------------------------------------------
// 存储抽象
// ---------------------------------------------------------------------------

export interface JobStorage {
  get(id: string): Promise<EnvelopeJob | undefined>
  getAll(): Promise<EnvelopeJob[]>
  put(job: EnvelopeJob): Promise<void>
  delete(id: string): Promise<void>
}

/** 内存存储（测试用；刷新恢复语义在测试中通过重新实例化 runner 模拟） */
export function createMemoryStorage(): JobStorage {
  const map = new Map<string, EnvelopeJob>()
  return {
    get: async (id) => {
      const v = map.get(id)
      return v ? cloneJob(v) : undefined
    },
    getAll: async () => [...map.values()].map(cloneJob),
    put: async (job) => void map.set(job.id, cloneJob(job)),
    delete: async (id) => void map.delete(id)
  }
}

function cloneJob(job: EnvelopeJob): EnvelopeJob {
  return structuredClone(job)
}

export function newJobId(): string {
  return `env-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

// ---------------------------------------------------------------------------
// 作业创建（严格前置校验：不通过不写任何数据）
// ---------------------------------------------------------------------------

export function createJob(baseline: BaselineParams, spec: EnvelopeSpec, id = newJobId(), now = Date.now()):
  | { ok: true; job: EnvelopeJob }
  | { ok: false; errors: string[] } {
  const validation = validateEnvelopeSpec(spec, baseline.gear1, baseline.gear2, baseline.baseCenterDistance)
  if (!validation.ok) return { ok: false, errors: validation.errors }
  const snapshot = makeSnapshot(baseline, spec, now)
  const job: EnvelopeJob = {
    id,
    snapshot,
    status: 'running',
    createdAt: now,
    updatedAt: now,
    finishedAt: null,
    canceledAt: null,
    combos: initialCombos(spec)
  }
  return { ok: true, job }
}

type Listener = () => void

export interface RunnerCallbacks {
  /** 每完成一个组合后回调（用于 UI 进度） */
  onTick?: (jobId: string) => void
}

interface QueueEntry {
  jobId: string
  gen: number
  opts: { onlyIndexes?: Set<number>; keepStatus?: EnvelopeJob['status'] }
}

export class EnvelopeRunner {
  /** 当前真正占用扫描循环的作业 id；同一时刻仅一个 */
  private activeId: string | null = null
  /** 等待执行的循环队列 */
  private queue: QueueEntry[] = []
  /** 每作业独立的取消令牌（数字递增）；过期令牌的循环自动退出 */
  private tokens = new Map<string, number>()
  /** 正在执行或排队的 jobId（UI 显示忙碌） */
  private busyIds = new Set<string>()
  private listeners = new Set<Listener>()
  /** 最坏相位重叠区域的内存缓存：jobId -> comboIndex -> regions（不入库） */
  private regionsCache = new Map<string, Map<number, EvaluatedCombo['regions']>>()

  constructor(private storage: JobStorage, private cb: RunnerCallbacks = {}) {}

  subscribe(fn: Listener): () => void {
    this.listeners.add(fn)
    return () => this.listeners.delete(fn)
  }

  private notify() {
    this.listeners.forEach((fn) => fn())
  }

  isActive(jobId: string): boolean {
    return this.activeId === jobId
  }

  isBusy(jobId: string): boolean {
    return this.busyIds.has(jobId)
  }

  /** 让该作业当前及排队的循环令牌全部失效 */
  private invalidate(jobId: string) {
    this.tokens.set(jobId, (this.tokens.get(jobId) ?? 0) + 1)
    this.queue = this.queue.filter((q) => q.jobId !== jobId)
  }

  /** 入队一个扫描循环 */
  private enqueue(jobId: string, opts: QueueEntry['opts']) {
    const gen = (this.tokens.get(jobId) ?? 0) + 1
    this.tokens.set(jobId, gen)
    this.busyIds.add(jobId)
    this.queue.push({ jobId, gen, opts })
    void this.pump()
  }

  /** 队列泵：串行执行所有扫描循环 */
  private pumping = false
  private async pump() {
    if (this.pumping) return
    this.pumping = true
    try {
      while (this.queue.length) {
        const entry = this.queue.shift()!
        if (entry.gen !== this.tokens.get(entry.jobId)) continue
        const job = await this.storage.get(entry.jobId)
        if (!job || job.status === 'cancelled') {
          this.busyIds.delete(entry.jobId)
          this.notify()
          continue
        }
        this.activeId = entry.jobId
        await this.scan(entry)
        this.activeId = null
        this.busyIds.delete(entry.jobId)
        this.notify()
      }
    } finally {
      this.pumping = false
      this.activeId = null
    }
  }

  /**
   * 创建并启动一个新作业。校验失败时不写任何结果。
   * 同快照（同 key）若已有未完成作业，则恢复那个作业而不是新建。
   */
  async start(baseline: BaselineParams, spec: EnvelopeSpec): Promise<{ ok: true; job: EnvelopeJob } | { ok: false; errors: string[] }> {
    const key = makeSnapshot(baseline, spec, 0).key
    const existing = await this.findBySnapshotKey(key)
    if (existing && existing.status !== 'done') {
      await this.resume(existing.id)
      const job = await this.storage.get(existing.id)
      return { ok: true, job: job! }
    }
    const created = createJob(baseline, spec)
    if (!created.ok) return { ok: false, errors: created.errors }
    const job = created.job
    await this.storage.put(job)
    this.notify()
    this.enqueue(job.id, {})
    return { ok: true, job }
  }

  private async findBySnapshotKey(key: string): Promise<EnvelopeJob | undefined> {
    const all = await this.storage.getAll()
    return [...all].filter((j) => j.snapshot.key === key).sort((a, b) => b.updatedAt - a.updatedAt)[0]
  }

  /** 页面刷新后：恢复所有未完成（running）作业；只重算 pending 组合，已完成统计保留 */
  async resumeInterrupted(): Promise<EnvelopeJob[]> {
    const all = await this.storage.getAll()
    const resumed: EnvelopeJob[] = []
    for (const job of all) {
      if (job.status === 'running' && job.combos.some((c) => c.status === 'pending')) {
        this.enqueue(job.id, {})
        resumed.push(job)
      }
    }
    if (resumed.length) this.notify()
    return resumed
  }

  /** 恢复指定作业（cancelled 也可继续；仅扫描 pending 组合） */
  async resume(jobId: string) {
    const job = await this.storage.get(jobId)
    if (!job) throw new Error('作业不存在（可能已被删除）')
    if (job.status === 'done') return
    if (this.busyIds.has(jobId)) return
    job.status = 'running'
    job.canceledAt = null
    job.updatedAt = Date.now()
    await this.storage.put(job)
    this.notify()
    this.enqueue(jobId, {})
  }

  /** 请求取消：当前在算的组合算完即停（该组合结果仍会落盘），不留下半成品组合 */
  async cancel(jobId: string) {
    const job = await this.storage.get(jobId)
    if (!job || job.status !== 'running') return
    this.invalidate(jobId)
    job.status = 'cancelled'
    job.canceledAt = Date.now()
    job.updatedAt = Date.now()
    await this.storage.put(job)
    if (this.activeId === jobId) {
      // 活动循环在最近一个 await 点看到令牌失效后自行退出
    }
    this.busyIds.delete(jobId)
    this.notify()
  }

  /** 删除作业（含其排队/执行中的循环与区域缓存） */
  async remove(jobId: string) {
    this.invalidate(jobId)
    this.busyIds.delete(jobId)
    this.regionsCache.delete(jobId)
    await this.storage.delete(jobId)
    this.notify()
  }

  /** 局部重算：把指定组合重置为 pending 后只重算这些组合，其余结果与统计保留。
   *  不改变作业总状态（done 作业重算后仍显示完成，只更新被选组合）。 */
  async recompute(jobId: string, comboIndexes: number[]) {
    const job = await this.storage.get(jobId)
    if (!job) return
    if (this.busyIds.has(jobId)) return
    const indexSet = new Set(comboIndexes)
    for (const c of job.combos) {
      if (indexSet.has(c.index)) {
        c.status = 'pending'
        c.reason = undefined
        c.maxArea = 0
        c.worstS = c.worstPhi1 = c.worstPhi2 = null
        c.doneAt = null
      }
    }
    job.updatedAt = Date.now()
    await this.storage.put(job)
    this.notify()
    this.enqueue(jobId, { onlyIndexes: indexSet, keepStatus: job.status })
  }

  /** 单个队列项的串行扫描；每完成一个组合立即持久化 */
  private async scan(entry: QueueEntry) {
    const { jobId, gen, opts } = entry
    for (;;) {
      if (gen !== this.tokens.get(jobId)) return
      const job = await this.storage.get(jobId)
      if (!job) return
      const target = job.combos.find(
        (c) => c.status === 'pending' && (opts.onlyIndexes ? opts.onlyIndexes.has(c.index) : true)
      )
      if (!target) break

      const evaluated = await evaluateCombo(job.snapshot, target)
      // await 期间可能已取消/删除：令牌过期则丢弃这份未落盘结果
      if (gen !== this.tokens.get(jobId)) return
      const latest = await this.storage.get(jobId)
      if (!latest) return
      Object.assign(latest.combos[target.index], evaluated.result)
      this.cacheRegions(jobId, evaluated)
      if (!opts.keepStatus) {
        const pending = latest.combos.some((c) => c.status === 'pending')
        latest.status = pending ? 'running' : 'done'
        latest.finishedAt = pending ? null : Date.now()
      }
      latest.updatedAt = Date.now()
      await this.storage.put(latest)
      this.cb.onTick?.(jobId)
      this.notify()
      await new Promise((r) => setTimeout(r, 0))
    }
  }

  private cacheRegions(jobId: string, evaluated: EvaluatedCombo) {
    if (!evaluated.regions) return
    let m = this.regionsCache.get(jobId)
    if (!m) {
      m = new Map()
      this.regionsCache.set(jobId, m)
    }
    m.set(evaluated.result.index, evaluated.regions)
  }

  /**
   * 取某风险组合最坏相位的重叠多边形（优先内存缓存，否则按快照重算该组合）。
   * 返回几何定位所需的全部信息。
   */
  async getWorstPose(jobId: string, comboIndex: number): Promise<{
    combo: ComboResult
    regions: NonNullable<EvaluatedCombo['regions']>
  } | null> {
    const job = await this.storage.get(jobId)
    if (!job) return null
    const combo = job.combos[comboIndex]
    if (!combo || combo.status !== 'risk') return null

    const cached = this.regionsCache.get(jobId)?.get(comboIndex)
    if (cached) return { combo, regions: cached }

    const evaluated = await evaluateComboWithRegions(job.snapshot, combo)
    this.cacheRegions(jobId, evaluated)
    return evaluated.regions ? { combo: evaluated.result, regions: evaluated.regions } : null
  }

  // ---- 派生统计（纯函数；刷新恢复后同样可用） ----
  extrema(job: EnvelopeJob): JobExtrema {
    return computeExtrema(job.combos)
  }

  /** 给定 spec 的确定性组合顺序（供 UI 建表/测试复核） */
  expectedCombos(spec: EnvelopeSpec) {
    return buildCombos(spec)
  }

  /** 深拷贝作业（工具函数） */
  clone(job: EnvelopeJob): EnvelopeJob {
    return cloneJob(job)
  }
}
