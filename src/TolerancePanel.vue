<script setup lang="ts">
/**
 * 公差包络分析面板。
 *
 * 两代结果隔离原则：
 *  - 作业记录冻结创建时的基准快照与显示单位（仅出处）；
 *  - fingerprint 只由内部 mm/度数值决定——切换单位指纹不变，改基准指纹改变；
 *  - 当前基准与作业指纹不符时，作业只能"查看/定位最坏位置"（几何取自其自身快照），
 *    不能继续/重算，更不会写进新面板的当前视图数据。
 */
import { computed, onMounted, reactive, ref, watch } from 'vue'
import {
  baselineFingerprint,
  jobMatchesBaseline,
  rebuildWorstGeometry,
  validateSetup,
  type BaselineSnapshot,
  type SampleResult,
  type ToleranceJob
} from './geometry/tolerance'
import {
  ToleranceRunner,
  createIndexedDbJobStore,
  createJob,
  type JobStore
} from './toleranceJob'
import { UNITS, fmtLen, toMm, type LengthUnit } from './units'
import type { TolerancePreview } from './viewer'

const props = defineProps<{
  baseline: BaselineSnapshot
  unit: LengthUnit
  /** 当前主视图是否处于公差预览（用于"返回当前几何"按钮状态） */
  previewActive: boolean
}>()

const emit = defineEmits<{
  (e: 'preview', p: TolerancePreview | null): void
}>()

const store: JobStore = createIndexedDbJobStore()

// ------- 范围表单（输入值按当前显示单位；提交时换算成 mm 快照） -------
const form = reactive({
  daMin: -0.2,
  daMax: 0.2,
  daSteps: 5,
  dsMin: -0.1,
  dsMax: 0.1,
  dsSteps: 5,
  phaseSteps: 25
})

const formErrors = ref<string[]>([])
const startError = ref('')

/** 把表单（显示单位）换算成 mm 的基准+设定，仅用于校验与创建 */
function formSnapshot() {
  const baseline: BaselineSnapshot = { ...props.baseline }
  const setup = {
    center: { min: toMm(form.daMin, props.unit), max: toMm(form.daMax, props.unit), steps: form.daSteps },
    thickness: { min: toMm(form.dsMin, props.unit), max: toMm(form.dsMax, props.unit), steps: form.dsSteps },
    phaseSteps: form.phaseSteps
  }
  return { baseline, setup }
}

watch(
  () => [form, props.unit, props.baseline],
  () => {
    const { baseline, setup } = formSnapshot()
    formErrors.value = validateSetup(baseline, setup)
    startError.value = ''
  },
  { deep: true, immediate: true }
)

const totalCombos = computed(() =>
  Number.isInteger(form.daSteps) && Number.isInteger(form.dsSteps) ? form.daSteps * form.dsSteps : 0
)
const unitLabel = computed(() => UNITS[props.unit].label)

// ------- 作业列表与活动执行器 -------
const jobs = ref<ToleranceJob[]>([])
const activeJobId = ref<string | null>(null)
const runners = new Map<string, ToleranceRunner>()
/** 运行中作业的进度镜像（onProgress 回调里刷新） */
const live = reactive<Record<string, { done: number; total: number }>>({})
const selected = ref<{ id: string; i: number; j: number } | null>(null)
const busy = ref(false)

async function refreshJobs() {
  jobs.value = await store.list()
}

function doneCount(job: ToleranceJob) {
  return job.counts.safe + job.counts.risk + job.counts.invalid
}
function progressOf(job: ToleranceJob) {
  return live[job.id] ?? { done: doneCount(job), total: job.results.length }
}
function isRunning(job: ToleranceJob) {
  return runners.has(job.id)
}

function attachRunner(job: ToleranceJob, runner: ToleranceRunner) {
  runners.set(job.id, runner)
  activeJobId.value = job.id
  live[job.id] = { done: doneCount(job), total: job.results.length }
}

function upsertJob(j: ToleranceJob) {
  const idx = jobs.value.findIndex((x) => x.id === j.id)
  if (idx >= 0) jobs.value[idx] = j
  else jobs.value.unshift(j)
}

