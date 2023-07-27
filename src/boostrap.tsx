import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import 'antd/dist/antd.css'
import Header from './layout/Header'
import Nav from './layout/Nav'
import Content from './layout/Content'
const rootElement = document.getElementById('root')

render(
  <div style={{ height: '100%', width: '100%' }}>
    <BrowserRouter>
      <Header />
      <div style={{ display: 'flex', height: 'calc(100vh - 48px)' }}>
        <Nav />
        <Content>
          <App />
        </Content>
      </div>
    </BrowserRouter>
  </div>,
  rootElement
)
