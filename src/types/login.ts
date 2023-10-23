export interface LoginRequest {
  user_name: string
  password: string
  remember?: boolean
}

export interface LoginResponse {
  data: {
    jwt_token: string
  }
}

export type LoginType = (params: LoginRequest) => Promise<Record<string, any> | unknown>
export type LogOutType = () => Promise<void>

export interface UserInfo {
  identity?: number
  name?: string
  user_id?: number
  avatar_link?: string
}
export interface UseLoginResponse {
  login: LoginType
  logOut: LogOutType
  loading: boolean
  token: string
  userInfo: UserInfo
  verifyLoading: boolean
}

export interface VerifyJwtTokenResponse {
  data: UserInfo
}
