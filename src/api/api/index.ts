import { baseGetRequest } from '../index'
// TODO 用来测试
export const testGet = async (url: string) => baseGetRequest(url)

export { default as loginApi } from './login'
export { default as personnelApi } from './personnel'
export { default as teamApi } from './team'
export { default as projectApi } from './project'
export { default as vehicleApi } from './vehicle'
export { default as roleApi } from './role'
export { default as equipmentApi } from './equipment'
export { default as analysisApi } from './analysis'
