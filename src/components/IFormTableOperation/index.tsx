import { Button } from 'antd'
import './index.less'
interface IProps {
  index: number
  editFn?: (args: any) => void
  viewFn?: (args: any) => void
  deleteFn?: (args: any) => void
}

export default function IFormTableOperation (props: IProps) {
  const { index, editFn, viewFn, deleteFn } = props
  return (
    <div className={'table-operation-flex'} key={index}>
      <Button
        onClick={() => {
          viewFn?.(index)
        }}
        style={{ color: '#FF6624' }}
        type="link"
      >
        查看
      </Button>
      <Button
        onClick={() => {
          editFn?.(index)
        }}
        style={{ color: '#FF6624' }}
        type="link"
      >
        编辑
      </Button>
      <Button
        onClick={() => {
          deleteFn?.(index)
        }}
        style={{ color: '#FF384C' }}
        type="link"
      >
        删除
      </Button>
    </div>
  )
}
