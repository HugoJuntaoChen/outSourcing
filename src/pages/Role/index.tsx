import React, { useEffect, useMemo, useRef, useState } from 'react'
import { IFormTable, IFormTableOperation, IMessage, SearchWrapper } from '@/components'
import { columns, forms } from './config'
import { type Manager } from '@/types'
import { roleApi } from '@/api'
import { message, type FormInstance, Button } from 'antd'
import { useGetManagerList } from '@/hooks'
import { PlusOutlined } from '@ant-design/icons'
import RoleEditForm from './components/EditForm'
import { IdentityMap } from '@/enums/config'

const Role: React.FC = () => {
  const formRef = useRef<FormInstance<any>>()
  const [formVisible, setFormVisible] = useState(false)
  const [messageVisible, setMessageVisible] = useState(false)
  const [data, setData] = useState<Manager | Record<string, any>>()
  const [updateloading, setUpdateLoading] = useState(false)

  const { pagination, list, loading, getManagerList } = useGetManagerList()

  const onReload = async (params?: Record<string, any>) => {
    await getManagerList({ ...formRef.current?.getFieldsValue(), current: 1, ...params })
  }

  const viewFn = (record: Manager) => {
    setData(record)
    setMessageVisible(true)
  }

  const editFn = (record?: Manager) => {
    setData(record)
    setFormVisible(true)
  }

  const deleteFn = async (record: Manager) => roleApi.deleteManager({ id: record?.ID })

  const handleSubmit = async (values: Manager) => {
    setUpdateLoading(true)
    try {
      await roleApi.updateManager({ ...values, id: data?.ID })
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
          },
          render: Forms => <SearchWrapper Forms={Forms} ButtonGroup={<Button type='primary' icon={<PlusOutlined />} onClick={() => { editFn() }}>新增</Button>} />
        }}
        table={{
          columns: tableColumns,
          dataSource: list || [],
          loading,
          pagination: {
            ...pagination,
            onChange: (current: number, pageSize: number) => {
              onReload({ current, pageSize })
            }
          }
        }}
      />
      {formVisible && <RoleEditForm data={data} loading={updateloading} onOk={handleSubmit} onCancel={() => { setFormVisible(false) }} />}
      <IMessage
        visible={messageVisible}
        data={[
          { label: '角色姓名', value: data?.name },
          { label: '角色身份', value: IdentityMap[data?.identity] ?? '-' },
          { label: '帐户名', value: data?.username },
          { label: '角色密码', value: data?.password },
          { label: '所属部门', value: data?.department_owner },
          { label: '联系号码', value: data?.phone_number }
        ]}
        onCancel={() => { setMessageVisible(false) }}
      />
    </>

  )
}

export default Role
