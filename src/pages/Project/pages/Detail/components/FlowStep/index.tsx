import React, { useMemo, useState } from 'react'
import { Button, Space, Steps, Typography } from 'antd'
import { stepItems } from './config'
import './index.less'
import { IconStep } from '@/static/Icons'
import { Personnel, Copywriting, Director, Finance, Flaking } from './components'
import { useProjectDetailContext } from '../../context'
import moment from 'moment'

const { Text } = Typography

const FlowStep = () => {
  const [current, setCurrent] = useState(0)
  const { data } = useProjectDetailContext()

  const logList = useMemo(() => {
    const list = data?.[stepItems?.[current]?.stepKey]?.operation_log
    return Array.isArray(list)
      ? list?.map((item: any) => (
        {
          title: <Text style={{ maxWidth: 200 }} ellipsis={{ tooltip: true }}>{item?.log ?? ''}</Text>,
          description: moment.unix(Number(item?.time)).format('YYYY-MM-DD HH:MM:ss'),
          icon: IconStep
        }
      ))
      : []
  }, [data, current])

  return (
    <div className='project-detail-flow-step-wrapper'>
      <Steps className='steps' current={current} items={stepItems} onChange={setCurrent} />

      {current === 0 && <Personnel />}
      {current === 1 && <Copywriting />}
      {current === 2 && <Director />}
      {current === 3 && <Flaking />}
      {current === 4 && <Finance />}

      {[0, 1, 2].includes(current) && (
        <div className='schedule'>
          <div className='title'>人员排期</div>
          <div className='schedule-step'>
            <Steps
              labelPlacement="vertical"
              size="small"
              current={-1}
              items={logList}
            />
          </div>
        </div>
      )}

      <Space style={{ width: '100%', justifyContent: 'center' }}>
        {Boolean(current) && <Button onClick={() => { setCurrent(current - 1) }}>上一步</Button>}
        <Button type="primary" onClick={() => { setCurrent(current + 1) }}>下一步</Button>
      </Space>

    </div>
  )
}

export default FlowStep
