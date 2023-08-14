import { basePostRequest } from '../index'

// 项目管理
export default {
  getProjectList: async (params: Record<string, any>) => basePostRequest('/background/list_project', params), // 列表
  getProjectDetai: async (params: Record<string, any>) => basePostRequest('/background/get_project_detai', params) // 详情
}
