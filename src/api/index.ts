import { type AxiosRequestConfig, type AxiosResponse } from 'axios'
import baseRequest from './base'

export async function baseGetRequest<T = any> (url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
  if (config?.data) {
    const data = config.data
    const query = Object.keys(data).reduce((acc, key) => {
      acc += `${key}=${data[key]}&`
      return acc
    }, '?')
    url.slice(0, url.length - 1)
    url += query
  }
  return baseRequest.get(url, config)
}

export async function basePostRequest<T = any> (url: string, data?: Record<string, unknown>, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
  return baseRequest.post(url, data, config)
}
