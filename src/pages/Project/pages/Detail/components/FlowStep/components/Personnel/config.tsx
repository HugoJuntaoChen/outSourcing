import Tag from '@/components/Tag'
import { type IFormItemProps } from '@/components/type'
import { EComponentType } from '@/enums'

export const forms: IFormItemProps[] = [
  {
    type: EComponentType.SELECT,
    key: '1',
    label: '文案',
    props: {
      placeholder: '请输入文案'
    },
    itemRender: ({ extraValues }, component) => {
      return (
        <div>
          {component}
          <Tag type='warning'>自动派单中，尚无人接单</Tag>
        </div>
      )
    }
  },
  {
    type: EComponentType.SELECT,
    key: '2',
    label: '导演',
    props: {
      placeholder: '请选择导演'
    },
    itemRender: ({ extraValues }, component) => {
      return (
        <div>
          {component}
          <Tag type='warning'>自动派单中，2人已接单，还缺1人接单</Tag>
        </div>
      )
    }
  },
  {
    type: EComponentType.SELECT,
    key: '3',
    label: '制片',
    props: {
      placeholder: '请选择制片'
    },
    itemRender: ({ extraValues }, component) => {
      return (
        <div>
          {component}
          <Tag type='error'>无人接单，请指派</Tag>
        </div>
      )
    }
  },
  {
    type: EComponentType.SELECT,
    key: '4',
    label: '摄影摄像',
    props: {
      placeholder: '请选择摄影摄像'
    },
    itemRender: ({ extraValues }, component) => {
      return (
        <div>
          {component}
          <Tag type='success'>接单已完成</Tag>
        </div>
      )
    }
  },
  {
    type: EComponentType.SELECT,
    key: '5',
    label: '后期',
    props: {
      placeholder: '请选择后期'
    },
    itemRender: ({ extraValues }, component) => {
      return (
        <div>
          {component}
          <Tag type='success'>接单已完成</Tag>
        </div>
      )
    }
  }
]
