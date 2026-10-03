<script setup lang="ts">
import { computed, onMounted, reactive, ref, shallowRef, watch } from 'vue'
import { buildGear, validateGearInput, DEG, transformOutline, type GearGeometry, type Pt } from './geometry/gear'
import { analyzeMesh, gearAnglesAt, mateAngle, type MeshInfo } from './geometry/mesh'
import { intersectOutlines } from './geometry/clipper'
import {
  AREA_THRESHOLD,
  MAX_AXIS_COUNT,
  MAX_COMBOS,
  MAX_PHASE_STEPS,
  MIN_PHASE_STEPS,
  buildComboGeometry,
  makeSnapshot,
  validateEnvelopeSpec,
  type BaselineParams,
  type EnvelopeJob,
  type EnvelopeSpec,
  type Verdict
} from './geometry/envelope'
import { EnvelopeRunner } from './geometry/envelope-store'
import { idbJobStorage } from './geometry/envelope-idb'
import { GearViewer, type ViewerOptions } from './viewer'
import { UNITS, fromMm, toMm, fmtLen, type LengthUnit } from './units'
import {
  type CaseData,
  downloadJson,
  listCases,
  newCaseId,
  parseCase,
  saveCase,
  deleteCase
} from './store'

// ------- 参数（内部全部 mm / 度） -------
const unit = ref<LengthUnit>('mm')

const gearParams = reactive({
  z1: 20,
  z2: 40,
  m: 2, // mm
  alphaDeg: 20,
  faceWidth: 10,
  centerDistance: 60, // mm
  useStandardCenter: true
})

const g1 = shallowRef<GearGeometry>()
const g2 = shallowRef<GearGeometry>()
const mesh = shallowRef<MeshInfo>()

const errors = reactive({ g1: [] as string[], g2: [] as string[] })

function rebuild() {
  const in1 = { z: Math.round(gearParams.z1), module: gearParams.m, alpha: gearParams.alphaDeg * DEG, faceWidth: gearParams.faceWidth }
  const in2 = { z: Math.round(gearParams.z2), module: gearParams.m, alpha: gearParams.alphaDeg * DEG, faceWidth: gearParams.faceWidth }
  errors.g1 = validateGearInput(in1)
  errors.g2 = validateGearInput(in2)
  if (errors.g1.length || errors.g2.length) return
  g1.value = buildGear(in1)
  g2.value = buildGear(in2)
  const a = gearParams.useStandardCenter
    ? g1.value.pitchR + g2.value.pitchR
    : gearParams.centerDistance
  mesh.value = analyzeMesh({ g1: g1.value, g2: g2.value, centerDistance: a })
}

// ------- 单位输入辅助（数值随单位换算；内部 mm 不变） -------
const mInput = computed({
  get: () => fromMm(gearParams.m, unit.value),
  set: (v: number) => (gearParams.m = toMm(v, unit.value))
})
const faceInput = computed({
  get: () => fromMm(gearParams.faceWidth, unit.value),
  set: (v: number) => (gearParams.faceWidth = toMm(v, unit.value))
})
const centerInput = computed({
  get: () => fromMm(gearParams.centerDistance, unit.value),
  set: (v: number) => (gearParams.centerDistance = toMm(v, unit.value))
})

watch(unit, () => {})

// ------- 动画 -------
const playing = ref(true)
const phi1 = ref(0)
const speed = ref(0.25) // rad/s（轮1）
let lastT = 0
const contactS = ref(0)

const showOpts = reactive<ViewerOptions>({
  showPitchCircle: true,
  showBaseCircle: true,
  showAddendumCircle: false,
  showDedendumCircle: false,
  showActionLine: true,
  showContact: true,
  contactS: 0
})

// ------- 干涉 -------
const interferenceArea = ref<number | null>(null)
const interferenceRegions = shallowRef<Pt[][]>([])
const interferenceBusy = ref(false)
let interfereReq = 0

async function checkInterference(currentPhi1: number) {
  if (!g1.value || !g2.value || !mesh.value) return
  const p1 = currentPhi1
  const p2 = mateAngle(g1.value, g2.value, mesh.value, p1)
  const o1 = [transformOutline(g1.value.outline, 0, 0, p1)]
  const o2 = [transformOutline(g2.value.outline, mesh.value.a, 0, p2)]
  const req = ++interfereReq
  interferenceBusy.value = true
  try {
    const res = await intersectOutlines(o1, o2)
    if (req !== interfereReq) return
    interferenceArea.value = res.area
    interferenceRegions.value = res.regions
  } finally {
    if (req === interfereReq) interferenceBusy.value = false
  }
}

// ------- 视图 -------
const host = ref<HTMLDivElement>()
let viewer: GearViewer | null = null

function pushOverlay() {
  if (!viewer || !mesh.value) return
  viewer.setMeshOverlay(mesh.value, {
    ...showOpts,
    contactS: contactS.value,
    contactRegions: [interferenceRegions.value]
  })
}

