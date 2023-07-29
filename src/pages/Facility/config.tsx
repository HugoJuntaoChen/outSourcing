import dayjs from 'dayjs'
import type { ColumnsType } from 'antd/es/table'
export const columns: ColumnsType<Record<string, any>> = [
  {
    title: '设备类型',
    dataIndex: '1',
    width: 180
  },
  {
    title: '设备型号',
    dataIndex: '2',
    width: 180
  },
  {
    title: '设备编号',
    dataIndex: '3',
    width: 180
  },
  {
    title: '单价/天',
    dataIndex: '4',
    width: 100
  },
  {
    title: '个数',
    dataIndex: '7',
    width: 80
  },
  {
    title: '登记日期',
    dataIndex: '7',
    width: 240,
    sorter: true,
    render: (text) => dayjs(Number(text)).format('YYYY-MM-DD HH:MM')
  }
]
