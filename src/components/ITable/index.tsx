import React from 'react'
import { Table } from 'antd'
import './index.less'
import type { ITableProps } from '../type'

const ITable: React.FC<ITableProps> = ({ ...props }) => {
  return (
    <div className='table-wrapper'>
      <Table
        onRow={(record, index) => {
          return {
            className: ((Number(index) % 2) !== 0) ? 'table-item-even' : 'table-item-odd'
          }
        }}
        pagination={{
          showSizeChanger: true,
          pageSizeOptions: [10, 20, 50, 100]
        }}
        {...props}
      />
    </div>

  )
}

export default ITable
