import type { ColumnsType } from 'antd/es/table'
import { EncipherText } from '@/components'
import { EComponentType } from '@/enums'
import type { IFormItemProps } from '@/components/type'
import { IdentityMap } from '@/enums/config'

export const forms: IFormItemProps[] = [
  {
    type: EComponentType.Input,
    key: 'name',
    props: {
      placeholder: '请输入姓名搜索',
      style: { width: 200 }
    }
  },
  {
    type: EComponentType.IdentitySelect,
    key: 'identity',
    props: {
      placeholder: '请选择身份过滤',
      style: { width: 200 }
    }
  }
]

export const columns: ColumnsType<Record<string, any>> = [
  {
    title: 'ID',
    dataIndex: 'ID',
    width: 60
  },
  {
    title: '姓名',
    dataIndex: 'name',
    width: 180
  },
  {
    title: '身份',
    dataIndex: 'identity',
    width: 180,
    render: val => IdentityMap[val] ?? '-'
  },
  {
    title: '帐户名',
    dataIndex: 'username',
    width: 180
  },
  {
    title: '密码',
    dataIndex: 'password',
    width: 120,
    render: (text) => <EncipherText text={text} view least={0} />
  }
]
