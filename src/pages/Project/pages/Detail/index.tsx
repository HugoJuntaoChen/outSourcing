import React from 'react'
import { BaseInfo, Facility, FlowStep } from './components'

const ProjectDetail = () => {
  return (
    <div>
      <div style={{ marginBottom: 17 }}>
        <BaseInfo />
      </div>
      <div style={{ marginBottom: 16 }}>
        <FlowStep />
      </div>
      <div>
        <Facility />
      </div>
    </div>
  )
}

export default ProjectDetail
