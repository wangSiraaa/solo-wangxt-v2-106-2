/**
 * 公差包络分析作业的持久化与执行器。
 *
 * 持久化（toleranceStore 部分）：
 *  - 浏览器用 IndexedDB（与案例库同一个数据库的 tolerance-jobs 库）；
 *  - 测试用内存实现（createMemoryJobStore），同一接口；
 *  - 作业记录在【每个样本完成后】落盘：刷新/崩溃后已完成样本与统计都在，
 *    恢复时只重算 results 中为 null 的位置，绝不重复劳动。
 *
 * 执行器（ToleranceRunner）：
 *  - 可取消（取消在样本边界生效，正在做的 Clipper 调用不被腰斩，其结果丢弃不写）；
 *  - 可局部重算（按样本键列表重算，统计与极值自动校正）；
 *  - 作业自带冻结快照，运行期基准面板怎么改都与作业无关——
 *    旧结果只能归属旧快照（fingerprint 决定），不能覆盖新面板。
 */
import {
  analyzeSample,
  baselineFingerprint,
  linspace,
  validateSetup,
  type BaselineSnapshot,
  type JobExtremes,
  type SampleKey,
  type SampleResult,
  type ToleranceJob,
  type ToleranceSetup
} from './geometry/tolerance'
import type { GearGeometry } from './geometry/gear'
import { TOL_STORE, tx } from './store'

export const TOL_SCHEMA_VERSION = 1

// ---------------------------------------------------------------------------
// 持久化接口
// ---------------------------------------------------------------------------

export interface JobStore {
  put(job: ToleranceJob): Promise<void>
  get(id: string): Promise<ToleranceJob | undefined>
  list(): Promise<ToleranceJob[]>
  delete(id: string): Promise<void>
}

export function createIndexedDbJobStore(): JobStore {
  return {
    put: (job) => storeRef.putJob(job),
    get: (id) => storeRef.getJob(id),
    list: () => storeRef.listJobs(),
    delete: (id) => storeRef.deleteJob(id)
  }
}

async function idbPut(job: ToleranceJob): Promise<void> {
  await tx('readwrite', (s) => s.put({ ...job, updatedAt: Date.now() }), TOL_STORE)
}
async function idbGet(id: string): Promise<ToleranceJob | undefined> {
  return tx<ToleranceJob | undefined>('readonly', (s) => s.get(id), TOL_STORE)
}
async function idbList(): Promise<ToleranceJob[]> {
  const all = await tx<ToleranceJob[]>('readonly', (s) => s.getAll() as IDBRequest<ToleranceJob[]>, TOL_STORE)
  return [...all].sort((a, b) => b.updatedAt - a.updatedAt)
}
async function idbDelete(id: string): Promise<void> {
  await tx('readwrite', (s) => s.delete(id), TOL_STORE)
}

// 用一层间接，方便在没有 indexedDB 的环境（测试）替换实现
export const storeRef: {
  putJob: (job: ToleranceJob) => Promise<void>
  getJob: (id: string) => Promise<ToleranceJob | undefined>
  listJobs: () => Promise<ToleranceJob[]>
  deleteJob: (id: string) => Promise<void>
} = {
  putJob: idbPut,
  getJob: idbGet,
  listJobs: idbList,
  deleteJob: idbDelete
}

/** 内存实现（Node 验收脚本用） */
export function createMemoryJobStore(seed: ToleranceJob[] = []): JobStore & { dump: () => ToleranceJob[] } {
  const map = new Map<string, ToleranceJob>(seed.map((j) => [j.id, structuredClone(j)]))
  return {
    async put(job) {
      map.set(job.id, structuredClone({ ...job, updatedAt: Date.now() }))
    },
    async get(id) {
      const j = map.get(id)
      return j ? structuredClone(j) : undefined
    },
    async list() {
      return [...map.values()].map((j) => structuredClone(j)).sort((a, b) => b.updatedAt - a.updatedAt)
    },
    async delete(id) {
      map.delete(id)
    },
    dump: () => [...map.values()].map((j) => structuredClone(j))
  }
}

