import { personnelApi } from '@/api'
import { useState } from 'react'
import { pick } from 'lodash'
import type { Company, GetCompanyListResponse, GetWorkListRequest, PageProps } from '@/types'
export const useGetWorkList = () => {
  const [pagination, setPagination] = useState<PageProps>({
    current: 1,
    pageSize: 10,
    total: 0
  })
  const [list, setList] = useState<Company[]>([])
  const [loading, setLoading] = useState(false)

  const getWorkList = async (data?: GetWorkListRequest) => {
    setLoading(true)
    const params = { ...pick(pagination, ['current', 'pageSize']), ...data }

    try {
      const result: GetCompanyListResponse = await personnelApi.getWorkList(params)
      const { companies, total } = result?.data || {}
      setList(companies)
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
