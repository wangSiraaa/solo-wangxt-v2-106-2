/**
 * 公差包络分析（本机、纯前端教学近似）。
 *
 * 对【冻结】的基准齿轮参数，在用户给定的有限范围内按确定的采样密度生成
 * （Δa, Δs1, Δs2）组合；对每个组合在其有效啮合区间内扫描相位，复用现有
 * 齿廓（gear.ts）与 Clipper 布尔求交（clipper.ts）给出结论：
 *
 *   - safe    安全：全部采样相位重叠面积均 ≤ 判定阈值；
 *   - risk    风险：至少一个相位存在实体重叠（记录最坏相位、转角与重叠面积）；
 *   - invalid 无效：组合本身不构成可分析的物理装配（附可追溯原因），
 *                   或求交运行时失败（原因中保留失败信息）。
 *
 * 重要：这里的"公差"是把齿厚偏差实现为齿面整体角向平移、把中心距偏差实现为
 * 刚体平移，仍是【理想刚性、端截面 2D 挤出】的教学近似，不含弹性、热膨胀、
 * 齿向误差、表面粗糙度与概率装配模型，结果不能用于真实制造认证。
 *
 * 所有长度内部恒为 mm；快照只存 mm 数值，与显示单位无关。
 */
import type { LengthUnit } from '../units'
import { buildGear, validateGearInput, DEG, transformOutline, type GearInput, type GearGeometry, type Pt } from './gear'
import { analyzeMesh, gearAnglesAt, type MeshInfo } from './mesh'
import { intersectionArea, intersectOutlines } from './clipper'

export const ENVELOPE_SCHEMA_VERSION = 1

/** 面积判定阈值（mm²）：低于此值视为离散化/数值零，结论为安全 */
export const AREA_THRESHOLD = 1e-6

/** 单轴最大采样点数与总组合上限（防止本机浏览器卡死） */
export const MAX_AXIS_COUNT = 32
export const MAX_COMBOS = 512
export const MIN_PHASE_STEPS = 8
export const MAX_PHASE_STEPS = 256

export type Verdict = 'safe' | 'risk' | 'invalid'
export type ComboStatus = Verdict | 'pending'

/** 一维偏差采样范围（mm；Δa 相对冻结基准中心距，Δs 相对标准齿厚 πm/2） */
export interface AxisRange {
  min: number
  max: number
  /** 采样点数（含两端），>=2 */
  count: number
}

export interface EnvelopeSpec {
  center: AxisRange
  thickness1: AxisRange
  thickness2: AxisRange
  /** 每个组合在有效啮合区间上的相位采样点数（含两端） */
  phaseSteps: number
}

/** 冻结在快照里的基准齿轮输入 */
export interface GearSnapshotInput {
  z: number
  module: number
  alpha: number
  faceWidth: number
}

export interface EnvelopeSnapshot {
  schemaVersion: typeof ENVELOPE_SCHEMA_VERSION
  createdAt: number
  gear1: GearSnapshotInput
  gear2: GearSnapshotInput
  /** 冻结的基准安装中心距（mm） */
  baseCenterDistance: number
  /** 基准是否为标准中心距（仅记录用） */
  useStandardCenter: boolean
  /** 创建时显示单位（仅记录；数值恒为 mm） */
  unit: LengthUnit
  spec: EnvelopeSpec
  /** 由基准参数与 spec 决定的指纹（不含创建时间/单位/运行状态） */
  key: string
  /** 人类可读描述 */
  label: string
}

export interface ComboResult {
  /** 组合序号，按 (da, ds1, ds2) 嵌套循环确定（可复现） */
  index: number
  da: number
  ds1: number
  ds2: number
  status: ComboStatus
  /** invalid / 运行时失败的可追溯原因 */
  reason?: string
  /** 已完成相位扫描的最大重叠面积 mm² */
  maxArea: number
  /** 最坏相位：啮合线参数 s（mm）与两轮本体转角（弧度） */
  worstS: number | null
  worstPhi1: number | null
  worstPhi2: number | null
  doneAt: number | null
}

