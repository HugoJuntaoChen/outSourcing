import React, { useEffect, useMemo, useRef } from 'react'
import '../index.less'
import { type FormInstance, Space, Spin, Typography, Empty } from 'antd'
import { IForm, ITable } from '@/components'
import { columns } from './config'
import { Bar } from '../components'
import * as echarts from 'echarts'
import { EComponentType } from '@/enums'
import { useGetgAnalysisCost } from '@/hooks'
import moment from 'moment'
import { type CostPieConfig } from '@/types'
import { useGlobalContext } from '@/layout/context'
import { LevelEnums } from '@/enums/config'
const Cost = () => {
  const formRef = useRef<FormInstance>(null)

  const { roleConfig, getCompanyList } = useGlobalContext()
  const { data, loading, getAnalysisCost } = useGetgAnalysisCost()

  const { jobs, levels, jobCost, jobProduce, levelCost, levelProduce } = useMemo((): CostPieConfig => {
    const newConfig: CostPieConfig = {
      jobs: [],
      levels: [],
      jobCost: [],
      jobProduce: [],
      levelCost: [],
      levelProduce: []
    }
    data?.job_cost_data?.forEach(i => {
      newConfig.jobs.push(roleConfig?.map?.[i?.job_type])
      newConfig.jobCost.push(i?.cost ?? 0)
      newConfig.jobProduce.push(i?.produce ?? 0)
    })
    data?.level_cost_data?.forEach(i => {
      newConfig.levels.push(LevelEnums?.[i?.level])
      newConfig.levelCost.push(i?.cost ?? 0)
      newConfig.levelProduce.push(i?.produce ?? 0)
    })
    return newConfig
  }, [data, roleConfig])

  const onReload = (value: any) => {
    const { timeRange, ...values } = value ?? {}
    getAnalysisCost({ ...values, time_left_range: timeRange?.[0]?.unix(), time_right_range: timeRange?.[1]?.unix() })
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
            <div className="summary-title">成本分析</div>
            <div className="summary-search">
              <IForm
                search
                loading={loading}
                ref={formRef}
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
                  id='cost-job'
                  title='岗位数据'
                  options={{
                    series: [
                      {
                        type: 'bar',
                        name: '岗位成本',
                        itemStyle: {
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: ' #259AFF' },
                            { offset: 1, color: '#2589FF' }
                          ])
                        },
                        data: jobCost
                      },
                      {
                        type: 'bar',
                        name: '岗位产值',
                        itemStyle: {
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: ' #1DE09F' },
                            { offset: 1, color: '#23C891' }
                          ])
                        },
                        data: jobProduce
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
                    id='cost-level'
                    title='级别数据'
                    options={{
                      series: [
                        {
                          type: 'bar',
                          name: '岗位成本',
                          itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                              { offset: 0, color: ' #259AFF' },
                              { offset: 1, color: '#2589FF' }
                            ])
                          },
                          data: levelCost
                        },
                        {
                          type: 'bar',
                          name: '岗位产值',
                          itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                              { offset: 0, color: ' #1DE09F' },
                              { offset: 1, color: '#23C891' }
                            ])
                          },
                          data: levelProduce
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

export default Cost
