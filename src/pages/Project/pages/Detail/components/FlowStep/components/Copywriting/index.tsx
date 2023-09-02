import { FileView } from '@/components'
import { Descriptions, Empty, Space } from 'antd'

import React, { useMemo } from 'react'
import { useProjectDetailContext } from '../../../../context'
import moment from 'moment'

const Copywriting: React.FC = () => {
  const { data } = useProjectDetailContext()

  const info: any = useMemo(() => data?.text_plan ?? {}, [data])

  return (
    <div className='project-detail-step-wrapper'>
      <Descriptions>
        <Descriptions.Item label="执行人">{info?.execute_people?.map((item: any) => item?.name)?.join('、')}</Descriptions.Item>
        <Descriptions.Item label="预算">{info?.budget >= 0 ? `${info?.budget / 100}元` : '未知'}</Descriptions.Item>
        <Descriptions.Item label="截止日期">{moment.unix(info?.deadline ?? 0).format('YYYY-MM-DD HH:MM')}</Descriptions.Item>
        <Descriptions.Item label="实际成本">{info?.real_cost >= 0 ? `${info?.real_cost / 100}元` : '未知'}</Descriptions.Item>
        <Descriptions.Item label="完成日期">{info?.complete_date >= 0 ? moment.unix(info?.complete_date ?? 0).format('YYYY-MM-DD HH:MM') : '未知'}</Descriptions.Item>
        <Descriptions.Item label="实际人力">{info?.real_effors >= 0 ? `${info?.real_effors / 100}/人力天` : '未知'}</Descriptions.Item>
        <Descriptions.Item label="节点产物" span={3}>
          <Space direction='vertical' style={{ width: '100%' }}>
            {info?.result_file?.length
              ? (
                  info?.script_file?.map((item: any, i: any) => <FileView key={i} name={item?.file_name} link={item?.link} />))
              : <Empty description='暂未上传' style={{ width: 80 }} />
            }
          </Space>
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
}

export default Copywriting
