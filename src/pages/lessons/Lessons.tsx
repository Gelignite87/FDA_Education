import { LeftMenu } from '../../components/left-menu/LeftMenu.tsx'
import { NotFound } from '../../components/not-found/NotFound.tsx'
import { Banner } from '../../components/banner/Banner.tsx'
import { Footer } from '../../components/footer/Footer.tsx'
import { lessonsMap } from './lessons.data.ts'
import { useParams } from 'react-router-dom'
import styles from './Lessons.module.sass'
import { useRef, useState } from 'react'

export const Lessons: React.FC = () => {
  const { id } = useParams()
  const lessonsMap_id = id as keyof typeof lessonsMap
  const bannerText = lessonsMap[lessonsMap_id]?.banner
  const ComponentToRender = lessonsMap[lessonsMap_id]?.component

  //Код для компонента StartPageViteLesson.tsx
  const [count, setCount] = useState<number>(0)
  const propsApp = { count, setCount }

  //Код для компонента UseStateUseRefLesson.tsx
  const [seconds, setSeconds] = useState<number>(0)
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const timerRef = useRef<number | null>(null)
  const propsTimer = { seconds, setSeconds, isRunning, setIsRunning, timerRef }

  return (
    <>
      <Banner text={bannerText || 'Page not found'} />
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
