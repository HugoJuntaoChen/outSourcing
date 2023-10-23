import React, { useRef, useState } from 'react'
import { type ResultFileEnum } from '@/enums/config'
import { useProjectDetailContext } from '@/pages/Project/pages/Detail/context'
import { Space, Upload, type UploadProps, message, Spin, Typography } from 'antd'
import { IconAdd, IconFile } from '@/static/Icons'
import { updateFile } from '@/api'
import moment from 'moment'
import './index.less'
import Dragger from 'antd/lib/upload/Dragger'

const { Paragraph } = Typography

interface IProps {
  scene: ResultFileEnum
  value: any[]
  type?: 'Upload' | 'Dragger'
  accept?: string
  hint?: string
  maxSize?: number
}

const ProjectUpload: React.FC<IProps> = ({ scene, value, type, accept, hint, maxSize }) => {
  const currentFiles = useRef(value ?? [])
  const [fileList, setFileList] = useState(value ?? [])
  const [loadingMap, setLoadingMap] = useState<Record<string, boolean>>({})

  const { id, uploadProjectFile, deleteProjectFile } = useProjectDetailContext()

  const defaultProps: UploadProps = {
    fileList,
    accept,
    multiple: true,
    beforeUpload: (file) => {
      if (!maxSize) {
        return true
      }

      const isLt = file.size / 1024 / 1024 < maxSize
      if (!isLt) {
        message.error(`文件大于${maxSize}MB，禁止上传!`)
      }
      return isLt
    },
    onRemove: async (file) => {
      try {
        setLoadingMap({ ...loadingMap, [String(file?.url)]: true })
        await deleteProjectFile({
          project_id: id,
          file_path: file?.url,
          file_name: file?.name,
          scene
        })
        const newList = [...currentFiles.current?.filter((item: any) => item.uid !== file.uid)]
        setFileList(newList)
        message.success('删除成功')
      } catch (error) {
        message.error('删除失败')
      }
    },
    itemRender: (originNode, file) => (
      <Spin spinning={Boolean(loadingMap[String(file.url)])}>
        {originNode}
      </Spin>
    ),
    customRequest: (options) => {
      const { file, onSuccess, onError } = options

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const name = file.name ?? ''
      const uid = String(moment().valueOf())
      const currentUrl = `https://media-bixi.obs.cn-south-1.myhuaweicloud.com/${uid}`

      const currentList = [...(fileList ?? [])]
      const currentFileInfo = {
        uid,
        url: currentUrl,
        percent: 0,
        status: 'uploading',
        thumbUrl: currentUrl,
        name
      }
      currentFiles.current = [...currentList, currentFileInfo]
      setFileList([...currentList, currentFileInfo])

      updateFile({
        data: { Key: uid, SourceFile: file },
        onSucess: async () => {
          try {
            // eslint-disable-next-line @typescript-eslint/await-thenable, @typescript-eslint/no-confusing-void-expression
            await uploadProjectFile({
              project_id: id,
              file_path: currentFileInfo?.url,
              file_name: currentFileInfo?.name,
              scene
            })
            currentFiles.current?.forEach((item: any) => {
              if (item.uid === uid) {
                item.status = 'success'
              }
            })
            setFileList(JSON.parse(JSON.stringify(currentFiles.current)))
            onSuccess?.({ result: '上传成功' })
            message.success('上传成功')
          } catch (error) {
            const newFileList = currentFiles.current?.filter((item: any) => item.uid !== uid) ?? []
            currentFiles.current = newFileList
            setFileList(newFileList)
          }
        },
        onError: (error) => {
          onError?.(error)
          currentFiles.current?.forEach((item: any) => {
            item.status = 'error'
          })
          setFileList(JSON.parse(JSON.stringify(currentFiles.current)))
        },
        progressCallback: ({ percent }: any) => {
          currentFiles.current?.forEach((item: any) => {
            if (item.uid === uid) {
              item.percent = percent
            }
          })
          setFileList(JSON.parse(JSON.stringify(currentFiles.current)))
        }
      })
    }
  }

  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      {type === 'Upload'
        ? (
          <div className='upload-wrapper'>
            <Upload
              listType="picture-card"
              {...defaultProps}
              >
              <div className='upload-button'>
                <div className='icon'>{IconAdd}</div>
                <div className='text'>点击上传图片</div>
              </div>
            </Upload>
          </div>
          )
        : (
          <Dragger
            className='dragger-wrapper'
            listType="picture"
            {...defaultProps}
          >
            <Space align='center' direction='vertical' style={{ width: '100%' }}>
              <div className='upload-icon'>{IconFile} </div>
              <div>
                <div className="upload-text">点击或拖拽文件到此处上传</div>
                <Paragraph className="upload-hint">
                  {hint}
                </Paragraph>
              </div>

              <div className='upload-button'>
                <span className='button'>上传</span>
              </div>
            </Space>
          </Dragger>
          )}
    </Space>
  )
}

export default ProjectUpload
