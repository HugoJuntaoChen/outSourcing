import { basePostRequest } from '../index'

// 设备管理
export default {
  getAnalysisCost: async (params?: Record<string, any>) => basePostRequest('/background/data_analysis/cost', params), // 数据成本分析接口
  getAnalysisSchedule: async (params?: Record<string, any>) => basePostRequest('/background/data_analysis/schedule', params) // 数据成本分析接口
}
