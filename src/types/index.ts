export * from './personnel'
export * from './team'
export * from './project'
export * from './login'
export * from './vehicle'
export * from './role'
export * from './equipment'
export * from './analysis'

export interface PageProps {
  current: number
  pageSize: number
  total?: number
}

export interface File {
  uid?: string
  url?: string
  percent?: number
  status?: string
  name?: any
}

export type onOkCallbackByFile = (I: File) => void

export interface Avatar { url: string, uid: string }
