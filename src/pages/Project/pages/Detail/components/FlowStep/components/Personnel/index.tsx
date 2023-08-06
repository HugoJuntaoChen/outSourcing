import Tag from '@/components/Tag'
import { Col, Form, Row, Select } from 'antd'
import React, { useEffect } from 'react'
const { Item } = Form

interface Props {
  formApi: (form: any) => any
}
const Personnel: React.FC<Props> = ({ formApi }) => {
  const [form] = Form.useForm()

  useEffect(() => {
    formApi?.(form)
  }, [form])

  return (
    <Form form={form} name="basic" className='personnel' autoComplete="off">
      <Row>
        <Col span={8}>
          <Item name="文案" label="文案">
            <Select placeholder='' />
            <Tag type='warning'>自动派单中，尚无人接单</Tag>
          </Item>
        </Col>
        <Col span={8}>
          <Item name="导演" label="导演">
            <Select />
            <Tag type='warning'>自动派单中，2人已接单，还缺1人接单</Tag>
          </Item>
        </Col>
        <Col span={8}>
          <Item name="制片" label="制片">
            <Select />
            <Tag type='error'>无人接单，请指派</Tag>
          </Item>
        </Col>
        <Col span={8}>
          <Item name="摄影摄像" label="摄影摄像">
            <Select />
            <Tag type='success'>接单已完成</Tag>
          </Item>
        </Col>
        <Col span={8}>
          <Item name="后期" label="后期">
            <Select />
            <Tag type='success'>接单已完成</Tag>
          </Item>
        </Col>
      </Row>
    </Form>
  )
}

export default Personnel
