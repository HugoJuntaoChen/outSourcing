import { Button, Modal, message } from 'antd'
import { useMemo, useState } from 'react'
import type { ProtalProps } from '../../type'

const UpdateModal = ({ title, onOk, onReload, content, children, configInfo, ...props }: ProtalProps) => {
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)

  const { type, buttonProps } = useMemo(() => {
    const newIsEdit = Boolean(configInfo?.ID)
    return {
      isEdit: newIsEdit,
      type: newIsEdit ? '编辑' : '添加',
      buttonProps: newIsEdit
        ? { text: '添加信息', type: 'text', style: { color: '#FF384C' } }
        : { text: '编辑' }
    }
  }, [configInfo])

  const handleOk = async () => {
    setLoading(true)
    try {
      await onOk?.()
      message.success(`${type}成功`)
      onReload?.()
    } catch (error) {
      message.error(`${type}失败: ${error}`)
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
        title={`${type}${title}`}
        maskClosable={false}
        {...props}
      >
        {content}
      </Modal>
      <div onClick={() => { setVisible(true) }}>
        {children ?? (
          <Button style={{ color: '#FF384C' }}>
            {buttonProps?.text}
          </Button>
        )}
      </div>
    </div>
  )
}

export default UpdateModal
