import { useGetCompanyList, useGetRoleAll, useLogin } from '@/hooks'
import type { Company, GetCompanyListRequest, RoleConfig, UseLoginResponse } from '@/types'
import React, { createContext, useContext, useMemo } from 'react'

interface IProps extends UseLoginResponse {
  companylist: Company[]
  companyloading: boolean
  getCompanyList: (data?: GetCompanyListRequest) => Promise<void>
  companyNameMap: Record<string | number, any>
  roleConfig: RoleConfig
  roleConfigLoading: boolean
  getRoleAll: (data?: any) => Promise<void>
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const GlobalContextCom = createContext({} as IProps)

const GlobalContext: React.FC = ({ children }) => {
  const { login, logOut, loading, token } = useLogin()
  const { roleConfig, loading: roleConfigLoading, getRoleAll } = useGetRoleAll()

  const { list: companylist, loading: companyloading, getCompanyList } = useGetCompanyList()

  const companyNameMap = useMemo(() => {
    const newCompanyMap: any = {}
    companylist?.forEach(i => {
      newCompanyMap[i?.ID ?? ''] = i.name
    })
    return newCompanyMap
  }, [companylist])

  return (
    <GlobalContextCom.Provider
      value={{
        login,
        logOut,
        loading,
        token,
        companylist,
        companyloading,
        getCompanyList,
        companyNameMap,
        roleConfig,
        roleConfigLoading,
        getRoleAll
      }}
    >
      {children}
    </GlobalContextCom.Provider>
  )
}
export default GlobalContext

export const useGlobalContext = () => {
  return useContext(GlobalContextCom) ?? {}
}
