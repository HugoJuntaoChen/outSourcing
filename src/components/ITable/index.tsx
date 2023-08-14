import React, { useEffect } from 'react'
import { Table } from 'antd'
import './index.less'
import type { ITableProps } from '../type'

const ITable: React.FC<ITableProps> = ({ pagination, ...props }) => {
  useEffect(() => {
    console.log(document.getElementsByClassName('ant-select-item-option-content'))
  }, [])
  return (
    <div className='table-wrapper'>
      <Table
        onRow={(record, index) => ({
          className: ((Number(index) % 2) !== 0) ? 'table-item-even' : 'table-item-odd'
        })}
        pagination={{
          showSizeChanger: true,
          pageSizeOptions: [10, 20, 50, 100],
          ...pagination
        }}
        {...props}
      />
    </div>

  )
}

export default ITable
