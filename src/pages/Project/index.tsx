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
    getProjectList({ ...formRef.current?.getFieldsValue(), current: 1, ...params })
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
                style={{ color: '#FF6624' }}
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
