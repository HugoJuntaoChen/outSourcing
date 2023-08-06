import React from 'react'
import { Menu } from 'antd'
import { navRoutes } from '@/router'
import { useLocation, useNavigate } from 'react-router'
import { getItem } from './utils'

import './index.less'

const Nav = () => {
  const history = useNavigate()
  const location = useLocation()
  console.log(location)

  return (
    <div className="root-nav-wrapper">
      <Menu
        className="root-nav"
        mode="inline"
        defaultSelectedKeys={[location?.pathname]}
        items={navRoutes?.map((i) => getItem(i))}
        onClick={(opt) => {
          history(opt.key)
        }}
      />
    </div>
  )
}

export default Nav
