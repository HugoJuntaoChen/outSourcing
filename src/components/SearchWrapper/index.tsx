import { Space } from 'antd'
import React, { type ReactNode } from 'react'

interface Props {
  Forms: ReactNode
  ButtonGroup: ReactNode
}

const SearchWrapper: React.FC<Props> = ({ Forms, ButtonGroup }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'start', width: '100%' }}>
      <Space size={0} wrap style={{ flex: 1 }}>
        {Forms}
      </Space>
      <div style={{ marginLeft: 8 }}>
        {ButtonGroup}
      </div>
    </div>
  )
}

export default SearchWrapper
