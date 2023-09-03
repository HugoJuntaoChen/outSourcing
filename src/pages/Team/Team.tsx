import React, { useEffect, useMemo, useRef, useState } from 'react'
import { IFormTable, IMessage, IFormTableOperation, SearchWrapper } from '@/components'
import { columns, forms } from './config'
import { useGetCompanyList } from '@/hooks'
import { message, type FormInstance, Button, Image, Empty } from 'antd'
import type { Company } from '@/types'
import { teamApi } from '@/api'
import EditForm from './components/EditForm'
import { PlusOutlined } from '@ant-design/icons'
import { FieldMap, LevelEnums } from '@/enums/config'
interface Props {
  inside?: boolean
}

const Team: React.FC<Props> = ({ inside = false }) => {
  const formRef = useRef<FormInstance<any>>()

  const [formVisible, setFormVisible] = useState(false)
  const [messageVisible, setMessageVisible] = useState(false)
  const [data, setData] = useState<Company | Record<string, any>>()
  const [updateloading, setUpdateLoading] = useState(false)

  const { pagination, list, loading, getCompanyList } = useGetCompanyList()

  const onReload = async (params?: Record<string, any>) => {
    await getCompanyList({ ...formRef.current?.getFieldsValue(), current: 1, ...params, inside })
  }

  const viewFn = (record: Company) => {
    const { province, city } = record ?? {}
    setData({
      ...record,
      provinceCity: [province, city]
    })
    setMessageVisible(true)
  }

  const editFn = (record?: Company) => {
    const { province, city, business_license: businessLicense } = record ?? {}
    setData({
      ...record,
      provinceCity: province && city ? [province, city] : [],
      business_license: businessLicense ? [{ url: businessLicense, uid: 1 }] : []
    })
    setFormVisible(true)
  }

  const deleteFn = async (record: Company) => teamApi.deleteCompany({ id: record?.ID })

  const handleSubmit = async (values: Company & { provinceCity: string[], business_license: Array<{ url: string, uid: string }> }) => {
    const { provinceCity, business_license: businessLicense, ...params } = values
    setUpdateLoading(true)
    try {
      await teamApi.updateCompany({ ...params, province: provinceCity?.[0], city: provinceCity?.[1], business_license: businessLicense?.[0]?.url, inside, id: data?.ID })
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
          dataSource: list ?? [],
          loading,
          pagination: {
            ...pagination,
            onChange: (current: number, pageSize: number) => {
              onReload({ current, pageSize })
            }
          }
        }}
      />
      {formVisible && <EditForm data={data} loading={updateloading} inside={inside} onOk={handleSubmit} onCancel={() => { setFormVisible(false) }} />}
      <IMessage
        visible={messageVisible}
        data={[
          { label: '公司名称', value: data?.name },
          { label: '公司描述', value: data?.description },
          { label: '工作室', value: data?.studio },
          { label: '级别', value: LevelEnums[data?.level] },
          { label: '地址', value: `${data?.province ?? ''}${data?.city ?? ''}` },
          { label: '详细地址', value: data?.address },
          { label: '开户银行', value: data?.bank_name },
          { label: '银行帐号', value: data?.bank_account },
          { label: '视频领域', value: data?.field?.map((key: any) => FieldMap[key])?.join('、') },
          { label: '营业执照号', value: data?.unified_credit_code, span: 24 },
          {
            label: '营业执照',
            span: 24,
            value: (
              data?.business_license ? <Image src={data?.business_license} width={100}/> : <Empty description='暂未上传' imageStyle={{ width: 80 }} />
            )
          }
        ]}
        onCancel={() => { setMessageVisible(false) }}
      />
    </>
  )
}

export default Team
