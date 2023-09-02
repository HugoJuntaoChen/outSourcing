import React from 'react'
import './index.less'
import {
  IconBase,
  IconBellOutlined,
  IconQuestion,
  IconTitle
} from '@/static/Icons'
import { Button, Popover, Space } from 'antd'
import { useGlobalContext } from '@/layout/context'

const Header = () => {
  const { logOut } = useGlobalContext()

  return (
    <div className="root-header">
      <div className="root-header-left">
        {IconBase}
        {IconTitle}
        <div>后台管理系统</div>
      </div>
      <div className="root-header-right">
        <Space size={24}>
          <Space>
            <div className="root-header-righ-icon">{IconQuestion}</div>
            <div className="root-header-righ-icon">{IconBellOutlined}</div>
          </Space>
          <Popover
            placement="bottomLeft"
            className='popover-icon'
            content={(
              <Button
                size='small'
                type='text'
                style={{ color: '#334155' }}
                onClick={logOut}
              >
                退出登录
              </Button>
            )}
            trigger="click"
          >
            <div className='user-icon' />
          </Popover>
        </Space>
      </div>
    </div>
  )
}

export default Header
