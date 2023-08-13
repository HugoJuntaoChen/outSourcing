import React from 'react'

import './index.less'
interface ContentProps {
  children: JSX.Element
}
const Content = ({ children }: ContentProps) => {
  return (
    <div className="root-content-warpper">
      <div className='root-router'>
        {children}
      </div>
    </div>
  )
}
export default Content
