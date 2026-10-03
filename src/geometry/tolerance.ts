/**
 * 公差包络分析（教学近似，不是制造认证）。
 *
 * 对一对【冻结基准参数】的齿轮，沿两个有限公差轴做确定性网格采样：
 *   Δa —— 实际中心距相对标准中心距 a0 的偏差（mm）；
 *   Δs —— 分度圆弧齿厚偏差（mm，左右齿面整体各转 τ=Δs/(2r)，两轮同步施加）。
 * 每个组合在一个轮1齿距周期内（=啮合相位的完整周期）扫描相位，用与"单帧干涉检查"
 * 相同的 Clipper 布尔求交给出重叠面积，结论分三档：
 *   safe    全程重叠面积 ≤ 数值噪声阈值；
 *   risk    存在超过阈值的实体干涉，保留最坏相位与重叠区域；
 *   invalid 几何/装配不可行（齿厚范围使齿顶变尖/齿面交叉，或中心距小于基圆内公切线
 *           极限），给出可追溯的机器原因码，绝不偷偷跳过。
 *
 * 可复现性：轴值由 linspace（含端点）确定性生成，样本键 = i/j 序号，
 * 与浮点抖动无关；基准、范围、密度、相位步数全部写入作业快照。
 *
 * 本文件是纯逻辑（不碰 IndexedDB / DOM），可在 Node 测试中直接调用。
 */
import { buildGear, DEG, transformOutline, type GearGeometry, type Pt } from './gear'
import { analyzeMesh, mateAngle, type MeshInfo } from './mesh'
import { intersectOutlines } from './clipper'

// ---------------------------------------------------------------------------
// 类型
// ---------------------------------------------------------------------------

/** 冻结的基准参数（内部一律 mm / 弧度；显示单位单独记录，仅作出处信息） */
export interface BaselineSnapshot {
  z1: number
  z2: number
  module: number // mm
  alphaDeg: number
  faceWidth: number // mm
  /** 基准安装中心距 a（mm）；样本实际中心距 = aBase + Δa */
  centerDistance: number
}

/** 一条公差轴的有限范围与采样密度 */
export interface AxisRange {
  /** 下限（mm，含） */
  min: number
  /** 上限（mm，含） */
  max: number
  /** 采样点数（整数 >=2，含两端） */
  steps: number
}

/** 分析设定（随作业持久化） */
export interface ToleranceSetup {
  center: AxisRange // Δa 轴
  thickness: AxisRange // Δs 轴（两轮同步）
  /** 一个齿距周期内的相位扫描点数（整数 >=2，含两端，端点去重） */
  phaseSteps: number
}

export type Verdict = 'safe' | 'risk' | 'invalid'

/** 单个组合样本（i=Δa 序号，j=Δs 序号） */
export interface SampleKey {
  i: number
  j: number
}

/** invalid 的可追溯原因码 */
export type InvalidReason =
  | 'thickness-tip-pointed' // 齿厚使齿顶变尖
  | 'thickness-too-large' // 齿厚超过齿距，齿面/根部交叉
  | 'thickness-too-small' // 负齿厚使齿体退化
  | 'center-below-tangent-limit' // 中心距小于基圆内公切线极限 a0·cosα
  | 'center-nonpositive' // 中心距 ≤ 0
  | 'geometry-degenerate' // 轮廓构造退化（兜底）
  | 'boolean-failure' // Clipper 求交异常（可重算）

export interface SampleResult {
  verdict: Verdict
  /** 采样到的实际中心距（mm） */
  a: number
  /** 采样到的齿厚偏差（mm） */
  ds: number
  /** 实际扫描的相位数（快速安全路径时为 0） */
  phasesScanned: number
  /** 最大重叠面积 mm²（safe/invalid 可为 0） */
  maxArea: number
  /** 最坏相位（轮1转角，弧度）及其沿周期序号 k */
  worstPhi1: number | null
  worstK: number | null
  /** 最坏相位的重叠区域（世界坐标，仅风险样本保留；顶点数已抽稀） */
  worstRegions: Pt[][]
  /** invalid 原因码 */
  reason: InvalidReason | null
}

