import React, { forwardRef } from 'react'
import { Form, Input, Select, Button, type FormInstance } from 'antd'
import './index.less'
import type { IFormItemProps, IFormProps } from '../type'
import { EComponentType } from '@/enums/componentType'

const IFormItem = ({ type, props }: IFormItemProps) => {
  switch (type) {
    case EComponentType.INPUT:
      return <Input {...props}/>
    case EComponentType.SELECT:
      return <Select options={[{ label: 1, value: 1 }]} {...props} />
    default:
      return null
  }
}

const IForm: React.FC<IFormProps> = forwardRef<FormInstance<any>, IFormProps>((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { forms, formProps, search, render } = props
  const [form] = Form.useForm()

  return (
    <Form
      form={form}
      ref={ref}
      name="basic"
      autoComplete="off"
      layout='inline'
       className={(search ?? false) ? 'search-form' : ''}
      {...formProps}
    >
      {forms?.map((config, i) => (
        <Form.Item
          {...config}
          key={`${config.key}-${i}`}
          name={config.key}

        >
          <IFormItem {...config} key={config.key} />
        </Form.Item>
      ))}
      {render?.()}
      {Boolean(search) && (
        <Form.Item>
          <Button type="primary" htmlType="submit">
            搜索
          </Button>
        </Form.Item>
      )}
    </Form>
  )
})

export default IForm
