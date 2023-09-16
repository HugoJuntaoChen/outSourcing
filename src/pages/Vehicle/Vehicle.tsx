import React, { useEffect, useMemo, useRef, useState } from 'react'
import { IFormTable, IFormTableOperation, IMessage, SearchWrapper } from '@/components'
import { columns } from './config'
import { EComponentType } from '@/enums'
import { message, type FormInstance, Button } from 'antd'
import { useGetCarList } from '@/hooks'
import { type Car } from '@/types'
import { vehicleApi } from '@/api'
import { PlusOutlined } from '@ant-design/icons'
import VehicleEditForm from './components/EditForm'

interface IProps {
  inside?: boolean
}

const Vehicle: React.FC<IProps> = ({ inside = false }) => {
  const formRef = useRef<FormInstance<any>>()

  const [formVisible, setFormVisible] = useState(false)
  const [messageVisible, setMessageVisible] = useState(false)
  const [data, setData] = useState<Car | Record<string, any>>()
  const [updateloading, setUpdateLoading] = useState(false)

  const { pagination, list, loading, getCarList } = useGetCarList()

  const onReload = async (params?: Record<string, any>) => {
    await getCarList({ ...formRef.current?.getFieldsValue(), current: 1, ...params, inside })
  }

  const viewFn = (record: Car) => {
    setData({
      ...record,
      price_per_day: Number(record?.price_per_day) / 100
    })
    setMessageVisible(true)
  }

  const editFn = (record?: Car) => {
    setData({
      ...record,
      price_per_day: Number(record?.price_per_day) / 100
    })
    setFormVisible(true)
  }

  const deleteFn = async (record: Car) => vehicleApi.deleteCar({ id: record?.ID })

  const handleSubmit = async (values: Car) => {
    const { price_per_day: pricePerDay, ...params } = values ?? {}
    setUpdateLoading(true)
    try {
      await vehicleApi.updateCar({
        ...params,
        price_per_day: pricePerDay ? pricePerDay * 100 : undefined,
        inside,
        id: data?.ID
      })
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
    render: (_: any, record, index: number) => IFormTableOperation({ record, viewFn, deleteFn, editFn, onReload, nameKey: 'type' })
  }]), [])

  useEffect(() => {
    onReload()
  }, [])
  return (
    <>
      <IFormTable
        form={{
          forms: [
            {
              type: EComponentType.VehicleSelect,
              key: 'type',
              props: {
                placeholder: '请选择车辆类型',
                style: { width: 200 }
              }
            }
          ],
          search: true,
          loading,
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
      {formVisible && <VehicleEditForm data={data} loading={updateloading} inside={inside} onOk={handleSubmit} onCancel={() => { setFormVisible(false) }} />}
      <IMessage
        visible={messageVisible}
        data={[
          { label: '车辆类型', value: data?.type },
          { label: '车辆名称', value: data?.name },
          { label: '车辆编号', value: data?.number },
          { label: '车辆个数', value: data?.quantity },
          { label: '单价(元)/天', value: data?.price_per_day },
          { label: '座位', value: data?.seat_count }
        ]}
        onCancel={() => { setMessageVisible(false) }}
      />
    </>

  )
}

export default Vehicle