onMounted(() => {
  rebuild()
  viewer = new GearViewer(host.value!)
  if (g1.value && g2.value && mesh.value) viewer.setGears(g1.value, g2.value, mesh.value.a)

  const loop = (t: number) => {
    const dt = Math.min(0.05, (t - lastT) / 1000 || 0)
    lastT = t
    if (playing.value && g1.value && g2.value && mesh.value) {
      phi1.value += speed.value * dt
      // 归一到一个齿距周期，避免数值增长
      const period = (2 * Math.PI) / g1.value.input.z
      phi1.value = ((phi1.value % period) + period) % period
      // 接触点 s 随 φ1 同步：dφ1/ds = 1/rb1，相位常量按节点对齐
      const s = (phi1.value - (gearAnglesAt(mesh.value, g1.value, g2.value, 0).phi1)) * g1.value.baseR
      contactS.value = clampS(s)
    }
    if (g1.value && g2.value && mesh.value) {
      const p2 = mateAngle(g1.value, g2.value, mesh.value, phi1.value)
      viewer!.setAngles(phi1.value, p2)
      showOpts.contactS = contactS.value
      pushOverlay()
    }
    requestAnimationFrame(loop)
  }
  requestAnimationFrame(loop)
})

function clampS(s: number) {
  if (!mesh.value) return 0
  const a = mesh.value.actionLine
  const ap = mesh.value.alphaPrime
  const nx = Math.sin(ap),
    ny = Math.cos(ap)
  const sLo =
    (a.p0.x - mesh.value.pitchPoint.x) * nx + (a.p0.y - mesh.value.pitchPoint.y) * ny
  const sHi =
    (a.p1.x - mesh.value.pitchPoint.x) * nx + (a.p1.y - mesh.value.pitchPoint.y) * ny
  // 超出区间则循环到下一齿（让接触点重新进入）
  if (s < sLo) return sHi - ((sLo - s) % (sHi - sLo))
  if (s > sHi) return sLo + ((s - sHi) % (sHi - sLo))
  return s
}

watch(
  () => [gearParams.z1, gearParams.z2, gearParams.m, gearParams.alphaDeg, gearParams.faceWidth, gearParams.useStandardCenter, gearParams.centerDistance],
  () => {
    rebuild()
    if (viewer && g1.value && g2.value && mesh.value) viewer.setGears(g1.value, g2.value, mesh.value.a)
    phi1.value = 0
    contactS.value = 0
    interferenceArea.value = null
    interferenceRegions.value = []
    // 基准参数改变：退出包络定位视图；旧作业保留、归属旧快照，不覆盖新面板
    envelopeView.value = false
    envelopePoseInfo.value = null
  }
)

watch(showOpts, pushOverlay)
watch(contactS, () => (showOpts.contactS = contactS.value))

// ------- 暂停时手动检查 -------
function pause() {
  playing.value = false
}
function resume() {
  playing.value = true
}

/** 暂停时手动拖动接触点：把轮1 转到与该 s 严格对应的相位（同一条渐开线接触） */
function scrubContact() {
  if (playing.value || !g1.value || !g2.value || !mesh.value) return
  phi1.value = gearAnglesAt(mesh.value, g1.value, g2.value, contactS.value).phi1
}

// ------- 案例库 -------
const cases = ref<CaseData[]>([])
const caseName = ref('未命名案例')
const caseNote = ref('')

async function refreshCases() {
  cases.value = await listCases()
}
onMounted(refreshCases)

function currentCaseData(withOutlines: boolean): CaseData {
  const a = mesh.value?.a ?? gearParams.centerDistance
  return {
    schemaVersion: 1,
    id: newCaseId(),
    name: caseName.value,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    note: caseNote.value,
    gear1: {
      z: gearParams.z1,
      module: gearParams.m,
      alpha: gearParams.alphaDeg * DEG,
      alphaDeg: gearParams.alphaDeg,
      faceWidth: gearParams.faceWidth
    },
    gear2: {
      z: gearParams.z2,
      module: gearParams.m,
      alpha: gearParams.alphaDeg * DEG,
      alphaDeg: gearParams.alphaDeg,
      faceWidth: gearParams.faceWidth
    },
    centerDistance: gearParams.useStandardCenter ? null : a,
    unit: unit.value,
    outlines:
      withOutlines && g1.value && g2.value
        ? { gear1: g1.value.outline, gear2: g2.value.outline }
        : undefined
  }
}

async function saveCurrent(withOutlines: boolean) {
  await saveCase(currentCaseData(withOutlines))
  await refreshCases()
}

function exportCase(withOutlines: boolean) {
  downloadJson(currentCaseData(withOutlines))
}

async function loadCase(c: CaseData) {
  gearParams.z1 = c.gear1.z
  gearParams.z2 = c.gear2.z
  gearParams.m = c.gear1.module
  gearParams.alphaDeg = c.gear1.alphaDeg
  gearParams.faceWidth = c.gear1.faceWidth
  if (c.centerDistance == null) {
    gearParams.useStandardCenter = true
  } else {
    gearParams.useStandardCenter = false
    gearParams.centerDistance = c.centerDistance
  }
  unit.value = c.unit || 'mm'
  caseName.value = c.name
  caseNote.value = c.note
  rebuild()
  if (viewer && g1.value && g2.value && mesh.value) viewer.setGears(g1.value, g2.value, mesh.value.a)
}

