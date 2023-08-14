import { Routes, Route } from 'react-router-dom'
import { type RouteItemProps, routes } from '@/router'
import React from 'react'

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

const App: React.FC = () => {
  return (
    <Routes>
      {getRoutes(routes)}
      {/* {routes.map((route, index) => {
        const { Element, children } = route
        return <Route {...route} element={<Element />} key={index} />
      })} */}
    </Routes>
  )
}
export default App
