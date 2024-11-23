import { copyToClipboard } from '../../../utils/utils'
import styles from './ArrayLesson.module.sass'

export const ArrayLesson: React.FC = () => {
  return (
    <>
      <div className={styles.Array_text}>
        <p>
          <i>Массивы</i> — это объекты, предназначенные для хранения
          упорядоченных коллекций данных. Они позволяют работать с несколькими
          значениями под одним именем, организованными в список. Каждый элемент
          массива имеет свой индекс, начиная с нуля.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard(
                'const [seconds, setSeconds] = useState<number>(0)',
              )
            }
          >
            const [seconds, setSeconds] = useState&lt;number&gt;(0)
          </span>
        </p>
      </div>
    </>
  )
}
