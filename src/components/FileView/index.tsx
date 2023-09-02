import React from 'react'
import { IconFileI, IconDownload } from '@/static/Icons'

import './index.less'
import { Button } from 'antd'
import { downloadFile } from '@/utils'

interface IProps {
  name: string
  link: string
}

const FileView: React.FC<IProps> = ({ name, link }) => {
  return (
    <div className='file-view'>
      <div className='left'>
        <div className='file'>
          {IconFileI}
        </div>
        <div className='name'>{name}</div>
      </div>
      <div className='right'>
        <Button size='small' icon={IconDownload} type='text' style={{ color: '#64748B' }} onClick={() => { downloadFile(link, name) }}></Button>
      </div>
    </div>
  )
}

export default FileView
