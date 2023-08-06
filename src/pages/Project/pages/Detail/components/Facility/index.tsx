import { ITable } from '@/components'
import { columns } from './config'
import React from 'react'
import './index.less'

const Facility = () => {
  return (
    <div className='project-detail-facility-wrapper'>
      <div className='title'>设备信息</div>
      <ITable columns={columns} />
    </div>
  )
}

export default Facility