export interface JobExtrema {
  /** 已完成组合中的最大重叠面积 */
  maxArea: number
  /** 取得最大面积的组合序号；无风险样本时为 -1 */
  worstComboIndex: number
  safe: number
  risk: number
  invalid: number
  pending: number
}

export interface EnvelopeJob {
  id: string
  snapshot: EnvelopeSnapshot
  status: 'running' | 'cancelled' | 'done'
  createdAt: number
  updatedAt: number
  finishedAt: number | null
  canceledAt: number | null
  combos: ComboResult[]
}

// ---------------------------------------------------------------------------
// 采样与快照
// ---------------------------------------------------------------------------

/** 确定性等距采样（含两端）；count=1 时退化为中点不允许（校验层拦截） */
export function linspace(axis: AxisRange): number[] {
  const out: number[] = []
  for (let i = 0; i < axis.count; i++) {
    out.push(axis.min + ((axis.max - axis.min) * i) / (axis.count - 1))
  }
  return out
}

/** 组合总数 */
export function comboCount(spec: EnvelopeSpec): number {
  return spec.center.count * spec.thickness1.count * spec.thickness2.count
}

/**
 * 按确定顺序生成全部组合：外层 Δa，中层 Δs1，内层 Δs2。
 * index = iA*n1*n2 + i1*n2 + i2，保证同参数作业可逐位复核。
 */
export function buildCombos(spec: EnvelopeSpec): Array<Pick<ComboResult, 'index' | 'da' | 'ds1' | 'ds2'>> {
  const aVals = linspace(spec.center)
  const s1Vals = linspace(spec.thickness1)
  const s2Vals = linspace(spec.thickness2)
  const out: Array<Pick<ComboResult, 'index' | 'da' | 'ds1' | 'ds2'>> = []
  let index = 0
  for (const da of aVals) {
    for (const ds1 of s1Vals) {
      for (const ds2 of s2Vals) {
        out.push({ index: index++, da, ds1, ds2 })
      }
    }
  }
  return out
}

function stableStringify(obj: unknown): string {
  if (Array.isArray(obj)) return `[${obj.map(stableStringify).join(',')}]`
  if (obj && typeof obj === 'object') {
    return `{${Object.keys(obj as Record<string, unknown>)
      .sort()
      .map((k) => `${JSON.stringify(k)}:${stableStringify((obj as Record<string, unknown>)[k])}`)
      .join(',')}}`
  }
  return JSON.stringify(obj)
}

/** 简易稳定指纹（base36 FNV 风格），同参数必相同、参数改变必不同 */
export function snapshotFingerprint(payload: unknown): string {
  const str = stableStringify(payload)
  let h1 = 0x811c9dc5
  let h2 = 0x1e35a7bd
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i)
    h1 = Math.imul(h1 ^ c, 0x01000193) >>> 0
    h2 = Math.imul(h2 + c + 0x9e3779b9, 0x85ebca6b) >>> 0
  }
  return (h1.toString(36) + h2.toString(36)).padStart(14, '0')
}

export interface BaselineParams {
  gear1: GearSnapshotInput
  gear2: GearSnapshotInput
  baseCenterDistance: number
  useStandardCenter: boolean
  unit: LengthUnit
}

export function makeSnapshot(baseline: BaselineParams, spec: EnvelopeSpec, now = Date.now()): EnvelopeSnapshot {
  const key = snapshotFingerprint({
    gear1: baseline.gear1,
    gear2: baseline.gear2,
    baseCenterDistance: baseline.baseCenterDistance,
    useStandardCenter: baseline.useStandardCenter,
    spec
  })
  const label = `z₁${baseline.gear1.z}/z₂${baseline.gear2.z} · m=${baseline.gear1.module} · α=${(baseline.gear1.alpha / DEG).toFixed(1)}° · a=${baseline.baseCenterDistance.toFixed(3)}mm`
  return {
    schemaVersion: ENVELOPE_SCHEMA_VERSION,
    createdAt: now,
    gear1: baseline.gear1,
    gear2: baseline.gear2,
    baseCenterDistance: baseline.baseCenterDistance,
    useStandardCenter: baseline.useStandardCenter,
    unit: baseline.unit,
    spec,
    key,
    label
  }
}

