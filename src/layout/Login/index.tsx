import React from 'react'
import './index.less'
import { useGlobalContext } from '../context'
import { Button, Checkbox, Form, Input, Space, message } from 'antd'
import { IconBase, IconTitle } from '@/static/Icons'
import { type LoginRequest } from '@/types'
import { useNavigate } from 'react-router'
const Login = () => {
  const history = useNavigate()
  const { login, loading } = useGlobalContext()

  const [form] = Form.useForm()

  const onRequest = async () => {
    try {
      const values: LoginRequest = await form.validateFields()
      await login(values)
      message.success('登陆成功', 3)
      history('/')
    } catch {
    }
  }

  return (
    <div className='login-wrapper'>
      <div className='login'>
        <Space>
          {IconBase}
          {IconTitle}
        </Space>
        <div className='title-wrapper'>
          <div className='title'>登陆</div>
          <div className='description'>在下面输入您的账号详细信息</div>
        </div>
        <div className='form-wrapper'>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            layout="vertical"
            autoComplete="off"
            form={form}
          >
            <Form.Item
              label="手机号"
              name="user_name"
              rules={[{ required: true, message: '请输入手机号' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked" style={{ marginBottom: 0 }}>
              <Checkbox>记住密码</Checkbox>
            </Form.Item>
          </Form>
        </div>
        <Button loading={loading} type="primary" block onClick={() => { onRequest() }} >
          登陆
        </Button>
      </div>
    </div>
  )
}

export default Login
