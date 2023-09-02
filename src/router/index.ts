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

const Redirect = lazy(async () => await import('@/pages/Redirect'))
const PersonnelInside = lazy(async () => await import('@/pages/Personnel/Inside'))
const PersonnelOutside = lazy(async () => await import('@/pages/Personnel/Outside'))
const Analysis = lazy(async () => await import('@/pages/Analysis'))
const FacilityInside = lazy(async () => await import('@/pages/Facility/Inside'))
const FacilityOutside = lazy(async () => await import('@/pages/Facility/Outside'))
const Project = lazy(async () => await import('@/pages/Project'))
const Role = lazy(async () => await import('@/pages/Role'))
const TeamInside = lazy(async () => await import('@/pages/Team/Inside'))
const TeamOutside = lazy(async () => await import('@/pages/Team/Outside'))
const VehicleInside = lazy(async () => await import('@/pages/Vehicle/Inside'))
const VehicleOutside = lazy(async () => await import('@/pages/Vehicle/Outside'))
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
    path: '',
    Element: Redirect
  },
  {
    label: '人员管理',
    path: '/personnel',
    children: [
      {
        path: '/personnel/inside',
        Element: PersonnelInside
      },
      {
        path: '/personnel/outside',
        Element: PersonnelOutside
      }
    ]
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
    children: [
      {
        path: '/facility/inside',
        Element: FacilityInside
      },
      {
        path: '/facility/outside',
        Element: FacilityOutside
      }
    ]
  },
  {
    label: '角色权限',
    path: '/role',
    Element: Role
  },
  {
    label: '车辆信息',
    path: '/vehicle',
    children: [
      {
        path: '/vehicle/inside',
        Element: VehicleInside
      },
      {
        path: '/vehicle/outside',
        Element: VehicleOutside
      }
    ]
  }
]

export const navRoutes = [
  {
    label: '人员管理',
    path: '/personnel',
    icon: IconPersonnel,
    children: [
      { label: '内部信息', path: '/inside' },
      { label: '外部信息', path: '/outside' }
    ]
  },
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
  {
    label: '设备信息',
    path: '/facility',
    icon: IconFacility,
    children: [
      { label: '内部信息', path: '/inside' },
      { label: '外部信息', path: '/outside' }
    ]
  },
  { label: '角色权限', path: '/role', icon: IconRole },
  {
    label: '车辆信息',
    path: '/vehicle',
    icon: IconVehicle,
    children: [
      { label: '内部信息', path: '/inside' },
      { label: '外部信息', path: '/outside' }
    ]
  }
]
