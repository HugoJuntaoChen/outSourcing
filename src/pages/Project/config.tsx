import moment from 'moment'
import type { ColumnsType } from 'antd/es/table'
import { EComponentType } from '@/enums'
import type { IFormItemProps } from '@/components/type'
import { DelayRiskIcon } from '@/config'

export const forms: IFormItemProps[] = [
  {
    type: EComponentType.Input,
    key: 'creator',
    props: {
      placeholder: '请输入创建人搜索',
      style: { width: 200 }
    }
  },
  {
    type: EComponentType.Input,
    key: 'name',
    props: {
      placeholder: '请输入项目名称/ID搜索',
      style: { width: 200 }
    }
  },
  {
    type: EComponentType.DelayRiskSelect,
    key: 'status',
    props: {
      placeholder: '请选择项目状态',
      style: { width: 200 }
    }
  },
  {
    type: EComponentType.NumberAdius,
    key: 'numberRadius',
    items: [
      {
        key: 'min_budget',
        type: EComponentType.InputNumber
      },
      {
        key: 'max_budget',
        type: EComponentType.InputNumber
      }
    ],
    props: {
      placeholder: '请选择项目资金预算',
      style: {
        width: 200
      }
    }
  }
]

export const columns: ColumnsType<Record<string, any>> = [
  {
    title: '项目名称',
    dataIndex: 'project_name',
    width: 180
  },
  {
    title: '项目ID',
    dataIndex: 'ID',
    width: 80
  },
  {
    title: '项目状态',
    dataIndex: 'delay_risk',
    width: 80,
    render: (val) => DelayRiskIcon(val) || '-'
  },
  {
    title: '项目负责人',
    dataIndex: 'contact',
    width: 140
  },
  {
    title: '预算',
    dataIndex: 'budget',
    width: 100
  },
  {
    title: '地点',
    dataIndex: 'location',
    width: 180
  },
  {
    title: '排期截止时间',
    dataIndex: 'delivery_time',
    width: 180,
    sorter: (a, b) => new Date(a.delivery_time).valueOf() - new Date(b.delivery_time).valueOf(),
    render: (val) => moment(new Date(val)).format('YYYY-MM-DD HH:MM:SS')
  }
]
