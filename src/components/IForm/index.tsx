import React, { forwardRef } from 'react'
import { Form, Input, Select, Button, type FormInstance, Row, Col } from 'antd'
import './index.less'
import type { IFormItemProps, IFormProps } from '../type'
import { EComponentType } from '@/enums/componentType'

const { Item } = Form

const IFormItem = (props: IFormItemProps) => {
  switch (props.type) {
    case EComponentType.INPUT:
      return <Input {...props} className='multiple-form-item'/>
    case EComponentType.SELECT:
      return <Select className='multiple-form-item' options={[{ label: 1, value: 1 }]} {...props} />
    default:
      return null
  }
}

function renderMultiple (arr?: IFormItemProps[][]) {
  if (!arr) return null
  const renderObj: JSX.Element[] = []
  arr.forEach(curRowIFormItems => {
    const len = curRowIFormItems.length
    let span = 24 / len
    // 如果只有传进来只有一个的话，也当作span=12来处理
    if (span === 24) span = 12
    renderObj.push(
      <Row className='multiple-form-row'>
        {curRowIFormItems.map((curItems, index) => {
          return (
            <Col span={span} key={index}>
              <Item {...curItems} rules={curItems.rules}>
                {IFormItem(curItems)}
              </Item>
            </Col>
          )
        })}
      </Row>
    )
  })
  return renderObj
}

const IForm = forwardRef<FormInstance<any>, IFormProps>(
  (props, ref) => {
    const { forms, formProps, search, tiling, multipleForms } = props
    const [form] = Form.useForm()

    return (
      <Form
        form={form}
        ref={ref}
        name="basic"
        autoComplete="off"
        layout="inline"
        className={search ? 'search-form' : 'multiple-form'}
        {...formProps}
      >
        {tiling
          ? forms?.map((config, i) => (
            <Form.Item
                {...config}
                key={`${config.key}-${i}`}
                name={config.key}
              >
              <IFormItem {...config} key={config.key} />
            </Form.Item>
          ))
          : renderMultiple(multipleForms)}
        {Boolean(search) && (
          <Form.Item>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
          </Form.Item>
        )}
      </Form>
    )
  }
)

export default IForm
