import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import React, { useState } from 'react'
import type { EncipherTextProp } from './type'
import './index.less'

const EncipherText: React.FC<EncipherTextProp> = ({ text, least = 6, view }) => {
  const [visible, setVisible] = useState(false)
  const stringText = String(text)
  const textLen = stringText.length
  const filterText = least > textLen ? text : `${stringText.substring(0, least)}${new Array(textLen - least).fill('*').join('')}`
  return (
    <Space>
      {visible ? text : filterText}
      <div className='view-icon'>
        {(view ?? false) && (visible
          ? <EyeOutlined onClick={() => { setVisible(false) }} style={{ color: ' var(--ant-primary-color)' }} />
          : <EyeInvisibleOutlined onClick={() => { setVisible(true) } } style={{ color: 'rgba(19, 21, 35, 0.48)' }} />)}
      </div>
    </Space>
  )
}

export default EncipherText
