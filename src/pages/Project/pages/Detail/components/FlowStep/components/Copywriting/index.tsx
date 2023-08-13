import { IDragger } from '@/components'
import { IconAdd } from '@/static/Icons'
import { Col, Form, Row, Select, DatePicker, InputNumber, Upload } from 'antd'

import React, { useEffect } from 'react'
const { Item } = Form

interface Props {
  formApi: (form: any) => any
}
const Copywriting: React.FC<Props> = ({ formApi }) => {
  const [form] = Form.useForm()

  useEffect(() => {
    formApi?.(form)
  }, [form])

  return (
    <Form form={form} name="basic" className='copywriting' autoComplete="off">
      <Row>
        <Col span={8}>
          <Item name="执行人" label="执行人">
            <Select placeholder='请选择执行人' style={{ width: '100%' }} />
          </Item>
        </Col>
        <Col span={8}>
          <Item name="预算" label="预算">
            <InputNumber placeholder='请输入预算金额' controls={false} style={{ width: '100%' }} />
          </Item>
        </Col>
        <Col span={8}>
          <Item name="截止日期" label="截止日期">
            <DatePicker showTime placeholder='请选择预期截止日期' style={{ width: '100%' }} />
          </Item>
        </Col>
        <Col span={8}>
          <Item name="实际成本" label="实际成本">
            <InputNumber placeholder='请输入实际成本金额' controls={false} style={{ width: '100%' }} />
          </Item>
        </Col>
        <Col span={8}>
          <Item name="完成日期" label="完成日期">
            <DatePicker showTime placeholder='请选择实际完成日期' style={{ width: '100%' }} />
          </Item>
        </Col>
        <Col span={8}>
          <Item name="实际人力" label="实际人力">
            <InputNumber placeholder='请输入人力天' addonAfter="人力天" controls={false} style={{ width: '100%' }} />
          </Item>
        </Col>
        <Col span={8}>
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
        <Col span={16}>
          <Item name="节点产物" label="节点产物">
            {IDragger({ hint: 'Only pdf, png, jpg can be uploaded, and the size doe:100MB' })}
          </Item>
        </Col>
      </Row>
    </Form >
  )
}

export default Copywriting
