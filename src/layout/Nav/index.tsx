import React from 'react'
import { navList } from './config'
import { Menu } from 'antd'
import './index.less'
import { AppstoreOutlined } from '@ant-design/icons'
const Nav = () => {
  return (
    <div>
      <Menu
        className="root-nav"
        items={navList?.map((i) => ({
          ...i,
          key: i.path,
          icon: <AppstoreOutlined />
        }))}
      />
    </div>
  )
}

export default Nav
