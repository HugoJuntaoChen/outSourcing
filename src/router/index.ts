// import Main from '@/pages'
import { lazy } from 'react'

const Personnel = lazy(async () => await import('@/pages/Personnel'))
const Analysis = lazy(async () => await import('@/pages/Analysis'))
const Facility = lazy(async () => await import('@/pages/Facility'))
const Project = lazy(async () => await import('@/pages/Project'))
const Role = lazy(async () => await import('@/pages/Role'))
const Team = lazy(async () => await import('@/pages/Team'))
const Vehicle = lazy(async () => await import('@/pages/Vehicle'))

export const navRoutes = [
  {
    label: '人员管理',
    path: '/personnel',
    Element: Personnel
  },
  {
    label: '数据分析',
    path: '/analysis',
    Element: Analysis
  },
  {
    label: '设备信息',
    path: '/facility',
    Element: Facility
  },
  {
    label: '项目信息',
    path: '/project',
    Element: Project
  },
  {
    label: '角色权限',
    path: '/role',
    Element: Role
  },
  {
    label: '团队管理',
    path: '/team',
    Element: Team
  },
  {
    label: '车辆信息',
    path: '/vehicle',
    Element: Vehicle
  }]

export const routes = [{
  path: '/',
  Element: Personnel
},
...navRoutes]
