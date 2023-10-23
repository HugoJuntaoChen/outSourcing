import React from 'react'
import { BaseInfo, Facility, FlowStep } from './components'
import ProjectDetailContext, { useProjectDetailContext } from './context'
import { Spin } from 'antd'

const ProjectDetailDom = () => {
  const { loading } = useProjectDetailContext()

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
