import { Lessons } from '../pages/lessons/Lessons.tsx'
import { Home } from '../pages/home/Home.tsx'

export const routes = [
  {
    path: '/',
    label: 'Home',
    component: Home,
  },
  {
    path: '/lessons/:id',
    label: false,
    component: Lessons,
  },
]
