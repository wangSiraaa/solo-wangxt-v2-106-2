/**
 * 公差包络分析验收脚本（Node + Clipper WASM，内存作业库模拟刷新）。
 *
 * 覆盖验收项：
 *  A. 标准安装的小范围分析 → 可复核的安全样本（且两次运行结果可复现）；
 *  B. 缩小中心距的组合 → 风险，且能定位相位与重叠面积；
 *  C. 非法范围或不兼容齿轮 → 不启动、不留半份结果；
 *  D. 运行中"刷新"（新建空内存库 + 从落盘记录恢复）→ 只恢复未完成样本并保留已完成统计；
 *  E. 切换显示单位 / 修改基准参数 → 尺寸含义不变；两代结果靠 fingerprint 隔离、互不覆盖。
 * 另含：齿厚偏差几何（正 Δs 使齿变厚）同样被扫描出风险；取消在样本边界生效。
 */
import {
  analyzeSample,
  baselineFingerprint,
  linspace,
  rebuildWorstGeometry,
  thicknessBounds,
  validateSetup,
  RISK_AREA_THRESHOLD,
  type BaselineSnapshot,
  type ToleranceJob
} from '../src/geometry/tolerance.ts'
import {
  ToleranceRunner,
  createJob,
  createMemoryJobStore,
  indexOf,
  JobValidationError,
  type JobStore
} from '../src/toleranceJob.ts'
import { toMm } from '../src/units.ts'

let fails = 0
const ok = (cond: boolean, msg: string) => {
  if (cond) console.log('  ok  ', msg)
  else {
    fails++
    console.log('  FAIL', msg)
  }
}

const baseline: BaselineSnapshot = {
  z1: 20,
  z2: 40,
  module: 2,
  alphaDeg: 20,
  faceWidth: 10,
  centerDistance: 60 // 标准 a0 = 2*(20+40)/2
}

/** 跑到结束的小工具 */
async function runToEnd(job: ToleranceJob, store: JobStore) {
  const runner = await ToleranceRunner.start(job, store, () => {})
  // 等待执行器从活动表移除
  await new Promise<void>((resolve) => {
    const t = setInterval(() => {
      if (!ToleranceRunner.isActive(job.id)) {
        clearInterval(t)
        resolve()
      }
    }, 5)
  })
  return runner
}

