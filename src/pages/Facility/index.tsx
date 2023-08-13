import React from 'react'
import { IFormTable } from '@/components'
import { columns } from './config'
import { data } from '@/mock'
import { EComponentType } from '@/enums'
const Facility: React.FC = () => {
  return (
    <IFormTable
      form={{
        forms: [
          {
            type: EComponentType.INPUT,
            key: '1',
            props: {
              placeholder: '请输入设备类型',
              style: { width: 200 }
            }
          },
          {
            type: EComponentType.INPUT,
            key: '2',
            props: {
              placeholder: '请输入设备型号',
              style: { width: 200 }
            }
          },
          {
            type: EComponentType.INPUT,
            key: '3',
            props: {
              placeholder: '请输入设备编号',
              style: { width: 200 }
            }
          },
          {
            type: EComponentType.INPUT,
            key: '4',
            props: {
              placeholder: '请输入姓名',
              style: { width: 200 }
            }
          }
        ],
        search: true
      }}
      table={{
        columns,
        dataSource: data
      }}
    />
  )
}

export default Facility
