import React from 'react'
import { IFormTable } from '@/components'
import { columns } from './config'
import { data } from '@/mock'
const Personnel: React.FC = () => {
  return (
    <IFormTable
      form={{
        forms: [
          {
            type: 'select',
            key: '1',
            props: {
              placeholder: '请选择公司',
              style: { width: 200 }
            }
          },
          {
            type: 'select',
            key: '2',
            props: {
              placeholder: '请选择角色',
              style: { width: 200 }
            }
          },
          {
            type: 'select',
            key: '3',
            props: {
              placeholder: '请选择级别',
              style: { width: 200 }
            }
          },
          {
            type: 'input',
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

export default Personnel
