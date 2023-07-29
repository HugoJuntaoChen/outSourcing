import React from 'react'
import { IFormTable } from '@/components'
import { columns } from './config'
import { data } from '@/mock'
const Project: React.FC = () => {
  return (
    <IFormTable
      form={{
        forms: [
          {
            type: 'input',
            key: '1',
            props: {
              placeholder: '请输入创建人搜索',
              style: { width: 200 }
            }
          },
          {
            type: 'input',
            key: '2',
            props: {
              placeholder: '请输入项目名称/ID搜索',
              style: { width: 200 }
            }
          },
          {
            type: 'select',
            key: '3',
            props: {
              placeholder: '请选择项目状态',
              style: { width: 200 }
            }
          },
          {
            type: 'select',
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
