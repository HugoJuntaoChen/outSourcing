import React, { useEffect, useMemo, useRef, useState } from 'react'
import { IFormTable, SearchWrapper } from '@/components'
import { columns, forms } from './config'
import IFormTableOperation from '@/components/IFormTableOperation'
import PersonelEditForm from './components/EditForm'
import IMessage from '@/components/IMessage'
import { useGetWorkList } from '@/hooks'
import { Button, message, type FormInstance, Empty, Image } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { personnelApi } from '@/api'

import type { Avatar, Worker } from '@/types'
import { useGlobalContext } from '@/layout/context'
import { FieldMap, LevelEnums } from '@/enums/config'

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
    const { avatar_link: avatarLink } = record ?? {}
    setData({
      ...record,
      company_id: record?.company,
      avatar_link: avatarLink ? [{ url: avatarLink, uid: 1 }] : []
    })
    setFormVisible(true)
  }

  const deleteFn = async (record: Worker) => personnelApi.deleteWorker({ id: record?.ID })

  const handleSubmit = async (values: Worker & { avatar_link: Avatar[] }) => {
    setUpdateLoading(true)
    try {
      await personnelApi.updateWorker({ ...values, inside, id: data?.ID, avatar_link: values?.avatar_link?.[0]?.url })
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

          { label: '角色', value: roleConfig?.map?.[data?.role] ?? data?.role },
          { label: '身份证', value: data?.id_card },
          { label: '手机号', value: data?.phone_number },

          { label: '毕业院校', value: data?.university },
          { label: '学历', value: data?.degree },
          { label: '工作年限', value: `${data?.working_years ?? 0}年` },

          { label: '级别', value: LevelEnums[data?.level] },
          { label: '视频领域', value: data?.field?.map((key: any) => FieldMap[key])?.join('、'), span: 16 },

          { label: '银行卡', value: `${data?.bank_branch}  ${data?.bank_account}`, span: 24 },
          { label: '紧急联系人', value: data?.emergency_contact_name },
          { label: '联系人电话', value: data?.emergency_contact_phone, span: 16 },

          { label: '简介', value: data?.introduction, span: 23 },
          {
            label: '用户头像',
            span: 24,
            value: (
              data?.avatar_link ? <Image src={data?.avatar_link} width={100}/> : <Empty description='暂未上传' imageStyle={{ width: 80 }} />
            )
          }
        ]}
        onCancel={() => { setMessageVisible(false) }}
      />
    </>
  )
}

export default Personnel
