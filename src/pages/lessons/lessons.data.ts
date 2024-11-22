import { UseStateUseRefLesson } from './useState_useRef/UseStateUseRefLesson'
import { StartPageViteLesson } from './start_page_Vite/StartPageViteLesson'
import { ArrayLesson } from './array/ArrayLesson'

export const lessonsMap = {
  array: { banner: 'Массивы', component: ArrayLesson },
  object: { banner: 'Объекты', component: ArrayLesson },
  ternary_operator: {
    banner: 'Тернарные операторы',
    component: ArrayLesson,
  },
  prototype: { banner: 'Прототипы', component: ArrayLesson },
  class: {
    banner: 'Классы JavaScript, введённые в ECMAScript 2015',
    component: ArrayLesson,
  },
  style: {
    banner: 'Основные стили Css и их аналоги в Tailwind',
    component: ArrayLesson,
  },
  start_page_Vite: {
    banner: 'Начальная страница Vite',
    component: StartPageViteLesson,
  },
  useState_useRef: {
    banner: 'Xуки React useState и useRef на примере таймера',
    component: UseStateUseRefLesson,
  },
}
