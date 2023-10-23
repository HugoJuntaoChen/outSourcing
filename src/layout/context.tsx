import { useGetCompanyList, useGetEquipmentTypeAll, useGetRoleAll, useLogin } from '@/hooks'
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
  equipmentTypeConfig: RoleConfig
  equipmentTypeConfigLoading: boolean
  getEquipmentTypeAll: () => Promise<void>
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const GlobalContextCom = createContext({} as IProps)

const GlobalContext: React.FC = ({ children }) => {
  const { login, logOut, loading, verifyLoading, token, userInfo } = useLogin()
  const { roleConfig, loading: roleConfigLoading, getRoleAll } = useGetRoleAll()
  const { equipmentTypeConfig, loading: equipmentTypeConfigLoading, getEquipmentTypeAll } = useGetEquipmentTypeAll()

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
        verifyLoading,
        token,
        userInfo,
        companylist,
        companyloading,
        getCompanyList,
        companyNameMap,
        roleConfig,
        roleConfigLoading,
        getRoleAll,

        equipmentTypeConfig,
        equipmentTypeConfigLoading,
        getEquipmentTypeAll
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
