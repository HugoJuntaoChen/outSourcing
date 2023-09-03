import { FacilityTypeMap } from '@/enums/config'
import type { ColumnsType } from 'antd/es/table'
export const columns: ColumnsType<Record<string, any>> = [
  {
    title: 'ID',
    dataIndex: '1',
    width: 180
  },
  {
    title: '设备类型',
    dataIndex: 'type',
    width: 180,
    render: val => FacilityTypeMap[val] || val
  },
  {
    title: '设备名称',
    dataIndex: 'equipment_model',
    width: 180
  },
  {
    title: '数量',
    dataIndex: 'quantity',
    width: 180
  },
  {
    title: '天数',
    dataIndex: 'days',
    width: 100
  },
  {
    title: '单价',
    dataIndex: 'price_per_day',
    width: 80
  },
  {
    title: '金额',
    dataIndex: 'total_price'
  }
]
