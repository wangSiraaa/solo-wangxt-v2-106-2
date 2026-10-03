/**
 * 案例（一对齿轮的参数 + 视图设置）的持久化。
 *  - 使用 IndexedDB，纯浏览器本地，无后台；
 *  - 导出/导入为自描述 JSON，包含轮廓几何，导入的轮廓可被重新载入并用于 Clipper 求交；
 *  - JSON 带 schema 版本号，便于以后兼容。
 */
import type { LengthUnit } from './units'
import type { GearInput, Pt } from './geometry/gear'

export const SCHEMA_VERSION = 1
export const DB_NAME = 'spur-gear-lab'
export const DB_VERSION = 2
export const STORE = 'cases'
/** 公差包络分析作业对象仓库（keyPath='id'，按 snapshot.key 索引，见 envelope-store.ts） */
export const ENVELOPE_STORE = 'envelopeJobs'

export interface CaseData {
  schemaVersion: number
  id: string
  name: string
  createdAt: number
  updatedAt: number
  note: string
  gear1: GearInput & { alphaDeg: number }
  gear2: GearInput & { alphaDeg: number }
  /** 中心距（mm）；null 表示用标准中心距 */
  centerDistance: number | null
  unit: LengthUnit
  /** 导出时附带的轮廓（世界/局部 + 相位），供重新载入与核对，可选 */
  outlines?: {
    gear1: Pt[]
    gear2: Pt[]
  }
}

let dbPromise: Promise<IDBDatabase> | null = null

function openDb(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION)
    req.onupgradeneeded = () => {
      const db = req.result
      if (!db.objectStoreNames.contains(STORE)) {
        const store = db.createObjectStore(STORE, { keyPath: 'id' })
        store.createIndex('updatedAt', 'updatedAt')
      }
      // v2：公差包络分析作业
      if (!db.objectStoreNames.contains(ENVELOPE_STORE)) {
        const envStore = db.createObjectStore(ENVELOPE_STORE, { keyPath: 'id' })
        envStore.createIndex('snapshotKey', 'snapshot.key', { unique: false })
        envStore.createIndex('updatedAt', 'updatedAt')
      }
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
  return dbPromise
}

/** 供其它存储模块（envelope-store）复用同一数据库连接 */
export function getDatabase(): Promise<IDBDatabase> {
  return openDb()
}

export async function withStore<T>(
  mode: IDBTransactionMode,
  storeName: string,
  fn: (store: IDBObjectStore) => IDBRequest<T>
): Promise<T> {
  const db = await openDb()
  return new Promise<T>((resolve, reject) => {
    const t = db.transaction(storeName, mode)
    const req = fn(t.objectStore(storeName))
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

export async function saveCase(data: CaseData): Promise<void> {
  await withStore('readwrite', STORE, (s) => s.put({ ...data, updatedAt: Date.now() }))
}

export async function deleteCase(id: string): Promise<void> {
  await withStore('readwrite', STORE, (s) => s.delete(id))
}

export async function getCase(id: string): Promise<CaseData | undefined> {
  return withStore<CaseData | undefined>('readonly', STORE, (s) => s.get(id))
}

export async function listCases(): Promise<CaseData[]> {
  const all = await withStore<CaseData[]>('readonly', STORE, (s) => s.getAll() as IDBRequest<CaseData[]>)
  return [...all].sort((a, b) => b.updatedAt - a.updatedAt)
}

export function newCaseId(): string {
  return `case-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

/** 序列化为可下载的 JSON 字符串（导出的轮廓可重新载入） */
export function serializeCase(data: CaseData): string {
  return JSON.stringify(data, null, 2)
}

/** 解析并基本校验导入文件；不通过则抛错 */
export function parseCase(text: string): CaseData {
  const obj = JSON.parse(text) as CaseData
  if (!obj || obj.schemaVersion !== SCHEMA_VERSION) {
    throw new Error(`不支持的案例版本（需要 schemaVersion=${SCHEMA_VERSION}）`)
  }
  if (!obj.gear1 || !obj.gear2) throw new Error('案例缺少齿轮参数')
  for (const g of [obj.gear1, obj.gear2]) {
    if (!(g.z >= 4) || !(g.module > 0) || !(g.alphaDeg > 0)) {
      throw new Error('案例参数不合法（z≥4, m>0, α>0）')
    }
  }
  return obj
}

/** 触发浏览器下载 */
export function downloadJson(data: CaseData) {
  const blob = new Blob([serializeCase(data)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  const safe = (data.name || 'gear-case').replace(/[^\w一-龥-]+/g, '_')
  a.download = `${safe}.json`
  a.click()
  URL.revokeObjectURL(url)
}
