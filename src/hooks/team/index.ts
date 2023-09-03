import { teamApi } from '@/api'
import { useState } from 'react'
import { pick } from 'lodash'
import { type GetCompanyListResponse, type GetCompanyListRequest, type Company } from '@/types'

export const useGetCompanyList = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0
  })
  const [list, setList] = useState<Company[]>([])
  const [loading, setLoading] = useState(false)

  const getCompanyList = async (data?: GetCompanyListRequest) => {
    setLoading(true)
    const params = { ...pick(pagination, ['current', 'pageSize']), ...data }

    try {
      const result: GetCompanyListResponse = await teamApi.getCompanyList(params)
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

  return { pagination, list, loading, getCompanyList }
}
