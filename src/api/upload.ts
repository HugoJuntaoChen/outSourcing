import ObsClient from 'esdk-obs-browserjs'

// // 创建ObsClient实例
export const obsClient = new ObsClient({
  access_key_id: 'ZINUWTRLZWNDUUDLLDNT',
  secret_access_key: 'YUoXOrylZ9iIxxKUaHvSVu21tDIR6PiUNWQjdb45',
  server: 'https://obs.cn-south-1.myhuaweicloud.com'
})

interface UpdateFileProps {
  name: string
  file: any
}

export const updateFile = async ({ name, file }: UpdateFileProps) => {
  obsClient.putObject({
    Bucket: 'media-bixi',
    Key: name,
    SourceFile: file // localfile为待上传的本地文件路径，需要指定到具体的文件名
  }, (err: string, result: any) => {
    if (err) {
      console.error('Error-->' + err)
    } else {
      console.log(result)
    }
  })
}
