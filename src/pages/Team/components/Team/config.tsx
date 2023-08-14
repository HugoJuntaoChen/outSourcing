import { Tag } from 'antd'
import dayjs from 'dayjs'
import type { ColumnsType } from 'antd/es/table'
import { EncipherText } from '@/components'
import { EComponentType } from '@/enums'
import { type IFormItemProps } from '@/components/type'

export const forms: IFormItemProps[] = [
  {
    type: EComponentType.SELECT,
    key: 'name',
    props: {
      placeholder: '请选择公司/工作室',
      style: { width: 200 }
    }
  }
]

export const columns: ColumnsType<Record<string, any>> = [
  {
    title: '公司名称',
    dataIndex: 'name',
    width: 100
  },
  {
    title: '公司描述',
    dataIndex: 'description',
    width: 80
  },
  {
    title: '工作室',
    dataIndex: '3',
    width: 80
  },
  {
    title: '地址',
    dataIndex: 'address',
    width: 100,
    render: (text) => <Tag color="magenta">{text}</Tag>
  },
  {
    title: '营业执照',
    dataIndex: '7',
    width: 240,
    render: (text) => <EncipherText text={text} />
  },
  {
    title: '更新日期',
    dataIndex: '7',
    width: 240,
    sorter: true,
    render: (text) => dayjs(Number(text)).format('YYYY-MM-DD HH:MM')
  }
]
