import { ArrayComponent } from './array/ArrayComponent'
import { Timer } from './useState_useRef/Timer'
import { App } from './start_page_Vite/App'

export const lessonsMap = {
  array: { banner: 'Массивы', component: ArrayComponent },
  object: { banner: 'Объекты', component: ArrayComponent },
  ternary_operator: {
    banner: 'Тернарные операторы',
    component: ArrayComponent,
  },
  prototype: { banner: 'Прототипы', component: ArrayComponent },
  class: {
    banner: 'Классы JavaScript, введённые в ECMAScript 2015',
    component: ArrayComponent,
  },
  style: {
    banner: 'Основные стили Css и их аналоги в Tailwind',
    component: ArrayComponent,
  },
  start_page_Vite: {
    banner: 'Начальная страница Vite',
    component: App,
  },
  useState_useRef: {
    banner: 'Xуки React useState и useRef на примере таймера',
    component: Timer,
  },
}
