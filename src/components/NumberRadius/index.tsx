import React from 'react'
import { Form, Input, InputNumber } from 'antd'
import type { NumberRadiusProps } from '../type'
import './index.less'
const { Item } = Form
const NumberRadius = ({ props, items, form }: NumberRadiusProps) => {
  const minKey = String(items?.[0].key)
  const maxKey = String(items?.[1].key)
  const min = Form.useWatch(minKey, form)
  const max = Form.useWatch(maxKey, form)
  return (
    <Input.Group compact {...props} className='input-group-wrapper'>
      <Item className='input-start' name={minKey}>
        <InputNumber min={0} max={max} placeholder='最小金额' {...items?.[0]?.props} />
      </Item>
      <Input
        placeholder="~"
        disabled
        className='input-center'
      />
      <Item className='input-end' name={maxKey}>
        <InputNumber min={min ?? 0} placeholder='最大金额' {...items?.[0]?.props} />
      </Item>
    </Input.Group>
  )
}

export default NumberRadius
