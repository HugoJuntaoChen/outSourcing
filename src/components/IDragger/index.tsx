import { IconFile } from '@/static/Icons'
import Dragger, { type DraggerProps } from 'antd/lib/upload/Dragger'
import React from 'react'
import { obsClient, updateFile } from '../../api'
import moment from 'moment'

interface Props extends DraggerProps {
  hint?: string
}
const IDragger: React.FC<Props & any> = ({ hint, ...props }) => {
  return (
    <>
      <Dragger
      {...props}
      customRequest={(options) => {
        const { file, onSuccess, onError } = options
        console.log(file, onSuccess, onError, updateFile)
        obsClient.putObject({
          Bucket: 'media-bixi',
          Key: String(moment().valueOf()),
          SourceFile: file
        }).then((result: any) => {
          console.log(result)
        }).catch((err: any) => {
          console.log(err)
        })
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
      <input type="file" id="input-file"/>
    </>

  )
}
export default IDragger
