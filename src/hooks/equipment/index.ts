import { equipmentApi } from '@/api'
import { useState } from 'react'
import { pick } from 'lodash'
import type { Equipment, GetEquipmentListRequest, GetEquipmentListResponse, PageProps } from '@/types'

export const useGetEquipmentList = () => {
  const [pagination, setPagination] = useState<PageProps>({
    current: 1,
    pageSize: 10,
    total: 0
  })
  const [list, setList] = useState<Equipment[]>([])
  const [loading, setLoading] = useState(false)

  const getEquipmentList = async (data?: GetEquipmentListRequest) => {
    setLoading(true)
    const params = { ...pick(pagination, ['current', 'pageSize']), ...data }

    try {
      const result: GetEquipmentListResponse = await equipmentApi.getEquipmentList(params)
      const { equipment, total } = result?.data || {}
      setList(equipment)
      setPagination({
        ...pick(params, ['current', 'pageSize']),
        total
      })
    } catch (error) {} finally {
      setLoading(false)
    }
  }

  return { pagination, list, loading, getEquipmentList }
}
