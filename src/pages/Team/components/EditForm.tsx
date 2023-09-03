import IForm from '@/components/IForm'
import { EComponentType } from '@/enums'
import { type FormInstance } from 'antd'
import { useMemo, useRef } from 'react'
import IModal from '@/components/IModal'
import { type IFormProps } from '@/components/type'
import { LevelOptions } from '@/config'

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
      label: '公司名称',
      key: 'name',
      props: { placeholder: '请输入公司名称' }
    },
    {
      type: EComponentType.Input,
      label: '公司描述',
      key: 'description',
      props: { placeholder: '请输入公司描述' }
    }
  ],
  [
    {
      type: EComponentType.Input,
      label: '工作室',
      key: 'studio',
      props: { placeholder: '请输入工作室' }
    },
    {
      type: EComponentType.Select,
      label: '级别',
      key: 'level',
      props: { options: LevelOptions, placeholder: '请选择级别' }
    }
  ],
  [
    {
      type: EComponentType.City,
      label: '地址',
      key: 'provinceCity',
      props: { placeholder: '请选择省市' }
    },
    {
      type: EComponentType.Input,
      label: '详细地址',
      key: 'address',
      props: { placeholder: '请输入详细地址' }
    }
  ],
  [
    {
      type: EComponentType.BankSelect,
      label: '开户银行',
      key: 'bank_name',
      props: { placeholder: '请选择银行' }
    },
    {
      type: EComponentType.Input,
      label: '银行帐号',
      key: 'bank_account',
      props: { placeholder: '请输入银行帐号' }
    }
  ],
  [
    {
      type: EComponentType.Input,
      label: '营业执照号',
      key: 'unified_credit_code',
      props: { placeholder: '请输入营业执照' }
    },
    {
      type: EComponentType.FieldSelect,
      label: '视频领域',
      key: 'field',
      props: { placeholder: '请选择视频领域', mode: 'multiple' }
    }
  ],
  [
    {
      type: EComponentType.Upload,
      label: '营业执照',
      key: 'business_license',
      rowConfig: { span: 24 },
      labelCol: { span: 3 },
      rules: [],
      props: {
        maxCount: 1,
        placeholder: '请上传营业执照',
        accept: '.jpg, .jpeg, .png, .pdf',
        hint: 'Only pdf, png, jpg can be uploaded, and the size doe:100MB'
      }
    }
  ]
].map(arr => arr.map((config: any) => ({
  rules: [{ required: true, message: config?.props?.placeholder }],
  validateTrigger: 'onBlur',
  ...config
})))

export default function TeamEditForm (props: IProps) {
  const { data, onOk, onCancel, loading, inside } = props || {}

  const isEdit = useMemo(() => Boolean(data?.id), [])

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
