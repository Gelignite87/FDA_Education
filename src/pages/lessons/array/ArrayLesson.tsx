import { ToastPropsTypes } from '../../../components/toast/ToastTypes'
import { copyToClipboard } from '../../../utils/utils'
import styles from './ArrayLesson.module.sass'

export const ArrayLesson: React.FC<ToastPropsTypes> = ({
  props: { setShowToast },
}) => {
  return (
    <>
      <div className={styles.Array_text}>
        <p>
          <i>Массивы</i> - это объекты, предназначенные для хранения
          упорядоченных коллекций данных. Они позволяют работать с несколькими
          значениями под одним именем, организованными в список. Каждый элемент
          массива имеет свой индекс, начиная с нуля.
        </p>
        <br />
        <p>
          <span
            onClick={() => {
              copyToClipboard('const numbers = new Array(1, 2, 3, 4, 5)')
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            const numbers = new Array(1, 2, 3, 4, 5)
          </span>
          &nbsp; создание массива с помощью конструктора Array.&nbsp;
          <span
            onClick={() => {
              copyToClipboard('const numbers = Array(1, 2, 3, 4, 5)')
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            const numbers = Array(1, 2, 3, 4, 5)
          </span>
          &nbsp; аналогичная запись.
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard('const numbers = Array(10).fill(1)')
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            const numbers = Array(10).fill(1)
          </span>
          &nbsp; создаём массив с 10 пустыми ячейками и заполняем их значением
          1.
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard('const myArray = Array.of(1, 2, 3)')
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            const myArray = Array.of(1, 2, 3)
          </span>
          &nbsp; метод создаёт массив из аргументов, даже если это один элемент.
          В отличие от new Array, он не интерпретирует число как длину массива.
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard(
                'const fromRange = Array.from({ length: 5 }, (_, i) => i + 1)',
              )
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            const fromRange = Array.from(&#123; length: 5 &#125;, (_, i) =&gt; i
            + 1)
          </span>
          &nbsp; метод позволяет создать массив из итерируемых объектов, таких
          как строки или коллекции.
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard(
                'array.forEach(data =>{return console.log(data.price * 10)})',
              )
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            array.forEach(data =&gt; &#123;return console.log(data.price *
            10)&#125;)
          </span>
          &nbsp; выполняет функцию с каждым элементом массива, но не изменяет
          сам массив. Возвращает undefined.
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard(
                'let arr = array.map(data => {return data.price * 10})',
              )
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            let arr = array.map(data =&gt; &#123;return data.price * 10&#125;)
          </span>
          &nbsp; собираем новый массив c преобразованными данными.
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard(
                'for (let data of array) {return data.price * 10})',
              )
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            for (let data of array) &#123;return data.price * 10&#125;)
          </span>
          &nbsp; повторяет forEach. Работает с элементами NoteList, полученными
          через querySelectorAll.
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard('array.push(obj)')
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            array.push(obj)
          </span>
          &nbsp; добавляет элементы в конец массива.
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard('array.unshift(obj)')
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            array.unshift(obj)
          </span>
          &nbsp; добавляет элементы в начало массива.
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard('let popped = array.pop()')
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            let popped = array.pop()
          </span>
          &nbsp; удаляет последний элемент из массива и возвращает его значение.
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard('let shifted = array.shift()')
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            let shifted = array.shift()
          </span>
          &nbsp; удаляет первый элемент из массива и возвращает его значение.
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard('let arr = array.slice(1, 4)')
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            let arr = array.slice(1, 4)
          </span>
          &nbsp; берем в новый массив элементы 1, 2, 3.
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard("let arr = array.splice(2, 4, 'x', 'y', 'z')")
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            let arr = array.splice(2, 4, ‘x’, ‘y’, ‘z’)
          </span>
          &nbsp; удаляет 4 элемента начиная с индекса 2 и вставляет вместо них
          x, y, z.
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard('array.splice(array.indexOf(arr), 1)')
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            array.splice(array.indexOf(arr), 1)
          </span>
          &nbsp; комбинация для удаления конкретного элемента из array (не
          работает если arr является элементом другого массива, т.к. ссылки
          отличаются, в таком случае предварительно ищем элемент в нужном
          массиве через .find()).
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard('array.findIndex((item) => item > 10)')
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            array.findIndex((item) =&gt; item &gt; 10)
          </span>
          &nbsp; возвращает индекс первого элемента, который больше 10.
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard(
                'let arr = array.filter(data => data.name === "name")',
              )
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            let arr = array.filter(data =&gt; data.name === ‘name’)
          </span>
          &nbsp; перебираем массив, получаем несколько true и собираем из них
          массив.
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard('let arr = array.find(data => data.id === "id")')
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            let arr = array.find(data =&gt; data.id === ‘id’)
          </span>
          &nbsp; перебираем массив, останавливаемся на первом найденном true и
          получаем единственный элемент массива.
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard(
                'let arr = array.reduce((accum, data) => accum += data.price, 0)',
              )
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            let arr = array.reduce((accum, data) =&gt; accum += data.price, 0)
          </span>
          &nbsp; при каждой итерации осуществляет взаимодействие результата с
          элементом массива, в первой итерации accum = 0.
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard('array.includes(arr)')
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            array.includes(arr)
          </span>
          &nbsp; возвращает true или false. Включает массив элемент arr или нет.
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard('array.every(data => data.price > 100)')
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            array.every(data =&gt; data.price &gt; 100)
          </span>
          &nbsp; возвращает true или false. Проверяет что все элементы массива
          больше 100.
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard('array.some(data => data.price > 100)')
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            array.some(data =&gt; data.price &gt; 100)
          </span>
          &nbsp; возвращает true или false. Проверяет что хотя бы один элемент
          массива больше 100.
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard('array.flat(2)')
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            array.flat(2)
          </span>
          &nbsp; поднимает уровни вложенности [1, 2, [3, 4, [5, 6]]] =&gt; [1,
          2, 3, 4, 5, 6].
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard('array.length')
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            array.length
          </span>
          &nbsp; длина массива.
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard(
                'const array = [...firstArray, ...secondArray, ...firstArray]',
              )
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            const array = [...firstArray, ...secondArray, ...firstArray]
          </span>
          &nbsp; Spread Syntax создает новый массив, объединяя массивы в нужном
          порядке.
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard("'text'.split()")
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            'text'.split()
          </span>
          &nbsp; без аргумента возвращает массив, содержащий исходную строку в
          единственном элементе: ['text'].
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard("'text'.split()")
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            'text'.split('')
          </span>
          &nbsp; строка разбивается на массив отдельных символов: ['t', 'e',
          'x', 't'].
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard("'example_of_text_division'.split('_')")
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            'example_of_text_division'.split('_')
          </span>
          &nbsp; строка разбивается по символу _ ['example', 'of', 'text',
          'division'].
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard("array.join('_')")
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            array.join('_')
          </span>
          &nbsp; собирает строку из элементов массива, разделяя их символом _.
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard("['banana', 'apple', 'cherry', 'date'].sort()'")
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            ['banana', 'apple', 'cherry', 'date'].sort()
          </span>
          &nbsp; сортировка по алфавиту: ['apple', 'banana', 'cherry', 'date'].
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard(
                'array.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))',
              )
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            array.sort((a, b) =&gt;
            a.toLowerCase().localeCompare(b.toLowerCase()))
          </span>
          &nbsp; сортировка по алфавиту с учетом особенностей локализации и
          игнорированием регистра.
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard(
                'array.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))',
              )
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            array.sort((a, b) =&gt;
            a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
          </span>
          &nbsp; сортировка объектов в массиве по полю name.
        </p>
        <p>
          <span
            onClick={() => {
              copyToClipboard('[10, 2, 5, 3, 1].sort((a, b) => a - b)')
              setShowToast({
                isShow: true,
                text: 'Текст скопирован!',
                color: 'green',
              })
            }}
          >
            [10, 2, 5, 3, 1].sort((a, b) =&gt; a - b)
          </span>
          &nbsp; сортировка чисел по возрастанию: [1, 2, 3, 5, 10].
        </p>
      </div>
    </>
  )
}
