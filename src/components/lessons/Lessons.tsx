import { NotFound } from '../not-found/NotFound.tsx'
import { useParams } from 'react-router-dom'
import { App } from '../app/App.tsx'

export const Lessons = () => {
  const { id } = useParams()
  const typeId = id as keyof typeof componentsMap
  const componentsMap = {
    app: <App />,
    lesson1: <div>Lesson1</div>,
    lesson2: <div>Lesson2</div>,
    lesson3: <div>Lesson3</div>,
    lesson4: <div>Lesson4</div>,
  }

  return <>{componentsMap[typeId] || <NotFound />}</>
}
