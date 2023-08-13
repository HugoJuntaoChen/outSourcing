import React from 'react'
import '../index.less'
import { Space } from 'antd'
import { IForm, ITable } from '@/components'
import { columns } from './config'
import { Bar } from '../components'
import * as echarts from 'echarts'
import { EComponentType } from '@/enums'
const Schedule = () => {
  const data = [
    2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
  ]
  return (
    <div className="analysis-wrapper">
      <Space size={16} direction="vertical" style={{ width: '100%' }}>
        <Space className="summary-wrapper" size={12} direction='vertical'>
          <Space style={{ width: '100%', justifyContent: 'space-between' }}>
            <div className="summary-title">排期分析</div>
            <div className="summary-search">
              <IForm
                search
                forms={[
                  {
                    type: EComponentType.SELECT,
                    key: '1',
                    props: {
                      style: { width: 200 },
                      placeholder: '选择公司团队以查看'
                    }
                  },
                  {
                    type: EComponentType.DATEPICKER,
                    key: '2',
                    props: {
                      style: { width: 200 },
                      placeholder: '请选择起始时间'
                    }
                  }
                ]}
              />
            </div>
          </Space>
          <ITable columns={columns} dataSource={[{}]} pagination={false} />
        </Space>
        <div className="chart-wrapper">
          <Bar
            id='schedule-job'
            title='岗位数据'
            options={{
              series: [
                {
                  type: 'bar',
                  name: '岗位成本',
                  itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: '#FFBD3E' },
                      { offset: 1, color: '#FF9900' }
                    ])
                  },
                  data
                },
                {
                  type: 'bar',
                  name: '岗位产值',
                  itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: '#FFAD62' },
                      { offset: 1, color: '#FF4444' }
                    ])
                  },
                  data
                }
              ]
            }}
          />
        </div>
        <div className="chart-wrapper">
          <Bar
            id='schedule-level'
            title='级别数据'
            options={{
              series: [
                {
                  type: 'bar',
                  name: '岗位成本',
                  itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: '#FFBD3E' },
                      { offset: 1, color: '#FF9900' }
                    ])
                  },
                  data
                },
                {
                  type: 'bar',
                  name: '岗位产值',
                  itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: '#FFAD62' },
                      { offset: 1, color: '#FF4444' }
                    ])
                  },
                  data
                }
              ]
            }}
          />
        </div>
      </Space>
    </div>
  )
}

export default Schedule
