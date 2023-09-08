import React, { useEffect, useMemo, useRef } from 'react'
import '../index.less'
import { type FormInstance, Space, Spin, Empty, Typography } from 'antd'
import { IForm, ITable } from '@/components'
import { columns } from './config'
import { Bar } from '../components'
import * as echarts from 'echarts'
import { EComponentType } from '@/enums'
import { useGetgAnalysisSchedule } from '@/hooks'
import { type SchedulePieConfig } from '@/types'
import moment from 'moment'
import { useGlobalContext } from '@/layout/context'
import { LevelEnums } from '@/enums/config'
const Schedule = () => {
  const formRef = useRef<FormInstance>(null)

  const { roleConfig, getCompanyList } = useGlobalContext()
  const { data, loading, getAnalysisSchedule } = useGetgAnalysisSchedule()

  const { jobs, levels, jobDelayCount, jobDelayRiskCount, levelDelayCount, levelDelayRiskCount } = useMemo((): SchedulePieConfig => {
    const newConfig: SchedulePieConfig = {
      jobs: [],
      levels: [],
      jobDelayCount: [],
      jobDelayRiskCount: [],
      levelDelayCount: [],
      levelDelayRiskCount: []
    }
    data?.job_cost_data?.forEach(i => {
      newConfig.jobs.push(roleConfig?.map?.[i?.job_type])
      newConfig.jobDelayCount.push(i?.delay_count ?? 0)
      newConfig.jobDelayRiskCount.push(i?.delay_risk_count ?? 0)
    })
    data?.level_cost_data?.forEach(i => {
      newConfig.levels.push(LevelEnums?.[i?.level])
      newConfig.levelDelayCount.push(i?.delay_count ?? 0)
      newConfig.levelDelayRiskCount.push(i?.delay_risk_count ?? 0)
    })
    return newConfig
  }, [data, roleConfig])

  const onReload = (value: any) => {
    const { timeRange, company_id: companyId } = value ?? {}
    getAnalysisSchedule({ company_id: String(companyId), time_left_range: timeRange?.[0]?.unix(), time_right_range: timeRange?.[1]?.unix() })
  }

  useEffect(() => {
    onReload(formRef.current?.getFieldsValue())
    getCompanyList({ pageSize: 99999, current: 1 })
  }, [])

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
                    type: EComponentType.CompanySelect,
                    key: 'company_id',
                    props: {
                      style: { width: 200 },
                      placeholder: '选择公司团队以查看'
                    }
                  },
                  {
                    type: EComponentType.RangePicker,
                    key: 'timeRange',
                    props: {
                      style: { width: 380 },
                      allowClear: false
                    }
                  }
                ]}
                formProps={{
                  onFinish: onReload,
                  initialValues: {
                    timeRange: [moment().add(-7, 'd'), moment()]
                  }
                }}
              />
            </div>
          </Space>
          <Spin spinning={loading}>
            <ITable columns={columns} dataSource={[{ ...data }]} hiddenPage />
          </Spin>

        </Space>
        <div className="chart-wrapper">
          <Spin spinning={loading}>
            {jobs?.length
              ? (
                <Bar
                  id='schedule-job'
                  title='岗位数据'
                  options={{
                    series: [
                      {
                        type: 'bar',
                        name: '延期数量',
                        itemStyle: {
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#FFBD3E' },
                            { offset: 1, color: '#FF9900' }
                          ])
                        },
                        data: jobDelayCount
                      },
                      {
                        type: 'bar',
                        name: '延期风险数量',
                        itemStyle: {
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#FFAD62' },
                            { offset: 1, color: '#FF4444' }
                          ])
                        },
                        data: jobDelayRiskCount
                      }
                    ],
                    xAxis: {
                      type: 'category',
                      data: jobs
                    }
                  }}
                />
                )
              : (
                <div>
                  <Typography.Title level={5} style={{ fontSize: 18 }}>岗位数据</Typography.Title>
                  <Empty />
                </div>
                )
              }
          </Spin>
        </div>
        <div className="chart-wrapper">
          <Spin spinning={loading}>
            {
              levels?.length
                ? (
                  <Bar
                    id='schedule-level'
                    title='级别数据'
                    options={{
                      series: [
                        {
                          type: 'bar',
                          name: '延期数量',
                          itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                              { offset: 0, color: '#FFBD3E' },
                              { offset: 1, color: '#FF9900' }
                            ])
                          },
                          data: levelDelayCount
                        },
                        {
                          type: 'bar',
                          name: '延期风险数量',
                          itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                              { offset: 0, color: '#FFAD62' },
                              { offset: 1, color: '#FF4444' }
                            ])
                          },
                          data: levelDelayRiskCount
                        }
                      ],
                      xAxis: {
                        type: 'category',
                        data: levels
                      }
                    }}
                  />
                  )
                : (
                  <div>
                    <Typography.Title level={5} style={{ fontSize: 18 }}>级别数据</Typography.Title>
                    <Empty />
                  </div>
                  )
            }
          </Spin>

        </div>
      </Space>
    </div>
  )
}

export default Schedule
