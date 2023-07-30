import React, { useEffect } from 'react'
import { Form, Input, Select, Button } from 'antd'
import './index.less'
import type { IFormItemProps, IFormProps } from '../type'

const IFormItem = ({ type, props }: IFormItemProps) => {
  switch (type) {
    case 'input':
      return <Input {...props}/>
    case 'select':
      return <Select options={[{ label: 1, value: 1 }]} {...props} />
    default:
      break
  }
}

const IForm: React.FC<IFormProps> = ({ forms, formRef, formProps, search }) => {
  const [form] = Form.useForm()

  useEffect(() => {
    formRef?.(form)
  }, [])

  return (
    <Form
      form={form}
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

export default IForm