/** 启动新分析：校验通过 → createJob 原子落盘 → 才开始计算（失败不留半份结果） */
async function startAnalysis() {
  startError.value = ''
  const { baseline, setup } = formSnapshot()
  let job: ToleranceJob
  try {
    job = createJob(baseline, setup, props.unit)
  } catch (e) {
    startError.value = (e as { errors?: string[] }).errors?.join('；') ?? (e as Error).message
    return
  }
  selected.value = null
  emit('preview', null)
  const runner = await ToleranceRunner.start(job, store, progressCallback())
  attachRunner(job, runner)
  await refreshJobs()
}

function cancelJob(job: ToleranceJob) {
  runners.get(job.id)?.cancel()
}

/** 手动继续：只跑未完成样本（已完成统计原样保留）；旧快照作业禁止 */
async function resumeJob(job: ToleranceJob) {
  if (!jobMatchesBaseline(job, props.baseline)) return
  emit('preview', null)
  const runner = await ToleranceRunner.start(job, store, progressCallback())
  attachRunner(job, runner)
  await refreshJobs()
}

/** 局部重算：只重做用户点选的样本（快照不符则拒绝） */
async function recomputeSelected(job: ToleranceJob) {
  if (!selected.value || selected.value.id !== job.id || busy.value) return
  if (!jobMatchesBaseline(job, props.baseline)) return
  startError.value = ''
  try {
    busy.value = true
    let runner = runners.get(job.id)
    if (!runner) {
      // 已完成/已取消作业的局部重算：挂接执行器但不自动跑未完成样本
      runner = ToleranceRunner.attachForRecompute(job, store, ({ job: j }) => upsertJob(j))
      runners.set(job.id, runner)
    }
    const { i, j } = selected.value
    await runner.recompute([{ i, j }])
    upsertJob(job)
  } catch (e) {
    startError.value = (e as Error).message
  } finally {
    runners.delete(job.id)
    busy.value = false
  }
}

async function removeJob(job: ToleranceJob) {
  runners.get(job.id)?.cancel()
  runners.delete(job.id)
  await store.delete(job.id)
  if (selected.value?.id === job.id) {
    selected.value = null
    emit('preview', null)
  }
  await refreshJobs()
}

/** 定位样本：几何完全取自作业自身冻结快照，与当前面板基准无关 */
async function locateSample(job: ToleranceJob, i: number, j: number) {
  selected.value = { id: job.id, i, j }
  // 列表中的 job 可能是进度回调前的旧引用，先以持久化/最新对象为准
  const fresh = jobs.value.find((x) => x.id === job.id) ?? job
  const result: SampleResult | null = fresh.results[i * fresh.nj + j]
  if (!result) return
  const geo = await rebuildWorstGeometry(fresh.baseline, result)
  emit('preview', {
    g1: geo.g1,
    g2: geo.g2,
    a: result.a,
    phi1: geo.phi1,
    phi2: geo.phi2,
    regions: result.worstRegions
  })
}

function exitPreview() {
  selected.value = null
  emit('preview', null)
}

function resultAt(job: ToleranceJob, i: number, j: number): SampleResult | null {
  return job.results[i * job.nj + j] ?? null
}
function cellClass(r: SampleResult | null) {
  if (!r) return 'cell pending'
  return `cell ${r.verdict}`
}
function cellTitle(job: ToleranceJob, i: number, j: number) {
  const r = resultAt(job, i, j)
  const base = `Δa=${fmtLen(job.axisCenter[i], 'mm')}，Δs=${fmtLen(job.axisThickness[j], 'mm')}`
  if (!r) return `${base}：未完成`
  if (r.verdict === 'invalid') return `${base}：无效（${r.reason}）`
  if (r.verdict === 'risk')
    return `${base}：风险，最坏重叠 ${r.maxArea.toExponential(3)} mm²，相位序号 ${r.worstK}`
  return `${base}：安全（扫描 ${r.phasesScanned} 相位）`
}

const reasonText: Record<string, string> = {
  'thickness-tip-pointed': '齿厚使齿顶变尖',
  'thickness-too-large': '齿厚超过齿距，齿面交叉',
  'thickness-too-small': '齿厚过负，齿体退化',
  'center-below-tangent-limit': '中心距低于基圆内公切线极限',
  'center-nonpositive': '中心距 ≤ 0',
  'geometry-degenerate': '几何构造退化',
  'boolean-failure': '布尔求交失败（可重算）'
}

const currentFingerprint = computed(() => baselineFingerprint(props.baseline))
const fmtMm = (mm: number) => fmtLen(mm, 'mm')

