import React, { forwardRef, useEffect } from 'react'
import { Form, Input, Select, Button, type FormInstance, Row, Col, DatePicker, InputNumber } from 'antd'
import type { IFormItemProps, IFormProps } from '../type'
import { EComponentType } from '@/enums/componentType'
import { NumberRadius } from '..'
import './index.less'
const { RangePicker } = DatePicker
const { Item } = Form

const IFormItem = ({ type, props, items }: IFormItemProps, form?: FormInstance<any>) => {
  switch (type) {
    case EComponentType.INPUT:
      return <Input {...props} allowClear className='multiple-form-item' />
    case EComponentType.SELECT:
      return <Select allowClear showArrow={true} className='multiple-form-item' options={[{ label: 1, value: 1 }]} {...props} />
    case EComponentType.DATEPICKER:
      return <DatePicker allowClear showTime className='multiple-form-item' {...props} />
    case EComponentType.INPUTNUMBER:
      return <InputNumber />
    case EComponentType.NUMBERRADIUS:
      return <NumberRadius props={props} items={items} form={form} />
    case EComponentType.RANGEPICKER:
      return <RangePicker allowClear showTime className='multiple-form-item' {...props} />
    default:
      return <div></div>
  }
}

const renderMultiple = (arr?: IFormItemProps[][]) => {
  if (!arr) return null
  const renderObj: JSX.Element[] = []
  arr.forEach((curRowIFormItems, itemsIndex) => {
    const len = curRowIFormItems.length
    if (curRowIFormItems[0].customRender === undefined) {
      let span = 24 / len
      // 如果只有传进来只有一个的话，也当作span=12来处理
      if (span === 24) span = 12
      renderObj.push(
        <Row className='multiple-form-row' key={itemsIndex}>
          {curRowIFormItems.map((curItems, index) => {
            return (
              <Col span={span} key={index}>
                <Item {...curItems} name={curItems.key}>
                  {IFormItem(curItems)}
                </Item>
              </Col>
            )
          })}
        </Row>
      )
    } else {
      renderObj.push(
        curRowIFormItems[0].customRender()
      )
    }
  })
  return renderObj
}

const IForm = forwardRef<FormInstance<any>, IFormProps>(
  (props, ref) => {
    const { forms, formProps, search, tiling = true, multipleForms, render, extraValues, loading, getFormRef } = props
    const [form] = Form.useForm()

    const components = forms?.map((config, i) => (
      <Item
        key={`${config.key}-${i}`}
        name={config.key}
      >
        {config?.itemRender ? config?.itemRender({ form, extraValues }, IFormItem(config, form)) : IFormItem(config, form)}
      </Item>
    ))

    useEffect(() => {
      if (getFormRef) {
        getFormRef?.(form)
      }
    }, [form])

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
        {render?.(components)}
        {!render && tiling && components}
        {!render && !tiling && renderMultiple(multipleForms)}
        {Boolean(search) && (
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              搜索
            </Button>
          </Form.Item>
        )}
      </Form>
    )
  }
)

export default IForm
