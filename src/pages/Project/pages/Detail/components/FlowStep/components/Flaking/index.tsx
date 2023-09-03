
import React, { useMemo } from 'react'
import { useProjectDetailContext } from '../../../../context'
import { Descriptions, Empty, Space } from 'antd'
import { FileView } from '@/components'
const Flaking: React.FC = () => {
  const { data } = useProjectDetailContext()

  const info: any = useMemo(() => data?.result_plan ?? {}, [data])

  return (
    <div className='project-detail-step-wrapper'>
      <Descriptions>
        <Descriptions.Item label="纯净版">
          <Space direction='vertical' style={{ width: '100%' }}>
            {info?.pure_file?.length
              ? (
                  info?.pure_file?.map((item: any, i: any) => <FileView key={i} name={item?.file_name} link={item?.link} />))
              : <Empty description='暂未上传' style={{ width: 80 }} />
            }
          </Space>
        </Descriptions.Item>
        <Descriptions.Item label="交付版">
          <Space direction='vertical' style={{ width: '100%' }}>
            {info?.upload_file?.length
              ? (
                  info?.upload_file?.map((item: any, i: any) => <FileView key={i} name={item?.file_name} link={item?.link} />))
              : <Empty description='暂未上传' style={{ width: 80 }} />
            }
          </Space>
        </Descriptions.Item>
        <Descriptions.Item label="工程文件">
          <Space direction='vertical' style={{ width: '100%' }}>
            {info?.project_file?.length
              ? (
                  info?.upload_file?.map((item: any, i: any) => <FileView key={i} name={item?.file_name} link={item?.link} />))
              : <Empty description='暂未上传' style={{ width: 80 }} />
            }
          </Space>
        </Descriptions.Item>
        {/* <Descriptions.Item label="结算单">
          <Space direction='vertical' style={{ width: '100%' }}>
            {info?.complete_file?.map((item: any, i: any) => <FileView key={i} name={item?.file_name} link={item?.link} />)}
          </Space>
        </Descriptions.Item> */}
      </Descriptions>
    </div>
  )
}

export default Flaking
