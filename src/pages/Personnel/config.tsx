import { Tag } from 'antd'
import dayjs from 'dayjs'
import type { ColumnsType } from 'antd/es/table'
import { EncipherText } from '@/components'
import { EComponentType } from '@/enums'
import type { IFormItemProps } from '@/components/type'
import { LevelOptions } from '@/config'

export const forms: IFormItemProps[] = [
  {
    type: EComponentType.SELECT,
    key: 'company_id',
    props: {
      placeholder: '请选择公司',
      style: { width: 200 }
    }
  },
  {
    type: EComponentType.SELECT,
    key: 'roles',
    props: {
      placeholder: '请选择角色',
      style: { width: 200 },
      mode: 'multiple'
    }
  },
  {
    type: EComponentType.SELECT,
    key: 'level',
    props: {
      placeholder: '请选择级别',
      style: { width: 200 },
      mode: 'multiple',
      options: LevelOptions
    }
  },
  {
    type: EComponentType.INPUT,
    key: 'name',
    props: {
      placeholder: '请输入姓名',
      style: { width: 200 }
    }
  }
]

export const columns: ColumnsType<Record<string, any>> = [
  {
    title: '公司名称',
    dataIndex: 'company',
    width: 180
  },
  {
    title: '角色',
    dataIndex: 'role',
    width: 80
  },
  {
    title: '姓名',
    dataIndex: 'name',
    width: 80
  },
  {
    title: '级别',
    dataIndex: 'level',
    width: 100,
    render: (text) => <Tag color="magenta">{text}</Tag>
  },
  {
    title: '身份证',
    dataIndex: 'id_card',
    width: 240
  },
  {
    title: '银行卡',
    dataIndex: 'bank_account',
    width: 180,
    render: (text) => <EncipherText text={text} />
  },
  {
    title: '更新时间',
    dataIndex: '7',
    width: 240,
    sorter: true,
    render: (text) => dayjs(Number(text)).format('YYYY-MM-DD HH:MM')
  }
]
