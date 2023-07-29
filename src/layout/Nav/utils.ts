/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import type { MenuProps } from 'antd'

interface ConfigProps {
  path: string
  children?: ConfigProps[]
  label: string
}
type MenuItem = Required<MenuProps>['items'][number]

export const getItem = (config: ConfigProps, parentPath?: string): MenuItem => {
  return {
    ...config,
    key: `${parentPath ?? ''}${config?.path}`,
    children: config?.children?.map((i) => getItem(i, config?.path))
  }
}
