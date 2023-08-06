import React, { useMemo, useState } from 'react'
import { IFormTable } from '@/components'
import { columns } from './config'
import { data } from '@/mock'
import IFormTableOperation from '@/components/IFormTableOperation'
import { EComponentType } from '@/enums/componentType'
import PersonelEditForm from './components/EditForm'
import IMessage from '@/components/IMessage'

const Personnel: React.FC = () => {
  const [formVisible, setFormVisible] = useState(false)
  const [messageVisible, setMessageVisible] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [index, setIndex] = useState(-1)
  const viewFn = (index: number) => {
    setIndex(index)
    setMessageVisible(true)
  }
  const editFn = (index: number) => {
    setIndex(index)
    setFormVisible(true)
    setIsEdit(true)
  }
  const deleteFn = (index: number) => {

  }

  const tableColumns = useMemo(() => columns.concat([{
    title: '操作',
    width: 180,
    dataIndex: 'operation',
    render: (_: any, __: any, index: number) => IFormTableOperation({ index, viewFn, deleteFn, editFn })
  }]), [])

  return (
    <>
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

      {formVisible && <PersonelEditForm isEdit={isEdit} data={null} onOk={() => { setFormVisible(false) }} onCancel={() => { setFormVisible(false) }} />}
      <IMessage visible={messageVisible} data={data[index] as any || null} onCancel={() => { setMessageVisible(false) }}/>
    </>
  )
}

export default Personnel
