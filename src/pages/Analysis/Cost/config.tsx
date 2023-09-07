import { CustomItemEnum, CustomItemStrategy } from '@/config'
import type { ColumnsType } from 'antd/es/table'

export const columns: ColumnsType<Record<string, any>> = [
  {
    title: '项目总数',
    dataIndex: 'project_num',
    width: 75
  },
  {
    title: '单项目平均员工数',
    dataIndex: 'worker_num_avg',
    width: 130
  },
  {
    title: '预算总额(元)',
    dataIndex: 'project_total_budget',
    width: 100,
    render: (value: any) => CustomItemStrategy[CustomItemEnum.Money]({ value })
  },
  {
    title: '项目平均预算(元)',
    dataIndex: 'project_avg_budget',
    width: 120,
    render: (value: any) => CustomItemStrategy[CustomItemEnum.Money]({ value })
  },
  {
    title: '实际支出总额(元)',
    dataIndex: 'real_total_expenses',
    width: 120,
    render: (value: any) => CustomItemStrategy[CustomItemEnum.Money]({ value })
  },
  {
    title: '项目平均支出(元)',
    dataIndex: 'real_avg_expenses',
    width: 120,
    render: (value: any) => CustomItemStrategy[CustomItemEnum.Money]({ value })
  },
  {
    title: '实际支出/预算(元)',
    dataIndex: 'expenses_divide_budget',
    width: 130,
    render: (value: any) => CustomItemStrategy[CustomItemEnum.Money]({ value })
  },
  {
    title: '人均产值(元)',
    dataIndex: 'person_produce',
    width: 100,
    render: (value: any) => CustomItemStrategy[CustomItemEnum.Money]({ value })
  },
  {
    title: '人均毛利润(元)',
    dataIndex: 'person_gross_profit',
    width: 110,
    render: (value: any) => CustomItemStrategy[CustomItemEnum.Money]({ value })
  },
  {
    title: '人均天成本(元)',
    dataIndex: 'person_day_cost',
    width: 110,
    render: (value: any) => CustomItemStrategy[CustomItemEnum.Money]({ value })
  }
].map(i => ({ ...i, render: val => val ?? 0 }))
