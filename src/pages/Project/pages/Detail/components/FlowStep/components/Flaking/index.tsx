
import React, { useMemo } from 'react'
import { useProjectDetailContext } from '../../../../context'
import { Descriptions } from 'antd'
import { ProjectUpload } from '../../..'
import { ResultFileEnum } from '@/enums/config'
import { uploadConfig } from '@/config'
const Flaking: React.FC = () => {
  const { data } = useProjectDetailContext()

  const info: any = useMemo(() => data?.result_plan ?? {}, [data])

  return (
    <div className='project-detail-step-wrapper'>
      <Descriptions>
        <Descriptions.Item label="纯净版">
          <ProjectUpload
            value={info?.pure_file?.map((item: any) => ({
              uid: item?.link,
              name: item?.file_name,
              url: item?.link,
              thumbUrl: item?.link
            }))}
            scene={ResultFileEnum.PureFile}
             {...uploadConfig.all}
          />
        </Descriptions.Item>
        <Descriptions.Item label="交付版">
          <ProjectUpload
            value={info?.upload_file?.map((item: any) => ({
              uid: item?.link,
              name: item?.file_name,
              url: item?.link,
              thumbUrl: item?.link
            }))}
            scene={ResultFileEnum.UploadFile}
             {...uploadConfig.all}
          />
        </Descriptions.Item>
        <Descriptions.Item label="工程文件">
          <ProjectUpload
            value={info?.project_file?.map((item: any) => ({
              uid: item?.link,
              name: item?.file_name,
              url: item?.link,
              thumbUrl: item?.link
            }))}
            scene={ResultFileEnum.ProjectFile}
            {...uploadConfig.all}
          />
        </Descriptions.Item>
        <Descriptions.Item label="上传结算单" span={1}>
          <ProjectUpload
            value={info?.complete_file?.map((item: any) => ({
              uid: item?.link,
              name: item?.file_name,
              url: item?.link,
              thumbUrl: item?.link
            }))}
            scene={ResultFileEnum.CompleteFile}
            {...uploadConfig.default}
          />
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
}

export default Flaking
