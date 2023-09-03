import { Modal, Row, Col } from 'antd'
import { type PropsWithChildren, type ReactNode } from 'react'
import './index.less'
interface IProps {
  data: Array<{ label: string, value: ReactNode, span?: number }>
  onCancel: () => void
  visible: boolean
}

/** 样式均为n行3列 */
export default function IMessage (props: PropsWithChildren<IProps>) {
  const { data, onCancel, visible } = props

  return (
    <Modal className='view-modal-wrapper' title={'查看信息'} footer={null} onCancel={onCancel} open={visible} width={838}>
      <div className='IModal-body'>
        {/* {renderChildren} */}
        <Row className="row" gutter={[0, 20]} >
          {data?.map((item, i) => <Col key={i} span={item?.span ?? 8}>
            <span className='IMessage-label'>{item.label}:</span>
            <span className='IMessage-text'>{item.value}</span>
          </Col>)}
        </Row>
      </div>
    </Modal>
  )
}
