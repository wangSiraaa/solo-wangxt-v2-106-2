/**
 * 公差包络分析验收脚本（教学近似；数值可复核）。
 *
 * 覆盖验收点：
 *  A. 标准安装的小范围（全部安全侧）分析：每个组合可复核为安全，标准中心距+零齿厚偏差
 *     组合整段相位扫描重叠面积恒为 0；
 *  B. 缩小中心距 / 加厚齿厚的组合被判风险，并能定位最坏相位与给出重叠面积；
 *     风险组合面积在直接 Clipper 复算下可重现；
 *  C. 非法范围 / 不兼容齿轮：start 失败且存储中不留任何作业；
 *  D. 刷新恢复：模拟取消后"刷新"（重新查询存储、重新 resumeInterrupted），
 *     只恢复未完成组合，已完成组合的统计与结果原样保留；
 *  E. 快照世代隔离：改基准参数 / 换单位产生不同 key；旧作业不被新作业覆盖；
 *     局部重算只改指定组合，其它结果与统计保留。
 */
import { DEG } from '../src/geometry/gear.ts'
import { buildGear } from '../src/geometry/gear.ts'
import { analyzeMesh, gearAnglesAt } from '../src/geometry/mesh.ts'
import { transformOutline } from '../src/geometry/gear.ts'
import { intersectionArea } from '../src/geometry/clipper.ts'
import {
  AREA_THRESHOLD,
  MAX_COMBOS,
  actionSegment,
  buildCombos,
  computeExtrema,
  evaluateCombo,
  linspace,
  makeSnapshot,
  type BaselineParams,
  type EnvelopeSpec
} from '../src/geometry/envelope.ts'
import { EnvelopeRunner, createMemoryStorage, createJob } from '../src/geometry/envelope-store.ts'

let fails = 0
const ok = (cond: boolean, msg: string) => {
  if (cond) console.log('  ok  ', msg)
  else {
    fails++
    console.log('  FAIL', msg)
  }
}

const tick = () => new Promise((r) => setTimeout(r, 10))
const near = (a: number, b: number, tol = 1e-9) => Math.abs(a - b) <= tol
const findCombo = (combos: { da: number; ds1: number; ds2: number }[], da: number, ds1: number, ds2: number) =>
  combos.find((c) => near(c.da, da) && near(c.ds1, ds1) && near(c.ds2, ds2))!
async function waitFor(runner: EnvelopeRunner, jobId: string) {
  for (let i = 0; i < 2000; i++) {
    if (!runner.isBusy(jobId)) return
    await tick()
  }
  throw new Error('等待作业完成超时')
}
async function waitIdle(runner: EnvelopeRunner, storage: ReturnType<typeof createMemoryStorage>) {
  for (let i = 0; i < 2000; i++) {
    const all = await storage.getAll()
    if (all.length && all.every((j) => !runner.isBusy(j.id))) return
    await tick()
  }
  throw new Error('等待全部作业空闲超时')
}

const baseline: BaselineParams = {
  gear1: { z: 20, module: 2, alpha: 20 * DEG, faceWidth: 10 },
  gear2: { z: 40, module: 2, alpha: 20 * DEG, faceWidth: 10 },
  baseCenterDistance: 60,
  useStandardCenter: true,
  unit: 'mm'
}

