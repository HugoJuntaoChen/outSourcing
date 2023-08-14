import React, { useEffect, useMemo, useRef, useState } from 'react'
import { IFormTable } from '@/components'
import { columns, forms } from './config'
import { data } from '@/mock'
import IFormTableOperation from '@/components/IFormTableOperation'
import PersonelEditForm from './components/EditForm'
import IMessage from '@/components/IMessage'
import { useGetWorkList } from '@/hooks'
import { type FormInstance } from 'antd'

const Personnel: React.FC = () => {
  const [formVisible, setFormVisible] = useState(false)
  const [messageVisible, setMessageVisible] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [index, setIndex] = useState(-1)
  const formRef = useRef<FormInstance<any>>()

  const { pagination, list, loading, getWorkList } = useGetWorkList()

  const viewFn = (index: number) => {
    setIndex(index)
    setMessageVisible(true)
  }
  const editFn = (index: number) => {
    setIndex(index)
    setFormVisible(true)
    setIsEdit(true)
  }
  const deleteFn = async (index: number) => {
    console.log(index)
  }

  const tableColumns = useMemo(() => columns.concat([{
    title: '操作',
    width: 180,
    dataIndex: 'operation',
    render: (_: any, __: any, index: number) => IFormTableOperation({ index, viewFn, deleteFn, editFn })
  }]), [])

  const onReload = (params?: Record<string, any>) => {
    getWorkList({ ...formRef.current?.getFieldsValue(), current: 1, ...params })
  }

  useEffect(() => {
    onReload()
  }, [])

  return (
    <>
      <IFormTable
        form={{
          forms,
          search: true,
          loading,
          getFormRef: form => {
            formRef.current = form
          },
          formProps: {
            onFinish: onReload
          }
        }}
        table={{
          columns: tableColumns,
          dataSource: data ?? list,
          loading,
          pagination: {
            ...pagination,
            onChange: (current: number, pageSize: number) => {
              onReload({ current, pageSize })
            }
          }
        }}
      />

      {formVisible && <PersonelEditForm isEdit={isEdit} data={null} onOk={() => { setFormVisible(false) }} onCancel={() => { setFormVisible(false) }} />}
      <IMessage visible={messageVisible} data={data[index] as any || null} onCancel={() => { setMessageVisible(false) }} />
    </>
  )
}

export default Personnel
