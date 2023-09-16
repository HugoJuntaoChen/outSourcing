import { projectApi } from '@/api'
import { useState } from 'react'
import { pick } from 'lodash'
import type { Project, GetProjectListRequest, GetProjectListResponse, PageProps, ProjectFile } from '@/types'

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

export const useGetProjectDetail = () => {
  const [data, setData] = useState<Record<string, any>>({})
  const [loading, setLoading] = useState(false)

  const getProjectDetail = async (data?: { id: number }) => {
    setLoading(true)

    try {
      const result: GetProjectListResponse = await projectApi.getProjectDetail(data)
      setData(result?.data || {})
    } catch (error) {} finally {
      setLoading(false)
    }
  }

  return { data, loading, getProjectDetail }
}

export const useUpdateProjectFile = () => {
  const [uploadLoading, setUploadLoading] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)

  const uploadProjectFile = async (data?: ProjectFile) => {
    setUploadLoading(true)
    try {
      await projectApi.uploadProjectFile(data)
    } catch (error) {
      throw new Error()
    } finally {
      setUploadLoading(false)
    }
  }

  const deleteProjectFile = async (data?: ProjectFile) => {
    setDeleteLoading(true)
    try {
      await projectApi.deleteProjectFile(data)
    } catch (error) {
      throw new Error()
    } finally {
      setDeleteLoading(false)
    }
  }

  return { uploadLoading, deleteLoading, uploadProjectFile, deleteProjectFile }
}
