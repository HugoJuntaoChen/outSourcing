import moment from 'moment'
import type { ColumnsType } from 'antd/es/table'
import { EncipherText } from '@/components'
import { EComponentType } from '@/enums'
import type { IFormItemProps } from '@/components/type'
import { LevelIcon, LevelOptions } from '@/config'
export const forms: IFormItemProps[] = [
  {
    type: EComponentType.CompanySelect,
    key: 'company_id',
    props: {
      placeholder: '请选择公司',
      style: { width: 200 }
    }
  },
  {
    type: EComponentType.RoleSelect,
    key: 'roles',
    props: {
      placeholder: '请选择角色',
      style: { width: 200 },
      mode: 'multiple'
    }
  },
  {
    type: EComponentType.Select,
    key: 'level',
    props: {
      placeholder: '请选择级别',
      style: { width: 200 },
      mode: 'multiple',
      options: LevelOptions
    }
  },
  {
    type: EComponentType.Input,
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
    width: 200,
    render: (val, { companyNameMap }) => companyNameMap?.[val]
  },
  {
    title: '角色',
    dataIndex: 'role',
    width: 100,
    render: (val, { roleConfig }) => roleConfig?.map?.[val] ?? val
  },
  {
    title: '姓名',
    dataIndex: 'name',
    width: 100
  },
  {
    title: '级别',
    dataIndex: 'level',
    width: 100,
    render: (text) => LevelIcon(text)
  },
  {
    title: '身份证',
    dataIndex: 'id_card',
    width: 220
  },
  {
    title: '银行卡',
    dataIndex: 'bank_account',
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
