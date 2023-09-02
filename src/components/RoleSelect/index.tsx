import { Select, type SelectProps } from 'antd'
import React from 'react'
import { useGlobalContext } from '@/layout/context'

const RoleSelect: React.FC<SelectProps> = (props) => {
  const { roleConfig, roleConfigLoading } = useGlobalContext()
  return (
    <Select allowClear showArrow={true} className='multiple-form-item' options={roleConfig?.options ?? []} loading={roleConfigLoading} {...props} />
  )
}

export default RoleSelect
