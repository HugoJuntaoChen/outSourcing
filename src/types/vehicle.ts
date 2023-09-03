
import type { PageProps } from '.'

export interface Car {
  ID?: number
  type: string
  name: string
  number: string
  quantity: number
  price_per_day: number
  seat_count: number
  inside: boolean
}
export interface GetCarListRequest extends PageProps {
  type: string
}
export interface GetCarListResponse {
  data: {
    cars: Car[]
    total: number
  }
}
