import React from 'react'
import { IFormTable } from '@/components'
import { columns } from './config'
import { data } from '@/mock'
import { EComponentType } from '@/enums'
const Project: React.FC = () => {
  return (
    <IFormTable
      form={{
        forms: [
          {
            type: EComponentType.INPUT,
            key: '1',
            props: {
              placeholder: '请输入创建人搜索',
              style: { width: 200 }
            }
          },
          {
            type: EComponentType.INPUT,
            key: '2',
            props: {
              placeholder: '请输入项目名称/ID搜索',
              style: { width: 200 }
            }
          },
          {
            type: EComponentType.SELECT,
            key: '3',
            props: {
              placeholder: '请选择项目状态',
              style: { width: 200 }
            }
          },
          {
            type: EComponentType.SELECT,
            key: '4',
            props: {
              placeholder: '请选择项目资金预算',
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

export default Project
