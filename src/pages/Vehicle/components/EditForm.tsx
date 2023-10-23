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
      type: EComponentType.VehicleSelect,
      label: '车辆类型',
      key: 'type',
      props: { placeholder: '请选择车辆类型' }
    },
    {
      type: EComponentType.Input,
      label: '车辆名称',
      key: 'name',
      props: { placeholder: '请输入车辆名称' }
    }
  ],
  [
    {
      type: EComponentType.Input,
      label: '车辆编号',
      key: 'number',
      props: { placeholder: '请输入车辆编号' }
    },
    {
      type: EComponentType.InputNumber,
      label: '车辆个数',
      key: 'quantity',
      props: { placeholder: '请输入车辆个数' }
    }
  ],
  [
    {
      type: EComponentType.InputNumber,
      label: '单价(元)/天',
      key: 'price_per_day',
      props: { placeholder: '请输入金额' }
    },
    {
      type: EComponentType.InputNumber,
      label: '座位',
      key: 'seat_count',
      props: { placeholder: '请输入座位数' }
    }
  ]
].map(arr => arr.map(config => ({
  ...config,
  rules: [{ required: true, message: config?.props?.placeholder }],
  validateTrigger: 'onBlur'
})))

export default function PersonelEditForm (props: IProps) {
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
