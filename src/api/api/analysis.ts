import { baseGetRequest } from '../index'

// 设备管理
export default {
  getAnalysisCost: async (params?: Record<string, any>) => baseGetRequest('/background/data_analysis/cost', { data: params }), // 数据成本分析接口
  getAnalysisSchedule: async (params?: Record<string, any>) => baseGetRequest('/background/data_analysis/schedule', { data: params }) // 数据成本分析接口
}
