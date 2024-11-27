import { TernaryOperatorLesson } from './ternary_operator/TernaryOperatorLesson'
import { UseStateUseRefLesson } from './useState_useRef/UseStateUseRefLesson'
import { StartPageViteLesson } from './start_page_Vite/StartPageViteLesson'
import { DestructuringLesson } from './destructuring/DestructuringLesson'
import { ConstructorLesson } from './constructor/ConstructorLesson'
import { PrimitiveLesson } from './primitive/PrimitiveLesson'
import { FunctionLesson } from './function/FunctionLesson'
import { ObjectLesson } from './object/ObjectLesson'
import { ArrayLesson } from './array/ArrayLesson'

export const lessonsMap = {
  primitive: { banner: 'Примитивные типы данных', component: PrimitiveLesson },
  array: { banner: 'Массивы', component: ArrayLesson },
  object: { banner: 'Объекты', component: ObjectLesson },
  constructor: {
    banner: 'Конструкторы',
    component: ConstructorLesson,
  },
  function: {
    banner: 'Функции',
    component: FunctionLesson,
  },
  ternary_operator: {
    banner: 'Тернарные операторы',
    component: TernaryOperatorLesson,
  },
  destructuring: {
    banner: 'Деструктуризация',
    component: DestructuringLesson,
  },
  prototype: { banner: 'Прототипы', component: UseStateUseRefLesson },
  class: {
    banner: 'Классы JavaScript, введённые в ECMAScript 2015',
    component: UseStateUseRefLesson,
  },
  interaction_DOM: {
    banner: 'Взаимодействие с DOM',
    component: UseStateUseRefLesson,
  },
  style: {
    banner: 'Основные стили Css и их аналоги в Tailwind',
    component: UseStateUseRefLesson,
  },
  start_page_Vite: {
    banner: 'Начальная страница Vite',
    component: StartPageViteLesson,
  },
  useState_useRef: {
    banner: 'Xуки React useState и useRef на примере таймера',
    component: UseStateUseRefLesson,
  },
  video_selection: {
    banner: 'Выбор видео',
    component: UseStateUseRefLesson,
  },
}
