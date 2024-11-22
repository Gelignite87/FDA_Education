import { LeftMenu } from '../../components/left-menu/LeftMenu.tsx'
import { NotFound } from '../../components/not-found/NotFound.tsx'
import { Banner } from '../../components/banner/Banner.tsx'
import { Footer } from '../../components/footer/Footer.tsx'
import { lessonsMap } from './lessons.data.ts'
import { useParams } from 'react-router-dom'
import styles from './Lessons.module.sass'
import { useRef, useState } from 'react'

export const Lessons = () => {
  const { id } = useParams() // useParams вызывает повторный рендеринг при получении id
  const lessonsMap_id = id as keyof typeof lessonsMap
  const BannerText = lessonsMap[lessonsMap_id]?.banner
  const ComponentToRender = lessonsMap[lessonsMap_id]?.component

  //Код для компонента App
  const [count, setCount] = useState<number>(0)
  const propsApp = { count, setCount }

  //Код для компонента Timer
  const [seconds, setSeconds] = useState<number>(0) // useState вызывает повторный рендеринг при изменении seconds
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const timerRef = useRef<number | null>(null) // useRef создаёт объект с ключом current, который может хранить значение, но не вызывает повторного рендеринга компонента при изменении этого значения
  const propsTimer = { seconds, setSeconds, isRunning, setIsRunning, timerRef }

  return (
    <>
      <Banner text={BannerText || 'Page not found'} />
      <div className={styles.lessons_flex}>
        <div className={styles.lessons_flexLeft}>
          <LeftMenu />
        </div>
        <div className={styles.lessons_flexRight}>
          {ComponentToRender ? (
            <ComponentToRender props={{ ...propsApp, ...propsTimer }} />
          ) : (
            <NotFound />
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