/** 运行/恢复的公共回调：进度刷新；执行器在完成或取消时自行注销 */
function progressCallback() {
  return ({ job: j, last }: { job: ToleranceJob; last: { i: number; j: number } }) => {
    live[j.id] = { done: doneCount(j), total: j.results.length }
    upsertJob(j)
    if (last.i < 0) {
      runners.delete(j.id)
      if (activeJobId.value === j.id) activeJobId.value = null
    }
  }
}

onMounted(async () => {
  await refreshJobs()
  // 刷新后恢复：上次在运行（刷新强杀）的作业，若基准快照仍匹配当前面板，
  // 自动从未完成样本继续；已完成统计原样保留。不匹配的旧作业只列出、不自动跑。
  for (const job of jobs.value) {
    if (job.status === 'running' && jobMatchesBaseline(job, props.baseline)) {
      const runner = await ToleranceRunner.start(job, store, progressCallback())
      attachRunner(job, runner)
    }
  }
})
watch(
  () => baselineFingerprint(props.baseline),
  () => {
    // 基准改变后，旧作业留在列表（标记"旧快照"）；选择与预览交给 App 退出
    selected.value = null
  }
)
</script>

<template>
  <section class="tol-panel">
    <h2>公差包络分析（教学近似）</h2>
    <p class="disclaimer">
      在冻结基准上对 <b>中心距偏差 Δa</b> 与 <b>齿厚偏差 Δs</b> 做网格采样，逐组合扫描一个
      齿距周期的相位，用与单帧检查相同的 Clipper 布尔求交判定安全/风险/无效。
      结果仅用于课堂理解装配公差的影响，<b>不是真实制造认证</b>，不考虑弹性、热变形与齿廓修形。
    </p>

    <div class="grid-form">
      <label>Δa 下限（{{ unitLabel }}）
        <input type="number" v-model.number="form.daMin" step="any" />
      </label>
      <label>Δa 上限（{{ unitLabel }}）
        <input type="number" v-model.number="form.daMax" step="any" />
      </label>
      <label>Δa 采样点
        <input type="number" v-model.number="form.daSteps" min="1" max="101" step="1" />
      </label>
      <label>Δs 下限（{{ unitLabel }}）
        <input type="number" v-model.number="form.dsMin" step="any" />
      </label>
      <label>Δs 上限（{{ unitLabel }}）
        <input type="number" v-model.number="form.dsMax" step="any" />
      </label>
      <label>Δs 采样点
        <input type="number" v-model.number="form.dsSteps" min="1" max="101" step="1" />
      </label>
      <label class="span2">每齿距周期相位扫描点数
        <input type="number" v-model.number="form.phaseSteps" min="2" max="721" step="1" />
      </label>
    </div>

    <div class="row meta">
      组合数 {{ totalCombos }}（Δa×Δs）；内部一律 mm，当前显示单位 {{ unitLabel }} 只影响表单换算。
    </div>
    <ul v-if="formErrors.length" class="errlist">
      <li v-for="(e, i) in formErrors" :key="i">⛔ {{ e }}</li>
    </ul>
    <div v-if="startError" class="err">{{ startError }}</div>
    <button class="wide" :disabled="!!formErrors.length || !!activeJobId" @click="startAnalysis">
      {{ activeJobId ? '有作业运行中…' : formErrors.length ? '范围非法或齿轮不兼容，不能启动' : '开始公差包络分析' }}
    </button>

    <div
      v-for="job in jobs"
      :key="job.id"
      class="job"
      :class="{ stale: job.fingerprint !== currentFingerprint, active: isRunning(job) }"
    >
      <div class="job-head">
        <b>{{ job.ni }}×{{ job.nj }} 网格</b>
        <span class="status" :class="job.status">
          {{ isRunning(job) ? '运行中…' : job.status === 'done' ? '已完成' : '已取消 · 可恢复' }}
        </span>
        <span v-if="job.fingerprint !== currentFingerprint" class="stale-badge">旧快照</span>
      </div>
      <div class="job-sub">
        基准 z {{ job.baseline.z1 }}/{{ job.baseline.z2 }} · m={{ job.baseline.module }} mm ·
        α={{ job.baseline.alphaDeg }}° · a={{ fmtMm(job.baseline.centerDistance) }}
      </div>
      <div v-if="job.fingerprint !== currentFingerprint" class="job-sub warn">
        ⚠ 当前基准已改变：此结果归属旧快照，只能查看定位，不能继续/重算，也不会覆盖当前面板。
      </div>

      <div class="progress">
        <div class="bar"><div class="fill" :style="{ width: ((progressOf(job).done / progressOf(job).total) * 100).toFixed(1) + '%' }"></div></div>
        <span>{{ progressOf(job).done }}/{{ progressOf(job).total }}</span>
      </div>

      <div class="counts">
        <span class="good">安全 {{ job.counts.safe }}</span>
        <span class="bad">风险 {{ job.counts.risk }}</span>
        <span class="invalid-c">无效 {{ job.counts.invalid }}</span>
        <span v-if="job.extremes.worst" class="worst">
          最坏面积 {{ job.extremes.maxArea.toExponential(2) }} mm²
          <button class="link" @click="locateSample(job, job.extremes.worst!.i, job.extremes.worst!.j)">定位</button>
        </span>
      </div>

      <div class="heat-scroll">
        <div class="heatmap" :style="{ gridTemplateColumns: 'auto repeat(' + job.ni + ', 1fr)' }">
          <template v-for="jj in job.nj" :key="'row' + jj">
            <div class="rowlabel">{{ fmtMm(job.axisThickness[job.nj - jj]) }}</div>
            <button
              v-for="i in job.ni"
              :key="i + '-' + jj"
              :class="[
                cellClass(resultAt(job, i - 1, job.nj - jj)),
                selected && selected.id === job.id && selected.i === i - 1 && selected.j === job.nj - jj ? 'sel' : ''
              ]"
              :title="cellTitle(job, i - 1, job.nj - jj)"
              @click="locateSample(job, i - 1, job.nj - jj)"
            ></button>
          </template>        </div>
      </div>
      <div class="axis-note">
        行=Δs（上大下小），列=Δa {{ fmtMm(job.axisCenter[0]) }} → {{ fmtMm(job.axisCenter[job.ni - 1]) }}；
        点击色块定位该组合的最坏位置
      </div>

      <div v-if="selected && selected.id === job.id" class="sel-detail">
        <template v-if="resultAt(job, selected.i, selected.j)">
          <div>结论：
            <b :class="resultAt(job, selected.i, selected.j)!.verdict === 'safe' ? 'good' : resultAt(job, selected.i, selected.j)!.verdict === 'risk' ? 'bad' : 'invalid-c'">
              {{ { safe: '安全 ✅', risk: '风险 ❗', invalid: '无效 ⛔' }[resultAt(job, selected.i, selected.j)!.verdict] }}
            </b>
          </div>
          <div>
            实际中心距 a={{ fmtMm(resultAt(job, selected.i, selected.j)!.a) }}，
            Δs={{ fmtMm(resultAt(job, selected.i, selected.j)!.ds) }}，
            扫描相位 {{ resultAt(job, selected.i, selected.j)!.phasesScanned }} 个
          </div>
          <div v-if="resultAt(job, selected.i, selected.j)!.verdict === 'risk'">
            最坏重叠面积 {{ resultAt(job, selected.i, selected.j)!.maxArea.toExponential(3) }} mm²；
            最坏相位 φ₁={{ (resultAt(job, selected.i, selected.j)!.worstPhi1 ?? 0).toFixed(4) }} rad
            （周期内第 {{ resultAt(job, selected.i, selected.j)!.worstK }} 点）
          </div>
          <div v-if="resultAt(job, selected.i, selected.j)!.verdict === 'invalid'" class="invalid-c">
            原因：{{ reasonText[resultAt(job, selected.i, selected.j)!.reason ?? 'geometry-degenerate'] }}
          </div>
        </template>
        <div v-else>该样本尚未计算（可先"继续"完成分析）。</div>
      </div>

      <div class="row">
        <button v-if="isRunning(job)" @click="cancelJob(job)">取消</button>
        <button
          v-else-if="job.status !== 'done' && job.fingerprint === currentFingerprint"
          @click="resumeJob(job)"
        >继续（只算未完成）</button>
        <button
          v-if="selected && selected.id === job.id && !isRunning(job) && job.fingerprint === currentFingerprint"
          :disabled="busy"
          @click="recomputeSelected(job)"
        >局部重算此样本</button>
        <button class="del" @click="removeJob(job)">删除</button>
      </div>
      <div v-if="job.cancelError" class="cancel-note">{{ job.cancelError }}</div>
    </div>

    <button v-if="previewActive" class="wide exit-preview" @click="exitPreview">返回当前基准几何</button>
  </section>
</template>
