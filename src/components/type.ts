import type { FormInstance, FormProps } from 'antd'

export interface IFormItemProps {
  key: string
  label?: string
  type: string
  props?: Record<string, any>
}

export interface IFormProps extends FormProps {
  forms: IFormItemProps[]
  formRef?: (form?: FormInstance<any> | undefined) => any
  formProps?: FormProps
  search?: boolean
}

export type ITableProps = Record<string, any>

export interface IFormTableProps {
  form: IFormProps
  table: ITableProps
}
