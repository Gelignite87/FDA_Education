import { copyToClipboard } from '../../../utils/utils'
import styles from './ConstructorLesson.module.sass'

export const ConstructorLesson: React.FC = () => {
  return (
    <>
      <div className={styles.Constructor_text}>
        <p>
          <i>Конструктор</i> — В JavaScript существует несколько встроенных
          конструкторов для создания различных объектов. Вот основные из них с
          примерами:.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard('const arr1 = new Array(1, 2, 3, 4, 5)')
            }
          >
            const arr1 = new Array(1, 2, 3, 4, 5)
          </span>
          &nbsp; Конструктор для создания массивов.
        </p>
      </div>
    </>
  )
}
