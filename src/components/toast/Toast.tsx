import { ToastPropsTypes } from './ToastTypes'
import styles from './Toast.module.sass'
import { useEffect } from 'react'

export const Toast: React.FC<
  ToastPropsTypes & {
    props: {
      idToast: number
      setIdToast: React.Dispatch<React.SetStateAction<number>>
    }
  }
> = ({ props: { showToast, setShowToast, idToast, setIdToast } }) => {
  useEffect(() => {
    if (showToast.isShow) {
      const timer = setTimeout(() => {
        setShowToast({ isShow: false, text: '', color: 'red' })
      }, 2000) // время таймаута не должно превышать время работы animation
      setIdToast(timer)
      return () => {
        clearTimeout(timer) // срабатывает при удалении компонента
      }
    }
  }, [showToast]) // список зависимостей. Если одна из зависимостей изменяется между рендерами, useEffect будет повторно вызван

  if (!showToast.isShow) return null // удаляем компонент

  // обязательно указываем уникальный key={`_idToast_${idToast}`} чтобы стиль каждый раз создавался заново. В противном случае блоки меняются, а стиль остаётся, animation отрабатывается и возвращается к начальному значению
  return (
    <>
      <div key={`_idToast_${idToast}`} className={styles.Toast}>
        <div className={styles.toast_text}>{showToast.text}</div>
        <div
          className={`${styles.countdown_bar} ${
            showToast.color === 'red'
              ? styles.countdown_bar_red
              : showToast.color === 'green'
                ? styles.countdown_bar_green
                : styles.countdown_bar_white
          }`}
        >
          .
        </div>
      </div>
    </>
  )
}
