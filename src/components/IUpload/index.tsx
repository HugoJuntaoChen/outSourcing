import { IconAdd } from '@/static/Icons'
import { Upload, message, type UploadProps } from 'antd'
import React, { useRef, useState } from 'react'
import './index.less'
import { updateFile } from '@/api'
import moment from 'moment'

const IUpload: React.FC<UploadProps & any> = (props) => {
  const { onChange, value, multiple } = props
  const currentFiles = useRef(value ?? [])
  const [fileList, setFileList] = useState(value ?? [])

  return (
    <div className='upload-wrapper'>
      <Upload
        listType="picture-card"
        fileList={fileList}
        customRequest={(options) => {
          const { file, onSuccess, onError } = options

          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          const name = file.name ?? ''

          const uid = String(moment().valueOf())
          const currentList = multiple ? [...(fileList ?? [])] : []
          const currentFileInfo = {
            uid,
            url: `https://media-bixi.obs.cn-south-1.myhuaweicloud.com/${uid}`,
            percent: 0,
            status: 'uploading',
            name
          }
          currentFiles.current = [...currentList, currentFileInfo]
          setFileList([...currentList, currentFileInfo])

          updateFile({
            data: { Key: uid, SourceFile: file },
            onSucess: () => {
              try {
                onSuccess?.({ result: '上传成功' })
                message.success('上传成功')

                currentFiles.current?.forEach((item: any) => {
                  if (item.uid === uid) {
                    item.status = 'success'
                  }
                })
                setFileList(JSON.parse(JSON.stringify(currentFiles.current)))

                onChange?.(currentFiles.current?.filter((item: any) => item.status === 'success'))
              } catch (error) {
                message.error('上传失败')
              }
            },
            onError: (error) => {
              onError?.(error)
              currentFiles.current?.forEach((item: any) => {
                item.status = 'error'
              })
              setFileList(JSON.parse(JSON.stringify(currentFiles.current)))
              message.error('上传失败')
            },
            progressCallback: ({ speed, percent }: any) => {
              currentFiles.current?.forEach((item: any) => {
                if (item.uid === uid) {
                  item.percent = percent
                }
              })
              setFileList(JSON.parse(JSON.stringify(currentFiles.current)))
            }
          })
        }}
        onRemove={(file) => {
          const newList = [...currentFiles.current?.filter((item: any) => item.uid !== file.uid)]
          currentFiles.current = newList
          setFileList(newList)
          onChange(JSON.parse(JSON.stringify(newList)))
        }}
        {...props}
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