async function removeCase(id: string) {
  await deleteCase(id)
  await refreshCases()
}

function importFile(ev: Event) {
  const input = ev.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = async () => {
    try {
      const c = parseCase(String(reader.result))
      await saveCase(c)
      await loadCase(c)
      await refreshCases()
    } catch (e) {
      alert('导入失败：' + (e as Error).message)
    }
  }
  reader.readAsText(file)
  input.value = ''
}

// ------- 派生显示 -------
const dims = computed(() => {
  if (!g1.value || !g2.value || !mesh.value) return null
  return { g1: g1.value, g2: g2.value, mesh: mesh.value }
})

// ===========================================================================
// 公差包络分析（本机；理想刚性教学近似，不是制造认证）
// ===========================================================================

// 范围以 mm 内部存储；界面通过 computed 在显示单位间换算
const envInputs = reactive({
  daMin: -0.05,
  daMax: 0.05,
  daCount: 3,
  ds1Min: -0.02,
  ds1Max: 0.02,
  ds1Count: 3,
  ds2Min: -0.02,
  ds2Max: 0.02,
  ds2Count: 3,
  phaseSteps: 24
})

const envelopeSpec = computed<EnvelopeSpec>(() => ({
  center: { min: envInputs.daMin, max: envInputs.daMax, count: Math.round(envInputs.daCount) },
  thickness1: { min: envInputs.ds1Min, max: envInputs.ds1Max, count: Math.round(envInputs.ds1Count) },
  thickness2: { min: envInputs.ds2Min, max: envInputs.ds2Max, count: Math.round(envInputs.ds2Count) },
  phaseSteps: Math.round(envInputs.phaseSteps)
}))

// 范围输入框按当前显示单位换算；写入立即转回 mm，内部尺寸与快照不受单位影响
function mmField(get: () => number, set: (v: number) => void) {
  return computed({ get: () => fromMm(get(), unit.value), set: (v: number) => set(toMm(v, unit.value)) })
}
const daMinU = mmField(() => envInputs.daMin, (v) => (envInputs.daMin = v))
const daMaxU = mmField(() => envInputs.daMax, (v) => (envInputs.daMax = v))
const ds1MinU = mmField(() => envInputs.ds1Min, (v) => (envInputs.ds1Min = v))
const ds1MaxU = mmField(() => envInputs.ds1Max, (v) => (envInputs.ds1Max = v))
const ds2MinU = mmField(() => envInputs.ds2Min, (v) => (envInputs.ds2Min = v))
const ds2MaxU = mmField(() => envInputs.ds2Max, (v) => (envInputs.ds2Max = v))

/** 当前基准参数（冻结快照用；内部恒 mm） */
function currentBaseline(): BaselineParams | null {
  if (!g1.value || !g2.value || !mesh.value) return null
  return {
    gear1: {
      z: g1.value.input.z,
      module: g1.value.input.module,
      alpha: g1.value.input.alpha,
      faceWidth: g1.value.input.faceWidth
    },
    gear2: {
      z: g2.value.input.z,
      module: g2.value.input.module,
      alpha: g2.value.input.alpha,
      faceWidth: g2.value.input.faceWidth
    },
    baseCenterDistance: mesh.value.a,
    useStandardCenter: gearParams.useStandardCenter,
    unit: unit.value
  }
}

/** 当前面板基准指纹（单位不参与）；用于判断选中作业是否属于"这一代"参数 */
const currentKey = computed(() => {
  const b = currentBaseline()
  if (!b) return ''
  return makeSnapshot({ ...b, unit: 'mm' }, envelopeSpec.value, 0).key
})

const envSpecErrors = computed<string[]>(() => {
  const b = currentBaseline()
  if (!b) return ['基准齿轮参数无效']
  return validateEnvelopeSpec(envelopeSpec.value, b.gear1, b.gear2, b.baseCenterDistance).errors
})

const envComboCount = computed(() => envInputs.daCount * envInputs.ds1Count * envInputs.ds2Count)

// ------- 作业状态 -------
const envRunner = new EnvelopeRunner(idbJobStorage())
const envJobs = ref<EnvelopeJob[]>([])
const selectedJobId = ref<string | null>(null)

const selectedJob = computed<EnvelopeJob | null>(
  () => envJobs.value.find((j) => j.id === selectedJobId.value) ?? null
)
const selectedExtrema = computed(() =>
  selectedJob.value ? envRunner.extrema(selectedJob.value) : null
)
const selectedMatchesCurrent = computed(
  () => !!selectedJob.value && selectedJob.value.snapshot.key === currentKey.value
)

async function refreshEnvJobs(keepSelection = true) {
  envJobs.value = await idbJobStorage().getAll()
  if (!keepSelection) selectedJobId.value = null
  if (selectedJobId.value && !envJobs.value.some((j) => j.id === selectedJobId.value)) {
    selectedJobId.value = null
    exitEnvelopeView()
  }
}

let envSubscribed = false
onMounted(() => {
  if (envSubscribed) return
  envSubscribed = true
  envRunner.subscribe(() => void refreshEnvJobs(true))
  void (async () => {
    await refreshEnvJobs(false)
    // 刷新后恢复：只恢复 running 作业的未完成组合，已完成统计原样保留
    await envRunner.resumeInterrupted()
    await refreshEnvJobs(true)
  })()
})