// ---------------------------------------------------------------------------
console.log('\n=== A. 标准安装小范围安全分析（可复核） ===')
{
  const storage = createMemoryStorage()
  const runner = new EnvelopeRunner(storage)
  const spec: EnvelopeSpec = {
    center: { min: 0, max: 0.06, count: 3 },
    thickness1: { min: -0.06, max: 0, count: 3 },
    thickness2: { min: -0.06, max: 0, count: 3 },
    phaseSteps: 24
  }
  const res = await runner.start(baseline, spec)
  ok(res.ok, '合法作业启动')
  const id = res.ok ? res.job.id : ''
  await waitFor(runner, id)
  const job = (await storage.get(id))!
  const ext = computeExtrema(job.combos)
  ok(ext.pending === 0 && ext.risk === 0 && ext.invalid === 0, `全部 27 个组合完成且安全（safe=${ext.safe} risk=${ext.risk} invalid=${ext.invalid} pending=${ext.pending}）`)
  ok(job.status === 'done', '作业状态 done')

  // 标准中心距 + 零齿厚偏差组合必须严格 0 面积，并可独立复算
  const zero = findCombo(job.combos, 0, 0, 0)
  ok(zero.status === 'safe' && zero.maxArea === 0, `Δa=Δs=0 组合安全且最大重叠面积严格为 0（得到 ${zero.maxArea}）`)

  // 独立用 buildGear/analyzeMesh/clipper 复算同一组合
  const g1 = buildGear({ z: 20, module: 2, alpha: 20 * DEG, faceWidth: 10 })
  const g2 = buildGear({ z: 40, module: 2, alpha: 20 * DEG, faceWidth: 10 })
  const mesh = analyzeMesh({ g1, g2, centerDistance: 60 })
  const { sLo, sHi } = actionSegment(mesh)
  let reMax = 0
  for (let i = 0; i < spec.phaseSteps; i++) {
    const s = sLo + ((sHi - sLo) * i) / (spec.phaseSteps - 1)
    const { phi1, phi2 } = gearAnglesAt(mesh, g1, g2, s)
    reMax = Math.max(
      reMax,
      await intersectionArea(
        [transformOutline(g1.outline, 0, 0, phi1)],
        [transformOutline(g2.outline, 60, 0, phi2)]
      )
    )
  }
  ok(reMax === 0, `独立 Clipper 复算整段相位面积恒为 0（得到 ${reMax}），与作业结论一致`)

  // 采样确定性：linspace 与 buildCombos 顺序可复现
  ok(JSON.stringify(linspace(spec.center)) === JSON.stringify([0, 0.03, 0.06]), '中心距采样点确定性 [0,0.03,0.06]')
  ok(buildCombos(spec)[13].index === 13 && buildCombos(spec).length === 27, '组合序号与总数可复现（index 13 位置一致）')
}

// ---------------------------------------------------------------------------
console.log('\n=== B. 缩小中心距 / 加厚齿厚 → 风险并定位相位与面积 ===')
{
  const storage = createMemoryStorage()
  const runner = new EnvelopeRunner(storage)
  const spec: EnvelopeSpec = {
    center: { min: -0.1, max: 0.05, count: 4 },
    thickness1: { min: -0.02, max: 0.06, count: 3 },
    thickness2: { min: -0.02, max: 0.06, count: 3 },
    phaseSteps: 24
  }
  const res = await runner.start(baseline, spec)
  ok(res.ok, '风险分析作业启动')
  const id = res.ok ? res.job.id : ''
  await waitFor(runner, id)
  const job = (await storage.get(id))!
  const ext = computeExtrema(job.combos)
  ok(ext.risk > 0 && ext.safe > 0, `同时识别出风险与安全组合（risk=${ext.risk}, safe=${ext.safe}, invalid=${ext.invalid}）`)

  const worst = job.combos[ext.worstComboIndex]
  ok(
    worst.status === 'risk' &&
      worst.maxArea > AREA_THRESHOLD &&
      worst.worstS !== null &&
      worst.worstPhi1 !== null &&
      worst.worstPhi2 !== null,
    `最坏组合 (#${worst.index} Δa=${worst.da.toFixed(3)}, Δs1=${worst.ds1.toFixed(3)}, Δs2=${worst.ds2.toFixed(3)}) 记录了面积 ${worst.maxArea.toExponential(2)} mm² 与最坏相位 s=${worst.worstS?.toFixed(3)}`
  )

  // 最坏相位的重叠面积可由 getWorstPose 的区域几何复算
  const pose = await runner.getWorstPose(id, worst.index)
  ok(!!pose && pose.regions.length > 0, '最坏相位能取到 Clipper 重叠多边形')
  const reArea = Math.abs(
    pose!.regions.reduce((sum, ring) => {
      let a = 0
      for (let i = 0; i < ring.length; i++) {
        const p = ring[i],
          q = ring[(i + 1) % ring.length]
        a += p.x * q.y - q.x * p.y
      }
      return sum + a / 2
    }, 0)
  )
  ok(Math.abs(reArea - worst.maxArea) < 1e-6, `重叠多边形面积 ${reArea.toExponential(2)} 与记录值 ${worst.maxArea.toExponential(2)} 一致`)

  // 单调性可复核：Δa=−0.1 必有风险；纯增大中心距+减薄齿必安全
  const shrink = job.combos.filter((c) => c.da <= -0.09)
  ok(shrink.every((c) => c.status === 'risk' || c.status === 'invalid'), `缩小中心距组合（Δa=${shrink[0].da}）全部风险/无效，无漏判`)
  const loose = findCombo(job.combos, 0.05, -0.02, -0.02)
  ok(loose.status === 'safe', '增大中心距+齿厚减薄组合安全')
}

