import { type FormInstance, type ModalProps } from 'antd'
import { type ReactNode } from 'react'

export enum ProtalTypeEnum {
  MODAL = 'modal',
  DELETE = 'delete',
  EDIT = 'edit',
  VIEW = 'view',
  FORM = 'form'
}

export interface ProtalProps extends ModalProps {
  type?: ProtalTypeEnum
  onOk?: () => Promise<any>
  onReload?: () => Promise<any>
  title?: string
  content?: ReactNode
  formRef?: React.RefObject<FormInstance<any>>
  configInfo?: Record<string, any>
}
