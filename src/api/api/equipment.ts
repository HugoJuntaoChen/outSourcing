import { basePostRequest } from '../index'

// 设备管理
export default {
  getEquipmentList: async (params: Record<string, any>) => basePostRequest('/background/list_equipment', params), // 列表
  updateEquipment: async (params: Record<string, any>) => basePostRequest('/background/create_equipment', params), // 创建/更新
  deleteEquipment: async (params: Record<string, any>) => basePostRequest('/background/delete_equipment', params), // 删除
  getEquipmentTypeAll: async () => basePostRequest('/common/get_equipment_type_all')
}
