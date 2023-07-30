import React, { useMemo } from 'react'
import { IFormTable } from '@/components'
import { columns } from './config'
import { data } from '@/mock'
import IFormTableOperation from '@/components/IFormTableOperation'
import { EComponentType } from '@/enums/componentType'

const Personnel: React.FC = () => {
  const viewFn = () => {

  }
  const editFn = () => {

  }
  const deleteFn = () => {

  }

  const tableColumns = useMemo(() => columns.concat([{
    title: '操作',
    width: 180,
    dataIndex: 'operation',
    render: (_: any, __: any, index: number) => IFormTableOperation({ index, viewFn, deleteFn, editFn })
  }]), [])

  return (
    <IFormTable
      form={{
        forms: [
          {
            type: EComponentType.SELECT,
            key: '1',
            props: {
              placeholder: '请选择公司',
              style: { width: 200 }
            }
          },
          {
            type: EComponentType.SELECT,
            key: '2',
            props: {
              placeholder: '请选择角色',
              style: { width: 200 }
            }
          },
          {
            type: EComponentType.SELECT,
            key: '3',
            props: {
              placeholder: '请选择级别',
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
        columns: tableColumns,
        dataSource: data
      }}
    />
  )
}

export default Personnel
