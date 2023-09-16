import ObsClient from 'esdk-obs-browserjs'

// // 创建ObsClient实例
export const obsClient = new ObsClient({
  access_key_id: 'ZINUWTRLZWNDUUDLLDNT',
  secret_access_key: 'YUoXOrylZ9iIxxKUaHvSVu21tDIR6PiUNWQjdb45',
  server: 'https://obs.cn-south-1.myhuaweicloud.com'
})

interface UpdateFileProps {
  data?: {
    Key: string
    SourceFile: any
  }
  onSucess?: (data?: any) => void
  onError?: (data?: any) => void
  progressCallback?: (data?: { speed: number, percent: number }) => void
}

export const updateFile = async ({ data, onSucess, onError, progressCallback }: UpdateFileProps) => {
  obsClient.putObject({
    Bucket: 'media-bixi',
    ProgressCallback: (transferredAmount: number, totalAmount: number, totalSeconds: number) => {
      // 获取上传平均速率（KB/S）
      const speed = transferredAmount * 1.0 / totalSeconds / 1024
      // 获取上传进度百分比
      const percent = transferredAmount * 100.0 / totalAmount

      progressCallback?.({ speed, percent })
    },
    ...data
  }).then((result: any) => {
    onSucess?.(result)
  }).catch((error: any) => {
    onError?.(error)
  })
}
