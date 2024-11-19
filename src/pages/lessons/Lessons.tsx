import { RightMenu } from '../../components/right-menu/RightMenu.tsx'
import { NotFound } from '../../components/not-found/NotFound.tsx'
import { bannerText, lessonComponents } from './lessons.data.ts'
import { Banner } from '../../components/banner/Banner.tsx'
import { useParams } from 'react-router-dom'
import styles from './Lessons.module.sass'

export const Lessons = () => {
  const { id } = useParams()
  const lessonComponentsId = id as keyof typeof lessonComponents
  const bannerTextId = id as keyof typeof bannerText

  return (
    <>
      <Banner text={bannerText[bannerTextId] || 'Page not found'} />
      <div className={styles.flex}>
        <div className={styles.flexRight}>
          <RightMenu />
        </div>
        <div className={styles.flexLeft}>
          {typeof lessonComponents[lessonComponentsId] === 'function' ? (
            lessonComponents[lessonComponentsId]()
          ) : (
            <NotFound />
          )}
        </div>
      </div>
      <div>Footer</div>
    </>
  )
}
