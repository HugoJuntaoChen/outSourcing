import type echarts from 'echarts'

type EChartsOption = echarts.EChartsOption

export interface BarProps {
  options: EChartsOption
  width?: string | number
  height?: string | number
  id: string
  title: string
  colors?: string[]
}
