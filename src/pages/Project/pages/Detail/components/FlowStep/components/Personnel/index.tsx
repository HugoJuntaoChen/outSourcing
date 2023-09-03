import ITag from '@/components/Tag'
import { Col, Empty, Row, Tag } from 'antd'
import React from 'react'
import { useProjectDetailContext } from '../../../../context'
import { Colon } from '@/components'
interface StatusTagProps {
  status: number
  has: number
  total: number
}

const StatusTag = ({ status, has, total }: StatusTagProps) => {
  switch (status) {
    case 1:
      return <ITag type='success'>未派单</ITag>
    case 2:
      if (!has) {
        return <ITag type='warning'>自动派单中，尚无人接单</ITag>
      } else {
        return <ITag type='warning'>自动派单中，{has ?? 0}人已接单，还缺{total - has}人接单</ITag>
      }
    case 3:
      return <ITag type='success'>无人接单，请指派</ITag>
    case 4:
      return <ITag type='success'>接单已完成</ITag>
    default:
      return <div></div>
  }
}

const Personnel: React.FC = () => {
  const { data } = useProjectDetailContext()

  return (
    <Row style={{ marginBottom: 12 }}>
      {data?.people_plan?.role_details?.length
        ? (
            data?.people_plan?.role_details?.map((item: any, i: any) => (
              <Col span={8} key={i} style={{ marginBottom: 20 }}>
                <Row>
                  <Col span={6} style={{ marginTop: 4, textAlign: 'right' }}>
                    {item?.role_name}
                    <Colon />
                  </Col>
                  <Col span={18}>
                    <div className='descriptions-item-div'>
                      {item?.has_accept_name?.map((acceptName: string, i: any) => <Tag color='' key={i}>{acceptName}</Tag>)}
                    </div>
                    <StatusTag status={item?.status} has={item?.has_accept_number ?? 0} total={item?.total_need_number ?? 0} />
                  </Col>
                </Row>
              </Col>
            ))
          )
        : <Empty />}
    </Row>
  )
}

export default Personnel
