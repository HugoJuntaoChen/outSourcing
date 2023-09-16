import { useGetProjectDetail, useUpdateProjectFile } from '@/hooks'
import { type ProjectFile } from '@/types'
import React, { createContext, useContext } from 'react'
import { useParams } from 'react-router'

interface IProps {
  data?: Record<string, any>
  loading: boolean
  getProjectDetail: (data?: any) => Promise<void>
  uploadProjectFile: (data?: ProjectFile) => Promise<void>
  deleteProjectFile: (data?: ProjectFile) => Promise<void>
  id: number
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const ProjectDetailContextCom = createContext({} as IProps)

const ProjectDetailContext: React.FC = ({ children }) => {
  const { id } = useParams()
  const { data, loading, getProjectDetail } = useGetProjectDetail()
  const { uploadProjectFile, deleteProjectFile } = useUpdateProjectFile()

  return (
    <ProjectDetailContextCom.Provider
     value={{
       data,
       loading,
       getProjectDetail,
       uploadProjectFile,
       deleteProjectFile,
       id: Number(id)
     }}
    >
      {children}
    </ProjectDetailContextCom.Provider>
  )
}
export default ProjectDetailContext

export const useProjectDetailContext = () => {
  return useContext(ProjectDetailContextCom) ?? {}
}