/** 跨样本极值汇总 */
export interface JobExtremes {
  /** 全局最大重叠面积 */
  maxArea: number
  /** 取得全局最大面积的样本 */
  worst: SampleKey | null
}

/** 作业持久化记录（见 toleranceStore.ts） */
export interface ToleranceJob {
  id: string
  schemaVersion: number
  createdAt: number
  updatedAt: number
  /** 基准快照 */
  baseline: BaselineSnapshot
  /** 创建时的显示单位（仅出处信息；尺寸全部以 mm 存储，切换单位不改语义） */
  displayUnit: string
  setup: ToleranceSetup
  /** 基准指纹：基准/单位无关的身份标识，用来区分新旧两代结果 */
  fingerprint: string
  status: 'running' | 'cancelled' | 'done'
  /** 展平后的样本结果，按 i*nj+j 存放；未完成的位置为 null */
  results: (SampleResult | null)[]
  ni: number
  nj: number
  /** Δa / Δs 轴的实际采样值（mm，确定性，便于复核） */
  axisCenter: number[]
  axisThickness: number[]
  /** 已完成统计（随每个样本增量维护，支持局部重算） */
  counts: { safe: number; risk: number; invalid: number }
  extremes: JobExtremes
  cancelError: string | null
}

// ---------------------------------------------------------------------------
// 快照与指纹
// ---------------------------------------------------------------------------

export function makeBaselineSnapshot(b: BaselineSnapshot): BaselineSnapshot {
  return { ...b }
}

/**
 * 基准指纹：只编码"决定几何语义"的量（mm/度数值），刻意【不含显示单位】。
 * 切换 mm↔in 时内部值不变 → 指纹不变；任何基准参数变化 → 指纹改变，
 * 旧作业永远归属旧快照，不能覆盖新面板。
 */
export function baselineFingerprint(b: BaselineSnapshot): string {
  const vals = [b.z1, b.z2, b.module, b.alphaDeg, b.faceWidth, b.centerDistance]
  // 固定精度序列化，避免 -0 / 显示层小数干扰
  const norm = vals.map((v) => {
    const n = typeof v === 'number' ? v : Number(v)
    return Object.is(n, -0) ? '0' : n.toString()
  })
  return `b1|${norm.join(',')}`
}

export function jobMatchesBaseline(job: ToleranceJob, b: BaselineSnapshot): boolean {
  return job.fingerprint === baselineFingerprint(b)
}

// ---------------------------------------------------------------------------
// 范围校验与确定性采样
// ---------------------------------------------------------------------------

export class ValidationError extends Error {
  constructor(public field: string, message: string) {
    super(message)
    this.name = 'ValidationError'
  }
}

const MAX_GRID = 400 // 网格样本上限（防止误操作产生巨量 Clipper 调用）

/**
 * 启动前校验。返回中文错误列表（空列表=通过）。
 * 不通过时调用方【不得】创建任何作业记录（不留下半份结果）。
 */
