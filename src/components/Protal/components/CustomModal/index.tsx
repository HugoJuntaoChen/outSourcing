import { Modal, message } from 'antd'
import { useState } from 'react'
import type { ProtalProps } from '../../type'

const CustomModal = ({ title, onOk, onReload, content, children, ...props }: ProtalProps) => {
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)

  const handleOk = async () => {
    setLoading(true)
    try {
      await onOk?.()
      message.success('编辑成功')
      onReload?.()
    } catch (error) {
      message.error(`编辑失败: ${error}`)
    } finally {
      setLoading(false)
      onReload?.()
    }
  }

  return (
    <div>
      <Modal
        open={visible}
        closable={false}
        confirmLoading={loading}
        onOk={handleOk}
        onCancel={() => { setVisible(false) }}
        title={title}
        maskClosable={false}
        {...props}
      >
        {content}
      </Modal>
      <div onClick={() => { setVisible(true) }}>
        {children}
      </div>
    </div>
  )
}

export default CustomModal
