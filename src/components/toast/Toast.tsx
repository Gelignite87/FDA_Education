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
        setShowToast({ isShow: false, text: '' })
      }, 2000)
      setIdToast(timer)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [showToast, setShowToast, setIdToast])

  if (!showToast.isShow) return null

  return (
    <>
      <div key={`_idToast_${idToast}`} className={styles.Toast}>
        {showToast.text}
      </div>
    </>
  )
}
