import React from 'react'
import { Descriptions, Empty, Image } from 'antd'

import { useProjectDetailContext } from '../../../../context'

const Finance: React.FC = () => {
  const { data } = useProjectDetailContext()

  return (
    <div>
      <Descriptions>
        <Descriptions.Item label="财务结算截图" labelStyle={{ width: 120, textAlign: 'right', display: 'block' }} span={3}>
          {data?.money_plan?.money_file?.length
            ? (
                data?.money_plan?.money_file?.map((item: any, i: any) => (
                  <Image
                    width={100}
                    key={i}
                    src={item?.link}
                  />
                ))
              )
            : <Empty description='暂未上传' imageStyle={{ width: 80 }} />}

        </Descriptions.Item>
      </Descriptions>
    </div>
  )
}

export default Finance
