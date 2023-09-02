export const getOptionOfEnum = (enums: Record<string, any>) => Object.keys(enums)
  ?.filter((i) => !/^\d+$/.test(i))
  ?.map((key) => ({
    label: key,
    value: enums[key]
  }))

export const getOptionOfMap = (Map: Record<string, any>, isString?: boolean) => Object.keys(Map)
  ?.map((key) => ({
    label: Map[key],
    value: isString ? String(key) : Number(key)
  }))

export const downloadFile = (downloadUrl: string, fileName: string) => {
  const a = document.createElement('a')
  a.style.display = 'none'
  a.href = downloadUrl
  a.download = fileName
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
