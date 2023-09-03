import React, { Suspense, useEffect } from 'react'
import { ConfigProvider, Skeleton } from 'antd'
import Content from './Content'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.less'
import zhCN from 'antd/es/locale/zh_CN'
import Login from './Login'
import GlobalContext from './context'

const Layout = () => {
  useEffect(() => {
    ConfigProvider.config({
      theme: {
        primaryColor: '#FF6624',
        processingColor: '#9E9E9E',
        errorColor: '#FF384C'
      }
    })
  }, [])

  return (
    <div className="root-warpper">
      <ConfigProvider locale={zhCN}>
        <BrowserRouter>
          <Suspense fallback={<Skeleton active />}>
            <GlobalContext>
              <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<Content />} />
              </Routes>
            </GlobalContext>
          </Suspense>
        </BrowserRouter>
      </ConfigProvider>
    </div>
  )
}

export default Layout
