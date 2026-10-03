/**
 * 公差包络作业的 IndexedDB 存储（与案例库共用同一数据库，store = 'envelopeJobs'）。
 * 纯浏览器本地：刷新/重开页面后可由 EnvelopeRunner.resumeInterrupted 恢复未完成作业。
 */
import { ENVELOPE_STORE, getDatabase, withStore } from '../store'
import type { EnvelopeJob } from './envelope'
import type { JobStorage } from './envelope-store'

class IdbJobStorage implements JobStorage {
  async get(id: string): Promise<EnvelopeJob | undefined> {
    return withStore<EnvelopeJob | undefined>('readonly', ENVELOPE_STORE, (s) => s.get(id))
  }

  async getAll(): Promise<EnvelopeJob[]> {
    // 确保数据库已升级（首次使用时触发 onupgradeneeded）
    await getDatabase()
    const all = await withStore<EnvelopeJob[]>('readonly', ENVELOPE_STORE, (s) => s.getAll() as IDBRequest<EnvelopeJob[]>)
    return [...all].sort((a, b) => b.updatedAt - a.updatedAt)
  }

  async put(job: EnvelopeJob): Promise<void> {
    await withStore('readwrite', ENVELOPE_STORE, (s) => s.put(job))
  }

  async delete(id: string): Promise<void> {
    await withStore('readwrite', ENVELOPE_STORE, (s) => s.delete(id))
  }
}

let instance: IdbJobStorage | null = null

export function idbJobStorage(): JobStorage {
  if (!instance) instance = new IdbJobStorage()
  return instance
}
