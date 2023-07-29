import React from 'react'
import './index.less'
import {
  IconBase,
  IconBellOutlined,
  IconQuestion,
  IconTitle
} from '@/static/Icons'
import { Space } from 'antd'
const Header = () => {
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
          <img className='user-icon' src='https://s3-alpha-sig.figma.com/img/06c2/c023/669ad5db814240ab37e965e520037fe6?Expires=1691366400&Signature=LJ~ed8k0KIXUrkWUYSiO4E5XxuZ33B-zF2TVaBCmQAkxNyIvhpNIcP~e532Ne5VXeTCPiz9CCEmM6B1x~T1VDFr4rNeo54-sjvt1Z~9NmWBe-48DtzoP9BcRNIJuboqf5eRTRxxPdugMuRQiUBJB3Q5v7kS-kk497n1SsvfTNkiPoT~7-8IT6cBofbBL8vhIQWarpvp~76yjQePLjCSBEpXtAQSe4NLHsNSKIksDSKh6no7~-f6LnBecfshjfDFeSYhRjGL0nLCqgqQs0i6pSnxYoCZTDIGKT80eNfUokLjsZZ46gDNBl1p3d7t73Lr8DWscrxWlTeMGsSOtyrxHbg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
        </Space>
      </div>
    </div>
  )
}

export default Header
