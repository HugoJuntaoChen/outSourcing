import {
  IconAnalysis,
  IconFacility,
  IconPersonnel,
  IconProject,
  IconRole,
  IconTeam,
  IconVehicle
} from '@/static/Icons'
import { lazy } from 'react'

const Personnel = lazy(async () => await import('@/pages/Personnel'))
const Analysis = lazy(async () => await import('@/pages/Analysis'))
const Facility = lazy(async () => await import('@/pages/Facility'))
const Project = lazy(async () => await import('@/pages/Project'))
const Role = lazy(async () => await import('@/pages/Role'))
const TeamInside = lazy(async () => await import('@/pages/Team/Inside'))
const TeamOutside = lazy(async () => await import('@/pages/Team/Outside'))
const Vehicle = lazy(async () => await import('@/pages/Vehicle'))
const AnalysisCost = lazy(async () => await import('@/pages/Analysis/Cost'))
const AnalysisSchedule = lazy(
  async () => await import('@/pages/Analysis/Schedule')
)
const ProjectDetail = lazy(
  async () => await import('@/pages/Project/pages/Detail')
)

export interface RouteItemProps {
  label?: string
  path?: string
  Element?: React.LazyExoticComponent<React.FC<any>>
  children?: RouteItemProps[]
}

export const routes: RouteItemProps[] = [
  {
    path: '/',
    Element: Personnel
  },
  {
    label: '人员管理',
    path: '/personnel',
    Element: Personnel
  },
  {
    label: '团队管理',
    path: '/team',
    children: [
      {
        path: '/team/inside',
        Element: TeamInside
      },
      {
        path: '/team/outside',
        Element: TeamOutside
      }
    ]
  },
  {
    label: '项目信息',
    path: '/project',
    Element: Project
  },
  {
    label: '',
    path: '/project/:id',
    Element: ProjectDetail
  },
  {
    label: '数据分析',
    path: '/analysis',
    Element: Analysis
  },
  {
    label: '成本分析',
    path: '/analysis/cost',
    Element: AnalysisCost
  },
  {
    label: '排期分析',
    path: '/analysis/schedule',
    Element: AnalysisSchedule
  },
  {
    label: '设备信息',
    path: '/facility',
    Element: Facility
  },
  {
    label: '角色权限',
    path: '/role',
    Element: Role
  },
  {
    label: '车辆信息',
    path: '/vehicle',
    Element: Vehicle
  }
]

export const navRoutes = [
  { label: '人员管理', path: '/personnel', icon: IconPersonnel },
  {
    label: '团队管理',
    path: '/team',
    icon: IconTeam,
    children: [
      { label: '内部信息', path: '/inside' },
      { label: '外部信息', path: '/outside' }
    ]
  },
  { label: '项目信息', path: '/project', icon: IconProject },
  {
    label: '数据分析',
    path: '/analysis',
    icon: IconAnalysis,
    children: [
      { label: '成本分析', path: '/cost' },
      { label: '排期分析', path: '/schedule' }
    ]
  },
  { label: '设备信息', path: '/facility', icon: IconFacility },
  { label: '角色权限', path: '/role', icon: IconRole },
  { label: '车辆信息', path: '/vehicle', icon: IconVehicle }
]
