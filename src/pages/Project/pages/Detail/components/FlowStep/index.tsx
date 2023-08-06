import React, { useRef, useState } from 'react'
import { Button, type FormInstance, Space, Steps } from 'antd'
import { stepItems } from './config'
import './index.less'
import { IconStep } from '@/static/Icons'
import { Personnel, Copywriting, Director, Finance, Flaking } from './components'
const FlowStep = () => {
  const [current, setCurrent] = useState(0)
  const formApiRef = useRef<FormInstance<any>>()

  return (
    <div className='project-detail-flow-step-wrapper'>
      <Steps className='steps' current={current} items={stepItems} />

      {current === 0 && <Personnel formApi={form => { formApiRef.current = form }} />}
      {current === 1 && <Copywriting formApi={form => { formApiRef.current = form }} />}
      {current === 2 && <Director formApi={form => { formApiRef.current = form }} />}
      {current === 3 && <Flaking formApi={form => { formApiRef.current = form }} />}
      {current === 4 && <Finance formApi={form => { formApiRef.current = form }} />}

      {current !== 4 && (
        <div className='schedule'>
          <div className='title'>人员排期</div>
          <div className='schedule-step'>
            <Steps
              labelPlacement="vertical"
              size="small"
              current={-1}
              items={new Array(10).fill(
                {
                  title: '制片五王拒绝了接单',
                  description: '2022-12-31 13:14:12',
                  icon: IconStep
                }
              )}
            />
          </div>
        </div>
      )}

      <Space style={{ width: '100%', justifyContent: 'center' }}>
        <Button onClick={() => {
          console.log(formApiRef.current?.validateFields()?.then(val => {
            console.log(val)
          }))
        }}>打印</Button>
        {Boolean(current) && <Button onClick={() => { setCurrent(current - 1) }}>上一步</Button>}
        <Button type="primary" onClick={() => { setCurrent(current + 1) }}>下一步</Button>
      </Space>

    </div>
  )
}

export default FlowStep