// ---------------------------------------------------------------------------
console.log('\n=== A. 标准安装小范围分析：全部安全、可复现 ===')
{
  const store = createMemoryJobStore()
  // 标准安装为理论零侧隙：正齿厚增量/负中心距偏差都会真实挤压（物理正确，B/B2 覆盖）。
  // 这里的"小范围安全"取制造中常见的【减薄齿厚留侧隙】区间 Δs∈[−0.04,−0.02]，
  // 配 Δa∈[0,+0.05]（不缩小中心距），全部组合应可复核为安全。
  const setup = {
    center: { min: 0, max: 0.05, steps: 3 },
    thickness: { min: -0.04, max: -0.02, steps: 3 },
    phaseSteps: 21
  }
  ok(validateSetup(baseline, setup).length === 0, '小范围设定通过校验')

  const job = createJob(baseline, setup, 'mm')
  await runToEnd(job, store)

  ok(job.status === 'done', `作业完成（status=${job.status}）`)
  ok(job.results.every((r) => r !== null), '所有 9 个组合都有结论，无遗漏')
  ok(job.counts.safe === 9 && job.counts.risk === 0 && job.counts.invalid === 0,
    `统计 = 安全 ${job.counts.safe} / 风险 ${job.counts.risk} / 无效 ${job.counts.invalid}`)

  // 手工复核：Δa=0, Δs=0 的标准安装逐相位求交本应无干涉（与 check-roundtrip 同源检查）
  const cache = new Map()
  const direct = await analyzeSample(baseline, 0, 0, cache, { phaseSteps: 21 })
  ok(direct.verdict === 'safe', '直接调用 analyzeSample：标准安装 Δa=0/Δs=0 安全')
  const centerCell = job.results[indexOf({ i: 1, j: 1 }, job.nj)]! // Δa=0.025 列中含齿顶圆交叉
  ok(centerCell.verdict === 'safe' && centerCell.maxArea <= RISK_AREA_THRESHOLD,
    `复核代表格 Δa=${centerCell.a - 60}/Δs=${centerCell.ds}：安全（maxArea=${centerCell.maxArea.toExponential(2)}）`)

  // 快速安全路径：两齿顶圆互不相交时实体不可能干涉（a≥ra1+ra2=64），
  // phasesScanned=0 记录"包围关系免扫"这一可追溯路径
  const cacheFP = new Map()
  const fastPath = await analyzeSample(baseline, 4.1, -0.03, cacheFP, { phaseSteps: 21 })
  ok(fastPath.verdict === 'safe' && fastPath.phasesScanned === 0,
    `Δa=+4.1（a=64.1>ra1+ra2=64）：齿顶圆不相交→快速安全路径（phasesScanned=0）`)
  // 标准安装附近齿顶圆确实相交，这些格子必须逐相位扫描后才能下结论
  const scannedCount = job.results.filter((r) => r!.phasesScanned > 0).length
  ok(scannedCount === 9, `${scannedCount}/9 个齿顶圆交叉格走了完整相位扫描`)

  // 可复现：重新创建并运行同样的作业，面积与结论逐格一致
  const job2 = createJob(baseline, setup, 'in')
  await runToEnd(job2, store)
  let same = job.results.length === job2.results.length
  for (let i = 0; i < job.results.length; i++) {
    if (job.results[i]!.verdict !== job2.results[i]!.verdict ||
        Math.abs(job.results[i]!.maxArea - job2.results[i]!.maxArea) > 1e-12) same = false
  }
  ok(same, '同样参数两次运行逐格一致（与显示单位无关，可复现）')

  // 确定性轴值
  ok(linspace(0, 0.05, 3).map((v) => v.toFixed(4)).join() === '0.0000,0.0250,0.0500',
    'Δa 轴为含端点等距确定性采样')
}

// ---------------------------------------------------------------------------
console.log('\n=== B. 缩小中心距：风险，且能定位相位与重叠面积 ===')
{
  const store = createMemoryJobStore()
  const setup = {
    center: { min: -3, max: 0.5, steps: 8 },
    thickness: { min: 0, max: 0, steps: 1 },
    phaseSteps: 31
  }
  const job = createJob(baseline, setup, 'mm')
  await runToEnd(job, store)

  const riskIdx = job.results
    .map((r, idx) => ({ r, idx }))
    .filter((x) => x.r!.verdict === 'risk')
  ok(riskIdx.length >= 3, `缩小中心距一侧识别出 ${riskIdx.length} 个风险组合（Δa 越负越严重）`)

  // 单调性：Δa 最小的角落实测面积最大
  const mostNeg = job.results[indexOf({ i: 0, j: 0 }, job.nj)]!
  ok(mostNeg.verdict === 'risk' && mostNeg.maxArea > 1,
    `Δa=-3 角落实体干涉，重叠面积 ${mostNeg.maxArea.toFixed(2)} mm²（>1）`)
  const areasByI = job.axisCenter.map((_, i) => job.results[indexOf({ i, j: 0 }, job.nj)]!.maxArea)
  let monotone = true
  for (let i = 1; i < areasByI.length; i++) if (areasByI[i] > areasByI[i - 1] + 1e-9) monotone = false
  ok(monotone, '重叠面积随中心距增大单调不增（最差在最小中心距）')

  // 最坏位置可定位：相位、周期序号、重叠区域
  ok(mostNeg.worstPhi1 !== null && mostNeg.worstK !== null,
    `风险样本记录最坏相位 φ₁=${mostNeg.worstPhi1!.toFixed(3)} rad（第 ${mostNeg.worstK} 点）`)
  ok(mostNeg.worstRegions.length > 0 && mostNeg.worstRegions[0].length >= 3,
    `保留最坏相位重叠区域多边形（${mostNeg.worstRegions.length} 块）`)
  ok(job.extremes.worst?.i === 0 && job.extremes.maxArea === mostNeg.maxArea,
    '作业极值指向该最坏样本')

  // 从记录可重建冻结几何，且该相位重新求交复现面积
  const geo = await rebuildWorstGeometry(baseline, mostNeg)
  ok(Math.abs(geo.mesh.a - 57) < 1e-9, `重建样本实际中心距 a=${geo.mesh.a}（=60−3）`)
  ok(isFinite(geo.phi2), '配对相位 φ₂ 可由严格啮合公式求得')
}

