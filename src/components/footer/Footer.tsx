import { useEffect, useState } from 'react'
import styles from './Footer.module.sass'
import { Link } from 'react-router-dom'

export const Footer = () => {
  const [logo, setLogo] = useState<string | null>(null)

  useEffect(() => {
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
        <nav>
          <ul className={styles.ul_Footer}>
            Контактная информация:
            <li>
              Разработка и дизайн:&nbsp;<span>Фомин Дмитрий Александрович</span>
            </li>
            <li>
              Электронная почта:&nbsp;<span>railgun87@rambler.ru</span>
            </li>
            <li>
              Телефон:&nbsp;<span>8 (914) 081-93-27</span>
            </li>
          </ul>
        </nav>
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
