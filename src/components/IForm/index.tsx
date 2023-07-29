import React, { useEffect } from 'react'
import { Form, type FormProps, Input, Select, type FormInstance } from 'antd'

export interface IFormItemProps {
  key: string
  label?: string
  type: string
  props?: Record<string, any>
}

export interface IFormProps extends FormProps {
  forms: IFormItemProps[]
  formRef: (form?: FormInstance<any> | undefined) => any
  formProps: FormProps
}

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

const IForm: React.FC<IFormProps> = ({ forms, formRef, formProps }) => {
  const [form] = Form.useForm()
  useEffect(() => {
    formRef?.(form)
  }, [])

  return (
    <Form
      form={form}
      name="basic"
      style={{ maxWidth: 600 }}
      autoComplete="off"
      {...formProps}
    >
      {forms?.map((config, i) => (
        <Form.Item
          {...config}
          key={`${config.key}-${i}`}
          name={config.key}
        >
          <IFormItem type={config.type} key={config.key} />
        </Form.Item>
      ))}
    </Form>
  )
}

export default IForm
