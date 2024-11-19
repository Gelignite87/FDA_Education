import { App } from './app/App.tsx'

export const lessonsMap = {
  app: { banner: 'Начальная страница Vite', component: App },
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
}
