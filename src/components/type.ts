import { type EComponentType } from '@/enums/componentType'
import type { FormProps } from 'antd'
export interface IFormItemProps {
  key: string
  label?: string
  type: EComponentType
  props?: Record<string, any>
}

export interface IFormProps extends FormProps {
  forms?: IFormItemProps[]
  formProps?: FormProps
  search?: boolean
  render?: (args?: unknown) => JSX.Element | null
}

export type ITableProps = Record<string, any>

export interface IFormTableProps {
  form: IFormProps
  table: ITableProps
}
