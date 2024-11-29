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
          &emsp;1 Доступ к элементам (для доступа к элементам используются
          методы объекта document):
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
        <p>&emsp;2 Изменение содержимого и атрибутов:</p>
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
        <br />
        <p>&emsp;3 Создание, добавление и удаление элементов:</p>
        <p>
          <span
            onClick={() =>
              copyToClipboard("const newDiv = document.createElement('div')")
            }
          >
            const newDiv = document.createElement('div')
          </span>
          &nbsp; Создание элемента.
        </p>
        <p>
          <span onClick={() => copyToClipboard('parent.appendChild(newDiv)')}>
            parent.appendChild(newDiv)
          </span>
          &nbsp; Добавляет элемент в конец дочерних узлов.
        </p>
        <p>
          <span onClick={() => copyToClipboard('parent.prepend(newDiv)')}>
            parent.prepend(newDiv)
          </span>
          &nbsp; Добавляет элемент в начало.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard('parent.insertBefore(newDiv, existingNode)')
            }
          >
            parent.insertBefore(newDiv, existingNode)
          </span>
          &nbsp; Вставляет элемент перед существующим узлом.
        </p>
        <p>
          <span onClick={() => copyToClipboard('parent.removeChild(child)')}>
            parent.removeChild(child)
          </span>
          &nbsp; Удаляет дочерний элемент.
        </p>
        <p>
          <span onClick={() => copyToClipboard('node.remove()')}>
            node.remove()
          </span>
          &nbsp; Удаляет текущий элемент.
        </p>
        <br />
        <p>&emsp;4 Работа со стилями:</p>
        <p>
          <span onClick={() => copyToClipboard('element.style.property')}>
            element.style.property
          </span>
          &nbsp; Изменяет inline-стиль элемента.
        </p>
        <p>
          <span
            onClick={() => copyToClipboard("element.classList.add('class')")}
          >
            element.classList.add('class')
          </span>
          &nbsp; Добавляет класс.
        </p>
        <p>
          <span
            onClick={() => copyToClipboard("element.classList.remove('class')")}
          >
            element.classList.add('class')
          </span>
          &nbsp; Удаляет класс.
        </p>
        <p>
          <span
            onClick={() => copyToClipboard("element.classList.toggle('class')")}
          >
            element.classList.toggle('class')
          </span>
          &nbsp; Включает/выключает класс.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard("element.classList.contains('class')")
            }
          >
            element.classList.contains('class')
          </span>
          &nbsp; Проверяет наличие класса.
        </p>
        <br />
        <p>&emsp;5 События и их обработка:</p>
        <p>
          <span
            onClick={() =>
              copyToClipboard(
                "element.addEventListener('event', () => {console.log('Событие произошло!')})",
              )
            }
          >
            element.addEventListener('event', () =&gt;
            &#123;console.log('Событие произошло!')&#125;)
          </span>
          &nbsp; Назначает обработчик события.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard(
                "element.removeEventListener('event', () => {console.log('Событие произошло!')})",
              )
            }
          >
            element.removeEventListener('event', () =&gt;
            &#123;console.log('Событие произошло!')&#125;)
          </span>
          &nbsp; Удаление события.
        </p>
        <br />
        <p>&emsp;6 Навигация по DOM:</p>
        <p>
          <span onClick={() => copyToClipboard('element.parentNode')}>
            element.parentNode
          </span>
          &nbsp; Родительский узел.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard('element.childNodes / element.children')
            }
          >
            element.childNodes / element.children
          </span>
          &nbsp; Дочерние узлы.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard('element.firstChild / element.firstElementChild')
            }
          >
            element.firstChild / element.firstElementChild
          </span>
          &nbsp; Первый дочерний узел.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard('element.lastChild / element.lastElementChild')
            }
          >
            element.lastChild / element.lastElementChild
          </span>
          &nbsp; Последний дочерний узел.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard(
                'element.nextSibling / element.nextElementSibling',
              )
            }
          >
            element.nextSibling / element.nextElementSibling
          </span>
          &nbsp; Следующий соседний узел.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard(
                'element.previousSibling / element.previousElementSibling',
              )
            }
          >
            element.previousSibling / element.previousElementSibling
          </span>
          &nbsp; Предыдущий соседний узел.
        </p>
        <br />
        <p>&emsp;7 Перерисовка (Reflow и Repaint):</p>
        <div>
          <div
            onClick={() =>
              copyToClipboard(
                `const fragment = document.createDocumentFragment()
const div = document.createElement('div')
fragment.appendChild(div)
document.body.appendChild(fragment)`,
              )
            }
          >
            const fragment = document.createDocumentFragment()
            <br />
            const div = document.createElement('div')
            <br />
            fragment.appendChild(div)
            <br />
            document.body.appendChild(fragment)
          </div>
          <b>&nbsp;&nbsp;</b>
          <p>
            Изменение DOM-структуры может вызвать перерасчёт стилей и макета.
            Минимизируйте прямое изменение DOM, используя DocumentFragment или
            шаблоны.
            <br />
            <br />
            Фрагменты (DocumentFragment) позволяют добавлять элементы без
            влияния на производительность.
          </p>
        </div>
        <br />
        <p>
          &emsp;8 В некоторых библиотеках (например React) используется
          виртуальный DOM для оптимизации работы с DOM.
        </p>
      </div>
    </>
  )
}
