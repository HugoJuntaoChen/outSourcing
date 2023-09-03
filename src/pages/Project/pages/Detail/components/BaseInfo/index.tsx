import { Descriptions } from 'antd'
import React from 'react'
import './index.less'
import Tag from '@/components/Tag'
import { useProjectDetailContext } from '../../context'
import moment from 'moment'
import { FlowStatusMap } from '@/enums/config'
const BaseInfo = () => {
  const { data } = useProjectDetailContext()

  return (
    <div className='project-detail-base-info-wrapper'>
      <Descriptions
        title={(
          <div className='header'>
            基本信息
            {Boolean(FlowStatusMap?.[data?.flow_status]) && <Tag type='error' size='small'>{FlowStatusMap?.[data?.flow_status]}</Tag>}
          </div>
        )}
      >
        <Descriptions.Item label="项目名称">{data?.project_name}</Descriptions.Item>
        <Descriptions.Item label="视频类型">{data?.video_type}</Descriptions.Item>
        <Descriptions.Item label="视频主题" className='special'>{data?.video_theme}</Descriptions.Item>
        <Descriptions.Item label="视频时长">{data?.duration ?? 0}秒</Descriptions.Item>
        <Descriptions.Item label="交片时间">{moment.unix(data?.delivery_time ?? 0).format('YYYY-MM-DD HH:MM:SS')}</Descriptions.Item>
        <Descriptions.Item label="预算" className='special'>{data?.budget}</Descriptions.Item>
        <Descriptions.Item label="拍摄地点">{data?.location}</Descriptions.Item>
        <Descriptions.Item label="成片格式">{data?.format}</Descriptions.Item>
        <Descriptions.Item label="项目负责人" className='special'>{data?.contact}</Descriptions.Item>
        <Descriptions.Item label="项目简介">
          {data?.budget}
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
}

export default BaseInfo
