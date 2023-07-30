import IForm from '@/components/IForm'
import { Button, Col, Form, Input, Row, Select, Modal } from 'antd'

const { Item } = Form

interface IProps {
  isEdit: boolean
  data?: any
  onOk: (value: any) => void
  onCancel: () => void
}

export default function PersonelEditForm (props: IProps) {
  const { isEdit, data, onCancel, onOk } = props

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
        render={() => {
          return (
            <>
              <Row>
                <Col span={12}>
                  <Item name={'name'} label={'姓名'}>
                    <Input
                      placeholder="unavailable choice"
                      id="error"
                      disabled={isEdit}
                    />
                  </Item>
                </Col>
                <Col span={12}>
                  <Item label={'公司'} name={'company'}>
                    <Select
                      options={[
                        {
                          label: 'ali',
                          value: 1
                        },
                        {
                          label: 'tencent',
                          value: 2
                        }
                      ]}
                      disabled={isEdit}
                    ></Select>
                  </Item>
                </Col>
              </Row>
              <Row>
                <Col span={24} style={{ textAlign: 'right' }}>
                  <Button
                    style={{ margin: '0 8px' }}
                    onClick={() => {
                      onCancel()
                    }}
                  >
                    取消
                  </Button>
                  <Button type="primary" onClick={async () => onFinish()}>
                    确定
                  </Button>
                </Col>
              </Row>
            </>
          )
        }}
      ></IForm>
    </Modal>
  )
}
