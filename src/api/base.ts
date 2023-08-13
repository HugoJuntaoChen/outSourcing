import { message } from 'antd'
import axios, { type AxiosError } from 'axios'

const baseRequest = axios.create({
  baseURL: '', // TODO
  withCredentials: true,
  timeout: 10 * 1000
})

// TODO
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, async function (error: AxiosError) {
  // 对请求错误做些什么
  return await Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response
}, async function (error: AxiosError) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  message.error({
    content: error
  })
  return await Promise.reject(error)
})

export default baseRequest
