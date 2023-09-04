import { loginApi } from '@/api'
import type { LogOutType, LoginResponse, LoginType, UseLoginResponse } from '@/types'
import moment from 'moment'
import { useEffect, useState } from 'react'
import JSEncrypt from 'jsencrypt'

const PUBLIC_KEY = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzXvCtGstP3a5qeh4Yc9y/m6z9Zr6OdaafZasMtyPC8qSsH/vIw/1vwqHfllNCeatIv5GWUia/zqL1eLlnz4rxUR90UZnnjJ9+oiLvjrMqNcSxpeKkHDkZxcPB+CSIk1dAQCAforviHbIzEIw+6TR6MtIXfAcDcLynr6UbTo59bMuHhC5/rp/LPcsGbs/x5CwAHXuVOiPzGmmiTmDcuqGb9P2xe0ab5jcaMfR9qW+VSnegPSSVemt7lXvw8ya0vkjG9iIIsbnoF7rr122pLrgKVjdDHerLpSFKQ8iMXunq5UXi7EvT3qnBNLAcmNe0WjxVd9MIMN4cFbz3WRYYnx2gQIDAQAB'
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
    const encrypt = new JSEncrypt()
    encrypt.setPublicKey(PUBLIC_KEY) // 设置公钥
    const encrypted = encrypt.encrypt(params?.password)
    try {
      const result: LoginResponse = await loginApi.login({ ...params, password: encrypted })
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