// ---------------------------------------------------------------------------
// 启动前校验（不通过则不允许创建作业，保证不会留下半份结果）
// ---------------------------------------------------------------------------

export interface SpecValidation {
  ok: boolean
  errors: string[]
}

export function validateEnvelopeSpec(
  spec: EnvelopeSpec,
  gear1In: GearSnapshotInput,
  gear2In: GearSnapshotInput,
  baseCenterDistance: number
): SpecValidation {
  const errors: string[] = []

  const in1: GearInput = { ...gear1In }
  const in2: GearInput = { ...gear2In }
  errors.push(...validateGearInput(in1).map((e) => `齿轮1：${e}`))
  errors.push(...validateGearInput(in2).map((e) => `齿轮2：${e}`))

  // 不兼容齿轮：模数/压力角不等 → 基节不等，不能啮合
  if (Number.isFinite(gear1In.module) && Number.isFinite(gear2In.module) && gear1In.module > 0 && gear2In.module > 0) {
    if (Math.abs(gear1In.module - gear2In.module) > 1e-9)
      errors.push(`两轮模数不同（m₁=${gear1In.module}, m₂=${gear2In.module}），基节不一致，不能啮合，分析不启动`)
    if (Math.abs(gear1In.alpha - gear2In.alpha) > 1e-9)
      errors.push(`两轮压力角不同（α₁=${(gear1In.alpha / DEG).toFixed(2)}°, α₂=${(gear2In.alpha / DEG).toFixed(2)}°），基节不一致，不能啮合，分析不启动`)
  }

  if (!(baseCenterDistance > 0) || !Number.isFinite(baseCenterDistance)) {
    errors.push('冻结基准中心距非法（必须 > 0）')
  } else {
    const a0 = ((gear1In.module * gear1In.z) / 2 + (gear2In.module * gear2In.z) / 2)
    const limit = a0 * Math.cos(gear1In.alpha)
    if (baseCenterDistance < limit - 1e-9) {
      errors.push(`基准中心距 ${baseCenterDistance.toFixed(3)} mm 已小于基圆内公切线极限 ${limit.toFixed(3)} mm，基准本身无实啮合角`)
    }
  }

  const validateAxis = (ax: AxisRange, name: string, limit?: number) => {
    if (!Number.isFinite(ax.min) || !Number.isFinite(ax.max)) {
      errors.push(`${name}范围必须为有限数值`)
      return
    }
    if (ax.min > ax.max) errors.push(`${name}范围非法：下限 ${ax.min} > 上限 ${ax.max}`)
    if (!Number.isInteger(ax.count) || ax.count < 2 || ax.count > MAX_AXIS_COUNT)
      errors.push(`${name}采样点数必须为 2…${MAX_AXIS_COUNT} 的整数`)
    if (limit !== undefined && (Math.abs(ax.min) >= limit || Math.abs(ax.max) >= limit))
      errors.push(`${name}偏差超出 |Δs| < πm/2 = ${limit.toFixed(4)} mm 的几何允许范围`)
  }
  validateAxis(spec.center, '中心距')
  const limit1 = (Math.PI * gear1In.module) / 2
  const limit2 = (Math.PI * gear2In.module) / 2
  validateAxis(spec.thickness1, '齿轮1齿厚', limit1)
  validateAxis(spec.thickness2, '齿轮2齿厚', limit2)

  if (!Number.isInteger(spec.phaseSteps) || spec.phaseSteps < MIN_PHASE_STEPS || spec.phaseSteps > MAX_PHASE_STEPS)
    errors.push(`相位采样点数必须为 ${MIN_PHASE_STEPS}…${MAX_PHASE_STEPS} 的整数`)

  if (!errors.some((e) => e.includes('采样点数'))) {
    const n = comboCount(spec)
    if (n > MAX_COMBOS) errors.push(`组合总数 ${n} 超过上限 ${MAX_COMBOS}（请缩小范围或降低采样密度）`)
  }

  return { ok: errors.length === 0, errors }
}

