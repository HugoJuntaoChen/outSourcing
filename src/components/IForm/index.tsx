import React, { forwardRef, useEffect } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Form, Input, Select, Button, type FormInstance, Row, Col, DatePicker, InputNumber, Cascader } from 'antd'
import type { IFormItemProps, IFormProps } from '../type'
import { EComponentType } from '@/enums/componentType'
import { CompanySelect, EquipmentSelect, IDragger, IUpload, NumberRadius, RoleSelect } from '..'
import './index.less'
import { pcaa } from 'area-data'
import { BankOptions, DelayRiskOptions, DepartmentOption, FieldOptions, IdentityOptions, VehicleOptions } from '@/config'
import { IconDown } from '@/static/Icons'
const { RangePicker } = DatePicker
const { Item } = Form
const { TextArea } = Input

const IFormItem = (config: IFormItemProps, form?: FormInstance<any>) => {
  const { type, props, items } = config ?? {}
  const defaultProps = { allowClear: true, showArrow: true, className: 'multiple-form-item' }
  const selectProps = { ...defaultProps, showSearch: true, suffixIcon: IconDown }

  switch (type) {
    case EComponentType.Input:
      // eslint-disable-next-line react/prop-types
      return props?.type === 'textarea' ? <TextArea {...defaultProps} {...props} /> : <Input {...defaultProps} {...props} />
    case EComponentType.Password:
      return <Input.Password {...defaultProps} {...props} />
    case EComponentType.Select:
      return <Select {...selectProps} {...props} suffixIcon={IconDown} />
    case EComponentType.DatePicker:
      return <DatePicker allowClear showTime className='multiple-form-item' {...props} />
    case EComponentType.InputNumber:
      return <InputNumber controls={false} className='multiple-form-item' {...props} />
    case EComponentType.NumberAdius:
      return <NumberRadius props={props} items={items} form={form} />
    case EComponentType.RangePicker:
      return <RangePicker allowClear showTime className='multiple-form-item' {...props} />
    case EComponentType.CompanySelect:
      return <CompanySelect {...props} suffixIcon={IconDown} />
    case EComponentType.City:
      // eslint-disable-next-line no-case-declarations
      const city = pcaa?.[86] ?? {}
      return (
        <Cascader
          options={Object.keys(city)?.map(i => ({ label: city[i], value: city[i], children: Object.keys(pcaa[i] ?? {}).map(j => ({ label: pcaa[i][j], value: pcaa[i][j] })) }))}
          className='multiple-form-item'
          {...props}
        />
      )
    case EComponentType.InboxOutlined:
      return <IDragger {...props} />
    case EComponentType.Upload:
      return <IUpload {...props}/>
    case EComponentType.RoleSelect:
      return <RoleSelect {...props} suffixIcon={IconDown}/>
    case EComponentType.FieldSelect:
      return <Select {...selectProps} options={FieldOptions} {...props} />
    case EComponentType.BankSelect:
      return <Select {...selectProps} options={BankOptions} {...props} />
    case EComponentType.DelayRiskSelect:
      return <Select {...selectProps} options={DelayRiskOptions} {...props} />
    case EComponentType.IdentitySelect:
      return <Select {...selectProps} options={IdentityOptions} {...props} />
    case EComponentType.VehicleSelect:
      return <Select {...selectProps} options={VehicleOptions} {...props} />
    case EComponentType.DepartmentSelect:
      return <Select {...selectProps} options={DepartmentOption} {...props} />
    case EComponentType.EquipmentSelect:
      return <EquipmentSelect {...props} suffixIcon={IconDown}/>
    default:
      return <div></div>
  }
}

const renderMultiple = (arr?: IFormItemProps[][]) => {
  if (!arr) return null
  const renderObj: JSX.Element[] = []
  arr.forEach((curRowIFormItems, itemsIndex) => {
    const len = curRowIFormItems.length
    if (curRowIFormItems[0].customRender === undefined) {
      let span = 24 / len
      // 如果只有传进来只有一个的话，也当作span=12来处理
      if (span === 24) span = 12
      renderObj.push(
        <Row className='multiple-form-row' key={itemsIndex}>
          {curRowIFormItems.map((curItems, index) => {
            const { rowConfig, ...props } = curItems || {}
            return (
              <Col span={span} key={index} {...rowConfig}>
                <Item {...props} name={curItems.key}>
                  {IFormItem(props)}
                </Item>
              </Col>

            )
          })}
        </Row>
      )
    } else {
      renderObj.push(
        curRowIFormItems[0].customRender()
      )
    }
  })
  return renderObj
}

const IForm = forwardRef<FormInstance<any>, IFormProps>(
  (props, ref) => {
    const { forms, formProps, search, tiling = true, multipleForms, render, extraValues, loading, getFormRef, inside } = props
    const [form] = Form.useForm()

    const components = forms?.map((config, i) => (
      <Item
        key={`${config.key}-${i}`}
        name={config.key}
      >
        {config?.itemRender ? config?.itemRender({ form, extraValues }, IFormItem({ ...config, inside }, form)) : IFormItem({ ...config, inside }, form)}
      </Item>
    ))

    const SearchButton = search
      ? (
        <Form.Item key='button'>
          <Button type="primary" htmlType="submit" icon={<SearchOutlined />} loading={loading} >
            搜索
          </Button>
        </Form.Item>
        )
      : <></>

    useEffect(() => {
      if (getFormRef) {
        getFormRef?.(form)
      }
    }, [form])

    return (
      <Form
        form={form}
        ref={ref}
        name="basic"
        autoComplete="off"
        layout="inline"
        colon={false}
        className={search ? 'search-form' : 'multiple-form'}
        {...formProps}
      >
        {render?.([...components, SearchButton])}
        {!render && tiling && [...components, SearchButton]}
        {!render && !tiling && renderMultiple(multipleForms)}
      </Form>
    )
  }
)

export default IForm
