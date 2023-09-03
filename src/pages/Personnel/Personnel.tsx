import React, { useEffect, useMemo, useRef, useState } from 'react'
import { IFormTable, SearchWrapper } from '@/components'
import { columns, forms } from './config'
import IFormTableOperation from '@/components/IFormTableOperation'
import PersonelEditForm from './components/EditForm'
import IMessage from '@/components/IMessage'
import { useGetWorkList } from '@/hooks'
import { Button, message, type FormInstance } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { personnelApi } from '@/api'

import type { Worker } from '@/types'
import { useGlobalContext } from '@/layout/context'

interface IProps {
  inside?: boolean
}

const Personnel: React.FC<IProps> = ({ inside = false }) => {
  const { getCompanyList, companyNameMap, roleConfig } = useGlobalContext()
  const formRef = useRef<FormInstance<any>>()

  const [formVisible, setFormVisible] = useState(false)
  const [messageVisible, setMessageVisible] = useState(false)
  const [data, setData] = useState<Worker | Record<string, any>>()
  const [updateloading, setUpdateLoading] = useState(false)

  const { pagination, list, loading, getWorkList } = useGetWorkList()

  const onReload = async (params?: Record<string, any>) => {
    await getWorkList({ ...formRef.current?.getFieldsValue(), current: 1, ...params, inside })
  }

  const viewFn = (record: Worker) => {
    setData(record)
    setMessageVisible(true)
  }

  const editFn = (record?: Worker) => {
    setData({
      ...record,
      company_id: record?.company
    })
    setFormVisible(true)
  }

  const deleteFn = async (record: Worker) => personnelApi.deleteWorker({ id: record?.ID })

  const handleSubmit = async (values: Worker) => {
    setUpdateLoading(true)
    try {
      await personnelApi.updateWorker({ ...values, inside, id: data?.ID })
      setFormVisible(false)
      message.success('操作成功')
      onReload()
    } catch (error) {
      message.error('操作失败')
    } finally {
      setUpdateLoading(false)
    }
  }

  const tableColumns = useMemo(() => columns.concat([{
    title: '操作',
    width: 180,
    dataIndex: 'operation',
    render: (_: any, record, index: number) => IFormTableOperation({ record, viewFn, deleteFn, editFn, onReload })
  }]), [])

  useEffect(() => {
    onReload()
    getCompanyList({ pageSize: 99999, current: 1, inside })
  }, [])

  return (
    <>
      <IFormTable
        form={{
          forms,
          search: true,
          loading,
          inside,
          getFormRef: form => {
            formRef.current = form
          },
          formProps: {
            onFinish: onReload
          },
          render: Forms => <SearchWrapper Forms={Forms} ButtonGroup={<Button type='primary' icon={<PlusOutlined />} onClick={() => { editFn() }}>添加信息</Button>} />
        }}
        table={{
          columns: tableColumns,
          dataSource: list?.map(i => ({ ...i, companyNameMap, roleConfig })) ?? [],
          loading,
          pagination: {
            ...pagination,
            onChange: (current: number, pageSize: number) => {
              onReload({ current, pageSize })
            }
          }
        }}
      />
      {formVisible && <PersonelEditForm data={data} loading={updateloading} inside={inside} onOk={handleSubmit} onCancel={() => { setFormVisible(false) }} />}
      <IMessage
        visible={messageVisible}
        data={[
          { label: '姓名', value: data?.name },
          { label: '公司', value: companyNameMap[data?.company] },
          { label: '所属团队', value: data?.department },
          { label: '角色', value: data?.role },
          { label: '身份证', value: data?.id_card },
          { label: '级别', value: data?.level },
          { label: '手机号', value: data?.phone_number },
          { label: '银行卡', value: `${data?.bank_branch}  ${data?.bank_account}`, span: 16 },
          { label: '紧急联系人', value: data?.emergency_contact_name },
          { label: '联系人电话', value: data?.emergency_contact_phone, span: 16 }
        ]}
        onCancel={() => { setMessageVisible(false) }}
      />
    </>
  )
}

export default Personnel
