import { Lessons } from '../components/lessons/Lessons.tsx'
import { Home } from '../components/home/Home.tsx'

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
