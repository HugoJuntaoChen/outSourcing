import { type PageProps } from '.'

export interface GetCompanyListRequest extends PageProps {
  name?: string
}

export interface Company {
  name: string
  unified_credit_code: string
  description: string
  province: string
  city: string
  address: string
  business_license: string
  bank_name: string
  inside: boolean
}

export interface GetCompanyListResponse {
  data: {
    companies: Company[]
    total: number
  }
}
