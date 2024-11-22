import { lessonsMap } from '../../pages/lessons/lessons.data'
import styles from './LeftMenu.module.sass'
import { Link } from 'react-router-dom'

export const LeftMenu = () => {
  const lessonsArray = Object.entries(lessonsMap).map(([key, { banner }]) => ({
    key,
    banner,
  }))

  return (
    <>
      <nav>
        <ul className={styles.ul_LeftMenu}>
          {lessonsArray.map((item, i) => (
            <li key={`_leftMenu_${i}`}>
              <Link to={`/lessons/${item.key}`}>{item.banner}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
