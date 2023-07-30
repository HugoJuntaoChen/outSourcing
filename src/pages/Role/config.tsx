import type { ColumnsType } from 'antd/es/table'
import { EncipherText } from '@/components'
export const columns: ColumnsType<Record<string, any>> = [
  {
    title: 'ID',
    dataIndex: '1',
    width: 80
  },
  {
    title: '姓名',
    dataIndex: '2',
    width: 180
  },
  {
    title: '身份',
    dataIndex: '3'
  },
  {
    title: '帐户名',
    dataIndex: '4'
  },
  {
    title: '密码',
    dataIndex: '7',
    width: 120,
    render: (text) => <EncipherText text={text} view least={0} />
  }
]
