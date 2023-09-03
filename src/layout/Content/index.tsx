import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { type RouteItemProps, routes } from '@/router'
import { Empty, Skeleton } from 'antd'
import { Nav, Header } from './components'

import './index.less'
import Login from '../Login'
import { useGlobalContext } from '../context'

const getRoutes = (data: RouteItemProps[]): any => {
  // eslint-disable-next-line array-callback-return
  return data.map((route, index) => {
    const { Element, children } = route
    if (children?.length) {
      return getRoutes(children)
    } else if (Element) {
      return <Route {...route} element={<Element />} key={index} />
    }
  })
}

const Content = () => {
  const { token } = useGlobalContext()

  if (!token) {
    return <Login />
  }

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', height: 'calc(100vh - 48px)' }}>
        <Nav />
        <div className="root-content-warpper">
          <div className='root-router'>
            <Suspense fallback={<Skeleton active />}>
              <Routes>
                {getRoutes(routes)}
                <Route path='*' element={<Empty description='页面未找到' />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Content
