import { basePostRequest } from '../index'

// 人员管理
export default {
  getWorkList: async (params: Record<string, any>) => basePostRequest('/background/list_worker', params), // 列表
  updateWorker: async (params: Record<string, any>) => basePostRequest('/background/create_worker', params), // 创建/更新
  deleteWorker: async (params: Record<string, any>) => basePostRequest('/background/delete_worker', params) // 删除
}
