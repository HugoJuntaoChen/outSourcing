
import type { PageProps } from '.'

export interface Equipment {
  ID?: number
  type: string
  equipment_model: string
  serial_number: string
  quantity: number
  price_per_day: number
  inside: boolean
  registration_date?: string
}

export interface GetEquipmentListRequest extends PageProps {
  type: string
  inside: boolean
  equipment_model: string
  serial_number: string
}
export interface GetEquipmentListResponse {
  data: {
    equipment: Equipment[]
    total: number
  }
}
