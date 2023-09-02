
import { basePostRequest } from '../index'
export default {
  getRoleAll: async (params?: any) =>
    basePostRequest('/common/get_role_all'), // 枚举
  getManagerList: async (params: Record<string, any>) =>
    basePostRequest('/background/list_manager', params), // 列表
  updateManager: async (params: Record<string, any>) =>
    basePostRequest('/background/create_manager', params), // 创建/更新
  deleteManager: async (params: Record<string, any>) =>
    basePostRequest('/background/delete_manager', params) // 删除
}
