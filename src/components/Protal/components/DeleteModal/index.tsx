import { Button, Divider, Modal, message } from 'antd'
import { useState } from 'react'
import type { ProtalProps } from '../../type'
import './index.less'

const DeleteModal = ({ title, onOk, onReload, ...props }: ProtalProps) => {
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)

  const handleOk = async () => {
    setLoading(true)
    try {
      await onOk?.()
      setVisible(false)
      message.success('删除成功')
      onReload?.()
    } catch (error) {
      message.error(`删除失败: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Modal
        className='delete-modal-wrapper'
        open={visible}
        closable={false}
        footer={null}
        title={null}
        {...props}
      >
        <div className='delete-body'>
          {title}
        </div>
        <Divider />
        <div className='delete-footer'>
          <div className='delete-footer-button'>
            <Button
              block
              type="text"
              className='submit-button'
              loading={loading}
              onClick={handleOk}
            >
              确认
            </Button>
          </div>
          <Divider type='vertical' />
          <div className='delete-footer-button'>
            <Button
              block
              type="text"
              className='close-button'
              onClick={() => { setVisible(false) }}
            >
              取消
            </Button>
          </div>
        </div>
      </Modal>
      <Button
        type="text"
        size='small'
        style={{ color: '#FF384C' }}
        onClick={() => { setVisible(true) }}
      >
        删除
      </Button>
    </div>

  )
}

export default DeleteModal
