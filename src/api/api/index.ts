import { baseGetRequest } from '../index'
export const api = {
  login: '/background/login' // 后台登录接口
}

// TODO 用来测试
export const testGet = async (url: string) => baseGetRequest(url)

export { default as personnelApi } from './personnel'
export { default as teamApi } from './team'
export { default as projectApi } from './project'
