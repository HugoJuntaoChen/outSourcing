import React from 'react'
import { Descriptions } from 'antd'

import { useProjectDetailContext } from '../../../../context'
import { ProjectUpload } from '../../..'
import { ResultFileEnum } from '@/enums/config'
import { uploadConfig } from '@/config'

const Finance: React.FC = () => {
  const { data } = useProjectDetailContext()

  return (
    <div>
      <Descriptions>
        <Descriptions.Item label="财务结算截图" labelStyle={{ width: 120, textAlign: 'right', display: 'block' }} span={3}>
          <ProjectUpload
            value={data?.money_plan?.money_file?.map((item: any) => ({
              uid: item?.link,
              name: item?.file_name,
              url: item?.link,
              thumbUrl: item?.link
            })) ?? []}
            scene={ResultFileEnum.MoneyFile}
            type='Upload'
            {...uploadConfig.img}
          />
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
}

export default Finance