// ---------------------------------------------------------------------------
console.log('\n=== C. 非法范围 / 不兼容齿轮：不启动且不留结果 ===')
{
  const storage = createMemoryStorage()
  const runner = new EnvelopeRunner(storage)

  const bad1: EnvelopeSpec = {
    center: { min: 0.1, max: -0.1, count: 3 }, // 上下限颠倒
    thickness1: { min: 0, max: 0.05, count: 3 },
    thickness2: { min: 0, max: 0.05, count: 3 },
    phaseSteps: 24
  }
  const r1 = await runner.start(baseline, bad1)
  ok(!r1.ok && r1.errors.some((e) => e.includes('下限')), '上下限颠倒被拦截：' + (r1.ok ? '' : r1.errors[0]))

  const bad2: EnvelopeSpec = {
    center: { min: 0, max: 0.05, count: 3 },
    thickness1: { min: 0, max: 99, count: 3 }, // |Δs| >= πm/2
    thickness2: { min: 0, max: 0.05, count: 3 },
    phaseSteps: 24
  }
  const r2 = await runner.start(baseline, bad2)
  ok(!r2.ok && r2.errors.some((e) => e.includes('πm/2')), '齿厚偏差超过 πm/2 被拦截')

  const bad3: EnvelopeSpec = {
    center: { min: 0, max: 0.05, count: 10 },
    thickness1: { min: 0, max: 0.05, count: 10 },
    thickness2: { min: 0, max: 0.05, count: 10 },
    phaseSteps: 24
  }
  const r3 = await runner.start(baseline, bad3)
  ok(!r3.ok && r3.errors.some((e) => e.includes(MAX_COMBOS.toString())), `组合总数超过 ${MAX_COMBOS} 被拦截`)

  const bad4: EnvelopeSpec = {
    center: { min: 0, max: 0.05, count: 3 },
    thickness1: { min: 0, max: 0.05, count: 3 },
    thickness2: { min: 0, max: 0.05, count: 3 },
    phaseSteps: 2
  }
  const r4 = await runner.start(baseline, bad4)
  ok(!r4.ok && r4.errors.some((e) => e.includes('相位')), '相位采样点过少被拦截')

  // 不兼容齿轮（模数不同）
  const incompatible: BaselineParams = {
    ...baseline,
    gear2: { z: 40, module: 2.5, alpha: 20 * DEG, faceWidth: 10 }
  }
  const specOk: EnvelopeSpec = {
    center: { min: 0, max: 0.05, count: 3 },
    thickness1: { min: 0, max: 0.05, count: 3 },
    thickness2: { min: 0, max: 0.05, count: 3 },
    phaseSteps: 24
  }
  const r5 = await runner.start(incompatible, specOk)
  ok(!r5.ok && r5.errors.some((e) => e.includes('模数')), '模数不同的不兼容齿轮被拦截')

  const all = await storage.getAll()
  ok(all.length === 0, `存储中没有留下任何作业（实际 ${all.length} 份）`)
  ok((await createJob(baseline, bad1)).ok === false, 'createJob 直接调用同样拒绝非法范围')
}

