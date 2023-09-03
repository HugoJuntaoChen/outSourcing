import moment from 'moment'
import type { ColumnsType } from 'antd/es/table'
import { EncipherText } from '@/components'
import { EComponentType } from '@/enums'
import { type IFormItemProps } from '@/components/type'

export const forms: IFormItemProps[] = [
  {
    type: EComponentType.Input,
    key: 'name',
    props: {
      placeholder: '请输入公司/工作室',
      style: { width: 200 }
    }
  }
]

export const columns: ColumnsType<Record<string, any>> = [
  {
    title: '公司名称',
    dataIndex: 'name',
    width: 180
  },
  {
    title: '公司描述',
    dataIndex: 'description',
    width: 240
  },
  {
    title: '工作室',
    dataIndex: 'studio',
    width: 180
  },
  {
    title: '地址',
    dataIndex: 'address',
    width: 220
  },
  {
    title: '营业执照',
    dataIndex: 'unified_credit_code',
    width: 180,
    render: (text) => <EncipherText text={text} />
  },
  {
    title: '更新时间',
    dataIndex: 'UpdatedAt',
    width: 180,
    sorter: (a, b) => new Date(a.UpdatedAt).valueOf() - new Date(b.UpdatedAt).valueOf(),
    render: (val) => moment(new Date(val)).format('YYYY-MM-DD HH:MM:SS')
  }
]
