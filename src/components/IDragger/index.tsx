import { IconFile } from '@/static/Icons'
import Dragger, { type DraggerProps } from 'antd/lib/upload/Dragger'
import React, { useRef, useState } from 'react'

import './index.less'
import { Space, message } from 'antd'
import { updateFile } from '@/api'
import moment from 'moment'
interface Props extends DraggerProps {
  hint?: string
}

const IDragger: React.FC<Props & any> = (props) => {
  const { onChange, value, multiple, hint } = props
  const currentFiles = useRef(value?.fileList ?? [])
  const [fileList, setFileList] = useState(value ?? [])

  return (
    <Dragger
      className='dragger-wrapper'
      accept=".jpg, .jpeg, .png, .pdf"
      listType="picture"
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
          onSucess: async () => {
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
            } catch (error) {}
          },
          onError: (error) => {
            onError?.(error)
            currentFiles.current?.forEach((item: any) => {
              item.status = 'error'
            })
            setFileList(JSON.parse(JSON.stringify(currentFiles.current)))
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
      onRemove={async (file) => {
        const newList = [...currentFiles.current?.filter((item: any) => item.uid !== file.uid)]
        setFileList(newList)
        currentFiles.current = newList
        onChange([...newList])
        return false
      }}
      {...props}

    >
      <Space align='center' direction='vertical' style={{ width: '100%' }}>
        <div className='upload-icon'>{IconFile} </div>
        <div>
          <div className="upload-text">点击或拖拽文件到此处上传</div>
          <div className="upload-hint">
            {hint ?? 'Only pdf, png, jpg can be uploaded, and the size doe:100MB'}
          </div>
        </div>

        <div className='upload-button'>
          <span className='button'>上传</span>
        </div>
      </Space>
    </Dragger>
  )
}
export default IDragger