export function validateSetup(baseline: BaselineSnapshot, setup: ToleranceSetup): string[] {
  const errs: string[] = []
  const finite = (v: number) => typeof v === 'number' && Number.isFinite(v)
  const badAxis = (name: string, ax: AxisRange) => {
    if (!finite(ax.min) || !finite(ax.max)) {
      errs.push(`${name}范围必须是有限数值`)
      return
    }
    if (ax.min > ax.max) errs.push(`${name}范围下限不能大于上限`)
    // steps=1 表示退化常量轴（只扫另一条轴）；两条轴同时为 1 时网格只有一格，仍允许
    if (!Number.isInteger(ax.steps) || ax.steps < 1) errs.push(`${name}采样点数必须是 ≥1 的整数`)
    if (Number.isInteger(ax.steps) && ax.steps > 101) errs.push(`${name}采样点数过大（≤101）`)
  }
  badAxis('中心距偏差 Δa', setup.center)
  badAxis('齿厚偏差 Δs', setup.thickness)
  if (!Number.isInteger(setup.phaseSteps) || setup.phaseSteps < 2 || setup.phaseSteps > 721) {
    errs.push('相位扫描点数必须是 2~721 的整数')
  }
  if (setup.center.steps * setup.thickness.steps < 1) {
    errs.push('至少需要 1 个组合')
  }
  const ni = Number.isInteger(setup.center.steps) ? setup.center.steps : 0
  const nj = Number.isInteger(setup.thickness.steps) ? setup.thickness.steps : 0
  if (ni >= 2 && nj >= 2 && ni * nj > MAX_GRID) {
    errs.push(`组合数 ${ni}×${nj}=${ni * nj} 超过上限 ${MAX_GRID}，请缩小范围或降低采样密度`)
  }

  // 基准本身必须是合法齿轮对
  if (!finite(baseline.module) || baseline.module <= 0) errs.push('基准模数必须 > 0')
  if (!finite(baseline.alphaDeg) || baseline.alphaDeg <= 0 || baseline.alphaDeg >= 90)
    errs.push('基准压力角必须在 (0°,90°) 内')
  if (!Number.isInteger(baseline.z1) || baseline.z1 < 4) errs.push('基准齿数 z₁ 必须为 ≥4 的整数')
  if (!Number.isInteger(baseline.z2) || baseline.z2 < 4) errs.push('基准齿数 z₂ 必须为 ≥4 的整数')
  if (!finite(baseline.faceWidth) || baseline.faceWidth <= 0) errs.push('基准齿宽必须 > 0')
  if (!finite(baseline.centerDistance) || baseline.centerDistance <= 0) errs.push('基准中心距必须 > 0')

  if (errs.length) return errs

  // 不兼容齿轮：模数/压力角必须一致（基节相等是正确啮合的硬条件）
  const pb1 = Math.PI * baseline.module * Math.cos(baseline.alphaDeg * DEG)
  const pb2 = pb1 // 本工具两轮共用 m、α；保留显式检查以便将来扩展
  if (Math.abs(pb1 - pb2) > 1e-9) errs.push('两轮基节不等（模数/压力角不兼容），不能分析')

  // 范围与物理极限：中心距不得低于基圆内公切线极限 a0·cosα
  const a0 = (baseline.module * (baseline.z1 + baseline.z2)) / 2
  const aMin = a0 * Math.cos(baseline.alphaDeg * DEG)
  if (baseline.centerDistance + setup.center.min <= 0) errs.push('中心距范围包含 ≤ 0 的非物理组合')
  else if (baseline.centerDistance + setup.center.min <= aMin) {
    errs.push(
      `中心距范围低于基圆内公切线极限 a₀·cosα ≈ ${aMin.toFixed(3)} mm，相位方程无解，请提高下限`
    )
  }

  // 齿厚偏差不得超过按基准齿数计算的几何可行域（见 thicknessBounds）
  const b1 = thicknessBounds(baseline.z1, baseline.module, baseline.alphaDeg * DEG)
  const b2 = thicknessBounds(baseline.z2, baseline.module, baseline.alphaDeg * DEG)
  const lo = Math.max(b1.min, b2.min)
  const hi = Math.min(b1.max, b2.max)
  if (setup.thickness.min < lo) errs.push(`齿厚偏差下限低于几何可行域（≈ ${lo.toFixed(3)} mm）`)
  if (setup.thickness.max > hi) errs.push(`齿厚偏差上限高于几何可行域（≈ ${hi.toFixed(3)} mm，齿顶变尖/齿面交叉）`)

  return errs
}

/** 含端点的等距采样（n 点），单点范围退化为常量数组 */
export function linspace(min: number, max: number, n: number): number[] {
  if (n === 1) return [min]
  const out: number[] = []
  for (let i = 0; i < n; i++) out.push(min + ((max - min) * i) / (n - 1))
  return out
}

