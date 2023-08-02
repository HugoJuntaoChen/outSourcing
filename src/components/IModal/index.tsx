import { Modal } from 'antd'
import { type PropsWithChildren } from 'react'

interface IProps {
  onOk: (args?: any) => void
  onCancel: (args?: any) => void
  isEdit: boolean
}

export default function IModal (props: PropsWithChildren<IProps>) {
  const { onCancel, onOk, children, isEdit } = props
  return (
    <Modal
    title={`${isEdit ? '编辑' : '添加'}信息`}
     visible={true} width={838} onOk={onOk} onCancel={onCancel}>
      {children}
    </Modal>
  )
}
