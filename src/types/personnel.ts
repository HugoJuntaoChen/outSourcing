import { type PageProps } from '.'

export interface GetWorkListRequest extends PageProps {
  company_id?: number
  roles?: number[]
  level?: number[]
  name?: string
}

export interface GetWorkListResponse {
  workers: any[]
  total: number
}
