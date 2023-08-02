import { type EComponentType } from '@/enums/componentType'
import type { FormProps, FormRule } from 'antd'
export interface IFormItemProps {
  key: string
  label?: string
  type: EComponentType
  props?: Record<string, any>
  name?: string
  placeholder?: string
  rules?: FormRule[]
}
export interface IFormProps extends FormProps {
  forms?: IFormItemProps[]
  formProps?: FormProps
  search?: boolean
  // 默认平铺
  tiling?: boolean
  // 多种渲染方式
  multipleForms?: IFormItemProps[][]
}

export type ITableProps = Record<string, any>

export interface IFormTableProps {
  form: IFormProps
  table: ITableProps
}
