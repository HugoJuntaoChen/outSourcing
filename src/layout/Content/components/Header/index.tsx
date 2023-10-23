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
  const { logOut, userInfo } = useGlobalContext()
  return (
    <div className="root-header">
      <div className="root-header-left">
        {IconBase}
        {IconTitle}
        <div className='title'>后台管理系统</div>
      </div>
      <div className="root-header-right">
        <Space size={24}>
          <Space>
            <Popover content={(
              <Button
                size='small'
                type='link'
                onClick={() => { window.open('https://docs.qq.com/doc/DSXB1bXNKR0hMTXlU') } }
              >
                用户手册
              </Button>
            )}>
              <div className="root-header-righ-icon">{IconQuestion}</div>
            </Popover>
            <div className="root-header-righ-icon">{IconBellOutlined}</div>
          </Space>
          <Popover
            placement="bottomLeft"
            className='popover-icon'
            content={(
              <Button
                size='small'
                type='link'
                danger
                onClick={logOut}
              >
                退出登录
              </Button>
            )}
          >
            <div className='user-icon' style={userInfo.avatar_link ? { backgroundImage: `url(${userInfo.avatar_link})` } : {}} />
          </Popover>
        </Space>
      </div>
    </div>
  )
}

export default Header
