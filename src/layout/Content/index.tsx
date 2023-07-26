import React from 'react'

import './index.less'
interface ContentProps {
  children: JSX.Element
}
const Content = ({ children }: ContentProps) => {
  return (
    <div className="root-content">
      <div className="root-detail">{children}</div>
    </div>
  )
}
export default Content
