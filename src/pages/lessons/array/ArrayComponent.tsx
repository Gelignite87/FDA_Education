import styles from './ArrayComponent.module.sass'

export const ArrayComponent: React.FC = () => {
  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (error) {
      console.error('Ошибка при копировании: ', error)
    }
  }
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
              handleCopy('const [seconds, setSeconds] = useState<number>(0)')
            }
          >
            const [seconds, setSeconds] = useState&lt;number&gt;(0)
          </span>
        </p>
      </div>
    </>
  )
}
