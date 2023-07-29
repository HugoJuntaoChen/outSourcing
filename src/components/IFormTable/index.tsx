import React from 'react'
import IForm from '../IForm'
import ITable from '../ITable'
import type { IFormTableProps } from '../type'
import './index.less'
const IFormTable: React.FC<IFormTableProps> = ({ form, table }) => {
  return (
    <div className='form-table-wrapper' >
      <div className='form-wrapper'>
        <IForm {...form}/>
      </div>
      <div className='table-wrapper'>
        <ITable {...table}/>
      </div>
    </div>
  )
}

export default IFormTable
