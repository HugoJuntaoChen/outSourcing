import React from 'react'
import { IFormTable } from '@/components'
import { columns } from './config'
import { data } from '@/mock'
const Role: React.FC = () => {
  return (
    <IFormTable
      form={{
        forms: [
          {
            type: 'input',
            key: '1',
            props: {
              placeholder: '请输入姓名搜索',
              style: { width: 200 }
            }
          },
          {
            type: 'select',
            key: '2',
            props: {
              placeholder: '请选择身份过滤',
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

export default Role
