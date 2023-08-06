import React from 'react'
import { type TagProps } from './type'
import './index.less'

const Tag: React.FC<TagProps> = ({ type, size, children }) => (
  <div className={`tag ${type} ${size}`}>{children}</div>
)

export default Tag
