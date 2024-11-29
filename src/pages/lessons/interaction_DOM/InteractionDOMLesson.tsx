import styles from './InteractionDOMLesson.module.sass'
import { copyToClipboard } from '../../../utils/utils'

export const InteractionDOMLesson: React.FC = () => {
  return (
    <>
      <div className={styles.InteractionDOM_text}>
        <p>
          <i>DOM (Document Object Model)</i> - это программный интерфейс для
          HTML и XML-документов. Он представляет документ как дерево узлов
          (nodes), где каждый узел является объектом, который можно изменять
          программно. Это позволяет разработчикам динамически изменять
          структуру, стиль и содержимое веб-страницы с помощью JavaScript.
        </p>
        <br />
        <p>
          <span
            onClick={() => copyToClipboard("document.getElementById('id')")}
          >
            Находит элемент по id.
          </span>
          &nbsp; Находит элемент по id.
        </p>
      </div>
    </>
  )
}
