import { Select, type SelectProps } from 'antd'
import React from 'react'
import { useGlobalContext } from '@/layout/context'

const EquipmentSelect: React.FC<SelectProps> = (props) => {
  const { equipmentTypeConfig, equipmentTypeConfigLoading } = useGlobalContext()
  return (
    <Select allowClear showArrow={true} className='multiple-form-item' options={equipmentTypeConfig?.options?.sort((a: any, b: any) => a?.value - b?.value) ?? []} loading={equipmentTypeConfigLoading} {...props} />
  )
}

export default EquipmentSelect
