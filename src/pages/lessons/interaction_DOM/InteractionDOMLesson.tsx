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
        <p>DOM-дерево состоит из:</p>
        <p>
          &emsp;1. Document — корневой объект, представляющий весь
          HTML-документ.
        </p>
        <p>
          &emsp;2. Element Nodes — узлы элементов (например, &lt;div&gt;,
          &lt;p&gt;).
        </p>
        <p>
          &emsp;3. Attribute Nodes — атрибуты элементов (например, id, class).
        </p>
        <p>&emsp;4. Text Nodes — текст внутри элементов.</p>
        <p>&emsp;5. Comment Nodes — комментарии в документе.</p>
        <br />
        <p>
          1 Доступ к элементам (для доступа к элементам используются методы
          объекта document):
        </p>
        <p>
          <span
            onClick={() => copyToClipboard("document.getElementById('id')")}
          >
            document.getElementById('id')
          </span>
          &nbsp; Находит элемент по id.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard("document.querySelector('selector')")
            }
          >
            document.querySelector('selector')
          </span>
          &nbsp; Возвращает первый элемент, соответствующий CSS-селектору.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard("document.querySelectorAll('selector')")
            }
          >
            document.querySelectorAll('selector')
          </span>
          &nbsp; Возвращает все элементы, соответствующие CSS-селектору
          (NodeList).
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard("document.getElementsByClassName('class')")
            }
          >
            document.getElementsByClassName('class')
          </span>
          &nbsp; Возвращает элементы по имени класса (HTMLCollection).
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard("document.getElementsByTagName('tag')")
            }
          >
            document.getElementsByTagName('tag')
          </span>
          &nbsp; Возвращает элементы по тегу.
        </p>
        <br />
        <p>2 Изменение содержимого и атрибутов:</p>
        <p>
          <span onClick={() => copyToClipboard('element.textContent')}>
            element.textContent
          </span>
          &nbsp; Изменяет текст внутри элемента.
        </p>
        <p>
          <span onClick={() => copyToClipboard('element.innerHTML')}>
            element.innerHTML
          </span>
          &nbsp; Изменяет HTML внутри элемента.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard("element.setAttribute('attr', 'value')")
            }
          >
            element.setAttribute('attr', 'value')
          </span>
          &nbsp; Устанавливает атрибут элемента.
        </p>
        <p>
          <span
            onClick={() => copyToClipboard("element.removeAttribute('attr')")}
          >
            element.removeAttribute('attr')
          </span>
          &nbsp; Удаляет атрибут.
        </p>
      </div>
    </>
  )
}
