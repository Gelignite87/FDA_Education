import styles from './TernaryOperatorLesson.module.sass'
import { copyToClipboard } from '../../../utils/utils'

export const TernaryOperatorLesson: React.FC = () => {
  return (
    <>
      <div className={styles.TernaryOperator_text}>
        <p>
          <i>Тернарные операторы</i> - это объекты, предназначенные для хранения
          упорядоченных коллекций данных. Они позволяют работать с несколькими
          значениями под одним именем, организованными в список. Каждый элемент
          массива имеет свой индекс, начиная с нуля.
        </p>
        <br />
        <p>
          <span
            onClick={() => copyToClipboard('const numbers = Array(10).fill(1)')}
          >
            const numbers = Array(10).fill(1)
          </span>
          &nbsp; создаём массив с 10 пустыми ячейками и заполняем их значением
          1.
        </p>
      </div>
    </>
  )
}
