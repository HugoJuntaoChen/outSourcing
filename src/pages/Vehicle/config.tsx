import moment from 'moment'
import type { ColumnsType } from 'antd/es/table'
export const columns: ColumnsType<Record<string, any>> = [
  {
    title: '车辆类型',
    dataIndex: 'type',
    width: 180
  },
  {
    title: '车辆型号',
    dataIndex: 'name',
    width: 150
  },
  {
    title: '车辆编号',
    dataIndex: 'number',
    width: 120
  },
  {
    title: '座位类型',
    dataIndex: 'seat_count',
    width: 100
  },
  {
    title: '个数',
    dataIndex: 'quantity',
    width: 120
  },
  {
    title: '登记日期',
    dataIndex: 'CreatedAt',
    width: 240,
    sorter: (a, b) => new Date(a.UpdatedAt).valueOf() - new Date(b.UpdatedAt).valueOf(),
    render: (val) => moment(new Date(val)).format('YYYY-MM-DD HH:MM')
  }
]
