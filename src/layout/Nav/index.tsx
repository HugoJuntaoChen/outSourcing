import React from 'react'
import { Menu } from 'antd'
import './index.less'
import { navRoutes } from '@/router'
import { useNavigate } from 'react-router'
import { getItem } from './utils'

const Nav = () => {
  const history = useNavigate()
  return (
    <div>
      <Menu
        className="root-nav"
        mode="inline"
        items={navRoutes?.map((i) => getItem(i))}
        onClick={(opt) => {
          history(opt.key)
        }}
      />
    </div>
  )
}

export default Nav