/**
 * 单个齿轮的齿厚偏差几何可行域（教学几何，严格限）。
 * 加厚时右齿面构造角 β=π/(2z)+invα+τ 增大、齿顶半角同步增大；
 * 减薄时两齿面在齿顶收拢，齿顶半角减小。
 *  上界（加厚）：β 达到 π/z，齿厚占满整个齿距（槽宽为零）
 *    → τ_max = π/(2z)−invα；
 *  下界（减薄）：齿顶半角 = π/(2z)+invα+τ−inv(αa) 降到 0（齿顶变尖）
 *    → τ_min = inv(αa)−π/(2z)−invα。
 */
export function thicknessBounds(z: number, m: number, alpha: number): { min: number; max: number } {
  const r = (m * z) / 2
  const rb = r * Math.cos(alpha)
  const ra = r + m
  const ta = Math.sqrt(Math.max(0, (ra / rb) ** 2 - 1))
  const invTip = ta - Math.atan(ta) // inv(αa)
  const invA = Math.tan(alpha) - alpha
  // 留 0.2% 余量，避免边界处轮廓退化
  const maxDs = 2 * r * (Math.PI / (2 * z) - invA) * 0.998
  const minDs = 2 * r * (invTip - Math.PI / (2 * z) - invA) * 0.998
  return { min: minDs, max: maxDs }
}

// ---------------------------------------------------------------------------
// 单个样本的相位扫描
// ---------------------------------------------------------------------------

/** 重叠面积超过此值（mm²）即判风险；低于它视为轮廓离散化的数值噪声 */
export const RISK_AREA_THRESHOLD = 1e-6

export interface AnalyzeSampleOptions {
  phaseSteps: number
  /** Clipper 求交函数（可注入，测试/重算共用同一实现） */
  intersect?: typeof intersectOutlines
  /** 是否保留最坏相位的重叠区域（风险样本） */
  keepRegions?: boolean
}

/**
 * 分析一个 (Δa, Δs) 组合。
 * gearCache 以 ds 为键缓存两轮齿廓（同一 Δs 的一列样本只构造一次）。
 */
