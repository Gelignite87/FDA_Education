import { Lessons } from '../pages/lessons/Lessons.tsx'
import { Home } from '../pages/home/Home.tsx'

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/lessons/:id',
    component: Lessons,
  },
]
