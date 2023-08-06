import { type ReactNode } from 'react'

export interface TagProps {
  type: 'warning' | 'error' | 'success'
  size?: 'small' | 'large'
  children?: ReactNode
}
