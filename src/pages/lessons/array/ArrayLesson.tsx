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
              copyToClipboard('array.forEach(data =>{data.price * 10})')
            }
          >
            array.forEach(data =&gt; &#123;data.price * 10&#125;)
          </span>
          &nbsp; выполняем функцию с каждым элементом массива.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard('for (let data of array) {data.price * 10})')
            }
          >
            for (let data of array) &#123;data.price * 10&#125;)
          </span>
          &nbsp; повторяет forEach, также работает с элементами NoteList,
          полученными через querySelectorAll.
        </p>
        <p>
          <span onClick={() => copyToClipboard('array.push(obj)')}>
            array.push(obj)
          </span>
          &nbsp; добавляет элементы в конец массива.
        </p>
        <p>
          <span onClick={() => copyToClipboard('array.unshift(obj)')}>
            array.unshift(obj)
          </span>
          &nbsp; добавляет элементы в начало массива.
        </p>
        <p>
          <span onClick={() => copyToClipboard('let popped = array.pop()')}>
            let popped = array.pop()
          </span>
          &nbsp; удаляет последний элемент из массива и возвращает его значение.
        </p>
        <p>
          <span onClick={() => copyToClipboard('let shifted = array.shift()')}>
            let shifted = array.shift()
          </span>
          &nbsp; удаляет первый элемент из массива и возвращает его значение.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard('let arr = array.map(data => {data.price * 10})')
            }
          >
            let arr = array.map(data =&gt; &#123;data.price * 10&#125;)
          </span>
          &nbsp; собираем новый массив.
        </p>
        <p>
          <span onClick={() => copyToClipboard('let arr = array.slice(1, 4)')}>
            let arr = array.slice(1, 4)
          </span>
          &nbsp; берем в новый массив элементы 1, 2, 3.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard("let arr = array.splice(2, 4, 'x', 'y', 'z')")
            }
          >
            let arr = array.splice(2, 4, ‘x’, ‘y’, ‘z’)
          </span>
          &nbsp; удаляет 4 элемента начиная с индекса 2 и вставляет вместо них
          x, y, z.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard('array.splice(array.indexOf(arr), 1)')
            }
          >
            array.splice(array.indexOf(arr), 1);
          </span>
          &nbsp; комбинация для удаления конкретного элемента из array (не
          работает если arr является элементом другого массива, т.к. ссылки
          отличаются, в таком случае предварительно ищем элемент в нужном
          массиве через .find()).
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard(
                'let arr = array.filter(data => data.name === "name")',
              )
            }
          >
            let arr = array.filter(data =&gt; data.name === ‘name’)
          </span>
          &nbsp; перебираем массив, получаем несколько true и собираем из них
          массив.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard('let arr = array.find(data => data.id === "id")')
            }
          >
            let arr = array.find(data =&gt; data.id === ‘id’)
          </span>
          &nbsp; перебираем массив, останавливаемся на первом найденном true и
          получаем единственный элемент массива.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard(
                'let arr = array.reduce((accum, data) => accum += data.price, 0)',
              )
            }
          >
            let arr = array.reduce((accum, data) =&gt; accum += data.price, 0)
          </span>
          &nbsp; при каждой итерации осуществляет взаимодействие результата с
          элементом массива, в первой итерации результат = 0.
        </p>
        <p>
          <span onClick={() => copyToClipboard('array.includes(arr)')}>
            array.includes(arr)
          </span>
          &nbsp; true или false включает массив элемент arr или нет.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard('array.every(data => data.price > 100)')
            }
          >
            array.every(data =&gt; data.price &gt; 100)
          </span>
          &nbsp; true или false проверка всех элементов массива.
        </p>
        <p>
          <span onClick={() => copyToClipboard('array.flat(2)')}>
            array.flat(2)
          </span>
          &nbsp; поднимает уровни вложенности [1, 2, [3, 4, [5, 6]]] =&gt; [1,
          2, 3, 4, 5, 6].
        </p>
        <p>
          <span onClick={() => copyToClipboard("array.join('')")}>
            array.join(‘’)
          </span>
          &nbsp; объединяет все элементы массива в строку.
        </p>
        <p>
          <span onClick={() => copyToClipboard('array.length')}>
            array.length
          </span>
          &nbsp; длина массива.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard('this.arr = [...array, ...this.arr, ...arr]')
            }
          >
            this.arr = [...array, …this.arr, …arr]
          </span>
          &nbsp; spread syntax объединяет массивы в нужном порядке.
        </p>
        <p>
          <span onClick={() => copyToClipboard("'text'.split()")}>
            'text'.split()
          </span>
          &nbsp; без аргумента возвращает массив, содержащий исходную строку в
          единственном элементе: ['text'].
        </p>
        <p>
          <span onClick={() => copyToClipboard("'text'.split()")}>
            'text'.split('')
          </span>
          &nbsp; cтрока разбивается на массив отдельных символов ['t', 'e', 'x',
          't'].
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard("'example_of_text_division'.split('_')")
            }
          >
            'example_of_text_division'.split('_')
          </span>
          &nbsp; cтрока разбивается по символу _ ['example', 'of', 'text',
          'division'].
        </p>
      </div>
    </>
  )
}
