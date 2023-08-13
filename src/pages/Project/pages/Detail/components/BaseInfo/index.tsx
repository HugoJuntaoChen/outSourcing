import { Descriptions } from 'antd'
import React from 'react'
import './index.less'
import Tag from '@/components/Tag'
const BaseInfo = () => {
  return (
    <div className='project-detail-base-info-wrapper'>
      <Descriptions title={<div className='header'>
        基本信息
        <Tag type='error' size='small'>成本风险</Tag>
      </div>}
      >
        <Descriptions.Item label="项目名称">Cloud Database</Descriptions.Item>
        <Descriptions.Item label="视频类型">Prepaid</Descriptions.Item>
        <Descriptions.Item label="视频主题" className='special'>18:00:00</Descriptions.Item>
        <Descriptions.Item label="视频时长">$80.00</Descriptions.Item>
        <Descriptions.Item label="交片时间">$20.00</Descriptions.Item>
        <Descriptions.Item label="预算" className='special'>$60.00</Descriptions.Item>
        <Descriptions.Item label="拍摄地点">$80.00</Descriptions.Item>
        <Descriptions.Item label="成片格式">$20.00</Descriptions.Item>
        <Descriptions.Item label="项目负责人" className='special'>$60.00</Descriptions.Item>
        <Descriptions.Item label="项目简介">
          1213123123123123123123123123
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
}

export default BaseInfo
