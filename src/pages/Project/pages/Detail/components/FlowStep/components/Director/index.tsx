import { Descriptions } from 'antd'

import React, { useMemo } from 'react'
import { useProjectDetailContext } from '../../../../context'
import moment from 'moment'
import { ResultFileEnum } from '@/enums/config'
import { ProjectUpload } from '../../..'
import { uploadConfig } from '@/config'
const Director: React.FC = () => {
  const { data } = useProjectDetailContext()

  const info: any = useMemo(() => data?.recording_plan ?? {}, [data])

  return (
    <div className='project-detail-step-wrapper'>
      <Descriptions>
        <Descriptions.Item label="执行人">{info?.execute_people?.map((item: any) => item?.name)?.join('、')}</Descriptions.Item>
        <Descriptions.Item label="预算">{info?.budget >= 0 ? `${info?.budget / 100}元` : '未知'}</Descriptions.Item>
        <Descriptions.Item label="截止日期">{moment.unix(info?.deadline ?? 0).format('YYYY-MM-DD HH:MM')}</Descriptions.Item>
        <Descriptions.Item label="实际成本">{info?.real_cost >= 0 ? `${info?.real_cost / 100}元` : '未知'}</Descriptions.Item>
        <Descriptions.Item label="完成日期">{info?.complete_date >= 0 ? moment.unix(info?.complete_date ?? 0).format('YYYY-MM-DD HH:MM') : '未知'}</Descriptions.Item>
        <Descriptions.Item label="实际人力">{info?.real_effors >= 0 ? `${info?.real_effors / 100}/人力天` : '未知'}</Descriptions.Item>
        <Descriptions.Item label="脚本终稿" span={1}>
          <ProjectUpload
            value={info?.script_file?.map((item: any) => ({
              uid: item?.link,
              name: item?.file_name,
              url: item?.link,
              thumbUrl: item?.link
            }))}
            scene={ResultFileEnum.ScriptFile}
            {...uploadConfig.default}
          />
        </Descriptions.Item>
        <Descriptions.Item label="素材终稿" span={1}>
          <ProjectUpload
            value={info?.material_file?.map((item: any) => ({
              uid: item?.link,
              name: item?.file_name,
              url: item?.link,
              thumbUrl: item?.link
            }))}
            scene={ResultFileEnum.MaterialFile}
            {...uploadConfig.all}
          />
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
}

export default Director
