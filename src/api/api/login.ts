import { basePostRequest } from '../index'

// 登录
export default {
  login: async (params: Record<string, any>) => basePostRequest('/background/login', params), // 后台登录接口
  verifyJwtToken: async () => basePostRequest('/background/verify_jwt_token') // 后台登录接口
}
