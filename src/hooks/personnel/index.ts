import { personnelApi } from '@/api'
import { useState } from 'react'
import { pick } from 'lodash'
import type { Worker, GetWorkListRequest, GetWorkListResponse, PageProps } from '@/types'
export const useGetWorkList = () => {
  const [pagination, setPagination] = useState<PageProps>({
    current: 1,
    pageSize: 10,
    total: 0
  })
  const [list, setList] = useState<Worker[]>([])
  const [loading, setLoading] = useState(false)

  const getWorkList = async (data?: GetWorkListRequest) => {
    setLoading(true)
    const params = { ...pick(pagination, ['current', 'pageSize']), ...data }

    try {
      const result: GetWorkListResponse = await personnelApi.getWorkList(params)
      const { workers, total } = result?.data ?? {}
      setList(workers ?? [])
      setPagination({
        ...pick(params, ['current', 'pageSize']),
        total
      })
    } catch (error) {} finally {
      setLoading(false)
    }
  }

  return { pagination, list, loading, getWorkList }
}
