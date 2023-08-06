import IForm from '@/components/IForm'
import { EComponentType } from '@/enums'
import { type FormInstance, Form, Select, Input, Row, Col } from 'antd'
import { useRef } from 'react'
import IModal from '@/components/IModal'
import { type IFormProps } from '@/components/type'

const { Item } = Form
interface IProps {
  isEdit: boolean
  data?: any
  onOk: (value: any) => void
  onCancel: () => void
}

const multipleForms: IFormProps['multipleForms'] = [
  [
    {
      type: EComponentType.INPUT,
      label: '姓名',
      name: 'name',
      key: 'name',
      placeholder: '请输入名字',
      rules: [{ required: true, message: '请输入名字' }],
      validateTrigger: 'onBlur'
    },
    { type: EComponentType.INPUT, label: '公司', name: 'company', key: 'company', placeholder: '请选择公司' }
  ],
  [
    { type: EComponentType.INPUT, label: '所属团队', name: 'team', key: 'team', placeholder: '请选择团队' },
    { type: EComponentType.INPUT, label: '角色', name: 'role', key: 'role', placeholder: '请选择角色' }
  ],
  [
    { type: EComponentType.SELECT, label: '级别', name: 'level', key: 'level', placeholder: '请选择级别' },
    { type: EComponentType.INPUT, label: '身份证', name: 'idCard', key: 'idCard', placeholder: '身份证' }
  ],
  [
    { type: EComponentType.INPUT, label: '手机号', name: 'phone', key: 'phone', placeholder: '请输入手机号' }
  ],
  [
    {
      key: '',
      type: EComponentType.NONE,
      customRender: () => {
        return (
          <Row className='multiple-form-row'>
            <Col span={12}>
              <Item label='银行卡' name='bankName'>
                <Select options={[]} placeholder='请选择银行' style={{ width: 240 }}>
                </Select>
              </Item>
            </Col>
            <Col span={12}>
              <Item name='bankId' dependencies={['bankName']}>
                <Input placeholder='输入银行卡号'/>
              </Item>
            </Col>
          </Row>
        )
      }
    }
  ],
  [
    { type: EComponentType.INPUT, label: '紧急联系人', name: 'contact_name', key: 'contact_name', placeholder: '请填写紧急联系人' },
    { type: EComponentType.INPUT, label: '联系人电话', name: 'contact_phone', key: 'contact_phone', placeholder: '请填写联系人电话' }
  ]
]

export default function PersonelEditForm (props: IProps) {
  const { data, onOk, onCancel, isEdit } = props

  const formRef = useRef<FormInstance>(null)

  const onFinish = async () => {
    try {
      if (!formRef.current) return
      const pass = await formRef.current.validateFields()
      if (!pass) return
      onOk(formRef.current.getFieldsValue())
    } catch (e) { }
  }

  return (
    <IModal onCancel={onCancel} onOk={onFinish} isEdit={isEdit}>
      <IForm
        initialValues={data || {}}
        tiling={false}
        ref={formRef}
        formProps={{
          labelCol: { span: 5 }
        }}
        forms={[]}
        multipleForms={multipleForms}
      ></IForm>
    </IModal>

  )
}
