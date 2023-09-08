import type { ColumnsType } from 'antd/es/table'
import { EComponentType } from '@/enums'
import type { IFormItemProps } from '@/components/type'
import { CustomItemEnum, CustomItemStrategy } from '@/config'

export const forms: IFormItemProps[] = [
  {
    type: EComponentType.Input,
    key: 'type',
    props: {
      placeholder: '请输入设备类型',
      style: { width: 200 }
    }
  },
  {
    type: EComponentType.Input,
    key: 'equipment_model',
    props: {
      placeholder: '请输入设备型号',
      style: { width: 200 }
    }
  },
  {
    type: EComponentType.Input,
    key: 'serial_number',
    props: {
      placeholder: '请输入设备编号',
      style: { width: 200 }
    }
  }
]

export const columns: ColumnsType<Record<string, any>> = [
  {
    title: '设备类型',
    dataIndex: 'type',
    width: 180
  },
  {
    title: '设备型号',
    dataIndex: 'equipment_model',
    width: 180
  },
  {
    title: '设备编号',
    dataIndex: 'serial_number',
    width: 180
  },
  {
    title: '单价(元)/天',
    dataIndex: 'price_per_day',
    width: 100,
    render: (value: any) => CustomItemStrategy[CustomItemEnum.Money]({ value })
  },
  {
    title: '个数',
    dataIndex: 'quantity',
    width: 80
  },
  {
    title: '登记日期',
    dataIndex: 'registration_date',
    width: 240,
    sorter: (a, b) => new Date(a.UpdatedAt).valueOf() - new Date(b.UpdatedAt).valueOf(),
    render: (value: any) => CustomItemStrategy[CustomItemEnum.TimeStr]({ value })
  }
]
