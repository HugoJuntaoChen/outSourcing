import { projectApi } from '@/api'
import { useState } from 'react'
import { pick } from 'lodash'
import type { Project, GetProjectListRequest, GetProjectListResponse, PageProps } from '@/types'

export const useGetProjectList = () => {
  const [pagination, setPagination] = useState<PageProps>({
    current: 1,
    pageSize: 10,
    total: 0
  })
  const [list, setList] = useState<Project[]>([])
  const [loading, setLoading] = useState(false)

  const getProjectList = async (data?: GetProjectListRequest) => {
    setLoading(true)
    const params = { ...pick(pagination, ['current', 'pageSize']), ...data }

    try {
      const result: GetProjectListResponse = await projectApi.getProjectList(params)
      const { projects, total } = result?.data || {}
      setList(projects)
      setPagination({
        ...pick(params, ['current', 'pageSize']),
        total
      })
    } catch (error) {} finally {
      setLoading(false)
    }
  }

  return { pagination, list, loading, getProjectList }
}
