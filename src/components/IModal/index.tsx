import { Button, Modal } from 'antd'
import { type PropsWithChildren } from 'react'
import './index.less'
interface IProps {
  onOk: (args?: any) => void
  onCancel: (args?: any) => void
  isEdit: boolean
}

export default function IModal (props: PropsWithChildren<IProps>) {
  const { onCancel, onOk, children, isEdit } = props
  const footer = () => {
    return (
      <>
        <Button onClick={onCancel}>取消</Button>
        <Button onClick={onOk} type='primary'>确定</Button>
      </>
    )
  }
  return (
    <Modal
    title={`${isEdit ? '编辑' : '添加'}信息`}
     open={true} width={838}
     footer={footer()}
     onCancel={onCancel}
     className='IModal'
     >
      {children}
    </Modal>
  )
}