const envStarting = ref(false)

async function startEnvelope() {
  const b = currentBaseline()
  if (!b || envStarting.value) return
  envStarting.value = true
  try {
    const res = await envRunner.start(b, envelopeSpec.value)
    if (!res.ok) {
      alert('分析未启动（未写入任何结果）：\n' + res.errors.join('\n'))
      return
    }
    selectedJobId.value = res.job.id
    exitEnvelopeView()
    await refreshEnvJobs(true)
  } finally {
    envStarting.value = false
  }
}

async function cancelEnvelope() {
  if (selectedJobId.value) await envRunner.cancel(selectedJobId.value)
}
async function resumeEnvelope() {
  if (selectedJobId.value) await envRunner.resume(selectedJobId.value)
}
async function removeEnvelope() {
  if (!selectedJobId.value) return
  if (!confirm('删除该分析作业及其全部结果？')) return
  const id = selectedJobId.value
  selectedJobId.value = null
  exitEnvelopeView()
  await envRunner.remove(id)
}
async function recomputeCombo(index: number) {
  if (selectedJobId.value) await envRunner.recompute(selectedJobId.value, [index])
}
async function recomputeAllRisk() {
  if (!selectedJob.value) return
  const idx = selectedJob.value.combos.filter((c) => c.status === 'risk').map((c) => c.index)
  if (idx.length && selectedJobId.value) await envRunner.recompute(selectedJobId.value, idx)
}

function selectJob(id: string) {
  selectedJobId.value = id
  exitEnvelopeView()
}

// 结论表过滤
const envFilter = ref<'all' | Verdict>('all')
const filteredCombos = computed(() => {
  const j = selectedJob.value
  if (!j) return []
  const list = envFilter.value === 'all' ? j.combos : j.combos.filter((c) => c.status === envFilter.value)
  return [...list].sort((a, b) => b.maxArea - a.maxArea)
})

// ------- 风险组合在几何视图中定位（最坏相位 + 重叠多边形） -------
const envelopeView = ref(false)
const envelopePoseBusy = ref(false)
const envelopePoseInfo = ref<{
  da: number
  ds1: number
  ds2: number
  a: number
  s: number
  area: number
} | null>(null)

async function locateCombo(index: number) {
  if (!selectedJob.value) return
  const combo = selectedJob.value.combos[index]
  if (!combo || combo.status !== 'risk' || combo.worstPhi1 === null || combo.worstPhi2 === null) return
  envelopePoseBusy.value = true
  try {
    const pose = await envRunner.getWorstPose(selectedJob.value.id, index)
    if (!pose) return
    const built = buildComboGeometry(
      selectedJob.value.snapshot,
      pose.combo.da,
      pose.combo.ds1,
      pose.combo.ds2
    )
    if (!built.ok) return
    const { g1: gg1, g2: gg2, a } = built.geom
    pause()
    viewer?.setEnvelopeView(gg1, gg2, a, combo.worstPhi1, combo.worstPhi2, pose.regions)
    envelopeView.value = true
    envelopePoseInfo.value = {
      da: pose.combo.da,
      ds1: pose.combo.ds1,
      ds2: pose.combo.ds2,
      a,
      s: pose.combo.worstS ?? 0,
      area: pose.combo.maxArea
    }
  } finally {
    envelopePoseBusy.value = false
  }
}

function exitEnvelopeView() {
  if (!envelopeView.value && !viewer?.isEnvelopeMode()) {
    envelopePoseInfo.value = null
    return
  }
  viewer?.clearEnvelopeView()
  envelopeView.value = false
  envelopePoseInfo.value = null
  // 回到基准齿轮（当前面板参数）
  if (viewer && g1.value && g2.value && mesh.value) viewer.setGears(g1.value, g2.value, mesh.value.a)
}

function fmtTime(ts: number | null) {
  if (!ts) return '—'
  return new Date(ts).toLocaleTimeString()
}

/** 实际啮合线参数 s 的两端（用于接触点滑块） */
const sBounds = computed<[number, number]>(() => {
  if (!mesh.value) return [-30, 30]
  const m = mesh.value
  const nx = Math.sin(m.alphaPrime),
    ny = Math.cos(m.alphaPrime)
  const lo = (m.actionLine.p0.x - m.pitchPoint.x) * nx + (m.actionLine.p0.y - m.pitchPoint.y) * ny
  const hi = (m.actionLine.p1.x - m.pitchPoint.x) * nx + (m.actionLine.p1.y - m.pitchPoint.y) * ny
  return [Math.floor(lo * 10) / 10, Math.ceil(hi * 10) / 10]
})

function fmt(mm: number) {
  return fmtLen(mm, unit.value)
}

/** 冻结 mm 数值按当前显示单位格式化（不带单位后缀，表格用） */
function fmtU(mm: number) {
  return fromMm(mm, unit.value).toFixed(UNITS[unit.value].decimals)
}

