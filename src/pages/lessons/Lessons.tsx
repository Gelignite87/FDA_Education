import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs.tsx'
import { LeftMenu } from '../../components/left-menu/LeftMenu.tsx'
import { NotFound } from '../../components/not-found/NotFound.tsx'
import { ToastTypes } from '../../components/toast/ToastTypes.ts'
import { Banner } from '../../components/banner/Banner.tsx'
import { Footer } from '../../components/footer/Footer.tsx'
import { Toast } from '../../components/toast/Toast.tsx'
import { lessonsMap } from './lessons.data.ts'
import { useParams } from 'react-router-dom'
import styles from './Lessons.module.sass'
import { useRef, useState } from 'react'

export const Lessons: React.FC = () => {
  const { id } = useParams()
  const exactId = id as keyof typeof lessonsMap
  const bannerText = lessonsMap[exactId]?.banner
  const ComponentToRender = lessonsMap[exactId]?.component

  //Код для компонента Toast.tsx
  const [showToast, setShowToast] = useState<ToastTypes>({
    isShow: false,
    text: '',
    color: '',
  })
  const propsToast = { showToast, setShowToast }
  const [idToast, setIdToast] = useState<number>(0)

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
      <div>
        <Banner text={bannerText || 'Page not found'} />
        <div className={styles.lessons_flex}>
          <div className={styles.lessons_flexLeft}>
            <LeftMenu />
          </div>
          <div className={styles.lessons_flexRight}>
            <Breadcrumbs id={exactId} />
            {ComponentToRender ? (
              <ComponentToRender
                props={{ ...propsToast, ...propsApp, ...propsTimer }}
              />
            ) : (
              <NotFound />
            )}
          </div>
        </div>
      </div>
      <Toast props={{ showToast, setShowToast, idToast, setIdToast }} />
      <Footer />
    </>
  )
}
