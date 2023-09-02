import { loginApi } from '@/api'
import type { LogOutType, LoginResponse, LoginType, UseLoginResponse } from '@/types'
import moment from 'moment'
import { useEffect, useState } from 'react'

export interface Token {
  value?: string
  expires?: number
}

export const tokenKey = 'jwtToken'
const tokenStorage = localStorage.getItem(tokenKey) ?? '{}'
let jwtToken: Token
try {
  jwtToken = JSON.parse(tokenStorage)
} catch {}

const roleKey = 'role'
const role = localStorage.getItem(roleKey) ?? ''
const btoaPassword = role ? localStorage.getItem(role) ?? '' : ''

export const useLogin = (): UseLoginResponse => {
  const currentTime = moment().valueOf()
  const [token, setToken] = useState('')
  const [loading, setLoading] = useState(false)

  const login: LoginType = async (params) => {
    setLoading(true)
    try {
      const result: LoginResponse = await loginApi.login(params)
      const { jwt_token: newToken } = result?.data || {}
      setToken(newToken)
      localStorage.setItem(tokenKey, JSON.stringify({ expires: moment().add(3, 'd').valueOf(), value: newToken }))
      localStorage.setItem(roleKey, params.user_name)

      params?.remember && localStorage.setItem(params.user_name, window.btoa(params.password))

      return result
    } catch (error) {
      throw await error
    } finally {
      setLoading(false)
    }
  }

  const logOut: LogOutType = async () => {
    setToken('')
    localStorage.removeItem(tokenKey)
  }

  useEffect(() => {
    if (jwtToken?.expires && currentTime > Number(jwtToken?.expires) && btoaPassword) {
    // 1. token无效，并且本地缓存过账号信息则重新发一次请求
      login({
        user_name: role,
        password: window.atob(btoaPassword)
      })
    } else if (jwtToken?.value && currentTime < Number(jwtToken?.expires)) {
    // 2.token有效，则直接用当前token
      setToken(jwtToken?.value)
    }
  }, [])

  return { login, logOut, loading, token }
}
