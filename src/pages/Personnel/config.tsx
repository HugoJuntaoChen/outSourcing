import { Tag } from 'antd'
import dayjs from 'dayjs'
import type { ColumnsType } from 'antd/es/table'
import { EncipherText } from '@/components'
export const columns: ColumnsType<Record<string, any>> = [
  {
    title: '公司名称',
    dataIndex: '1',
    width: 180
  },
  {
    title: '角色',
    dataIndex: '2',
    width: 80
  },
  {
    title: '姓名',
    dataIndex: '3',
    width: 80
  },
  {
    title: '级别',
    dataIndex: '4',
    width: 100,
    render: (text) => <Tag color="magenta">{text}</Tag>
  },
  {
    title: '身份证',
    dataIndex: '5',
    width: 240
  },
  {
    title: '银行卡',
    dataIndex: '6',
    width: 180,
    render: (text) => <EncipherText text={text} />
  },
  {
    title: '更新时间',
    dataIndex: '7',
    width: 240,
    sorter: true,
    render: (text) => dayjs(Number(text)).format('YYYY-MM-DD HH:MM')
  }
]
