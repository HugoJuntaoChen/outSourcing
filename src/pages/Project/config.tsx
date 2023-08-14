import { Tag } from 'antd'
import dayjs from 'dayjs'
import type { ColumnsType } from 'antd/es/table'
import { EComponentType } from '@/enums'
import type { IFormItemProps } from '@/components/type'

export const forms: IFormItemProps[] = [
  {
    type: EComponentType.INPUT,
    key: 'creator',
    props: {
      placeholder: '请输入创建人搜索',
      style: { width: 200 }
    }
  },
  {
    type: EComponentType.INPUT,
    key: 'name',
    props: {
      placeholder: '请输入项目名称/ID搜索',
      style: { width: 200 }
    }
  },
  {
    type: EComponentType.SELECT,
    key: 'status',
    props: {
      placeholder: '请选择项目状态',
      style: { width: 200 }
    }
  },
  {
    type: EComponentType.NUMBERRADIUS,
    key: 'numberRadius',
    items: [
      {
        key: 'min_budget',
        type: EComponentType.INPUTNUMBER
      },
      {
        key: 'max_budget',
        type: EComponentType.INPUTNUMBER
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
    title: '项目名称/ID',
    dataIndex: 'project_name',
    width: 180
  },
  {
    title: '项目ID',
    dataIndex: '2',
    width: 80
  },
  {
    title: '项目状态',
    dataIndex: 'delay_risk',
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
