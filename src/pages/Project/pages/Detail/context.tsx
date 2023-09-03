import { useGetProjectDetail } from '@/hooks'
import React, { createContext, useContext } from 'react'

interface IProps {
  data?: Record<string, any>
  loading: boolean
  getProjectDetail: (data?: any) => Promise<void>
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const ProjectDetailContextCom = createContext({} as IProps)

const ProjectDetailContext: React.FC = ({ children }) => {
  const { data, loading, getProjectDetail } = useGetProjectDetail()

  return (
    <ProjectDetailContextCom.Provider
     value={{ data, loading, getProjectDetail }}
    >
      {children}
    </ProjectDetailContextCom.Provider>
  )
}
export default ProjectDetailContext

export const useProjectDetailContext = () => {
  return useContext(ProjectDetailContextCom) ?? {}
}