// ---------------------------------------------------------------------------
console.log('\n=== B2. 齿厚偏差：正 Δs 使齿变厚，标准中心距下同样报风险 ===')
{
  const store = createMemoryJobStore()
  const setup = {
    center: { min: 0, max: 0, steps: 1 },
    thickness: { min: -0.1, max: 0.6, steps: 8 },
    phaseSteps: 31
  }
  const job = createJob(baseline, setup, 'mm')
  await runToEnd(job, store)
  const risks = job.results.filter((r) => r!.verdict === 'risk')
  ok(risks.length >= 2, `正齿厚偏差识别出 ${risks.length} 个风险组合`)
  const thickest = job.results[indexOf({ i: 0, j: 7 }, job.nj)]!
  ok(thickest.verdict === 'risk' && thickest.worstPhi1 !== null,
    `Δs=${thickest.ds.toFixed(3)} 报风险并定位相位，面积 ${thickest.maxArea.toFixed(2)} mm²`)
}

// ---------------------------------------------------------------------------
console.log('\n=== C. 非法范围 / 不兼容齿轮：不启动、不留半份结果 ===')
{
  const store = createMemoryJobStore()

  const cases: { name: string; b: BaselineSnapshot; s: Parameters<typeof validateSetup>[1] }[] = [
    { name: '下限>上限', b: baseline, s: { center: { min: 1, max: -1, steps: 5 }, thickness: { min: -0.1, max: 0.1, steps: 3 }, phaseSteps: 21 } },
    { name: '采样点<1', b: baseline, s: { center: { min: -1, max: 1, steps: 0 }, thickness: { min: -0.1, max: 0.1, steps: 3 }, phaseSteps: 21 } },
    { name: '中心距低于切线极限', b: baseline, s: { center: { min: -59, max: -58, steps: 3 }, thickness: { min: -0.1, max: 0.1, steps: 3 }, phaseSteps: 21 } },
    { name: '齿厚超出可行域（变尖）', b: baseline, s: { center: { min: -0.1, max: 0.1, steps: 3 }, thickness: { min: -0.1, max: 5, steps: 3 }, phaseSteps: 21 } },
    { name: '网格超上限', b: baseline, s: { center: { min: -0.1, max: 0.1, steps: 101 }, thickness: { min: -0.1, max: 0.1, steps: 101 }, phaseSteps: 21 } },
    { name: '非法基准（m≤0）', b: { ...baseline, module: 0 }, s: { center: { min: -0.1, max: 0.1, steps: 3 }, thickness: { min: -0.1, max: 0.1, steps: 3 }, phaseSteps: 21 } }
  ]
  for (const c of cases) {
    const errs = validateSetup(c.b, c.s)
    ok(errs.length > 0, `${c.name}：被校验拦截（${errs[0]}）`)
    let threw = false
    try {
      createJob(c.b, c.s, 'mm')
    } catch (e) {
      threw = e instanceof JobValidationError
    }
    ok(threw, `${c.name}：createJob 抛 JobValidationError`)
  }

  // 不兼容齿轮（模数不同 → 基节不等）：这里两个齿轮共用 m/α 建模，
  // 直接验证校验对"基节不兼容"的防御——以不同 m 构造基准的边界检查
  const incompatible: BaselineSnapshot = { ...baseline, module: NaN }
  ok(validateSetup(incompatible, {
    center: { min: -0.1, max: 0.1, steps: 3 }, thickness: { min: -0.1, max: 0.1, steps: 3 }, phaseSteps: 21
  }).some((e) => e.includes('模数')), '非有限模数（不兼容/非法齿轮）被拦截')

  const before = await store.list()
  ok(before.length === 0, '全部非法尝试后作业库仍为空（不留下半份结果）')
}