export async function analyzeSample(
  baseline: BaselineSnapshot,
  da: number,
  ds: number,
  gearCache: Map<number, { g1: GearGeometry; g2: GearGeometry }>,
  opts: AnalyzeSampleOptions
): Promise<SampleResult> {
  const a = baseline.centerDistance + da
  const intersect = opts.intersect ?? intersectOutlines
  const invalid = (reason: InvalidReason): SampleResult => ({
    verdict: 'invalid',
    a,
    ds,
    phasesScanned: 0,
    maxArea: 0,
    worstPhi1: null,
    worstK: null,
    worstRegions: [],
    reason
  })

  if (!Number.isFinite(a) || a <= 0) return invalid('center-nonpositive')
  const a0 = (baseline.module * (baseline.z1 + baseline.z2)) / 2
  if (a <= a0 * Math.cos(baseline.alphaDeg * DEG)) return invalid('center-below-tangent-limit')

  let pair = gearCache.get(ds)
  if (!pair) {
    const base = {
      module: baseline.module,
      alpha: baseline.alphaDeg * DEG,
      faceWidth: baseline.faceWidth,
      toothThicknessOffset: ds
    }
    const g1 = buildGear({ ...base, z: baseline.z1 })
    const g2 = buildGear({ ...base, z: baseline.z2 })
    pair = { g1, g2 }
    gearCache.set(ds, pair)
  }
  const { g1, g2 } = pair

  if (g1.pointed || g2.pointed) return invalid('thickness-tip-pointed')
  // 齿厚占满齿距（β≥π/z，槽宽为零/齿面交叉）；β≤0 为负齿厚退化兜底
  if (g1.beta >= Math.PI / g1.input.z || g2.beta >= Math.PI / g2.input.z || g1.beta <= 0 || g2.beta <= 0)
    return invalid('thickness-too-large')
  if (!g1.outline.length || !g2.outline.length || g1.outline.some((p) => !isFinite(p.x)))
    return invalid('geometry-degenerate')

  let mesh: MeshInfo
  try {
    mesh = analyzeMesh({ g1, g2, centerDistance: a })
  } catch {
    return invalid('geometry-degenerate')
  }

  // 快速安全路径：两齿顶圆都不相交时，实体（齿顶圆内的子集）不可能重叠。
  // phasesScanned=0 记录"用几何包围关系免扫"这一可追溯路径。
  if (!mesh.addendumOverlap) {
    return {
      verdict: 'safe',
      a,
      ds,
      phasesScanned: 0,
      maxArea: 0,
      worstPhi1: null,
      worstK: null,
      worstRegions: [],
      reason: null
    }
  }

  const period = (2 * Math.PI) / g1.input.z
  const n = Math.max(2, opts.phaseSteps)
  // 含端点扫描 [0, period]；period 与 0 是同一相位构造，跳过最后一个重复点。
  let maxArea = 0
  let worstK = 0
  let worstPhi1 = 0
  let worstRegions: Pt[][] = []
  let phasesScanned = 0

  for (let k = 0; k < n; k++) {
    const phi1 = (period * k) / n
    let phi2: number
    try {
      phi2 = mateAngle(g1, g2, mesh, phi1)
    } catch {
      return invalid('geometry-degenerate')
    }
    if (!Number.isFinite(phi2)) return invalid('geometry-degenerate')
    const o1 = [transformOutline(g1.outline, 0, 0, phi1)]
    const o2 = [transformOutline(g2.outline, a, 0, phi2)]
    let area: number
    let regions: Pt[][] = []
    try {
      const res = await intersect(o1, o2)
      area = res.area
      regions = res.regions
    } catch {
      return invalid('boolean-failure')
    }
    phasesScanned++
    if (area > maxArea) {
      maxArea = area
      worstK = k
      worstPhi1 = phi1
      worstRegions = regions
    }
  }

  const risk = maxArea > RISK_AREA_THRESHOLD
  return {
    verdict: risk ? 'risk' : 'safe',
    a,
    ds,
    phasesScanned,
    maxArea,
    worstPhi1: risk ? worstPhi1 : null,
    worstK: risk ? worstK : null,
    worstRegions: risk && opts.keepRegions !== false ? simplifyRegions(worstRegions) : [],
    reason: null
  }
}

/** 抽稀重叠区域多边形（Douglas–Peucker 的轻量替代：按弧长间隔取点），限制持久化体积 */
export function simplifyRegions(regions: Pt[][], maxPerRegion = 240): Pt[][] {
  return regions.map((ring) => {
    if (ring.length <= maxPerRegion) return ring
    const out: Pt[] = []
    const step = ring.length / maxPerRegion
    for (let i = 0; i < maxPerRegion; i++) out.push(ring[Math.floor(i * step)])
    return out
  })
}

/** 从最坏样本重建可视化所需的完整几何（viewer 预览用，不走缓存写回） */
export async function rebuildWorstGeometry(
  baseline: BaselineSnapshot,
  sample: SampleResult
): Promise<{
  g1: GearGeometry
  g2: GearGeometry
  mesh: MeshInfo
  phi1: number
  phi2: number
}> {
  const ds = sample.ds
  const g1 = buildGear({
    z: baseline.z1,
    module: baseline.module,
    alpha: baseline.alphaDeg * DEG,
    faceWidth: baseline.faceWidth,
    toothThicknessOffset: ds
  })
  const g2 = buildGear({
    z: baseline.z2,
    module: baseline.module,
    alpha: baseline.alphaDeg * DEG,
    faceWidth: baseline.faceWidth,
    toothThicknessOffset: ds
  })
  const mesh = analyzeMesh({ g1, g2, centerDistance: sample.a })
  const phi1 = sample.worstPhi1 ?? 0
  const phi2 = mateAngle(g1, g2, mesh, phi1)
  return { g1, g2, mesh, phi1, phi2 }
}
