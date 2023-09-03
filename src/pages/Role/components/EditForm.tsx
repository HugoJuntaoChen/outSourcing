import IForm from '@/components/IForm'
import { EComponentType } from '@/enums'
import { type FormInstance } from 'antd'
import { useMemo, useRef } from 'react'
import IModal from '@/components/IModal'
import { type IFormProps } from '@/components/type'

interface IProps {
  data?: any
  onOk: (value: any) => void
  onCancel: () => void
  loading: boolean
  inside?: boolean
}

const multipleForms: IFormProps['multipleForms'] = [
  [
    {
      type: EComponentType.Input,
      label: '角色姓名',
      key: 'name',
      props: { placeholder: '请输入角色姓名' }
    },
    {
      type: EComponentType.IdentitySelect,
      label: '角色身份',
      key: 'identity',
      props: { placeholder: '请选择角色身份' }
    }
  ],
  [
    {
      type: EComponentType.Input,
      label: '帐户名',
      key: 'username',
      props: { placeholder: '请输入帐户名' }
    },
    {
      type: EComponentType.Input,
      label: '角色密码',
      key: 'password',
      props: { placeholder: '请输入角色密码' }
    }
  ],
  [
    {
      type: EComponentType.Input,
      label: '部门负责人',
      key: 'department_owner',
      props: { placeholder: '请输入部门负责人' }
    },
    {
      type: EComponentType.Input,
      label: '联系号码',
      key: 'phone_number',
      props: { placeholder: '请输入联系号码' }
    }
  ]
].map(arr => arr.map(config => ({
  ...config,
  rules: [{ required: true, message: config?.props?.placeholder }],
  validateTrigger: 'onBlur'
})))

export default function RoleEditForm (props: IProps) {
  const { data, onOk, onCancel, loading, inside } = props || {}

  const isEdit = useMemo(() => Boolean(data?.ID), [])

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
    <IModal onCancel={onCancel} onOk={onFinish} isEdit={isEdit} confirmLoading={loading}>
      <IForm
        tiling={false}
        ref={formRef}
        formProps={{
          labelCol: { span: 6 },
          initialValues: data || {}
        }}
        forms={[]}
        multipleForms={multipleForms}
        inside={inside}
      />
    </IModal>

  )
}
