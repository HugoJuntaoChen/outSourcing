import React, { useEffect } from 'react'

import * as echarts from 'echarts'
import type { BarProps } from './type'
import './index.less'

const Bar: React.FC<BarProps> = ({ options, id, title, width = '100%', height = '100%', colors = [], unit }) => {
  useEffect(() => {
    const chartDom = document.getElementById(id)
    const myChart = echarts.init(chartDom)

    const option = {
      title: { text: title, padding: [5, 0] },
      tooltip: {
        trigger: 'axis',
        confine: true,
        enterable: true,
        transitionDuration: 1,
        className: 'echarts-tootip-wrapper',
        backgroundColor: 'transparent',
        padding: 0,
        formatter: (params: Array<Record<string, any>>) => {
          return `
            <div style="border-radius: 6px; padding: 8px;">
              <div style="color: var(--text-5, #1D2129); font-size: 16px; font-weight: 500;height: 20px;margin-bottom: 4px;">
                <span>${title}</span> <span style="margin-left: 8px;">${params?.[0]?.name}</span>
              </div>
              ${params?.map(
            (i) => `
                  <div style = "display: flex;align-items: center; border-radius: 4px;background: rgba(255, 255, 255, 0.90); box-shadow: 6px 0px 20px 0px rgba(34, 87, 188, 0.10);min-width: 164px; min-height: 32px; margin-bottom: 4px;padding: 0px 8px 0px 9px;" >
                    <div style="margin-right: 16px;">
                      ${i.marker}
                      <span>${i.seriesName}<span>
                    </div>
                    <div style="flex: 1; text-align: right; word-break: break-all; white-space: break-spaces;">${i.value}${unit ?? ''}</div>
                  </div>
                `
          )?.join('')}
            </div>
          `
        }
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        type: 'value'
      },
      legend: {
        right: 0,
        icon: 'circle'
      },
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        containLabel: true
      },
      ...options
    }
    myChart.setOption(option)

    const onResize = () => {
      myChart.resize()
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [options])

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div style={{ width, height }} id={id} />
      <div id={`formatter-dom-${id}`}></div>
    </div>
  )
}

export default Bar
