import { UsefulOperatorLesson } from './useful_operator/UsefulOperatorLesson'
import { UseStateUseRefLesson } from './useState_useRef/UseStateUseRefLesson'
import { InteractionDOMLesson } from './interaction_DOM/InteractionDOMLesson'
import { DefaultObjectsLesson } from './default_objects/DefaultObjectsLesson'
import { StartPageViteLesson } from './start_page_Vite/StartPageViteLesson'
import { DestructuringLesson } from './destructuring/DestructuringLesson'
import { ConstructorLesson } from './constructor/ConstructorLesson'
import { PrimitiveLesson } from './primitive/PrimitiveLesson'
import { PrototypeLesson } from './prototype/PrototypeLesson'
import { FunctionLesson } from './function/FunctionLesson'
import { ClassJSLesson } from './class_JS/ClassJSLesson'
import { ObjectLesson } from './object/ObjectLesson'
import { ArrayLesson } from './array/ArrayLesson'
import { AsyncLesson } from './async/AsyncLesson'

export const lessonsMap = {
  primitive: { banner: 'Примитивные типы данных', component: PrimitiveLesson },
  array: { banner: 'Массивы', component: ArrayLesson },
  object: { banner: 'Объекты', component: ObjectLesson },
  constructor: {
    banner: 'Конструкторы',
    component: ConstructorLesson,
  },
  class_JS: {
    banner: 'Классы JavaScript',
    component: ClassJSLesson,
  },
  function: {
    banner: 'Функции',
    component: FunctionLesson,
  },
  default_objects: {
    banner: 'Объекты, доступные в JavaScript по умолчанию',
    component: DefaultObjectsLesson,
  },
  useful_operator: {
    banner: 'Полезные операторы',
    component: UsefulOperatorLesson,
  },
  destructuring: {
    banner: 'Деструктуризация',
    component: DestructuringLesson,
  },
  prototype: { banner: 'Прототипы', component: PrototypeLesson },
  interaction_DOM: {
    banner: 'Взаимодействие с DOM-деревом',
    component: InteractionDOMLesson,
  },
  async: {
    banner: 'Асинхронные операции',
    component: AsyncLesson,
  },
  http_requests: {
    banner: 'Работа с сетью (fetch, XMLHttpRequest, axios)',
    component: AsyncLesson,
  },
  typescript: {
    banner: 'Типизация в TypeScript',
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