// ---------------------------------------------------------------------------
// 单个组合评估
// ---------------------------------------------------------------------------

export interface ComboGeometry {
  g1: GearGeometry
  g2: GearGeometry
  a: number
  mesh: MeshInfo
}

/** 组合的几何装配（含无效性预检；invalid 时返回原因） */
export function buildComboGeometry(snapshot: EnvelopeSnapshot, da: number, ds1: number, ds2: number):
  | { ok: true; geom: ComboGeometry }
  | { ok: false; reason: string } {
  const { gear1: i1, gear2: i2 } = snapshot
  let g1: GearGeometry
  let g2: GearGeometry
  try {
    g1 = buildGear({ ...i1, thicknessDelta: ds1 })
    g2 = buildGear({ ...i2, thicknessDelta: ds2 })
  } catch (e) {
    return { ok: false, reason: `齿廓生成失败：${(e as Error).message}` }
  }
  const a = snapshot.baseCenterDistance + da
  if (!(a > 0) || !Number.isFinite(a)) return { ok: false, reason: `中心距非法：a = a₀′+${da} = ${a} mm` }

  // 先查更严格的实体可装配性：两齿根圆（齿轮毛坯）不得相交
  if (a < g1.dedendumR + g2.dedendumR - 1e-9) {
    return {
      ok: false,
      reason: `中心距 ${a.toFixed(4)} mm 小于两齿根圆半径之和 ${(g1.dedendumR + g2.dedendumR).toFixed(4)} mm，齿轮毛坯互相侵入，无法装配`
    }
  }
  const a0 = g1.pitchR + g2.pitchR
  const cosLimit = a0 * Math.cos(g1.input.alpha)
  if (a < cosLimit - 1e-9) {
    return {
      ok: false,
      reason: `中心距 ${a.toFixed(4)} mm 小于基圆内公切线极限 ${cosLimit.toFixed(4)} mm（cosα′>1，啮合角无实数解）`
    }
  }
  if (g1.pointed || g2.pointed) {
    return {
      ok: false,
      reason: `齿顶变尖：Δs1=${ds1.toFixed(4)} mm 时齿顶厚 s_a1=${g1.tipThickness.toFixed(4)}；Δs2=${ds2.toFixed(4)} mm 时 s_a2=${g2.tipThickness.toFixed(4)}（齿厚偏差过大）`
    }
  }

  const mesh = analyzeMesh({ g1, g2, centerDistance: a })
  return { ok: true, geom: { g1, g2, a, mesh } }
}

/** 有效啮合区间端点（啮合线参数 s，相对节点） */
export function actionSegment(mesh: MeshInfo): { sLo: number; sHi: number } {
  const nx = Math.sin(mesh.alphaPrime),
    ny = Math.cos(mesh.alphaPrime)
  const sLo =
    (mesh.actionLine.p0.x - mesh.pitchPoint.x) * nx + (mesh.actionLine.p0.y - mesh.pitchPoint.y) * ny
  const sHi =
    (mesh.actionLine.p1.x - mesh.pitchPoint.x) * nx + (mesh.actionLine.p1.y - mesh.pitchPoint.y) * ny
  return { sLo, sHi }
}

export interface EvaluatedCombo {
  result: ComboResult
  /** 仅 withRegions=true 且 risk 时附带最坏相位重叠多边形（世界坐标，mm） */
  regions?: Pt[][]
}

