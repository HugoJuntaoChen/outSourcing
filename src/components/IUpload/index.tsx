import { IconAdd } from '@/static/Icons'
import { Upload, message, type UploadProps } from 'antd'
import React from 'react'
import './index.less'
import { obsClient } from '../../api'
import moment from 'moment'

const IUpload: React.FC<UploadProps & any> = (props) => {
  const { onChange, value } = props

  return (
    <div className='upload-wrapper'>
      <Upload
        action="/upload.do"
        listType="picture-card"
        {...props}
        defaultFileList={value || []}
        customRequest={(options) => {
          const { file, onSuccess, onError } = options
          const uid = moment().valueOf()
          onChange([{ uid: String(uid), url: `https://media-bixi.obs.cn-south-1.myhuaweicloud.com/${uid}` }])
          obsClient.putObject({
            Bucket: 'media-bixi',
            Key: String(uid),
            SourceFile: file
          }).then((result: any) => {
            message.success('上传成功')
            onSuccess?.({ result: '上传成功' })
          }).catch((error: any) => {
            message.error('上传失败')
            onError?.(error)
          })
        }}
      >
        <div className='upload-button'>
          <div className='icon'>{IconAdd}</div>
          <div className='text'>点击上传图片</div>
        </div>
      </Upload>
    </div >

  )
}

export default IUpload
