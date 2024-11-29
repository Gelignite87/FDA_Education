import { routes } from '../../routes/routes.data'
import styles from './Breadcrumbs.module.sass'
import { Link } from 'react-router-dom'

export const Breadcrumbs: React.FC<{ id: string }> = ({ id }) => {
  const [first, ...rest] = id
  const capitalizeFirstLetter =
    first.toUpperCase() + rest.join('').split('_').join(' ')
  // const capitalizeFirstLetter =
  //   id.charAt(0).toUpperCase() + id.slice(1).split('_').join(' ')

  return (
    <>
      <nav className={styles.Breadcrumbs}>
        {routes.map((item, i) => (
          <span key={`_breadcrumbs_${i}`}>
            {item.label ? (
              <Link to={item.path}>{item.label}</Link>
            ) : (
              <b>{capitalizeFirstLetter}</b>
            )}
            {i < routes.length - 1 && <span>/</span>}
          </span>
        ))}
      </nav>
    </>
  )
}
