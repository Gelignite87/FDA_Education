import { Accordion } from '../../../components/accordeon/Accordion'
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
          &emsp;1. Document - корневой объект, представляющий весь
          HTML-документ.
        </p>
        <p>
          &emsp;2. Element Nodes - узлы элементов (например, &lt;div&gt;,
          &lt;p&gt;).
        </p>
        <p>
          &emsp;3. Attribute Nodes - атрибуты элементов (например, id, class).
        </p>
        <p>&emsp;4. Text Nodes - текст внутри элементов.</p>
        <p>&emsp;5. Comment Nodes - комментарии в документе.</p>
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
        <Accordion>
          <p>
            События мыши:
            <br />
            &emsp;&emsp;click - Клик на элемент.
            <br />
            &emsp;&emsp;dblclick - Двойной клик на элемент.
            <br />
            &emsp;&emsp;mousedown - Нажатие кнопки мыши.
            <br />
            &emsp;&emsp;mouseup - Отпускание кнопки мыши.
            <br />
            &emsp;&emsp;mousemove - Движение мыши над элементом.
            <br />
            &emsp;&emsp;mouseenter - Мышь зашла на элемент (без всплытия).
            <br />
            &emsp;&emsp;mouseleave - Мышь ушла с элемента (без всплытия).
            <br />
            &emsp;&emsp;mouseover - Мышь зашла на элемент (включая дочерние
            элементы).
            <br />
            &emsp;&emsp;mouseout - Мышь ушла с элемента (включая дочерние
            элементы).
            <br />
            &emsp;&emsp;contextmenu - Открытие контекстного меню (обычно правая
            кнопка мыши).
          </p>
          <p>
            События мыши:
            <br />
            &emsp;&emsp;click - Клик на элемент.
            <br />
            &emsp;&emsp;dblclick - Двойной клик на элемент.
            <br />
            &emsp;&emsp;mousedown - Нажатие кнопки мыши.
            <br />
            &emsp;&emsp;mouseup - Отпускание кнопки мыши.
            <br />
            &emsp;&emsp;mousemove - Движение мыши над элементом.
            <br />
            &emsp;&emsp;mouseenter - Мышь зашла на элемент (без всплытия).
            <br />
            &emsp;&emsp;mouseleave - Мышь ушла с элемента (без всплытия).
            <br />
            &emsp;&emsp;mouseover - Мышь зашла на элемент (включая дочерние
            элементы).
            <br />
            &emsp;&emsp;mouseout - Мышь ушла с элемента (включая дочерние
            элементы).
            <br />
            &emsp;&emsp;contextmenu - Открытие контекстного меню (обычно правая
            кнопка мыши).
          </p>
          <p>
            События клавиатуры
            <br />
            &emsp;&emsp;keydown - Нажатие клавиши.
            <br />
            &emsp;&emsp;keyup - Отпускание клавиши.
            <br />
            &emsp;&emsp;keypress - Устаревшее событие для ввода символов
            (используйте keydown и keyup).
          </p>
          <p>
            События фокуса
            <br />
            &emsp;&emsp;focus - Элемент получил фокус.
            <br />
            &emsp;&emsp;blur - Элемент потерял фокус.
            <br />
            &emsp;&emsp;focusin - То же, что и focus, но поддерживает всплытие.
            <br />
            &emsp;&emsp;focusout - То же, что и blur, но поддерживает всплытие.
          </p>
          <p>
            События формы
            <br />
            &emsp;&emsp;input - Изменение значения &lt;input&gt; или
            &lt;textarea&gt;.
            <br />
            &emsp;&emsp;change - Изменение значения формы (после потери фокуса).
            <br />
            &emsp;&emsp;submit - Отправка формы.
            <br />
            &emsp;&emsp;reset - Сброс формы.
            <br />
            &emsp;&emsp;invalid - Поле не прошло валидацию.
          </p>
          <p>
            События для элементов
            <br />
            &emsp;&emsp;load - Полная загрузка элемента (например, изображения
            или страницы).
            <br />
            &emsp;&emsp;unload - Страница выгружена (устаревшее, заменено на
            beforeunload).
            <br />
            &emsp;&emsp;error - Произошла ошибка загрузки.
            <br />
            &emsp;&emsp;abort - Прерывание загрузки.
            <br />
            &emsp;&emsp;resize - Изменение размеров окна.
            <br />
            &emsp;&emsp;scroll - Прокрутка элемента или окна.
          </p>
          <p>
            События сетевых запросов
            <br />
            &emsp;&emsp;loadstart - Начало загрузки ресурса.
            <br />
            &emsp;&emsp;progress - Процесс загрузки.
            <br />
            &emsp;&emsp;load - Успешное завершение загрузки.
            <br />
            &emsp;&emsp;error - Ошибка загрузки.
            <br />
            &emsp;&emsp;abort - Прерывание загрузки.
            <br />
            &emsp;&emsp;loadend - Завершение загрузки (успешно или с ошибкой).
          </p>
          <p>
            События документа
            <br />
            &emsp;&emsp;DOMContentLoaded - Документ полностью загружен и готов к
            работе.
            <br />
            &emsp;&emsp;readystatechange - Смена состояния документа (loading,
            interactive, complete).
          </p>
          <p>
            События Drag-and-Drop
            <br />
            &emsp;&emsp;drag - Элемент перетаскивается.
            <br />
            &emsp;&emsp;dragstart - Начало перетаскивания.
            <br />
            &emsp;&emsp;dragend - Конец перетаскивания.
            <br />
            &emsp;&emsp;dragover - Элемент находится над зоной перетаскивания.
            <br />
            &emsp;&emsp;dragenter - Элемент заходит в зону перетаскивания.
            <br />
            &emsp;&emsp;dragleave - Элемент покидает зону перетаскивания.
            <br />
            &emsp;&emsp;drop - Элемент сброшен в зону.
          </p>
          <p>
            События клипборда
            <br />
            &emsp;&emsp;copy - Копирование данных.
            <br />
            &emsp;&emsp;cut - Вырезание данных.
            <br />
            &emsp;&emsp;paste - Вставка данных.
          </p>
          <p>
            События мультимедиа
            <br />
            &emsp;&emsp;play - Начало воспроизведения.
            <br />
            &emsp;&emsp;pause - Остановка воспроизведения.
            <br />
            &emsp;&emsp;ended - Окончание воспроизведения
            <br />
            &emsp;&emsp;timeupdate - Обновление текущего времени
            воспроизведения.
            <br />
            &emsp;&emsp;volumechange - Изменение громкости.
            <br />
            &emsp;&emsp;seeking - Начало перемотки.
            <br />
            &emsp;&emsp;seeked - Завершение перемотки.
          </p>
          <p>
            Специальные события
            <br />
            &emsp;&emsp;wheel - Прокрутка колёсиком мыши.
            <br />
            &emsp;&emsp;pointerdown, pointerup, pointermove - Универсальные
            события указателя (заменяют события мыши и сенсорные события).
            <br />
            &emsp;&emsp;animationstart, animationend, animationiteration -
            События анимации.
            <br />
            &emsp;&emsp;transitionstart, transitionend - События CSS-переходов.
          </p>
        </Accordion>
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
