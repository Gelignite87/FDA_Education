import { Timer } from './useState_useRef/Timer.tsx'
import { App } from './start_page_Vite/App.tsx'

export const lessonsMap = {
  start_page_Vite: { banner: 'Начальная страница Vite', component: App },
  array: { banner: 'Массивы', component: App },
  object: { banner: 'Объекты', component: App },
  ternary_operator: { banner: 'Тернарные операторы', component: App },
  prototype: { banner: 'Прототипы', component: App },
  class: {
    banner: 'Классы JavaScript, введённые в ECMAScript 2015',
    component: App,
  },
  style: {
    banner: 'Основные стили Css и их аналоги в Tailwind',
    component: App,
  },
  useState_useRef: {
    banner: 'Xуки React useState и useRef на примере таймера',
    component: Timer,
  },
}
