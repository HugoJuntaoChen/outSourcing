import { teamApi } from '@/api'
import { useState } from 'react'
import { pick } from 'lodash'
import { type GetCompanyListRequest } from '@/types'

export const useGetCompanyList = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0
  })
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  const getCompanyList = async (data?: GetCompanyListRequest) => {
    setLoading(true)
    const params = { ...pick(pagination, ['current', 'pageSize']), ...data }

    try {
      const result = await teamApi.getCompanyList(params)
      const { workers, total } = result?.data || {}
      setList(workers)
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
