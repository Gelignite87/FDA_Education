import { StartPageViteLessonTypes } from './StartPageViteLessonTypes'
import styles from './StartPageViteLesson.module.sass'
import reactLogo from '../../../assets/react.svg'
import viteLogo from '/vite.svg'

export const StartPageViteLesson: React.FC<StartPageViteLessonTypes> = ({
  props: { count, setCount },
}) => {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className={`${styles.logo} ${styles.react}`}
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles['read-the-docs']}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
