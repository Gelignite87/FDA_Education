import { LeftMenu } from '../../components/left-menu/LeftMenu.tsx'
import { NotFound } from '../../components/not-found/NotFound.tsx'
import { Banner } from '../../components/banner/Banner.tsx'
import { Footer } from '../../components/footer/Footer.tsx'
import { lessonsMap } from './lessons.data.ts'
import { useParams } from 'react-router-dom'
import styles from './Lessons.module.sass'
import { useState } from 'react'

export const Lessons = () => {
  const { id } = useParams()
  const lessonsMap_id = id as keyof typeof lessonsMap
  const ComponentToRender = lessonsMap[lessonsMap_id]?.component

  const [count, setCount] = useState<number>(0)
  const props1 = { count }
  const props2 = { setCount }

  return (
    <>
      <Banner text={lessonsMap[lessonsMap_id]?.banner || 'Page not found'} />
      <div className={styles.lessons_flex}>
        <div className={styles.lessons_flexLeft}>
          <LeftMenu />
        </div>
        <div className={styles.lessons_flexRight}>
          {lessonsMap[lessonsMap_id] ? (
            <ComponentToRender props={{ ...props1, ...props2 }} />
          ) : (
            <NotFound />
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
