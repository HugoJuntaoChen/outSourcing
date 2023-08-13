import { Routes, Route } from 'react-router-dom'
import { routes } from '@/router'
export default function App (): JSX.Element {
  return (
    <Routes>
      {routes.map((route, index) => {
        const { Element } = route
        return <Route {...route} element={<Element />} key={index} />
      })}
    </Routes>
  )
}
