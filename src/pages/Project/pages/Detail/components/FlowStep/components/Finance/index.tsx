import { IconAdd } from '@/static/Icons'
import { Col, Form, Row, Upload } from 'antd'

import React, { useEffect } from 'react'
const { Item } = Form

interface Props {
  formApi: (form: any) => any
}
const Finance: React.FC<Props> = ({ formApi }) => {
  const [form] = Form.useForm()

  useEffect(() => {
    formApi?.(form)
  }, [form])

  return (
    <Form form={form} name="basic" className='copywriting' autoComplete="off">
      <Row>
        <Col span={24}>
          <Item name="财务结算图" label="财务结算截图">
            <Upload
              action="/upload.do"
              listType="picture-card"
            >
              <div>
                <div className='icon'>{IconAdd}</div>
                <div className='text'>点击上传图片</div>
              </div>
            </Upload>
          </Item>

        </Col>
      </Row>
    </Form >
  )
}

export default Finance
