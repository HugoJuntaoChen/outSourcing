import React, { useEffect } from 'react'
import { BaseInfo, Facility, FlowStep } from './components'
import ProjectDetailContext, { useProjectDetailContext } from './context'
import { Spin } from 'antd'
import { useParams } from 'react-router'

const ProjectDetailDom = () => {
  const { id } = useParams()
  const { loading, getProjectDetail } = useProjectDetailContext()

  useEffect(() => {
    getProjectDetail({ id: Number(id) })
  }, [])

  return (
    <div>
      <Spin spinning={loading}>
        <div style={{ marginBottom: 17 }}>
          <BaseInfo />
        </div>
        <div style={{ marginBottom: 16 }}>
          <FlowStep />
        </div>
        <div>
          <Facility />
        </div>
      </Spin>

    </div>
  )
}

const ProjectDetail = () => {
  return (
    <ProjectDetailContext>
      <ProjectDetailDom />
    </ProjectDetailContext>
  )
}

export default ProjectDetail
