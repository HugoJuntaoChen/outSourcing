import { IDragger } from '@/components'
import { IconAdd } from '@/static/Icons'
import { Col, Form, Row, Upload } from 'antd'

import React, { useEffect } from 'react'
const { Item } = Form

interface Props {
  formApi: (form: any) => any
}
const Flaking: React.FC<Props> = ({ formApi }) => {
  const [form] = Form.useForm()

  useEffect(() => {
    formApi?.(form)
  }, [form])

  return (
    <Form form={form} name="basic" className='copywriting' autoComplete="off">
      <Row>
        <Col span={24}>
          <Item name="客户签字截图" label="客户签字截图">
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
        <Col span={8}>
          <Item name="纯净版" label="纯净版">
            {IDragger({ hint: '大小不超过100MB' })}
          </Item>
        </Col>
        <Col span={8}>
          <Item name="交付版" label="交付版">
            {IDragger({ hint: '大小不超过100MB' })}
          </Item>
        </Col>
        <Col span={8}>
          <Item name="工程文件" label="工程文件">
            {IDragger({ hint: '大小不超过100MB' })}
          </Item>
        </Col>
      </Row>
    </Form >
  )
}

export default Flaking
