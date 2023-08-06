import { Modal, Row, Col } from 'antd'
import { useMemo, type PropsWithChildren } from 'react'
import './index.less'
interface IProps {
  data: Record<string, string>
  onCancel: () => void
  visible: boolean
}

/** 样式均为n行3列 */
export default function IMessage (props: PropsWithChildren<IProps>) {
  const { data, onCancel, visible } = props

  const renderChildren = useMemo(() => {
    if (!data) return null
    const keyArr = Object.keys(data)
    const len = keyArr.length
    const remain = len % 3
    // 判断data有多少个key,取n行3列
    const row = Math.ceil(len / 3)
    let index = -1
    const renderCols = (isLastRow: boolean) => {
      return new Array(isLastRow ? remain : 3).fill('').map((_, i) => {
        index++
        // 第一个index是8，第二个是10， 第三个是6
        // const indexSpan = [8, 10, 6]
        return (
          <Col key={i} span={8}>
            <span className='IMessage-label'>{keyArr[index]}:</span>
            <span className='IMessage-text'>{data[keyArr[index]]}</span>
          </Col>
        )
      })
    }
    return new Array(row).fill('').map((_, index) => {
      return (
        <Row key={index} className="row">
          {renderCols(index === row - 1)}
        </Row>
      )
    })
  }, [data])

  return (
    <Modal title={'查看信息'} footer={null} onCancel={onCancel} visible={visible} width={838}>
      <div className='IModal-body'>
        {renderChildren}
      </div>
    </Modal>
  )
}
