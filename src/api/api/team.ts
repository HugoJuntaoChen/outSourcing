import { basePostRequest } from '../index'

// 团队管理
export default {
  getCompanyList: async (params: Record<string, any>) => basePostRequest('/background/list_company', params), // 列表
  updateCompany: async (params: Record<string, any>) => basePostRequest('/background/create_company', params), // 创建/更新
  deleteCompany: async (params: Record<string, any>) => basePostRequest('/background/delete_company', params) // 删除
}
