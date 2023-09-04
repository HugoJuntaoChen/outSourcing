import { IconFile } from '@/static/Icons'
import Dragger, { type DraggerProps } from 'antd/lib/upload/Dragger'
import React from 'react'

interface Props extends DraggerProps {
  hint?: string
}
const IDragger: React.FC<Props & any> = ({ value, hint, ...props }) => {
  return (
    <>
      <Dragger
        {...props}
        fileList={[]}
        onChange={(file) => {
        }}
        customRequest={(options) => {
        }}
      >
        <div className='upload-icon'>{IconFile} </div>
        <div className="upload-text">点击或拖拽文件到此处上传</div>
        <div className="upload-hint">
          {hint}
        </div>
        <div className='upload-button'>
          <span className='button'>上传</span>
        </div>
      </Dragger>
    </>
  )
}
export default IDragger
