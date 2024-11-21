import { useEffect, useState } from 'react'
import styles from './Footer.module.sass'
import { Link } from 'react-router-dom'

export const Footer = () => {
  const [logo, setLogo] = useState<string | null>(null)

  useEffect(() => {
    // Динамический вызов картинки через асинхронную функцию
    // const loadLogo = async () => {
    //   try {
    //     const module = await import('../../assets/FDA_logo.svg')
    //     setLogo(module.default)
    //   } catch (error) {
    //     console.error('Ошибка загрузки логотипа:', error)
    //   }
    // }
    // loadLogo()

    // Динамический вызов картинки через .then(()=>{})
    import('../../assets/FDA_logo.svg')
      .then(module => {
        setLogo(module.default)
      })
      .catch(error => {
        console.error('Ошибка при загрузке логотипа:', error)
      })
  }, [])

  return (
    <>
      <div className={styles.footer}>
        <div>Контактная информация</div>
        <div></div>
        <Link to="/">
          {logo && (
            <img
              alt="FDA_logo"
              width="100"
              draggable="false"
              loading="lazy"
              decoding="async"
              className={styles.logo}
              src={logo}
            />
          )}
        </Link>
      </div>
    </>
  )
}
