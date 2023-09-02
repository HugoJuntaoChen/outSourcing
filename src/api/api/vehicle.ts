import { basePostRequest } from '../index'

export default {
  getCarList: async (params: Record<string, any>) =>
    basePostRequest('/background/list_car ', params), // 列表
  updateCar: async (params: Record<string, any>) =>
    basePostRequest('/background/create_car', params), // 创建/更新
  deleteCar: async (params: Record<string, any>) =>
    basePostRequest('/background/delete_car', params) // 删除
}
