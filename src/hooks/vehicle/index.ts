import { useState } from 'react'
import { pick } from 'lodash'
import { vehicleApi } from '@/api'
import type {
  Car,
  GetCarListRequest,
  GetCarListResponse,
  PageProps
} from '@/types'

export const useGetCarList = () => {
  const [pagination, setPagination] = useState<PageProps>({
    current: 1,
    pageSize: 10,
    total: 0
  })
  const [list, setList] = useState<Car[]>([])
  const [loading, setLoading] = useState(false)
  const getCarList = async (data?: GetCarListRequest) => {
    setLoading(true)
    const params = { ...pick(pagination, ['current', 'pageSize']), ...data }
    try {
      const result: GetCarListResponse = await vehicleApi.getCarList(params)
      const { cars, total } = result?.data || {}
      setList(cars)
      setPagination({
        ...pick(params, ['current', 'pageSize']),
        total
      })
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }
  return { pagination, list, loading, getCarList }
}
