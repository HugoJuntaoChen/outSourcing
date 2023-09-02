
import { type PageProps } from '.'

export interface Worker {
  ID?: number
  name: string
  company: number
  role: number
  level: number
  id_card: string
  wx_number: string
  phone_number: string
  bank_account: string
  bank_branch: string
  emergency_contact_name: string
  emergency_contact_phone: string
  department: string
  inside: string
  field: string[]
}
export interface GetWorkListRequest extends PageProps {
  company_id?: number
  roles?: number[]
  level?: number[]
  name?: string
}

export interface GetWorkListResponse {
  data?: {
    workers: Worker[]
    total: number
  }
}