// ---------------------------------------------------------------------------
console.log('\n=== D. 取消后"刷新"：只恢复未完成组合，已完成统计保留 ===')
{
  const storage = createMemoryStorage()
  const runner1 = new EnvelopeRunner(storage)
  const spec: EnvelopeSpec = {
    center: { min: -0.1, max: 0.05, count: 4 },
    thickness1: { min: -0.02, max: 0.06, count: 3 },
    thickness2: { min: -0.02, max: 0.06, count: 3 },
    phaseSteps: 24
  }
  const res = await runner1.start(baseline, spec)
  const id = res.ok ? res.job.id : ''
  // 等若干组合完成后取消
  let doneCount = 0
  for (let i = 0; i < 500; i++) {
    await tick()
    const j = await storage.get(id)
    doneCount = j ? j.combos.filter((c) => c.status !== 'pending').length : 0
    if (doneCount >= 5) break
  }
  await runner1.cancel(id)
  await tick()
  const canceled = (await storage.get(id))!
  const snapshotDone = canceled.combos.filter((c) => c.status !== 'pending').map((c) => ({ index: c.index, status: c.status, area: c.maxArea }))
  ok(canceled.status === 'cancelled', `作业已取消（取消时完成 ${snapshotDone.length} 个组合）`)
  ok(snapshotDone.length >= 5, '取消前已有 ≥5 个组合完成并落盘')
  const extBefore = computeExtrema(canceled.combos)

  // —— 模拟刷新：新 runner、新缓存，只有同一个存储（= IndexedDB 持久层）——
  const runner2 = new EnvelopeRunner(storage)
  // cancelled 不会自动恢复（只有 running 才自动恢复）；先按 UI 的"继续"恢复
  await runner2.resume(id)
  ok(runner2.isBusy(id), '恢复后作业重新进入忙碌')
  await waitFor(runner2, id)
  const resumed = (await storage.get(id))!
  const extAfter = computeExtrema(resumed.combos)
  ok(extAfter.pending === 0, '恢复后所有未完成组合均已补算')
  ok(resumed.status === 'done', '恢复完成后状态为 done')
  ok(
    snapshotDone.every((d) => {
      const c = resumed.combos[d.index]
      return c.status === d.status && Math.abs(c.maxArea - d.area) < 1e-12
    }),
    '刷新前已完成组合的结论与面积原样保留，未被重算'
  )
  ok(
    extAfter.safe >= extBefore.safe && extAfter.risk >= extBefore.risk && extAfter.invalid >= extBefore.invalid,
    `统计只增不改（safe ${extBefore.safe}→${extAfter.safe}, risk ${extBefore.risk}→${extAfter.risk}, invalid ${extBefore.invalid}→${extAfter.invalid}）`
  )

  // 真正的"运行中刷新"：running 状态由 resumeInterrupted 自动接管
  const runner3 = new EnvelopeRunner(storage)
  const res2 = await runner3.start(baseline, {
    center: { min: -0.1, max: 0.05, count: 4 },
    thickness1: { min: -0.02, max: 0.06, count: 3 },
    thickness2: { min: -0.02, max: 0.06, count: 3 },
    phaseSteps: 24
  })
  const id2 = res2.ok ? res2.job.id : ''
  await tick()
  const runner4 = new EnvelopeRunner(storage) // 刷新：旧 runner3 抛弃
  const interrupted = await runner4.resumeInterrupted()
  ok(interrupted.some((j) => j.id === id2), 'resumeInterrupted 找到运行中的作业')
  await waitFor(runner4, id2)
  const j2 = (await storage.get(id2))!
  ok(computeExtrema(j2.combos).pending === 0 && j2.status === 'done', '自动恢复后作业跑完')
}

