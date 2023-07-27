import Main from '@/pages'
// import { lazy, Suspense } from "react"
import Personnel from '@/pages/Personnel'
import Analysis from '@/pages/Analysis'
import Facility from '@/pages/Facility'
import Project from '@/pages/Project'
import Role from '@/pages/Role'
import Team from '@/pages/Team'
import Vehicle from '@/pages/Vehicle'
export const routes = [{
  path: '/',
  Element: Main
},
{
  path: '/personnel',
  Element: Personnel
},
{
  path: '/analysis',
  Element: Analysis
},
{
  path: '/facility',
  Element: Facility
},
{
  path: '/project',
  Element: Project
},
{
  path: '/role',
  Element: Role
},
{
  path: '/team',
  Element: Team
},
{
  path: '/vehicle',
  Element: Vehicle
}]
