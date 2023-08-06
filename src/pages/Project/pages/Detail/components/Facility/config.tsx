import type { ColumnsType } from 'antd/es/table'
export const columns: ColumnsType<Record<string, any>> = [
  {
    title: 'ID',
    dataIndex: '1',
    width: 180
  },
  {
    title: '设备类型',
    dataIndex: '1',
    width: 180
  },
  {
    title: '设备名称',
    dataIndex: '2',
    width: 180
  },
  {
    title: '数量',
    dataIndex: '3',
    width: 180
  },
  {
    title: '天数',
    dataIndex: '4',
    width: 100
  },
  {
    title: '单价',
    dataIndex: '7',
    width: 80
  },
  {
    title: '金额',
    dataIndex: '7'
  }
]