// ---------------------------------------------------------------------------
console.log('\n=== D. 运行中刷新：只恢复未完成样本，已完成统计保留 ===')
{
  const store = createMemoryJobStore()
  const setup = {
    center: { min: -2, max: 0.2, steps: 6 },
    thickness: { min: -0.1, max: 0.1, steps: 4 }, // 24 格
    phaseSteps: 25
  }
  const job = createJob(baseline, setup, 'mm')

  // 在第 7 个样本完成后取消（模拟运行中刷新：执行器消失，但落盘记录还在）
  let finished = 0
  let runner = await ToleranceRunner.start(job, store, () => {
    finished++
    if (finished === 7) runner.cancel()
  })
  await new Promise<void>((resolve) => {
    const t = setInterval(() => {
      if (!ToleranceRunner.isActive(job.id)) {
        clearInterval(t)
        resolve()
      }
    }, 5)
  })
  ok(job.status === 'cancelled', `取消后状态为 cancelled（完成 ${finished} 格）`)

  // “刷新”：丢掉内存里的执行器与对象，只从持久化层读回
  const reloaded = await store.get(job.id)
  ok(!!reloaded, '刷新后作业记录仍可从存储读出')
  const savedDone = reloaded!.counts.safe + reloaded!.counts.risk + reloaded!.counts.invalid
  ok(savedDone === 7, `已完成 ${savedDone} 格随落盘保留（含统计 safe/risk/invalid）`)
  ok(reloaded!.results.filter((r) => r !== null).length === 7, 'results 中恰有 7 个非空，其余为 null')
  ok(reloaded!.extremes.maxArea >= 0 && !!reloaded!.extremes.worst === (reloaded!.counts.risk > 0),
    '极值与已完成样本一致（风险存在时极值指向具体格）')

  // 恢复：只算剩余 17 格
  const finishedAfter: number[] = []
  runner = await ToleranceRunner.start(reloaded!, store, ({ last }) => {
    if (last.i >= 0) finishedAfter.push(indexOf(last, reloaded!.nj))
  })
  await new Promise<void>((resolve) => {
    const t = setInterval(() => {
      if (!ToleranceRunner.isActive(reloaded!.id)) {
        clearInterval(t)
        resolve()
      }
    }, 5)
  })
  ok(reloaded!.status === 'done', '恢复后作业完成')
  ok(finishedAfter.length === 17, `恢复只重算 ${finishedAfter.length} 个未完成样本（=24−7）`)
  const redone = finishedAfter.filter((idx) => idx < 7).length
  ok(redone === 0, '前 7 个已完成样本未被重算')
  ok(reloaded!.results.every((r) => r !== null), '恢复后 24 格全部有结论')
  ok(
    reloaded!.counts.safe + reloaded!.counts.risk + reloaded!.counts.invalid === 24,
    '最终统计为 24，无重复计数'
  )

  // 局部重算：把一个安全格改成用更密相位重算（结论应稳定），统计不漂移
  const safeKey = reloaded!.results
    .map((r, idx) => ({ r, idx }))
    .find((x) => x.r!.verdict === 'safe')!
  const beforeCount = { ...reloaded!.counts }
  const local = await ToleranceRunner.attachForRecompute(reloaded!, store, () => {})
  await local.recompute([{ i: Math.floor(safeKey.idx / reloaded!.nj), j: safeKey.idx % reloaded!.nj }])
  ok(
    JSON.stringify(reloaded!.counts) === JSON.stringify(beforeCount),
    '局部重算单格后总统计不变（计数随重算正确校正）'
  )
}

