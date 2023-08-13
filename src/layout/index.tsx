import React, { Suspense, useEffect } from 'react'
import { ConfigProvider, Skeleton } from 'antd'
import Header from './Header'
import Nav from './Nav'
import Content from './Content'
import App from '@/App'
import { BrowserRouter } from 'react-router-dom'
import './index.less'
import zhCN from 'antd/es/locale/zh_CN'

const Layout = () => {
  useEffect(() => {
    ConfigProvider.config({
      theme: {
        primaryColor: '#FF6624'
      }
    })
  }, [])

  return (
    <div className="root-warpper">
      <ConfigProvider locale={zhCN}>
        <BrowserRouter>
          <Header />
          <div style={{ display: 'flex', height: 'calc(100vh - 48px)' }}>
            <Nav />
            <Content>
              <Suspense fallback={<Skeleton active />}>
                <App />
              </Suspense>
            </Content>
          </div>
        </BrowserRouter>
      </ConfigProvider>
    </div>
  )
}

export default Layout
