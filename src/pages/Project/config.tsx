import { Tag } from 'antd'
import dayjs from 'dayjs'
import type { ColumnsType } from 'antd/es/table'
export const columns: ColumnsType<Record<string, any>> = [
  {
    title: '项目名称/ID',
    dataIndex: '1',
    width: 180
  },
  {
    title: '项目ID',
    dataIndex: '2',
    width: 80
  },
  {
    title: '项目状态',
    dataIndex: '3',
    width: 80,
    render: (text) => <Tag color="magenta">{text}</Tag>
  },
  {
    title: '项目负责人',
    dataIndex: '4',
    width: 100
  },
  {
    title: '预算',
    dataIndex: '7',
    width: 240
  },
  {
    title: '地点',
    dataIndex: '7',
    width: 180
  },
  {
    title: '排期截止时间',
    dataIndex: '7',
    width: 240,
    sorter: true,
    render: (text) => dayjs(Number(text)).format('YYYY-MM-DD HH:MM')
  }
]
