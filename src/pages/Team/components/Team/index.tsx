import React, { useEffect, useRef } from 'react'
import { IFormTable } from '@/components'
import { columns, forms } from './config'
import { data } from '@/mock'
import { useGetCompanyList } from '@/hooks/team'
import { type FormInstance } from 'antd'

interface Props {
  inside?: boolean
}

const Team: React.FC<Props> = ({ inside = false }) => {
  const formRef = useRef<FormInstance<any>>()

  const { pagination, list, loading, getCompanyList } = useGetCompanyList()

  const onReload = (params?: Record<string, any>) => {
    getCompanyList({ ...formRef.current?.getFieldsValue(), current: 1, ...params, inside })
  }

  useEffect(() => {
    onReload()
  }, [])

  return (
    <IFormTable
      form={{
        forms,
        search: true,
        loading,
        getFormRef: form => {
          formRef.current = form
        },
        formProps: {
          onFinish: onReload
        }
      }}
      table={{
        columns,
        dataSource: data ?? list,
        loading,
        pagination: {
          ...pagination,
          onChange: (current: number, pageSize: number) => {
            onReload({ current, pageSize })
          }
        }
      }}
    />
  )
}

export default Team
