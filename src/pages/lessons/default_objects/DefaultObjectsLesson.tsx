import styles from './DefaultObjectsLesson.module.sass'
import { copyToClipboard } from '../../../utils/utils'

export const DefaultObjectsLesson: React.FC = () => {
  return (
    <>
      <div className={styles.DefaultObjects_text}>
        <p>
          В JavaScript существует множество встроенных объектов, которые
          предоставляют различные функциональные возможности для работы с
          данными, манипулирования ими и взаимодействия с окружающей средой. Вот
          основные объекты, которые доступны в JavaScript по умолчанию:
        </p>
        <br />
        <p>
          <span onClick={() => copyToClipboard('const num = 42')}>
            const number = 42
          </span>
          &nbsp; Number. Представляет числовые значения: целые числа и числа с
          плавающей запятой. Специальные значения: Infinity, -Infinity
          (результат деления на 0). NaN (не число, например, результат
          некорректной математической операции).
        </p>
      </div>
    </>
  )
}
