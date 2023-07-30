import { Tag } from 'antd'
import dayjs from 'dayjs'
import type { ColumnsType } from 'antd/es/table'
export const columns: ColumnsType<Record<string, any>> = [
  {
    title: '车辆类型',
    dataIndex: '1',
    width: 180
  },
  {
    title: '车辆型号',
    dataIndex: '2',
    width: 150
  },
  {
    title: '车辆编号',
    dataIndex: '3',
    width: 80
  },
  {
    title: '座位类型',
    dataIndex: '4',
    width: 100,
    render: (text) => <Tag color="magenta">{text}</Tag>
  },
  {
    title: '个数',
    dataIndex: '7',
    width: 240
  },
  {
    title: '登记日期',
    dataIndex: '7',
    width: 240,
    sorter: true,
    render: (text) => dayjs(Number(text)).format('YYYY-MM-DD HH:MM')
  }
]
