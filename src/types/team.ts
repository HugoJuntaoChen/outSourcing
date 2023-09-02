import { type LevelEnums } from '@/enums/config'
import { type PageProps } from '.'

export interface GetCompanyListRequest extends PageProps {
  name?: string
  inside?: boolean
}

export interface Company {
  ID?: number
  name: string
  unified_credit_code?: string
  description?: string
  province?: string
  city?: string
  address?: string
  business_license?: string
  bank_name?: string
  inside?: boolean
  studio?: string
  level?: LevelEnums
  bank_account?: string
}

export interface GetCompanyListResponse {
  data: {
    companies: Company[]
    total: number
  }
}