async function scanCombo(
  snapshot: EnvelopeSnapshot,
  c: Pick<ComboResult, 'index' | 'da' | 'ds1' | 'ds2'>,
  withRegions: boolean,
  areaFn: (o1: Pt[][], o2: Pt[][]) => Promise<number>,
  intersectFn: (o1: Pt[][], o2: Pt[][]) => Promise<{ regions: Pt[][]; area: number }>
): Promise<EvaluatedCombo> {
  const base: ComboResult = {
    index: c.index,
    da: c.da,
    ds1: c.ds1,
    ds2: c.ds2,
    status: 'pending',
    maxArea: 0,
    worstS: null,
    worstPhi1: null,
    worstPhi2: null,
    doneAt: null
  }
  const built = buildComboGeometry(snapshot, c.da, c.ds1, c.ds2)
  if (!built.ok) {
    return { result: { ...base, status: 'invalid', reason: built.reason, doneAt: Date.now() } }
  }
  const { g1, g2, a, mesh } = built.geom
  const { sLo, sHi } = actionSegment(mesh)
  const n = snapshot.spec.phaseSteps

  let maxArea = 0
  let worstS = sLo
  let worstPhi1 = 0
  let worstPhi2 = 0
  try {
    for (let i = 0; i < n; i++) {
      const s = n === 1 ? sLo : sLo + ((sHi - sLo) * i) / (n - 1)
      const { phi1, phi2 } = gearAnglesAt(mesh, g1, g2, s)
      const o1 = [transformOutline(g1.outline, 0, 0, phi1)]
      const o2 = [transformOutline(g2.outline, a, 0, phi2)]
      const area = await areaFn(o1, o2)
      if (area > maxArea) {
        maxArea = area
        worstS = s
        worstPhi1 = phi1
        worstPhi2 = phi2
      }
    }
  } catch (e) {
    return {
      result: {
        ...base,
        status: 'invalid',
        reason: `Clipper 布尔求交运行时失败：${(e as Error).message}`,
        doneAt: Date.now()
      }
    }
  }

  const result: ComboResult = {
    ...base,
    status: maxArea > AREA_THRESHOLD ? 'risk' : 'safe',
    maxArea,
    worstS: maxArea > AREA_THRESHOLD ? worstS : null,
    worstPhi1: maxArea > AREA_THRESHOLD ? worstPhi1 : null,
    worstPhi2: maxArea > AREA_THRESHOLD ? worstPhi2 : null,
    doneAt: Date.now()
  }

  if (withRegions && result.status === 'risk') {
    const o1 = [transformOutline(g1.outline, 0, 0, worstPhi1)]
    const o2 = [transformOutline(g2.outline, a, 0, worstPhi2)]
    const res = await intersectFn(o1, o2)
    return { result, regions: res.regions }
  }
  return { result }
}

/** 评估单个组合（仅面积，用于批量扫描） */
export function evaluateCombo(
  snapshot: EnvelopeSnapshot,
  c: Pick<ComboResult, 'index' | 'da' | 'ds1' | 'ds2'>
): Promise<EvaluatedCombo> {
  return scanCombo(snapshot, c, false, intersectionArea, intersectOutlines)
}

/** 评估单个组合并在风险时附带最坏相位的重叠多边形（用于在几何视图中定位） */
export function evaluateComboWithRegions(
  snapshot: EnvelopeSnapshot,
  c: Pick<ComboResult, 'index' | 'da' | 'ds1' | 'ds2'>
): Promise<EvaluatedCombo> {
  return scanCombo(snapshot, c, true, intersectionArea, intersectOutlines)
}

/** 由已完成组合统计进度/极值（纯函数，便于刷新后重建统计） */
export function computeExtrema(combos: ComboResult[]): JobExtrema {
  const ext: JobExtrema = { maxArea: 0, worstComboIndex: -1, safe: 0, risk: 0, invalid: 0, pending: 0 }
  for (const c of combos) {
    if (c.status === 'pending') {
      ext.pending++
      continue
    }
    ext[c.status]++
    if (c.status === 'risk' && c.maxArea > ext.maxArea) {
      ext.maxArea = c.maxArea
      ext.worstComboIndex = c.index
    }
  }
  return ext
}

/** 初始 pending 组合表（顺序由 buildCombos 确定，可复现） */
export function initialCombos(spec: EnvelopeSpec): ComboResult[] {
  return buildCombos(spec).map((c) => ({
    ...c,
    status: 'pending' as const,
    maxArea: 0,
    worstS: null,
    worstPhi1: null,
    worstPhi2: null,
    doneAt: null
  }))
}
