import { Button } from 'antd'
import './index.less'
import Protal from '../Protal'
import { ProtalTypeEnum } from '../Protal/type'
interface IProps {
  editFn?: (args: any) => void
  viewFn?: (args: any) => void
  deleteFn?: (args: any) => void
  record?: Record<string, any>
  onReload?: (params?: Record<string, any>) => Promise<void>
  nameKey?: string
}

export default function IFormTableOperation (props: IProps) {
  const { record, onReload, editFn, viewFn, deleteFn, nameKey } = props
  return (
    <div className={'table-operation-flex'} key={record?.id}>
      <Button
        onClick={() => {
          viewFn?.(record)
        }}
        size='small'
        style={{ color: '#FF6624' }}
        type="text"
      >
        查看
      </Button>
      <Button
        onClick={() => {
          editFn?.(record)
        }}
        size='small'
        style={{ color: '#FF6624' }}
        type="text"
      >
        编辑
      </Button>
      <Protal
        type={ProtalTypeEnum.DELETE}
        title={`确认删除${record?.[nameKey ?? 'name']}?`}
        onOk={async () => deleteFn?.(record)}
        onReload={onReload}
      />
    </div>
  )
}
