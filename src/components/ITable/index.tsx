import React from 'react'
import { Table } from 'antd'
import './index.less'
import type { ITableProps } from '../type'

const ITable: React.FC<ITableProps> = ({ pagination, hiddenPage, ...props }) => {
  return (
    <div className='table-wrapper'>
      <Table
        onRow={(record, index) => ({
          className: ((Number(index) % 2) !== 0) ? 'table-item-even' : 'table-item-odd'
        })}
        pagination={hiddenPage
          ? false
          : {
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
