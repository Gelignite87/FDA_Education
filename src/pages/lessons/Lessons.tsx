import { LeftMenu } from '../../components/left-menu/LeftMenu.tsx'
import { NotFound } from '../../components/not-found/NotFound.tsx'
import { Banner } from '../../components/banner/Banner.tsx'
import { lessonsMap } from './lessons.data.ts'
import { useParams } from 'react-router-dom'
import styles from './Lessons.module.sass'

export const Lessons = () => {
  const { id } = useParams()
  const lessonsMap_id = id as keyof typeof lessonsMap

  return (
    <>
      <Banner text={lessonsMap[lessonsMap_id]?.banner || 'Page not found'} />
      <div className={styles.flex}>
        <div className={styles.flexLeft}>
          <LeftMenu />
        </div>
        <div className={styles.flexRight}>
          {lessonsMap[lessonsMap_id] ? (
            lessonsMap[lessonsMap_id].component()
          ) : (
            <NotFound />
          )}
        </div>
      </div>
      <div>Footer</div>
    </>
  )
}
