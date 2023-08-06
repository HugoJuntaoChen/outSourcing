import { IconFile } from '@/static/Icons'
import Dragger from 'antd/lib/upload/Dragger'
import React from 'react'

interface Props {
  hint?: string
}
const IDragger: React.FC<Props> = ({ hint }) => (
  <Dragger>
    <div className='upload-icon'>{IconFile} </div>
    <div className="upload-text">点击或拖拽文件到此处上传</div>
    <div className="upload-hint">
      {hint}
    </div>
    <div className='upload-button'>
      <span className='button'>上传</span>
    </div>
  </Dragger>
)
export default IDragger
