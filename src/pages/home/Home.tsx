import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs.tsx'
import { LeftMenu } from '../../components/left-menu/LeftMenu.tsx'
import { ToastTypes } from '../../components/toast/ToastTypes.ts'
import { Banner } from '../../components/banner/Banner.tsx'
import { Footer } from '../../components/footer/Footer.tsx'
import { Toast } from '../../components/toast/Toast.tsx'
import styles from './Home.module.sass'
import { useState } from 'react'

export const Home: React.FC = () => {
  //Код для компонента Toast.tsx
  const [showToast, setShowToast] = useState<ToastTypes>({
    isShow: false,
    text: '',
    color: '',
  })
  const [idToast, setIdToast] = useState<number>(0)

  return (
    <>
      <div>
        <Banner text={'Приветствую учащихся!'} />
        <div className={styles.home_flex}>
          <div className={styles.home_flexLeft}>
            <LeftMenu />
          </div>
          <div className={styles.home_flexRight}>
            <Breadcrumbs id={'home_page'} />
          </div>
        </div>
      </div>
      <Toast props={{ showToast, setShowToast, idToast, setIdToast }} />
      <Footer />
    </>
  )
}