export function newJobId(): string {
  return `tol-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

// ---------------------------------------------------------------------------
// 作业创建（校验失败 → 抛错，绝不落盘半份记录）
// ---------------------------------------------------------------------------

export function createJob(
  baseline: BaselineSnapshot,
  setup: ToleranceSetup,
  displayUnit: string
): ToleranceJob {
  const errors = validateSetup(baseline, setup)
  if (errors.length) throw new JobValidationError(errors)

  const axisCenter = linspace(setup.center.min, setup.center.max, setup.center.steps)
  const axisThickness = linspace(setup.thickness.min, setup.thickness.max, setup.thickness.steps)
  const ni = axisCenter.length
  const nj = axisThickness.length
  const now = Date.now()
  return {
    id: newJobId(),
    schemaVersion: TOL_SCHEMA_VERSION,
    createdAt: now,
    updatedAt: now,
    baseline: { ...baseline },
    displayUnit,
    setup: structuredClone(setup),
    fingerprint: baselineFingerprint(baseline),
    status: 'running',
    results: new Array(ni * nj).fill(null),
    ni,
    nj,
    axisCenter,
    axisThickness,
    counts: { safe: 0, risk: 0, invalid: 0 },
    extremes: emptyExtremes(),
    cancelError: null
  }
}

export class JobValidationError extends Error {
  constructor(public errors: string[]) {
    super(errors.join('；'))
    this.name = 'JobValidationError'
  }
}

function emptyExtremes(): JobExtremes {
  return { maxArea: 0, worst: null }
}

export function keyOf(index: number, nj: number): SampleKey {
  return { i: Math.floor(index / nj), j: index % nj }
}
export function indexOf(key: SampleKey, nj: number): number {
  return key.i * nj + key.j
}

/** 样本完成后增量维护计数与极值（极值整体扫描，网格 ≤400，开销可忽略） */
function applyResult(job: ToleranceJob, index: number, result: SampleResult) {
  const old = job.results[index]
  if (old) job.counts[old.verdict]--
  job.results[index] = result
  job.counts[result.verdict]++
  recomputeExtremes(job)
}

function recomputeExtremes(job: ToleranceJob) {
  let maxArea = 0
  let worst: SampleKey | null = null
  for (let idx = 0; idx < job.results.length; idx++) {
    const r = job.results[idx]
    if (r && r.verdict === 'risk' && r.maxArea > maxArea) {
      maxArea = r.maxArea
      worst = keyOf(idx, job.nj)
    }
  }
  job.extremes = { maxArea, worst }
}

// ---------------------------------------------------------------------------
// 执行器
// ---------------------------------------------------------------------------

export interface RunnerProgress {
  job: ToleranceJob
  /** 本次刚完成的样本（局部重算时为重算样本） */
  last: SampleKey
}

export class ToleranceRunner {
  private cancelled = false
  private running = false

  private constructor(
    public readonly job: ToleranceJob,
    private readonly store: JobStore,
    private readonly onProgress?: (p: RunnerProgress) => void
  ) {}

  /** 当前进程内活动的执行器（刷新后为空——这正是恢复语义的边界） */
  private static active = new Map<string, ToleranceRunner>()

  static isActive(id: string): boolean {
    return this.active.has(id)
  }

  /**
   * 启动或恢复作业：
   *  - 新建作业：先落盘第一条 status=running 记录（原子，之后才开始算）；
   *  - 刷新恢复：只对 results 中为 null 的样本继续；已完成统计原样保留。
   */
  static async start(
    job: ToleranceJob,
    store: JobStore,
    onProgress?: (p: RunnerProgress) => void
  ): Promise<ToleranceRunner> {
    if (this.active.has(job.id)) throw new Error('该作业已在运行中')
    const runner = new ToleranceRunner(job, store, onProgress)
    this.active.set(job.id, runner)
    // 恢复语义：中断（running）或被取消（cancelled）的作业都允许从未完成处继续
    job.status = 'running'
    job.cancelError = null
    await store.put(job)
    // 让出一帧，使 UI 能先渲染运行态
    await Promise.resolve()
    void runner.runRemaining()
    return runner
  }

  /**
   * 为【局部重算】挂接一个已完成/已取消作业的执行器（不自动跑剩余样本）。
   * 调用方随后使用 runner.recompute([...]) 只重做指定样本。
   */
  static attachForRecompute(
    job: ToleranceJob,
    store: JobStore,
    onProgress?: (p: RunnerProgress) => void
  ): ToleranceRunner {
    if (this.active.has(job.id)) throw new Error('该作业仍在运行中，不能局部重算')
    const runner = new ToleranceRunner(job, store, onProgress)
    this.active.set(job.id, runner)
    return runner
  }

  /** 局部重算：只重做指定样本，其余结果与所属快照不变 */
  async recompute(keys: SampleKey[]): Promise<void> {
    if (this.running) throw new Error('作业运行中，请先取消再局部重算')
    const targets = keys
      .map((k) => indexOf(k, this.job.nj))
      .filter((idx, pos, arr) => idx >= 0 && idx < this.job.results.length && arr.indexOf(idx) === pos)
    if (!targets.length) {
      ToleranceRunner.active.delete(this.job.id)
      return
    }
    this.cancelled = false
    this.running = true
    try {
      await this.process(targets)
      // 重算不改变作业整体状态（done 保持 done；曾被取消的仍为 cancelled）
      await this.store.put(this.job)
    } finally {
      this.running = false
      ToleranceRunner.active.delete(this.job.id)
      this.onProgress?.({ job: this.job, last: { i: -1, j: -1 } })
    }
  }

  cancel() {
    this.cancelled = true
  }

  get isRunning(): boolean {
    return this.running
  }

  private async runRemaining() {
    this.running = true
    try {
      const pending: number[] = []
      for (let idx = 0; idx < this.job.results.length; idx++) {
        if (!this.job.results[idx]) pending.push(idx)
      }
      if (pending.length) await this.process(pending)
      if (this.cancelled) {
        this.job.status = 'cancelled'
        this.job.cancelError = '已取消（已完成样本保留，可继续恢复）'
      } else {
        this.job.status = 'done'
      }
      await this.store.put(this.job)
    } finally {
      this.running = false
      ToleranceRunner.active.delete(this.job.id)
      this.onProgress?.({ job: this.job, last: { i: -1, j: -1 } })
    }
  }

  /**
   * 处理一批样本（按 i 优先顺序，使网格逐列成形）。
   * 取消在【样本边界】检查：进行中的 Clipper 调用完成后其结果被丢弃、不落盘。
   */
  private async process(indices: number[]) {
    const gearCache = new Map<number, { g1: GearGeometry; g2: GearGeometry }>()
    for (const idx of indices) {
      if (this.cancelled) return
      const { i, j } = keyOf(idx, this.job.nj)
      const da = this.job.axisCenter[i]
      const ds = this.job.axisThickness[j]
      const result = await analyzeSample(this.job.baseline, da, ds, gearCache, {
        phaseSteps: this.job.setup.phaseSteps
      })
      if (this.cancelled) return // 取消期间完成的样本不写，刷新后仍会重算它
      applyResult(this.job, idx, result)
      await this.store.put(this.job)
      this.onProgress?.({ job: this.job, last: { i, j } })
    }
  }
}
