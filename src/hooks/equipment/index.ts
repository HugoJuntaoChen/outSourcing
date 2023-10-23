import { equipmentApi } from '@/api'
import { useState } from 'react'
import { pick } from 'lodash'
import type { Equipment, GetEquipmentListRequest, GetEquipmentListResponse, PageProps, RoleConfig } from '@/types'

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

export const useGetEquipmentTypeAll = () => {
  const [equipmentTypeConfig, setEquipmentTypeConfig] = useState<RoleConfig>({
    options: [],
    map: {}
  })
  const [loading, setLoading] = useState(false)
  const getEquipmentTypeAll = async (data?: any) => {
    setLoading(true)
    try {
      const result = await equipmentApi.getEquipmentTypeAll()
      const newMap: RoleConfig = {
        options: [],
        map: {}
      }
      const info = result?.data ?? {}
      Object.keys(info)?.forEach(key => {
        newMap.options.push({ label: key, value: info?.[key] })
        newMap.map[info?.[key]] = key
      })
      setEquipmentTypeConfig(newMap)
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }
  return { equipmentTypeConfig, loading, getEquipmentTypeAll }
}
