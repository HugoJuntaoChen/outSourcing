import { type BudgetRiskEnums, type CollaborationEnums, type DelayRiskEnums, type FieldEnums } from '@/enums/config'
import { type PageProps } from '.'

export interface GetProjectListRequest extends PageProps {
  creator?: string
  name?: string
  status?: string
  min_budget?: number
  max_budget?: number
}

export interface Project {
  ID?: number
  customer: string
  department: string
  project_name: string
  audience: string
  video_type: string
  video_theme: string
  duration: number
  funding: number
  location: string
  format: string
  delivery_time: string
  collaboration: CollaborationEnums
  budget: number
  contact: string
  contact_info: string
  creator: string
  duty: string
  field: FieldEnums
  budget_details: string
  flow_id: number
  has_to_accept: boolean
  delay_risk: DelayRiskEnums
  budget_risk: BudgetRiskEnums
}

export interface GetProjectListResponse {
  data: {
    projects: Project[]
    total: number
  }
}
