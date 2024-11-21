import { Timer } from '../pages/useState_useRef/Timer.tsx'
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
  {
    path: '/lessons/useState_useRef',
    component: Timer,
  },
]
