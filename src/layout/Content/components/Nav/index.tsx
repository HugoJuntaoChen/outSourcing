import React from 'react'
import { Menu } from 'antd'
import { navRoutes } from '@/router'
import { useLocation, useNavigate } from 'react-router'

import { getItem } from './utils'
import './index.less'

const Nav = () => {
  const history = useNavigate()
  const location = useLocation()

  return (
    <div className="root-nav-wrapper">
      <Menu
        className="root-nav"
        mode="inline"
        defaultOpenKeys={[location?.pathname === '/' ? '/personnel' : location?.pathname?.split('/')?.slice(0, -1)?.join('/')]}
        selectedKeys={[location?.pathname]}
        items={navRoutes?.map((i) => getItem(i))}
        onClick={(opt) => {
          history(opt.key)
        }}
      />
    </div>
  )
}

export default Nav
