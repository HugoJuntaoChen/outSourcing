import { IconAdd } from '@/static/Icons'
import { Upload } from 'antd'
import React, { useRef } from 'react'
import './index.less'
interface Props {
  value: any[]
  onChange: () => any
}

const IUpload = ({ value, onChange }: Props) => {
  const buttonRef = useRef<any>()

  return (
    <div className='upload-wrapper'>
      <div
        className='upload-button'
        onClick={() => {
          buttonRef.current.click()
        }}
      >
        <div className='icon'>{IconAdd}</div>
        <div className='text'>点击上传图片</div>
      </div>
      <Upload
        action="/upload.do"
        listType="picture-card"
      >
        <div ref={ref => { buttonRef.current = ref }} style={{ display: 'none' }} />
      </Upload>
    </div >

  )
}

export default IUpload
