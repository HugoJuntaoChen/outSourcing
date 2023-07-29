import React from 'react'
import { Menu } from 'antd'
import './index.less'
import { AppstoreOutlined } from '@ant-design/icons'
import { navRoutes } from '@/router'
import { useNavigate } from 'react-router'

const Nav = () => {
  const history = useNavigate()
  return (
    <div>
      <Menu
        className="root-nav"
        items={navRoutes?.map((i) => ({
          ...i,
          key: i.path,
          icon: <AppstoreOutlined />
        }))}
        onClick={(opt) => {
          history(opt.key)
        }}
      />
    </div>
  )
}

export default Nav
