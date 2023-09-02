import type { ColumnsType } from 'antd/es/table'
export const columns: ColumnsType<Record<string, any>> = [
  {
    title: '项目总数',
    dataIndex: 'project_num',
    width: 70
  },
  {
    title: '单项目平均员工数',
    dataIndex: 'worker_num_avg',
    width: 110
  },
  {
    title: '平均周期(s)',
    dataIndex: 'project_avg_cycle',
    width: 80
  },
  {
    title: '项目延期数量',
    dataIndex: 'project_delay_count',
    width: 90
  },
  {
    title: '项目延期风险数量',
    dataIndex: 'project_delay_risk_count',
    width: 110
  },
  {
    title: '项目延期百分比(%)',
    dataIndex: 'project_delay_percent',
    width: 120
  },
  {
    title: '项目延期风险百分比(%)',
    dataIndex: 'project_delay_risk_percent',
    width: 140
  },
  {
    title: '人均工期(天)',
    dataIndex: 'person_avg_schedule',
    width: 80
  },
  {
    title: '人均项目吞吐率(%)',
    dataIndex: 'person_avg_throughput_percent',
    width: 120
  }
].map(i => ({ ...i, render: val => val ?? 0 }))
