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