// 预设样本：标准齿数与极少齿数，便于核对
function preset(z1: number, z2: number, m = 2, alphaDeg = 20) {
  gearParams.z1 = z1
  gearParams.z2 = z2
  gearParams.m = m
  gearParams.alphaDeg = alphaDeg
  gearParams.useStandardCenter = true
}
</script>

<template>
  <div class="app">
    <header>
      <h1>直齿圆柱齿轮参数化实验室</h1>
      <div class="sub">外啮合 · 无变位 · 理想刚性 · 渐开线齿廓（教学模型）</div>
    </header>

    <main>
      <aside class="panel">
        <section>
          <h2>显示单位（不改变实际尺寸）</h2>
          <div class="units">
            <button v-for="u in Object.keys(UNITS)" :key="u" :class="{ active: unit === u }" @click="unit = u as LengthUnit">
              {{ UNITS[u as LengthUnit].label }}
            </button>
          </div>
        </section>

        <section>
          <h2>齿轮参数</h2>
          <label>压力角 α（度）
            <input type="number" v-model.number="gearParams.alphaDeg" min="1" max="45" step="0.5" />
          </label>
          <label>模数 m（{{ UNITS[unit].label }}）
            <input type="number" v-model.number="mInput" :step="UNITS[unit].step" />
          </label>
          <label>齿宽 b（{{ UNITS[unit].label }}）
            <input type="number" v-model.number="faceInput" :step="UNITS[unit].step" />
          </label>
          <div class="two">
            <label>齿数 z₁
              <input type="number" v-model.number="gearParams.z1" min="4" step="1" />
            </label>
            <label>齿数 z₂
              <input type="number" v-model.number="gearParams.z2" min="4" step="1" />
            </label>
          </div>
          <div v-if="errors.g1.length" class="err">{{ errors.g1.join('；') }}</div>
          <div v-if="errors.g2.length" class="err">{{ errors.g2.join('；') }}</div>
        </section>

        <section>
          <h2>中心距</h2>
          <label class="row">
            <input type="checkbox" v-model="gearParams.useStandardCenter" /> 使用标准中心距 a₀ = m(z₁+z₂)/2
          </label>
          <label v-if="!gearParams.useStandardCenter">实际中心距 a（{{ UNITS[unit].label }}）
            <input type="number" v-model.number="centerInput" :step="UNITS[unit].step" />
          </label>
        </section>

        <section>
          <h2>运动 / 检查</h2>
          <div class="row">
            <button @click="pause" :disabled="!playing">暂停</button>
            <button @click="resume" :disabled="playing">继续</button>
          </div>
          <label>轮1 角速度（rad/s）
            <input type="range" v-model.number="speed" min="0" max="1.5" step="0.01" />
          </label>
          <label>接触点沿啮合线 s（mm，暂停可拖动）
            <input type="range" :disabled="playing" v-model.number="contactS" :min="sBounds[0]" :max="sBounds[1]" step="0.05" @input="scrubContact" />
          </label>
          <button class="wide" @click="checkInterference(phi1)" :disabled="playing || interferenceBusy">
            {{ interferenceBusy ? 'Clipper 求交中…' : '在当前帧做局部干涉求交（Clipper2 WASM）' }}
          </button>
          <div v-if="interferenceArea !== null" class="report">
            重叠面积 = {{ interferenceArea.toExponential(3) }} mm²
            <b :class="interferenceArea > 1e-6 ? 'bad' : 'good'">
              {{ interferenceArea > 1e-6 ? '存在实体干涉 ❗' : '当前帧无干涉 ✅' }}
            </b>
          </div>
        </section>

        <section class="envelope">
          <h2>公差包络分析 <span class="tag">教学近似</span></h2>
          <p class="disclaimer">
            在冻结的基准参数上扫描中心距偏差 Δa 与两轮齿厚偏差 Δs 的组合，逐组合在有效啮合区间内扫描相位，
            复用当前渐开线齿廓与 Clipper 布尔求交判定。<b>仍是理想刚性、2D 端截面的教学近似</b>，
            不含弹性、热膨胀、齿向/粗糙度误差与概率装配，<b>不能用于真实制造认证</b>。
          </p>

          <div class="axisgrid">
            <div class="ax-head"><span>Δa 中心距偏差（{{ UNITS[unit].label }}）</span></div>
            <label>下限<input type="number" v-model.number="daMinU" :step="UNITS[unit].step" /></label>
            <label>上限<input type="number" v-model.number="daMaxU" :step="UNITS[unit].step" /></label>
            <label>采样点<input type="number" v-model.number="envInputs.daCount" min="2" :max="MAX_AXIS_COUNT" step="1" /></label>

            <div class="ax-head"><span>Δs₁ 轮1齿厚偏差（{{ UNITS[unit].label }}）</span></div>
            <label>下限<input type="number" v-model.number="ds1MinU" :step="UNITS[unit].step" /></label>
            <label>上限<input type="number" v-model.number="ds1MaxU" :step="UNITS[unit].step" /></label>
            <label>采样点<input type="number" v-model.number="envInputs.ds1Count" min="2" :max="MAX_AXIS_COUNT" step="1" /></label>

            <div class="ax-head"><span>Δs₂ 轮2齿厚偏差（{{ UNITS[unit].label }}）</span></div>
            <label>下限<input type="number" v-model.number="ds2MinU" :step="UNITS[unit].step" /></label>
            <label>上限<input type="number" v-model.number="ds2MaxU" :step="UNITS[unit].step" /></label>
            <label>采样点<input type="number" v-model.number="envInputs.ds2Count" min="2" :max="MAX_AXIS_COUNT" step="1" /></label>
          </div>

          <label>每组合相位扫描点数（{{ MIN_PHASE_STEPS }}…{{ MAX_PHASE_STEPS }}，含啮合区间两端）
            <input type="number" v-model.number="envInputs.phaseSteps" :min="MIN_PHASE_STEPS" :max="MAX_PHASE_STEPS" step="1" />
          </label>
          <div class="combo-count">
            组合总数 <b :class="envComboCount > MAX_COMBOS ? 'bad' : ''">{{ envComboCount }}</b>
            × {{ envInputs.phaseSteps }} 相位 = {{ envComboCount * envInputs.phaseSteps }} 次求交
            （上限 {{ MAX_COMBOS }} 组合）
          </div>
          <ul v-if="envSpecErrors.length" class="warns">
            <li v-for="(e, i) in envSpecErrors" :key="i">⛔ {{ e }}</li>
          </ul>
          <button class="wide" @click="startEnvelope" :disabled="envStarting || !!envSpecErrors.length">
            {{ envStarting ? '创建中…' : '对当前冻结基准开始分析' }}
          </button>

          <!-- 作业世代选择器 -->
          <div v-if="envJobs.length" class="job-picker">
            <label>分析作业（含历史快照，按更新时间排序）
              <select :value="selectedJobId ?? ''" @change="selectJob(($event.target as HTMLSelectElement).value)">
                <option value="" disabled>— 选择作业 —</option>
                <option v-for="j in envJobs" :key="j.id" :value="j.id">
                  {{ j.snapshot.label }} · {{ j.status === 'done' ? '完成' : j.status === 'cancelled' ? '已取消' : '运行中' }}
                  · {{ new Date(j.updatedAt).toLocaleTimeString() }}
                </option>
              </select>
            </label>
          </div>

          <!-- 选中作业面板 -->
          <div v-if="selectedJob" class="job-panel">
            <div v-if="!selectedMatchesCurrent" class="generation-warn">
              ⚠️ 此作业属于<b>旧参数快照</b>（{{ selectedJob.snapshot.unit }} 单位下创建，数值以 mm 冻结）。
              当前面板参数已改变，旧结果不会被覆盖，新分析将生成新一代作业。
            </div>
            <div class="snap">
              <div>快照：{{ selectedJob.snapshot.label }}</div>
              <div>基准中心距 a = {{ fmt(selectedJob.snapshot.baseCenterDistance) }}；Δa/Δs 均以 mm 冻结</div>
              <div class="muted">
                Δa [{{ fmtU(selectedJob.snapshot.spec.center.min) }}, {{ fmtU(selectedJob.snapshot.spec.center.max) }}] ·
                Δs₁ [{{ fmtU(selectedJob.snapshot.spec.thickness1.min) }},
                {{ fmtU(selectedJob.snapshot.spec.thickness1.max) }}] ·
                Δs₂ [{{ fmtU(selectedJob.snapshot.spec.thickness2.min) }}, {{ fmtU(selectedJob.snapshot.spec.thickness2.max) }}]
                {{ UNITS[unit].label }}（内部冻结为 mm）；
                {{ selectedJob.combos.length }} 组合 × {{ selectedJob.snapshot.spec.phaseSteps }} 相位
              </div>
            </div>

            <div class="progress">
              <div class="bar">
                <i class="safe" :style="{ width: ((selectedExtrema!.safe / selectedJob.combos.length) * 100) + '%' }"></i>
                <i class="risk" :style="{ width: ((selectedExtrema!.risk / selectedJob.combos.length) * 100) + '%' }"></i>
                <i class="invalid" :style="{ width: ((selectedExtrema!.invalid / selectedJob.combos.length) * 100) + '%' }"></i>
              </div>
              <div>
                进度 {{ selectedExtrema!.safe + selectedExtrema!.risk + selectedExtrema!.invalid }}/{{ selectedJob.combos.length }}
                （<span class="good">安全 {{ selectedExtrema!.safe }}</span> ·
                <span class="bad">风险 {{ selectedExtrema!.risk }}</span> ·
                <span class="warn">无效 {{ selectedExtrema!.invalid }}</span> ·
                待算 {{ selectedExtrema!.pending }}）
              </div>
            </div>

            <div class="extrema">
              已完成最大重叠面积：
              <b :class="selectedExtrema!.maxArea > AREA_THRESHOLD ? 'bad' : 'good'">
                {{ selectedExtrema!.maxArea.toExponential(3) }} mm²
              </b>
              <span v-if="selectedExtrema!.worstComboIndex >= 0">
                <button class="mini" @click="locateCombo(selectedExtrema!.worstComboIndex)">在 3D 中定位最坏位置 (#{{ selectedExtrema!.worstComboIndex }})</button>
              </span>
            </div>

            <div class="row">
              <button v-if="selectedJob.status === 'running'" @click="cancelEnvelope" :disabled="!envRunner.isActive(selectedJob.id) && !envRunner.isBusy(selectedJob.id)">取消</button>
              <button v-if="selectedJob.status === 'cancelled' || selectedExtrema!.pending > 0" @click="resumeEnvelope" :disabled="envRunner.isBusy(selectedJob.id)">继续/恢复</button>
              <button @click="recomputeAllRisk" :disabled="envRunner.isBusy(selectedJob.id) || selectedExtrema!.risk === 0">重算全部风险</button>
              <button class="del" @click="removeEnvelope">删除作业</button>
            </div>
            <div class="muted">创建 {{ fmtTime(selectedJob.createdAt) }} · 更新 {{ fmtTime(selectedJob.updatedAt) }} · 完成 {{ fmtTime(selectedJob.finishedAt) }}</div>

            <!-- 包络定位信息条 -->
            <div v-if="envelopePoseInfo" class="pose-box">
              <div>最坏位置（已冻结到 3D 视图）：Δa={{ fmtU(envelopePoseInfo.da) }},
                Δs₁={{ fmtU(envelopePoseInfo.ds1) }}, Δs₂={{ fmtU(envelopePoseInfo.ds2) }} {{ UNITS[unit].label }}</div>
              <div>实际中心距 a={{ fmt(envelopePoseInfo.a) }}；啮合线参数 s={{ fmt(envelopePoseInfo.s) }}；
                重叠面积 <b class="bad">{{ envelopePoseInfo.area.toExponential(3) }} mm²</b></div>
              <button class="mini" @click="exitEnvelopeView">退出定位视图</button>
              <span v-if="envelopePoseBusy" class="muted">求交中…</span>
            </div>

            <!-- 结论表 -->
            <div class="filter-row">
              <span>结论筛选：</span>
              <button v-for="f in ['all', 'risk', 'safe', 'invalid'] as const" :key="f"
                      :class="{ active: envFilter === f }" @click="envFilter = f">
                {{ { all: '全部', risk: '风险', safe: '安全', invalid: '无效' }[f] }}
              </button>
            </div>
            <div class="combo-table">
              <table>
                <thead>
                  <tr><th>#</th><th>Δa ({{ UNITS[unit].label }})</th><th>Δs₁</th><th>Δs₂</th><th>结论</th><th>最大面积 mm²</th><th>最坏 s mm</th><th></th></tr>
                </thead>
                <tbody>
                  <tr v-for="c in filteredCombos.slice(0, 120)" :key="c.index" :class="'v-' + c.status">
                    <td>{{ c.index }}</td>
                    <td>{{ fmtU(c.da) }}</td>
                    <td>{{ fmtU(c.ds1) }}</td>
                    <td>{{ fmtU(c.ds2) }}</td>
                    <td>
                      <b :class="c.status === 'risk' ? 'bad' : c.status === 'safe' ? 'good' : 'warn'">
                        {{ c.status === 'risk' ? '风险' : c.status === 'safe' ? '安全' : c.status === 'invalid' ? '无效' : '待算' }}
                      </b>
                      <div v-if="c.reason" class="reason" :title="c.reason">原因：{{ c.reason }}</div>
                    </td>
                    <td>{{ c.status === 'pending' ? '—' : c.maxArea.toExponential(2) }}</td>
                    <td>{{ c.worstS === null ? '—' : c.worstS.toFixed(3) }}</td>
                    <td>
                      <button v-if="c.status === 'risk'" class="mini" @click="locateCombo(c.index)">定位</button>
                      <button class="mini" @click="recomputeCombo(c.index)" :disabled="envRunner.isBusy(selectedJob.id)" title="仅重算此组合">↻</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-if="filteredCombos.length > 120" class="muted">仅显示前 120 行（共 {{ filteredCombos.length }}），可用筛选缩小范围。</div>
            </div>
          </div>
        </section>

        <section>
          <h2>显示选项</h2>
          <label class="row"><input type="checkbox" v-model="showOpts.showPitchCircle" /> 节圆/分度圆</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showBaseCircle" /> 基圆</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showAddendumCircle" /> 齿顶圆</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showDedendumCircle" /> 齿根圆</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showActionLine" /> 啮合线（理论/实际）</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showContact" /> 接触点</label>
        </section>

        <section>
          <h2>核对样本</h2>
          <div class="samples">
            <button @click="preset(20,40)">20/40 标准</button>
            <button @click="preset(17,17)">17/17 临界</button>
            <button @click="preset(16,40)">16/40 根切</button>
            <button @click="preset(12,40)">12/40 极少齿</button>
          </div>
        </section>
      </aside>

      <section class="viewport">
        <div ref="host" class="canvas-host"></div>

        <div class="readouts">
          <div v-if="dims" class="dim-grid">
            <table>
              <thead><tr><th></th><th>齿轮 1（z₁={{ gearParams.z1 }}）</th><th>齿轮 2（z₂={{ gearParams.z2 }}）</th></tr></thead>
              <tbody>
                <tr><td>分度圆直径 d</td><td>{{ fmt(dims.g1.pitchR * 2) }}</td><td>{{ fmt(dims.g2.pitchR * 2) }}</td></tr>
                <tr><td>基圆直径 d_b</td><td>{{ fmt(dims.g1.baseR * 2) }}</td><td>{{ fmt(dims.g2.baseR * 2) }}</td></tr>
                <tr><td>齿顶圆 d_a</td><td>{{ fmt(dims.g1.addendumR * 2) }}</td><td>{{ fmt(dims.g2.addendumR * 2) }}</td></tr>
                <tr><td>齿根圆 d_f</td><td>{{ fmt(dims.g1.dedendumR * 2) }}</td><td>{{ fmt(dims.g2.dedendumR * 2) }}</td></tr>
                <tr><td>齿距 p = πm</td><td>{{ fmt(dims.g1.circularPitch) }}</td><td>{{ fmt(dims.g2.circularPitch) }}</td></tr>
                <tr><td>基节 p_b</td><td>{{ fmt(dims.g1.basePitch) }}</td><td>{{ fmt(dims.g2.basePitch) }}</td></tr>
                <tr><td>齿顶压力角 α_a</td><td>{{ (dims.g1.alphaTip / DEG).toFixed(2) }}°</td><td>{{ (dims.g2.alphaTip / DEG).toFixed(2) }}°</td></tr>
                <tr><td>根切风险 (z&lt;{{ dims.g1.zMinValue.toFixed(1) }})</td>
                  <td :class="dims.g1.undercut ? 'bad' : 'good'">{{ dims.g1.undercut ? '根切 ❗' : '安全' }}</td>
                  <td :class="dims.g2.undercut ? 'bad' : 'good'">{{ dims.g2.undercut ? '根切 ❗' : '安全' }}</td></tr>
              </tbody>
            </table>

            <div class="mesh-report">
              <h3>啮合检查</h3>
              <div>标准中心距 a₀：<b>{{ fmt(dims.mesh.a0) }}</b></div>
              <div>实际中心距 a：<b>{{ fmt(dims.mesh.a) }}</b>（Δa = {{ fmt(dims.mesh.deltaA) }}）</div>
              <div>啮合角 α′：<b>{{ (dims.mesh.alphaPrime / DEG).toFixed(3) }}°</b></div>
              <div>节圆半径 r₁′/r₂′：<b>{{ fmt(dims.mesh.pitchR1) }} / {{ fmt(dims.mesh.pitchR2) }}</b></div>
              <div>实际啮合线长度 g_α：<b>{{ fmt(dims.mesh.pathOfContact) }}</b></div>
              <div>重合度 ε_α = g_α/p_b：<b :class="dims.mesh.contactRatio < 1 ? 'bad' : 'good'">{{ dims.mesh.contactRatio.toFixed(3) }}</b></div>
              <div>圆周/法向侧隙：<b>{{ fmt(dims.mesh.backlashTangential) }} / {{ fmt(dims.mesh.backlashNormal) }}</b></div>
              <div>顶隙 c：<b>{{ fmt(dims.mesh.clearance12) }}</b></div>
              <div>基节一致：<b :class="dims.mesh.basePitchMatch ? 'good' : 'bad'">{{ dims.mesh.basePitchMatch ? '是 ✅' : '否 ❌' }}</b></div>
              <ul v-if="dims.mesh.warnings.length" class="warns">
                <li v-for="(w, i) in dims.mesh.warnings" :key="i">⚠️ {{ w }}</li>
              </ul>
              <div class="formula">
                渐开线：x=r_b(sin t−t cos t)，y=r_b(cos t+t sin t)；inv(α)=tanα−α；
                啮合要求基节相等 + 相位共法线，且 r_b1·Δφ₁ = −r_b2·Δφ₂（不是只按转速比旋转）。
              </div>
            </div>
          </div>
        </div>
      </section>

      <aside class="panel right">
        <section>
          <h2>案例（IndexedDB）</h2>
          <input v-model="caseName" placeholder="案例名称" />
          <textarea v-model="caseNote" placeholder="备注（可选）" rows="2"></textarea>
          <div class="row">
            <button @click="saveCurrent(true)">保存（含轮廓）</button>
            <button @click="saveCurrent(false)">仅参数</button>
          </div>
          <div class="row">
            <button @click="exportCase(true)">导出 JSON+轮廓</button>
            <button @click="exportCase(false)">导出参数</button>
          </div>
          <label class="wide filebtn">导入 JSON
            <input type="file" accept="application/json,.json" @change="importFile" hidden />
          </label>
        </section>
        <section>
          <h2>已存案例</h2>
          <ul class="caselist">
            <li v-for="c in cases" :key="c.id">
              <div class="ci">
                <b>{{ c.name }}</b>
                <span>{{ c.gear1.z }}/{{ c.gear2.z }} · m={{ c.gear1.module }} · α={{ c.gear1.alphaDeg }}°{{ c.outlines ? ' · 含轮廓' : '' }}</span>
              </div>
              <div class="ca">
                <button @click="loadCase(c)">载入</button>
                <button class="del" @click="removeCase(c.id)">删</button>
              </div>
            </li>
            <li v-if="!cases.length" class="empty">暂无案例</li>
          </ul>
        </section>
      </aside>
    </main>
  </div>
</template>
