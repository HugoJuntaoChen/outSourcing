import { baseGetRequest } from '../index'

// 登陆
export default {
  login: async (params: Record<string, any>) => baseGetRequest('/background/login', { data: params }) // 后台登录接口
}
