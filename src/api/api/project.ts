import { basePostRequest } from '../index'

// 项目管理
export default {
  getProjectList: async (params?: Record<string, any>) => basePostRequest('/background/list_project', params), // 列表
  getProjectDetail: async (params?: Record<string, any>) => basePostRequest('/background/get_project_detail', params), // 详情

  uploadProjectFile: async (params?: Record<string, any>) => basePostRequest('/background/upload_project_file', params), // 上传文件
  deleteProjectFile: async (params?: Record<string, any>) => basePostRequest('/background/delete_project_file', params) // 删除文件
}