// ---------------------------------------------------------------------------
console.log('\n=== E. 快照世代隔离 + 局部重算 + 单位无关 ===')
{
  const storage = createMemoryStorage()
  const runner = new EnvelopeRunner(storage)
  const spec: EnvelopeSpec = {
    center: { min: -0.05, max: 0.05, count: 3 },
    thickness1: { min: -0.02, max: 0.02, count: 3 },
    thickness2: { min: -0.02, max: 0.02, count: 3 },
    phaseSteps: 16
  }
  const res = await runner.start(baseline, spec)
  const id1 = res.ok ? res.job.id : ''
  await waitFor(runner, id1)
  const job1 = (await storage.get(id1))!

  // 改基准参数（模数）→ key 变化
  const changedModule: BaselineParams = { ...baseline, gear1: { ...baseline.gear1, module: 2.5 }, gear2: { ...baseline.gear2, module: 2.5 }, baseCenterDistance: 75 }
  const key1 = makeSnapshot(baseline, spec, 0).key
  const key2 = makeSnapshot(changedModule, spec, 0).key
  ok(key1 !== key2, '基准模数改变 → 快照 key 不同')

  // 仅切换显示单位 → key 不变（尺寸含义不变）
  const unitCm: BaselineParams = { ...baseline, unit: 'cm' }
  ok(makeSnapshot(unitCm, spec, 0).key === key1, '只切换显示单位 → key 不变（内部恒 mm）')
  ok(job1.snapshot.spec.center.min === -0.05 && job1.snapshot.spec.center.max === 0.05, '旧作业快照保留 mm 数值（−0.05~0.05），不受单位影响')

  // 用新参数启动新作业 → 两份结果并存，不互相覆盖
  const res2 = await runner.start(changedModule, spec)
  const id2 = res2.ok ? res2.job.id : ''
  await waitFor(runner, id2)
  ok(id1 !== id2, '新参数创建了第二代作业')
  const all = await storage.getAll()
  ok(all.length === 2 && all.some((j) => j.id === id1) && all.some((j) => j.id === id2), '两代作业并存，旧结果未被覆盖')
  const reloaded1 = (await storage.get(id1))!
  ok(reloaded1.snapshot.key === key1 && reloaded1.snapshot.gear1.module === 2, '旧作业仍归属旧快照（m=2）')
  ok((await storage.get(id2))!.snapshot.gear1.module === 2.5, '新作业归属新快照（m=2.5）')

  // 局部重算：只重置并重算指定组合
  const targetIndex = findCombo(job1.combos, -0.05, -0.02, -0.02).index
  const othersBefore = job1.combos.filter((c) => c.index !== targetIndex).map((c) => ({ i: c.index, s: c.status, a: c.maxArea }))
  await runner.recompute(id1, [targetIndex])
  await waitFor(runner, id1)
  const j1r = (await storage.get(id1))!
  const unchanged = othersBefore.every((o) => j1r.combos[o.i].status === o.s && Math.abs(j1r.combos[o.i].maxArea - o.a) < 1e-12)
  ok(unchanged, '局部重算不改变其它 26 个组合的结论与面积')
  ok(j1r.combos[targetIndex].doneAt! >= job1.combos[targetIndex].doneAt!, '被重算组合的时间戳更新')
  ok(computeExtrema(j1r.combos).pending === 0, '重算后无遗留 pending')
}

// ---------------------------------------------------------------------------
console.log('\n=== F. 无效组合可追溯原因（齿顶变尖 / 毛坯侵入 / 啮合角无实数解） ===')
{
  const snap = makeSnapshot(baseline, {
    center: { min: 0, max: 0, count: 2 },
    thickness1: { min: 0, max: 0, count: 2 },
    thickness2: { min: 0, max: 0, count: 2 },
    phaseSteps: 16
  })
  // 齿厚减薄量超过齿顶半角余量时齿顶变尖（z=20 时临界 Δs≈−1.27 mm）
  const pointed = await evaluateCombo(snap, { index: 0, da: 0, ds1: -1.5, ds2: 0 })
  ok(pointed.result.status === 'invalid' && (pointed.result.reason ?? '').includes('齿顶变尖'), '齿顶变尖 → invalid 并给出原因')
  const crash = await evaluateCombo(snap, { index: 1, da: -(60 - baseline.gear1.module * 1.25 - baseline.gear2.module * 1.25) - 1, ds1: 0, ds2: 0 })
  ok(crash.result.status === 'invalid' && (crash.result.reason ?? '').includes('毛坯'), '齿根圆毛坯侵入 → invalid 并给出原因')
  const noAngle = await evaluateCombo(snap, { index: 2, da: -(60 - 60 * Math.cos(20 * DEG)) - 1, ds1: 0, ds2: 0 })
  ok(noAngle.result.status === 'invalid' && (noAngle.result.reason ?? '').includes('啮合角'), '中心距低于基圆公切线极限 → invalid 并给出原因')
}

console.log(fails ? `\n${fails} 项失败 ❌` : '\n公差包络分析验收全部通过 ✅')
process.exit(fails ? 1 : 0)
