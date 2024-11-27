import { ToastPropsTypes } from './ToastTypes'
import styles from './Toast.module.sass'
import { useEffect } from 'react'

export const Toast: React.FC<ToastPropsTypes> = ({
  props: { showToast, setShowToast },
}) => {
  useEffect(() => {
    if (showToast.isShow) {
      const timer = setTimeout(() => {
        setShowToast({ isShow: false, text: '' })
      }, 2000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [showToast, setShowToast])

  if (!showToast.isShow) return null

  return (
    <>
      <div className={styles.Toast}>{showToast.text}</div>
    </>
  )
}
