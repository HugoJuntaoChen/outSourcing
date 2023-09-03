import { type IdentityEnums } from '@/enums/config'
import type { PageProps } from '.'
export interface Manager {
  ID?: number
  name: string
  identity: IdentityEnums
  username: number
  password: number
  phone_number: number
  department_owner: string
}
export interface GetManagerListRequest extends PageProps {
  name: string
  identity: IdentityEnums
}
export interface GetManagerListResponse {
  data: {
    managers: Manager[]
    total: number
  }
}

export interface RoleConfig {
  options: Array<{ label: string, value: string | number }>
  map: Record<string | number, any>
}
