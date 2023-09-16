import React, { useEffect, useRef } from 'react'
import { IFormTable } from '@/components'
import { columns, forms } from './config'
import { useGetProjectList } from '@/hooks'
import { Button, type FormInstance } from 'antd'
import { useNavigate } from 'react-router'

const Project: React.FC = () => {
  const formRef = useRef<FormInstance<any>>()
  const history = useNavigate()
  const { pagination, list, loading, getProjectList } = useGetProjectList()

  const onReload = (params?: Record<string, any>) => {
    const { min_budget: min, max_budget: max, ...values } = params ?? {}
    getProjectList({
      ...formRef.current?.getFieldsValue(),
      current: 1,
      ...values,
      min_budget: min ? min * 100 : undefined,
      max_budget: max ? max * 100 : undefined
    })
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
        columns: [
          ...columns,
          {

            title: '操作',
            width: 100,
            dataIndex: 'operation',
            render: (_: any, record: any, index: number) => (
              <Button
                onClick={() => {
                  history(`/project/${record?.ID}`)
                }}
                size='small'
                style={{ color: '#FF6624', marginLeft: -7 }}
                type="text"
              >
                查看
              </Button>
            )
          }
        ],
        dataSource: list || [],
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

export default Project
