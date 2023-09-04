import { tokenKey } from '@/hooks'
import { message } from 'antd'
import axios, { type AxiosError } from 'axios'

const baseRequest = axios.create({
  baseURL: 'https://ask.bixi.yjw.ink',
  withCredentials: true,
  timeout: 10 * 1000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// TODO
// 添加请求拦截器
baseRequest.interceptors.request.use(config => {
  // 在发送请求之前做些什么

  try {
    config.headers.Authorization = JSON.parse(localStorage.getItem(tokenKey) ?? '{}')?.value
  } catch {}

  return config
}, async function (error: AxiosError) {
  // 对请求错误做些什么
  return await Promise.reject(error)
})

// 添加响应拦截器
baseRequest.interceptors.response.use(async response => {
  const { data } = response ?? {}
  if (Number(data.code) === 0) {
    return response?.data
  } else {
    message.error({
      content: data?.msg
    })
    return Promise.reject(data)
  }
}, async function (error: AxiosError) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  message.error({
    content: error?.message
  })
  return Promise.reject(error)
})

export default baseRequest