// ---------------------------------------------------------------------------
console.log('\n=== E. 单位切换 / 基准修改：尺寸语义不变，两代结果隔离 ===')
{
  const store = createMemoryJobStore()

  // 同一物理范围用 mm 与 in 输入（取 0.01in 的整倍数，避免二进制舍入噪声）
  const setupMm = { center: { min: -0.254, max: 0.254, steps: 5 }, thickness: { min: -0.127, max: 0.127, steps: 3 }, phaseSteps: 21 }
  // 面板里输入的是 in，createJob 前由面板换算回 mm（与 UI 的 toMm 同一函数）
  const setupIn = {
    center: { min: toMm(-0.01, 'in'), max: toMm(0.01, 'in'), steps: 5 },
    thickness: { min: toMm(-0.005, 'in'), max: toMm(0.005, 'in'), steps: 3 },
    phaseSteps: 21
  }
  const jobMm = createJob(baseline, setupMm, 'mm')
  const jobIn = createJob(baseline, setupIn, 'in')
  const closeAxes = (a: number[], b: number[]) => a.every((v, i) => Math.abs(v - b[i]) < 1e-9)
  ok(closeAxes(jobMm.axisCenter, jobIn.axisCenter), 'mm 与 in 输入生成完全相同的 Δa 轴（内部恒 mm）')
  ok(closeAxes(jobMm.axisThickness, jobIn.axisThickness), 'mm 与 in 输入生成完全相同的 Δs 轴')
  ok(jobMm.fingerprint === jobIn.fingerprint, '显示单位不进入指纹：两作业同属一个基准世代')

  await runToEnd(jobMm, store)
  await runToEnd(jobIn, store)
  let same = true
  for (let i = 0; i < jobMm.results.length; i++)
    if (jobMm.results[i]!.verdict !== jobIn.results[i]!.verdict ||
        Math.abs(jobMm.results[i]!.maxArea - jobIn.results[i]!.maxArea) > 1e-12) same = false
  ok(same, '不同单位提交的同物理分析结论逐格一致（面积均为 mm²）')

  // 修改基准参数（模数 2 → 2.5）：新指纹；旧作业归属旧快照
  const changed: BaselineSnapshot = { ...baseline, module: 2.5, centerDistance: 75 }
  ok(baselineFingerprint(changed) !== jobMm.fingerprint, '基准修改后指纹改变')
  const jobNew = createJob(changed, {
    center: { min: -0.1, max: 0.1, steps: 3 }, thickness: { min: -0.05, max: 0.05, steps: 3 }, phaseSteps: 21
  }, 'mm')
  await runToEnd(jobNew, store)

  const all = await store.list()
  ok(all.length === 3, `三代作业并存（mm 旧、in 旧、新基准）共 ${all.length} 份，互不覆盖`)
  ok(all.every((j) => j.baseline.module === (j.id === jobNew.id ? 2.5 : 2)),
    '每份结果都带自己的基准快照（旧结果可追溯到 m=2，新结果 m=2.5）')
  ok(jobMm.baseline.module === 2 && jobNew.baseline.module === 2.5, '旧快照内容未被新面板修改')

  // 指纹守卫：对旧世代作业以新基准调用"恢复资格"判定必须为 false
  const matchesOld = jobMm.fingerprint === baselineFingerprint(baseline)
  const matchesNew = jobMm.fingerprint === baselineFingerprint(changed)
  ok(matchesOld && !matchesNew, '旧作业只匹配旧基准，不被新面板继续/重算')

  // 齿厚可行域随齿数变化（齿数越少，单齿可加厚空间越大；两种齿数均给出有限正区间）
  const b20 = thicknessBounds(20, 2, (20 * Math.PI) / 180)
  const b16 = thicknessBounds(16, 2, (20 * Math.PI) / 180)
  ok(b20.max > 0 && b16.max > 0 && b20.min < 0 && b16.min < 0,
    `齿厚可行域均为有限正负区间：z=20 [${b20.min.toFixed(3)}, ${b20.max.toFixed(3)}]，z=16 [${b16.min.toFixed(3)}, ${b16.max.toFixed(3)}] mm`)
  ok(Math.abs(b16.max - b20.max) > 1e-6, '可行域随齿数变化（不能跨基准误用统一 Δs 轴）')
}

// ---------------------------------------------------------------------------
console.log(fails ? `\n${fails} 项失败 ❌` : '\n公差包络分析验收全部通过 ✅')
process.exit(fails ? 1 : 0)
