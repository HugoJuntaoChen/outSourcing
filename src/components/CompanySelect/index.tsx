import { Select, type SelectProps } from 'antd'
import React from 'react'
import { useGlobalContext } from '@/layout/context'

const CompanySelect: React.FC<SelectProps> = (props) => {
  const { companylist, companyloading } = useGlobalContext()

  return (
    <Select allowClear showArrow={true} className='multiple-form-item' options={companylist?.map(i => ({ label: i?.name, value: i?.ID }))} loading={companyloading} {...props} />
  )
}

export default CompanySelect
