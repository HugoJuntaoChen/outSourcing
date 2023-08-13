import type { ColumnsType } from 'antd/es/table'
export const columns: ColumnsType<Record<string, any>> = [
  {
    title: '项目总数',
    dataIndex: '1',
    width: 75
  },
  {
    title: '单项目平均员工数',
    dataIndex: '2',
    width: 130
  },
  {
    title: '预算总额(元)',
    dataIndex: '3',
    width: 100
  },
  {
    title: '项目平均预算(元)',
    dataIndex: '4',
    width: 120
  },
  {
    title: '实际支出总额(元)',
    dataIndex: '7',
    width: 120
  },
  {
    title: '项目平均支出(元)',
    dataIndex: '7',
    width: 120
  },
  {
    title: '实际支出/预算',
    dataIndex: '3',
    width: 110
  },
  {
    title: '人均产值(元)',
    dataIndex: '4',
    width: 100
  },
  {
    title: '人均毛利润(元)',
    dataIndex: '7',
    width: 120
  },
  {
    title: '人均天成本(元)',
    dataIndex: '7',
    width: 120
  }
]
