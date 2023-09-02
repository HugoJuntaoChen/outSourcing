import { ITable } from '@/components'
import { columns } from './config'
import React from 'react'
import './index.less'
import { useProjectDetailContext } from '../../context'

const Facility = () => {
  const { data } = useProjectDetailContext()

  return (
    <div className='project-detail-facility-wrapper'>
      <div className='title'>设备信息</div>
      <ITable columns={columns} dataSource={data?.equipment_list || []} />
    </div>
  )
}

export default Facility
