import { useState } from 'react'
import { pick } from 'lodash'
import { roleApi } from '@/api'
import type {
  Manager,
  GetManagerListRequest,
  GetManagerListResponse,
  PageProps,
  RoleConfig
} from '@/types'

export const useGetRoleAll = () => {
  const [roleConfig, setRoleConfig] = useState<RoleConfig>({
    options: [],
    map: {}
  })
  const [loading, setLoading] = useState(false)
  const getRoleAll = async (data?: any) => {
    setLoading(true)
    try {
      const result = await roleApi.getRoleAll()
      const newMap: RoleConfig = {
        options: [],
        map: {}
      }
      const info = result?.data ?? {}
      Object.keys(info)?.forEach(key => {
        Object.keys(info?.[key])?.forEach(cKey => {
          newMap.options.push({ label: cKey, value: info?.[key]?.[cKey] })
          newMap.map[info?.[key]?.[cKey]] = cKey
        })
      })
      setRoleConfig(newMap)
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }
  return { roleConfig, loading, getRoleAll }
}

export const useGetManagerList = () => {
  const [pagination, setPagination] = useState<PageProps>({
    current: 1,
    pageSize: 10,
    total: 0
  })
  const [list, setList] = useState<Manager[]>([])
  const [loading, setLoading] = useState(false)
  const getManagerList = async (data?: GetManagerListRequest) => {
    setLoading(true)
    const params = { ...pick(pagination, ['current', 'pageSize']), ...data }
    try {
      const result: GetManagerListResponse = await roleApi.getManagerList(params)
      const { managers, total } = result?.data || {}
      setList(managers)
      setPagination({
        ...pick(params, ['current', 'pageSize']),
        total
      })
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }
  return { pagination, list, loading, getManagerList }
}
