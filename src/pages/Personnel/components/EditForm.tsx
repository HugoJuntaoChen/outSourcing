import IForm from '@/components/IForm'
import { EComponentType } from '@/enums'
import { Form, Modal } from 'antd'

interface IProps {
  isEdit: boolean
  data?: any
  onOk: (value: any) => void
  onCancel: () => void
}

export default function PersonelEditForm (props: IProps) {
  const { data, onOk } = props

  const [form] = Form.useForm()

  const onFinish = async () => {
    try {
      await form.validateFields()
      onOk(form.getFieldsValue())
    } catch (e) {}
  }

  return (
    <Modal visible={true}>
      <IForm
        initialValues={data || {}}
        tiling={false}
        onFinish={onFinish}
        multipleForms={[
          [{ type: EComponentType.INPUT, label: '姓名', name: 'name', key: 'name' }, { type: EComponentType.INPUT, label: '公司', name: 'company', key: 'company' }],
          [{ type: EComponentType.INPUT, label: '所属团队', name: 'team', key: 'team' }, { type: EComponentType.INPUT, label: '角色', name: 'role', key: 'role' }]
        ]}
      ></IForm>
    </Modal>
  )
}
