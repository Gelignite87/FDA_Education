import { Accordion } from '../../../components/accordion/Accordion'
import styles from './DefaultObjectsLesson.module.sass'
import { copyToClipboard } from '../../../utils/utils'
import { Link } from 'react-router-dom'

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
          1. <b>Object.</b> Основной объект, который служит базой для всех
          других объектов в JavaScript. Он предоставляет методы для работы с
          свойствами объектов, такие как Object.keys(), Object.values(),
          Object.assign(), и другие.
        </p>
        <p>
          2. <b>Array.</b> Массивы в JavaScript представляют собой упорядоченные
          коллекции данных. Массивы являются объектами, но предоставляют
          специальные методы для работы с элементами, такие как push(), pop(),
          map(), filter(), reduce() и другие.
        </p>
        <p>
          3. <b>Function.</b> Функции в JavaScript — это объекты, которые могут
          быть вызваны. Они являются фундаментальной частью языка, и функции
          могут иметь методы, такие как call(), apply(), bind().
        </p>
        <p>
          4. <b>Date.</b> Объект для работы с датами и временем. Он
          предоставляет методы для получения текущей даты, вычисления разницы
          между датами, форматирования дат и т.д.
        </p>
        <p>
          5. <b>RegExp.</b> Объект для работы с регулярными выражениями. Он
          используется для выполнения поиска и замены в строках с использованием
          регулярных выражений.
        </p>
        <p>
          6. <b>Error.</b> Объект для создания и обработки ошибок. Он является
          основой для всех типов ошибок в JavaScript, таких как SyntaxError,
          ReferenceError, TypeError, и т.д.
        </p>
        <p>
          7. <b>Map.</b> Коллекция, которая хранит пары "ключ-значение", где
          ключи могут быть любого типа, а не только строки (в отличие от обычных
          объектов). Методы: set(), get(), has(), delete() и другие.
        </p>
        <p>
          8. <b>Set.</b> Коллекция уникальных значений, которая может хранить
          только уникальные элементы, аналогично массиву, но без дублирования
          значений. Методы: add(), has(), delete(), clear() и другие.
        </p>
        <p>
          9. <b>WeakMap.</b> Похож на Map, но ключи могут быть только объектами
          и они не препятствуют сборщику мусора очищать память, если объект-ключ
          больше не используется.
        </p>
        <p>
          10. <b>WeakSet.</b> Похож на Set, но в нём могут быть только объекты в
          качестве значений, и также значения не препятствуют сборщику мусора.
        </p>
        <p>
          11. <b>Promise.</b> Объект для работы с асинхронными операциями. Он
          позволяет обрабатывать результаты асинхронных вычислений, такие как
          успешные или ошибочные завершения операций.
        </p>
        <p>
          12. <b>Proxy.</b> Объект, который позволяет перехватывать и изменять
          поведение базовых операций с объектами (например, получение,
          присваивание значений, вызов функций и т.д.).
        </p>
        <p>
          13. <b>Reflect.</b> Объект для работы с мета-программированием,
          предоставляющий методы, которые облегчают взаимодействие с объектами и
          операциями, такими как Reflect.apply(), Reflect.get(), Reflect.set() и
          другие.
        </p>
        <p>
          14. <b>Intl.</b> Объект для работы с международными стандартами. Он
          включает в себя классы для работы с форматированием чисел, дат,
          валюты, строк, а также для локализации в различных языках.
        </p>
        <p>
          15. <b>JSON.</b> Стандартный объект для работы с JSON-данными
          (JavaScript Object Notation). Он предоставляет методы JSON.stringify()
          для преобразования объектов в строку JSON и JSON.parse() для
          преобразования строки JSON обратно в объект.
        </p>
        <p>
          16. <b>console.</b> Объект, предоставляющий методы для вывода
          информации в консоль, такие как console.log(), console.warn(),
          console.error() и другие.
        </p>
        <p>
          17. <b>window</b> (для браузера). Глобальный объект, представляющий
          окно браузера. Он предоставляет доступ ко всем глобальным функциям,
          объектам и переменным, таким как alert(), setTimeout(), localStorage,
          и другие.
        </p>
        <p>
          18. <b>document</b> (для браузера). Объект, представляющий
          HTML-документ в браузере. Он используется для манипуляции с DOM,
          поиска элементов на странице и выполнения различных операций с ними.
        </p>
        <p>
          19. <b>location</b> (для браузера). Объект, предоставляющий информацию
          о текущем URL и позволяющий изменять его или перезагружать страницу.
        </p>
        <br />
        <div className={styles.accordion_position}>
          <Accordion title="Методы Object">
            <p>
              1&nbsp;
              <span onClick={() => copyToClipboard('Object.assign()')}>
                assign(target, ...sources)
              </span>
              &nbsp; Копирует свойства из одного или нескольких объектов в
              целевой объект.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'const target = {}; Object.assign(target, { a: 1 }, { b: 2 }) → { a: 1, b: 2 }',
                  )
                }
              >
                const target = {}; Object.assign(target, &#123; a: 1 &#125;,
                &#123; b: 2 &#125;) → &#123; a: 1, b: 2 &#125;
              </span>
            </p>
            <p>
              2&nbsp;
              <span onClick={() => copyToClipboard('Object.create()')}>
                create(proto, [propertiesObject])
              </span>
              &nbsp; Создаёт новый объект с указанным объектом-прототипом.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'const proto = { greet() { return "hello"; } }; const obj = Object.create(proto); obj.greet() → "hello"',
                  )
                }
              >
                const proto = &#123; greet() &#123; return "hello"; &#125;
                &#125;; const obj = Object.create(proto); obj.greet() → "hello"
              </span>
            </p>
            <p>
              3&nbsp;
              <span onClick={() => copyToClipboard('Object.keys()')}>
                keys(obj)
              </span>
              &nbsp; Возвращает массив имен собственных перечисляемых свойств
              объекта.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'const obj = { a: 1, b: 2 }; Object.keys(obj) → ["a", "b"]',
                  )
                }
              >
                const obj = &#123; a: 1, b: 2 &#125;; Object.keys(obj) → ["a",
                "b"]
              </span>
            </p>
            <p>
              4&nbsp;
              <span onClick={() => copyToClipboard('Object.values()')}>
                values(obj)
              </span>
              &nbsp; Возвращает массив значений собственных перечисляемых
              свойств объекта.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'const obj = { a: 1, b: 2 }; Object.values(obj) → [1, 2]',
                  )
                }
              >
                const obj = &#123; a: 1, b: 2 &#125;; Object.values(obj) → [1,
                2]
              </span>
            </p>
            <p>
              5&nbsp;
              <span onClick={() => copyToClipboard('Object.entries()')}>
                entries(obj)
              </span>
              &nbsp; Возвращает массив пар `[ключ, значение]` собственных
              перечисляемых свойств объекта.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'const obj = { a: 1, b: 2 }; Object.entries(obj) → [["a", 1], ["b", 2]]',
                  )
                }
              >
                const obj = &#123; a: 1, b: 2 &#125;; Object.entries(obj) →
                [["a", 1], ["b", 2]]
              </span>
            </p>
            <p>
              6&nbsp;
              <span onClick={() => copyToClipboard('Object.freeze()')}>
                freeze(obj)
              </span>
              &nbsp; Замораживает объект, предотвращая добавление, удаление или
              изменение свойств.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'const obj = { a: 1 }; Object.freeze(obj); obj.a = 2; obj.a → 1',
                  )
                }
              >
                const obj = &#123; a: 1 &#125;; Object.freeze(obj); obj.a = 2;
                obj.a → 1
              </span>
            </p>
            <p>
              7&nbsp;
              <span onClick={() => copyToClipboard('Object.seal()')}>
                seal(obj)
              </span>
              &nbsp; Запечатывает объект, предотвращая добавление или удаление
              свойств.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'const obj = { a: 1 }; Object.seal(obj); delete obj.a; obj.a → 1',
                  )
                }
              >
                const obj = &#123; a: 1 &#125;; Object.seal(obj); delete obj.a;
                obj.a → 1
              </span>
            </p>
            <p>
              8&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Object.getOwnPropertyDescriptors()')
                }
              >
                getOwnPropertyDescriptors(obj)
              </span>
              &nbsp; Возвращает все дескрипторы свойств объекта.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'const obj = { a: 1 }; Object.getOwnPropertyDescriptors(obj) → { a: { value: 1, writable: true, enumerable: true, configurable: true } }',
                  )
                }
              >
                const obj = &#123; a: 1 &#125;;
                Object.getOwnPropertyDescriptors(obj) → &#123; a: &#123; value:
                1, writable: true, enumerable: true, configurable: true &#125;
                &#125;
              </span>
            </p>
            <p>
              9&nbsp;
              <span onClick={() => copyToClipboard('Object.defineProperty()')}>
                defineProperty(obj, prop, descriptor)
              </span>
              &nbsp; Определяет или изменяет свойство объекта.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'const obj = {}; Object.defineProperty(obj, "a", { value: 1, writable: false }); obj.a → 1',
                  )
                }
              >
                const obj = &#123;&#125;; Object.defineProperty(obj, "a", &#123;
                value: 1, writable: false &#125;); obj.a → 1
              </span>
            </p>
            <p>
              10&nbsp;
              <span onClick={() => copyToClipboard('Object.hasOwn()')}>
                hasOwn(obj, prop)
              </span>
              &nbsp; Проверяет, является ли свойство собственным у объекта.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'const obj = { a: 1 }; Object.hasOwn(obj, "a") → true',
                  )
                }
              >
                const obj = &#123; a: 1 &#125;; Object.hasOwn(obj, "a") → true
              </span>
            </p>
          </Accordion>
        </div>
        <div className={styles.accordion_position}>
          <Accordion title="Методы Array">
            <p>
              1&nbsp;
              <span onClick={() => copyToClipboard('Array.isArray()')}>
                isArray(value)
              </span>
              &nbsp; Проверяет, является ли значение массивом.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Array.isArray([1, 2, 3]) → true')
                }
              >
                Array.isArray([1, 2, 3]) → true
              </span>
            </p>
            <p>
              2&nbsp;
              <span onClick={() => copyToClipboard('Array.prototype.push()')}>
                push(...items)
              </span>
              &nbsp; Добавляет один или несколько элементов в конец массива и
              возвращает новую длину массива.
              <br />
              Пример:&nbsp;
              <span onClick={() => copyToClipboard('[1, 2].push(3) → 3')}>
                [1, 2].push(3) → 3
              </span>
            </p>
            <p>
              3&nbsp;
              <span onClick={() => copyToClipboard('Array.prototype.pop()')}>
                pop()
              </span>
              &nbsp; Удаляет последний элемент массива и возвращает его.
              <br />
              Пример:&nbsp;
              <span onClick={() => copyToClipboard('[1, 2, 3].pop() → 3')}>
                [1, 2, 3].pop() → 3
              </span>
            </p>
            <p>
              4&nbsp;
              <span onClick={() => copyToClipboard('Array.prototype.shift()')}>
                shift()
              </span>
              &nbsp; Удаляет первый элемент массива и возвращает его.
              <br />
              Пример:&nbsp;
              <span onClick={() => copyToClipboard('[1, 2, 3].shift() → 1')}>
                [1, 2, 3].shift() → 1
              </span>
            </p>
            <p>
              5&nbsp;
              <span
                onClick={() => copyToClipboard('Array.prototype.unshift()')}
              >
                unshift(...items)
              </span>
              &nbsp; Добавляет один или несколько элементов в начало массива и
              возвращает новую длину массива.
              <br />
              Пример:&nbsp;
              <span onClick={() => copyToClipboard('[1, 2].unshift(0) → 3')}>
                [1, 2].unshift(0) → 3
              </span>
            </p>
            <p>
              6&nbsp;
              <span onClick={() => copyToClipboard('Array.prototype.concat()')}>
                concat(...arrays)
              </span>
              &nbsp; Объединяет два или более массива.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('[1, 2].concat([3, 4]) → [1, 2, 3, 4]')
                }
              >
                [1, 2].concat([3, 4]) → [1, 2, 3, 4]
              </span>
            </p>
            <p>
              7&nbsp;
              <span onClick={() => copyToClipboard('Array.prototype.slice()')}>
                slice(begin, end)
              </span>
              &nbsp; Создает новый массив, содержащий копию части исходного
              массива.
              <br />
              Пример:&nbsp;
              <span
                onClick={() => copyToClipboard('[1, 2, 3].slice(1, 2) → [2]')}
              >
                [1, 2, 3].slice(1, 2) → [2]
              </span>
            </p>
            <p>
              8&nbsp;
              <span onClick={() => copyToClipboard('Array.prototype.splice()')}>
                splice(start, deleteCount, ...items)
              </span>
              &nbsp; Изменяет содержимое массива, удаляя, заменяя или добавляя
              элементы.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('[1, 2, 3].splice(1, 1, 4) → [2]')
                }
              >
                [1, 2, 3].splice(1, 1, 4) → [2]
              </span>
            </p>
            <p>
              9&nbsp;
              <span
                onClick={() => copyToClipboard('Array.prototype.forEach()')}
              >
                forEach(callback)
              </span>
              &nbsp; Выполняет заданную функцию для каждого элемента массива.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    '[1, 2, 3].forEach(num => console.log(num)) → 1 2 3',
                  )
                }
              >
                [1, 2, 3].forEach(num =&gt; console.log(num)) → 1 2 3
              </span>
            </p>
            <p>
              10&nbsp;
              <span onClick={() => copyToClipboard('Array.prototype.map()')}>
                map(callback)
              </span>
              &nbsp; Создает новый массив с результатами вызова функции для
              каждого элемента массива.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('[1, 2, 3].map(num => num * 2) → [2, 4, 6]')
                }
              >
                [1, 2, 3].map(num =&gt; num * 2) → [2, 4, 6]
              </span>
            </p>
            <p>
              11&nbsp;
              <span onClick={() => copyToClipboard('Array.prototype.filter()')}>
                filter(callback)
              </span>
              &nbsp; Создает новый массив с элементами, прошедшими тест в
              функции.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    '[1, 2, 3, 4].filter(num => num % 2 === 0) → [2, 4]',
                  )
                }
              >
                [1, 2, 3, 4].filter(num =&gt; num % 2 === 0) → [2, 4]
              </span>
            </p>
            <p>
              12&nbsp;
              <span onClick={() => copyToClipboard('Array.prototype.reduce()')}>
                reduce(callback, initialValue)
              </span>
              &nbsp; Применяет функцию к каждому элементу массива, чтобы
              получить одно значение.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    '[1, 2, 3].reduce((acc, num) => acc + num, 0) → 6',
                  )
                }
              >
                [1, 2, 3].reduce((acc, num) =&gt; acc + num, 0) → 6
              </span>
            </p>
            <p>
              13&nbsp;
              <span onClick={() => copyToClipboard('Array.prototype.some()')}>
                some(callback)
              </span>
              &nbsp; Проверяет, хотя бы один элемент массива удовлетворяет
              условию.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('[1, 2, 3].some(num => num > 2) → true')
                }
              >
                [1, 2, 3].some(num =&gt; num &gt; 2) → true
              </span>
            </p>
            <p>
              14&nbsp;
              <span onClick={() => copyToClipboard('Array.prototype.every()')}>
                every(callback)
              </span>
              &nbsp; Проверяет, все ли элементы массива удовлетворяют условию.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('[1, 2, 3].every(num => num > 0) → true')
                }
              >
                [1, 2, 3].every(num =&gt; num &gt; 0) → true
              </span>
            </p>
            <p>
              15&nbsp;
              <span
                onClick={() => copyToClipboard('Array.prototype.includes()')}
              >
                includes(element)
              </span>
              &nbsp; Проверяет, содержит ли массив указанный элемент.
              <br />
              Пример:&nbsp;
              <span
                onClick={() => copyToClipboard('[1, 2, 3].includes(2) → true')}
              >
                [1, 2, 3].includes(2) → true
              </span>
            </p>
          </Accordion>
        </div>
        <div className={styles.accordion_position}>
          <Accordion title="Методы Function">
            <p>
              1&nbsp;
              <span
                onClick={() => copyToClipboard('Function.prototype.call()')}
              >
                call(thisArg, ...args)
              </span>
              &nbsp; Вызывает функцию с указанным значением `this` и
              аргументами.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'function greet() { return this.name; } greet.call({ name: "Alice" }) → "Alice"',
                  )
                }
              >
                function greet() &#123; return this.name; &#125;
                greet.call(&#123; name: "Alice" &#125;) → "Alice"
              </span>
            </p>
            <p>
              2&nbsp;
              <span
                onClick={() => copyToClipboard('Function.prototype.apply()')}
              >
                apply(thisArg, argsArray)
              </span>
              &nbsp; Вызывает функцию с указанным значением `this` и
              аргументами, переданными как массив.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'function sum(a, b) { return a + b; } sum.apply(null, [1, 2]) → 3',
                  )
                }
              >
                function sum(a, b) &#123; return a + b; &#125; sum.apply(null,
                [1, 2]) → 3
              </span>
            </p>
            <p>
              3&nbsp;
              <span
                onClick={() => copyToClipboard('Function.prototype.bind()')}
              >
                bind(thisArg, ...args)
              </span>
              &nbsp; Создаёт новую функцию с привязанным значением `this` и
              частично применёнными аргументами.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'function greet(greeting) { return `${greeting}, ${this.name}`; } const bound = greet.bind({ name: "Alice" }, "Hello"); bound() → "Hello, Alice"',
                  )
                }
              >
                function greet(greeting) &#123; return `$&#123;greeting&#125;,
                $&#123;this.name&#125;`; &#125; const bound = greet.bind(&#123;
                name: "Alice" &#125;, "Hello"); bound() → "Hello, Alice"
              </span>
            </p>
            <p>
              4&nbsp;
              <span
                onClick={() => copyToClipboard('Function.prototype.toString()')}
              >
                toString()
              </span>
              &nbsp; Возвращает строковое представление исходного кода функции.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'function example() { return 42; } example.toString() → "function example() { return 42; }"',
                  )
                }
              >
                function example() &#123; return 42; &#125; example.toString() →
                "function example() &#123; return 42; &#125;"
              </span>
            </p>
            <p>
              5&nbsp;
              <span
                onClick={() => copyToClipboard('Function.prototype.length')}
              >
                length
              </span>
              &nbsp; Возвращает количество ожидаемых параметров функции.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'function sum(a, b) { return a + b; } sum.length → 2',
                  )
                }
              >
                function sum(a, b) &#123; return a + b; &#125; sum.length → 2
              </span>
            </p>
            <p>
              6&nbsp;
              <span onClick={() => copyToClipboard('Function.prototype.name')}>
                name
              </span>
              &nbsp; Возвращает имя функции.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'function example() {} example.name → "example"',
                  )
                }
              >
                function example() {} example.name → "example"
              </span>
            </p>
            <p>
              7&nbsp;
              <span onClick={() => copyToClipboard('Function.constructor')}>
                Function()
              </span>
              &nbsp; Конструктор для создания новых функций.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'const add = new Function("a", "b", "return a + b;"); add(1, 2) → 3',
                  )
                }
              >
                const add = new Function("a", "b", "return a + b;"); add(1, 2) →
                3
              </span>
            </p>
          </Accordion>
        </div>
        <div className={styles.accordion_position}>
          <Accordion title="Методы Date">
            <p>
              1&nbsp;
              <span onClick={() => copyToClipboard('Date.now()')}>
                Date.now()
              </span>
              &nbsp; Возвращает количество миллисекунд, прошедших с 1 января
              1970 года.
              <br />
              Пример:&nbsp;
              <span
                onClick={() => copyToClipboard('Date.now() → 1672531200000')}
              >
                Date.now() → 1672531200000
              </span>
            </p>
            <p>
              2&nbsp;
              <span onClick={() => copyToClipboard('Date.parse()')}>
                Date.parse(dateString)
              </span>
              &nbsp; Преобразует строку с датой в количество миллисекунд с 1
              января 1970 года.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Date.parse("2023-01-01") → 1672531200000')
                }
              >
                Date.parse("2023-01-01") → 1672531200000
              </span>
            </p>
            <p>
              3&nbsp;
              <span onClick={() => copyToClipboard('Date.UTC()')}>
                Date.UTC(year, month, ...)
              </span>
              &nbsp; Возвращает количество миллисекунд с 1 января 1970 года по
              UTC.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Date.UTC(2023, 0, 1) → 1672531200000')
                }
              >
                Date.UTC(2023, 0, 1) → 1672531200000
              </span>
            </p>
            <p>
              4&nbsp;
              <span onClick={() => copyToClipboard('date.toString()')}>
                toString()
              </span>
              &nbsp; Преобразует объект Date в строку.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'new Date().toString() → "Tue Jan 03 2023 15:30:00 GMT+0300"',
                  )
                }
              >
                new Date().toString() → "Tue Jan 03 2023 15:30:00 GMT+0300"
              </span>
            </p>
            <p>
              5&nbsp;
              <span onClick={() => copyToClipboard('date.toISOString()')}>
                toISOString()
              </span>
              &nbsp; Возвращает дату в формате ISO 8601.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'new Date().toISOString() → "2023-01-03T12:30:00.000Z"',
                  )
                }
              >
                new Date().toISOString() → "2023-01-03T12:30:00.000Z"
              </span>
            </p>
            <p>
              6&nbsp;
              <span onClick={() => copyToClipboard('date.getTime()')}>
                getTime()
              </span>
              &nbsp; Возвращает количество миллисекунд с 1 января 1970 года.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('new Date().getTime() → 1672531200000')
                }
              >
                new Date().getTime() → 1672531200000
              </span>
            </p>
            <p>
              7&nbsp;
              <span onClick={() => copyToClipboard('date.getFullYear()')}>
                getFullYear()
              </span>
              &nbsp; Возвращает год.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('new Date().getFullYear() → 2023')
                }
              >
                new Date().getFullYear() → 2023
              </span>
            </p>
            <p>
              8&nbsp;
              <span onClick={() => copyToClipboard('date.getMonth()')}>
                getMonth()
              </span>
              &nbsp; Возвращает месяц (0–11).
              <br />
              Пример:&nbsp;
              <span
                onClick={() => copyToClipboard('new Date().getMonth() → 0')}
              >
                new Date().getMonth() → 0
              </span>
            </p>
            <p>
              9&nbsp;
              <span onClick={() => copyToClipboard('date.getDate()')}>
                getDate()
              </span>
              &nbsp; Возвращает день месяца.
              <br />
              Пример:&nbsp;
              <span onClick={() => copyToClipboard('new Date().getDate() → 1')}>
                new Date().getDate() → 1
              </span>
            </p>
            <p>
              10&nbsp;
              <span onClick={() => copyToClipboard('date.getDay()')}>
                getDay()
              </span>
              &nbsp; Возвращает день недели (0–6).
              <br />
              Пример:&nbsp;
              <span onClick={() => copyToClipboard('new Date().getDay() → 0')}>
                new Date().getDay() → 0
              </span>
            </p>
          </Accordion>
        </div>
        <div className={styles.accordion_position}>
          <Accordion title="Методы RegExp">
            <p>
              1&nbsp;
              <span onClick={() => copyToClipboard('RegExp.prototype.exec()')}>
                exec(string)
              </span>
              &nbsp; Выполняет поиск совпадения в строке. Возвращает массив с
              результатом или null.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard("new RegExp('a').exec('cat') → ['a']")
                }
              >
                new RegExp('a').exec('cat') → ['a']
              </span>
            </p>
            <p>
              2&nbsp;
              <span onClick={() => copyToClipboard('RegExp.prototype.test()')}>
                test(string)
              </span>
              &nbsp; Проверяет, есть ли совпадение в строке. Возвращает true или
              false.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard("new RegExp('a').test('cat') → true")
                }
              >
                new RegExp('a').test('cat') → true
              </span>
            </p>
            <p>
              3&nbsp;
              <span
                onClick={() => copyToClipboard('RegExp.prototype.toString()')}
              >
                toString()
              </span>
              &nbsp; Возвращает строковое представление регулярного выражения.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard("new RegExp('a', 'g').toString() → '/a/g'")
                }
              >
                new RegExp('a', 'g').toString() → '/a/g'
              </span>
            </p>
            <p>
              4&nbsp;
              <span onClick={() => copyToClipboard('RegExp.prototype.source')}>
                source
              </span>
              &nbsp; Возвращает строку с шаблоном регулярного выражения.
              <br />
              Пример:&nbsp;
              <span
                onClick={() => copyToClipboard("new RegExp('a').source → 'a'")}
              >
                new RegExp('a').source → 'a'
              </span>
            </p>
            <p>
              5&nbsp;
              <span onClick={() => copyToClipboard('RegExp.prototype.flags')}>
                flags
              </span>
              &nbsp; Возвращает строку с установленными флагами регулярного
              выражения.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard("new RegExp('a', 'gi').flags → 'gi'")
                }
              >
                new RegExp('a', 'gi').flags → 'gi'
              </span>
            </p>
            <p>
              6&nbsp;
              <span onClick={() => copyToClipboard('RegExp.prototype.global')}>
                global
              </span>
              &nbsp; Возвращает true, если установлен флаг **g**.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard("new RegExp('a', 'g').global → true")
                }
              >
                new RegExp('a', 'g').global → true
              </span>
            </p>
            <p>
              7&nbsp;
              <span
                onClick={() => copyToClipboard('RegExp.prototype.ignoreCase')}
              >
                ignoreCase
              </span>
              &nbsp; Возвращает true, если установлен флаг **i**.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard("new RegExp('a', 'i').ignoreCase → true")
                }
              >
                new RegExp('a', 'i').ignoreCase → true
              </span>
            </p>
            <p>
              8&nbsp;
              <span
                onClick={() => copyToClipboard('RegExp.prototype.multiline')}
              >
                multiline
              </span>
              &nbsp; Возвращает true, если установлен флаг **m**.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard("new RegExp('a', 'm').multiline → true")
                }
              >
                new RegExp('a', 'm').multiline → true
              </span>
            </p>
            <p>
              9&nbsp;
              <span onClick={() => copyToClipboard('RegExp.prototype.sticky')}>
                sticky
              </span>
              &nbsp; Возвращает true, если установлен флаг **y**.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard("new RegExp('a', 'y').sticky → true")
                }
              >
                new RegExp('a', 'y').sticky → true
              </span>
            </p>
            <p>
              10&nbsp;
              <span onClick={() => copyToClipboard('RegExp.prototype.unicode')}>
                unicode
              </span>
              &nbsp; Возвращает true, если установлен флаг **u**.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard("new RegExp('\\u{61}', 'u').unicode → true")
                }
              >
                new RegExp('\\u{61}', 'u').unicode → true
              </span>
            </p>
          </Accordion>
        </div>
        <div className={styles.accordion_position}>
          <Accordion title="Методы Error">
            <p>
              1&nbsp;
              <span onClick={() => copyToClipboard('Error.prototype.name')}>
                name
              </span>
              &nbsp; Свойство, содержащее имя типа ошибки. По умолчанию "Error".
              <br />
              Пример:&nbsp;
              <span
                onClick={() => copyToClipboard("new Error().name → 'Error'")}
              >
                new Error().name → 'Error'
              </span>
            </p>
            <p>
              2&nbsp;
              <span onClick={() => copyToClipboard('Error.prototype.message')}>
                message
              </span>
              &nbsp; Свойство, содержащее текст сообщения об ошибке.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    "new Error('Something went wrong').message → 'Something went wrong'",
                  )
                }
              >
                new Error('Something went wrong').message → 'Something went
                wrong'
              </span>
            </p>
            <p>
              3&nbsp;
              <span
                onClick={() => copyToClipboard('Error.prototype.toString()')}
              >
                toString()
              </span>
              &nbsp; Метод, возвращающий строковое представление объекта ошибки.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    "new Error('Oops').toString() → 'Error: Oops'",
                  )
                }
              >
                new Error('Oops').toString() → 'Error: Oops'
              </span>
            </p>
            <p>
              4&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Error.captureStackTrace(targetObject)')
                }
              >
                captureStackTrace(targetObject)
              </span>
              &nbsp; Метод, используемый для создания трассировки стека для
              ошибки.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'Error.captureStackTrace(myError) → undefined',
                  )
                }
              >
                Error.captureStackTrace(myError) → undefined
              </span>
            </p>
            <p>
              5&nbsp;
              <span onClick={() => copyToClipboard('Error.prototype.stack')}>
                stack
              </span>
              &nbsp; Свойство, содержащее текстовое представление трассировки
              стека ошибки.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    "new Error('Crash').stack → 'Error: Crash\\n at ...'",
                  )
                }
              >
                new Error('Crash').stack → 'Error: Crash\n at ...'
              </span>
            </p>
          </Accordion>
        </div>
        <div className={styles.accordion_position}>
          <Accordion title="Методы Map">
            <p>
              1&nbsp;
              <span
                onClick={() => copyToClipboard('Map.prototype.set(key, value)')}
              >
                set(key, value)
              </span>
              &nbsp; Добавляет или обновляет элемент с указанным ключом и
              значением.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    "const map = new Map(); map.set('a', 1); map.get('a') → 1",
                  )
                }
              >
                const map = new Map(); map.set('a', 1); map.get('a') → 1
              </span>
            </p>
            <p>
              2&nbsp;
              <span onClick={() => copyToClipboard('Map.prototype.get(key)')}>
                get(key)
              </span>
              &nbsp; Возвращает значение, связанное с указанным ключом.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    "const map = new Map([['a', 1]]); map.get('a') → 1",
                  )
                }
              >
                const map = new Map([['a', 1]]); map.get('a') → 1
              </span>
            </p>
            <p>
              3&nbsp;
              <span onClick={() => copyToClipboard('Map.prototype.has(key)')}>
                has(key)
              </span>
              &nbsp; Проверяет, существует ли элемент с указанным ключом.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    "const map = new Map([['a', 1]]); map.has('a') → true",
                  )
                }
              >
                const map = new Map([['a', 1]]); map.has('a') → true
              </span>
            </p>
            <p>
              4&nbsp;
              <span
                onClick={() => copyToClipboard('Map.prototype.delete(key)')}
              >
                delete(key)
              </span>
              &nbsp; Удаляет элемент с указанным ключом.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    "const map = new Map([['a', 1]]); map.delete('a'); map.has('a') → false",
                  )
                }
              >
                const map = new Map([['a', 1]]); map.delete('a'); map.has('a') →
                false
              </span>
            </p>
            <p>
              5&nbsp;
              <span onClick={() => copyToClipboard('Map.prototype.clear()')}>
                clear()
              </span>
              &nbsp; Удаляет все элементы из Map.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    "const map = new Map([['a', 1], ['b', 2]]); map.clear(); map.size → 0",
                  )
                }
              >
                const map = new Map([['a', 1], ['b', 2]]); map.clear(); map.size
                → 0
              </span>
            </p>
            <p>
              6&nbsp;
              <span onClick={() => copyToClipboard('Map.prototype.size')}>
                size
              </span>
              &nbsp; Возвращает количество элементов в Map.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    "const map = new Map([['a', 1], ['b', 2]]); map.size → 2",
                  )
                }
              >
                const map = new Map([['a', 1], ['b', 2]]); map.size → 2
              </span>
            </p>
            <p>
              7&nbsp;
              <span onClick={() => copyToClipboard('Map.prototype.keys()')}>
                keys()
              </span>
              &nbsp; Возвращает итератор для ключей Map.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    "const map = new Map([['a', 1]]); [...map.keys()] → ['a']",
                  )
                }
              >
                const map = new Map([['a', 1]]); [...map.keys()] → ['a']
              </span>
            </p>
            <p>
              8&nbsp;
              <span onClick={() => copyToClipboard('Map.prototype.values()')}>
                values()
              </span>
              &nbsp; Возвращает итератор для значений Map.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    "const map = new Map([['a', 1]]); [...map.values()] → [1]",
                  )
                }
              >
                const map = new Map([['a', 1]]); [...map.values()] → [1]
              </span>
            </p>
            <p>
              9&nbsp;
              <span onClick={() => copyToClipboard('Map.prototype.entries()')}>
                entries()
              </span>
              &nbsp; Возвращает итератор для пар [ключ, значение] из Map.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    "const map = new Map([['a', 1]]); [...map.entries()] → [['a', 1]]",
                  )
                }
              >
                const map = new Map([['a', 1]]); [...map.entries()] → [['a', 1]]
              </span>
            </p>
            <p>
              10&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Map.prototype.forEach(callbackFn, thisArg)')
                }
              >
                forEach(callbackFn, thisArg)
              </span>
              &nbsp; Выполняет указанную функцию для каждого элемента Map.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    "const map = new Map([['a', 1]]); map.forEach((value, key) => console.log(key, value)) → 'a 1'",
                  )
                }
              >
                const map = new Map([['a', 1]]); map.forEach((value, key) =&gt;
                console.log(key, value)) → 'a 1'
              </span>
            </p>
          </Accordion>
        </div>
        <div className={styles.accordion_position}>
          <Accordion title="Методы Set">
            <p>
              1&nbsp;
              <span onClick={() => copyToClipboard('Set.prototype.add(value)')}>
                add(value)
              </span>
              &nbsp; Добавляет значение в Set. Если значение уже существует, оно
              не будет добавлено.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'const set = new Set(); set.add(1); set.has(1) → true',
                  )
                }
              >
                const set = new Set(); set.add(1); set.has(1) → true
              </span>
            </p>
            <p>
              2&nbsp;
              <span onClick={() => copyToClipboard('Set.prototype.has(value)')}>
                has(value)
              </span>
              &nbsp; Проверяет, существует ли указанное значение в Set.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'const set = new Set([1, 2, 3]); set.has(2) → true',
                  )
                }
              >
                const set = new Set([1, 2, 3]); set.has(2) → true
              </span>
            </p>
            <p>
              3&nbsp;
              <span
                onClick={() => copyToClipboard('Set.prototype.delete(value)')}
              >
                delete(value)
              </span>
              &nbsp; Удаляет указанное значение из Set, если оно существует.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'const set = new Set([1, 2]); set.delete(1); set.has(1) → false',
                  )
                }
              >
                const set = new Set([1, 2]); set.delete(1); set.has(1) → false
              </span>
            </p>
            <p>
              4&nbsp;
              <span onClick={() => copyToClipboard('Set.prototype.clear()')}>
                clear()
              </span>
              &nbsp; Удаляет все элементы из Set.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'const set = new Set([1, 2, 3]); set.clear(); set.size → 0',
                  )
                }
              >
                const set = new Set([1, 2, 3]); set.clear(); set.size → 0
              </span>
            </p>
            <p>
              5&nbsp;
              <span onClick={() => copyToClipboard('Set.prototype.size')}>
                size
              </span>
              &nbsp; Возвращает количество элементов в Set.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'const set = new Set([1, 2, 3]); set.size → 3',
                  )
                }
              >
                const set = new Set([1, 2, 3]); set.size → 3
              </span>
            </p>
            <p>
              6&nbsp;
              <span onClick={() => copyToClipboard('Set.prototype.keys()')}>
                keys()
              </span>
              &nbsp; Возвращает итератор для значений в Set (идентичен values(),
              поскольку Set не хранит ключи).
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'const set = new Set([1, 2]); [...set.keys()] → [1, 2]',
                  )
                }
              >
                const set = new Set([1, 2]); [...set.keys()] → [1, 2]
              </span>
            </p>
            <p>
              7&nbsp;
              <span onClick={() => copyToClipboard('Set.prototype.values()')}>
                values()
              </span>
              &nbsp; Возвращает итератор для значений в Set.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'const set = new Set([1, 2]); [...set.values()] → [1, 2]',
                  )
                }
              >
                const set = new Set([1, 2]); [...set.values()] → [1, 2]
              </span>
            </p>
            <p>
              8&nbsp;
              <span onClick={() => copyToClipboard('Set.prototype.entries()')}>
                entries()
              </span>
              &nbsp; Возвращает итератор для пар [значение, значение], так как
              Set не хранит ключи.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'const set = new Set([1, 2]); [...set.entries()] → [[1, 1], [2, 2]]',
                  )
                }
              >
                const set = new Set([1, 2]); [...set.entries()] → [[1, 1], [2,
                2]]
              </span>
            </p>
            <p>
              9&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Set.prototype.forEach(callbackFn, thisArg)')
                }
              >
                forEach(callbackFn, thisArg)
              </span>
              &nbsp; Выполняет указанную функцию для каждого элемента Set.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'const set = new Set([1, 2]); set.forEach(value => console.log(value)) → 1, 2',
                  )
                }
              >
                const set = new Set([1, 2]); set.forEach(value =&gt;
                console.log(value)) → 1, 2
              </span>
            </p>
          </Accordion>
        </div>
        <div className={styles.accordion_position}>
          <Accordion title="Методы WeakMap">
            <p>
              1&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('WeakMap.prototype.set(key, value)')
                }
              >
                set(key, value)
              </span>
              &nbsp; Устанавливает значение для указанного ключа. Ключ должен
              быть объектом.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    "const wm = new WeakMap(); const obj = {}; wm.set(obj, 'value'); wm.get(obj) → 'value'",
                  )
                }
              >
                const wm = new WeakMap(); const obj = {}; wm.set(obj, 'value');
                wm.get(obj) → 'value'
              </span>
            </p>
            <p>
              2&nbsp;
              <span
                onClick={() => copyToClipboard('WeakMap.prototype.get(key)')}
              >
                get(key)
              </span>
              &nbsp; Возвращает значение, связанное с указанным ключом, или
              undefined, если ключ отсутствует.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    "const wm = new WeakMap(); const obj = {}; wm.set(obj, 'value'); wm.get(obj) → 'value'",
                  )
                }
              >
                const wm = new WeakMap(); const obj = {}; wm.set(obj, 'value');
                wm.get(obj) → 'value'
              </span>
            </p>
            <p>
              3&nbsp;
              <span
                onClick={() => copyToClipboard('WeakMap.prototype.has(key)')}
              >
                has(key)
              </span>
              &nbsp; Проверяет, существует ли указанный ключ в WeakMap.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    "const wm = new WeakMap(); const obj = {}; wm.set(obj, 'value'); wm.has(obj) → true",
                  )
                }
              >
                const wm = new WeakMap(); const obj = {}; wm.set(obj, 'value');
                wm.has(obj) → true
              </span>
            </p>
            <p>
              4&nbsp;
              <span
                onClick={() => copyToClipboard('WeakMap.prototype.delete(key)')}
              >
                delete(key)
              </span>
              &nbsp; Удаляет указанный ключ и его значение из WeakMap.
              Возвращает true, если ключ был удалён.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    "const wm = new WeakMap(); const obj = {}; wm.set(obj, 'value'); wm.delete(obj); wm.has(obj) → false",
                  )
                }
              >
                const wm = new WeakMap(); const obj = {}; wm.set(obj, 'value');
                wm.delete(obj); wm.has(obj) → false
              </span>
            </p>
          </Accordion>
        </div>
        <div className={styles.accordion_position}>
          <Accordion title="Методы WeakSet">
            <p>
              1&nbsp;
              <span
                onClick={() => copyToClipboard('WeakSet.prototype.add(value)')}
              >
                add(value)
              </span>
              &nbsp; Добавляет объект в WeakSet.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'const ws = new WeakSet(); const obj = {}; ws.add(obj); ws.has(obj) → true',
                  )
                }
              >
                const ws = new WeakSet(); const obj = {}; ws.add(obj);
                ws.has(obj) → true
              </span>
            </p>
            <p>
              2&nbsp;
              <span
                onClick={() => copyToClipboard('WeakSet.prototype.has(value)')}
              >
                has(value)
              </span>
              &nbsp; Проверяет, есть ли объект в WeakSet.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'const ws = new WeakSet(); const obj = {}; ws.add(obj); ws.has(obj) → true',
                  )
                }
              >
                const ws = new WeakSet(); const obj = {}; ws.add(obj);
                ws.has(obj) → true
              </span>
            </p>
            <p>
              3&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('WeakSet.prototype.delete(value)')
                }
              >
                delete(value)
              </span>
              &nbsp; Удаляет объект из WeakSet. Возвращает true, если объект был
              удалён.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'const ws = new WeakSet(); const obj = {}; ws.add(obj); ws.delete(obj); ws.has(obj) → false',
                  )
                }
              >
                const ws = new WeakSet(); const obj = {}; ws.add(obj);
                ws.delete(obj); ws.has(obj) → false
              </span>
            </p>
          </Accordion>
        </div>
        <div className={styles.accordion_position}>
          <Accordion title="Методы Promise">
            <p>
              1&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'Promise.prototype.then(onFulfilled, onRejected)',
                  )
                }
              >
                then(onFulfilled, onRejected)
              </span>
              &nbsp; Добавляет обработчики для выполнения и отказа Promises.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'Promise.resolve(42).then(value => console.log(value)); → 42',
                  )
                }
              >
                Promise.resolve(42).then(value =&gt; console.log(value)); → 42
              </span>
            </p>
            <p>
              2&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Promise.prototype.catch(onRejected)')
                }
              >
                catch(onRejected)
              </span>
              &nbsp; Добавляет обработчик для отказа Promises.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    "Promise.reject('Error').catch(err => console.log(err)); → Error",
                  )
                }
              >
                Promise.reject('Error').catch(err =&gt; console.log(err)); →
                Error
              </span>
            </p>
            <p>
              3&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Promise.prototype.finally(onFinally)')
                }
              >
                finally(onFinally)
              </span>
              &nbsp; Добавляет обработчик, который вызывается после выполнения
              или отказа Promises.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    "Promise.resolve(42).finally(() => console.log('Done')); → Done",
                  )
                }
              >
                Promise.resolve(42).finally(() =&gt; console.log('Done')); →
                Done
              </span>
            </p>
            <p>
              4&nbsp;
              <span onClick={() => copyToClipboard('Promise.resolve(value)')}>
                resolve(value)
              </span>
              &nbsp; Возвращает Promise, завершённый с переданным значением.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    "Promise.resolve('Success').then(value => console.log(value)); → Success",
                  )
                }
              >
                Promise.resolve('Success').then(value =&gt; console.log(value));
                → Success
              </span>
            </p>
            <p>
              5&nbsp;
              <span onClick={() => copyToClipboard('Promise.reject(reason)')}>
                reject(reason)
              </span>
              &nbsp; Возвращает Promise, завершённый с ошибкой.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    "Promise.reject('Error').catch(reason => console.log(reason)); → Error",
                  )
                }
              >
                Promise.reject('Error').catch(reason =&gt; console.log(reason));
                → Error
              </span>
            </p>
            <p>
              6&nbsp;
              <span onClick={() => copyToClipboard('Promise.all(iterable)')}>
                all(iterable)
              </span>
              &nbsp; Возвращает Promise, который выполняется, когда все Promises
              в iterable выполнены.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'Promise.all([Promise.resolve(1), Promise.resolve(2)]).then(values => console.log(values)); → [1, 2]',
                  )
                }
              >
                Promise.all([Promise.resolve(1),
                Promise.resolve(2)]).then(values =&gt; console.log(values)); →
                [1, 2]
              </span>
            </p>
            <p>
              7&nbsp;
              <span
                onClick={() => copyToClipboard('Promise.allSettled(iterable)')}
              >
                allSettled(iterable)
              </span>
              &nbsp; Возвращает Promise, который выполняется, когда все Promises
              в iterable завершены.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    "Promise.allSettled([Promise.resolve(1), Promise.reject('Error')]).then(results => console.log(results)); → [{ status: 'fulfilled', value: 1 }, { status: 'rejected', reason: 'Error' }]",
                  )
                }
              >
                Promise.allSettled([Promise.resolve(1),
                Promise.reject('Error')]).then(results =&gt;
                console.log(results)); → [&#123; status: 'fulfilled', value: 1
                &#125;, &#123; status: 'rejected', reason: 'Error' &#125;]
              </span>
            </p>
            <p>
              8&nbsp;
              <span onClick={() => copyToClipboard('Promise.race(iterable)')}>
                race(iterable)
              </span>
              &nbsp; Возвращает Promise, который выполняется или отклоняется
              первым Promise из iterable.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'Promise.race([Promise.resolve(1), new Promise(resolve => setTimeout(() => resolve(2), 100))]).then(value => console.log(value)); → 1',
                  )
                }
              >
                Promise.race([Promise.resolve(1), new Promise(resolve =&gt;
                setTimeout(() =&gt; resolve(2), 100))]).then(value =&gt;
                console.log(value)); → 1
              </span>
            </p>
            <p>
              9&nbsp;
              <span onClick={() => copyToClipboard('Promise.any(iterable)')}>
                any(iterable)
              </span>
              &nbsp; Возвращает Promise, который выполняется первым из iterable.
              Отклоняется, если все Promises отклонены.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    "Promise.any([Promise.reject('Error1'), Promise.resolve(2)]).then(value => console.log(value)); → 2",
                  )
                }
              >
                Promise.any([Promise.reject('Error1'),
                Promise.resolve(2)]).then(value =&gt; console.log(value)); → 2
              </span>
            </p>
          </Accordion>
        </div>
        <div className={styles.accordion_position}>
          <Accordion title="Методы Proxy">
            <p>
              1&nbsp;
              <span
                onClick={() => copyToClipboard('new Proxy(target, handler)')}
              >
                Proxy(target, handler)
              </span>
              &nbsp; Создаёт новый прокси-объект, который позволяет
              перехватывать и настраивать базальные операции на объекте.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    "const proxy = new Proxy({}, { get: (obj, prop) => prop === 'greet' ? 'Hello!' : undefined }); console.log(proxy.greet); → 'Hello!'",
                  )
                }
              >
                const proxy = new Proxy(&#123;&#125;, &#123; get: (obj, prop)
                =&gt; prop === 'greet' ? 'Hello!' : undefined &#125;);
                console.log(proxy.greet); → 'Hello!'
              </span>
            </p>
            <p>
              2&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Proxy.revocable(target, handler)')
                }
              >
                revocable(target, handler)
              </span>
              &nbsp; Создаёт прокси с функцией отзыва, чтобы отключить прокси в
              любой момент.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'const { proxy, revoke } = Proxy.revocable({}, {}); revoke(); console.log(proxy); → TypeError',
                  )
                }
              >
                const &#123; proxy, revoke &#125; =
                Proxy.revocable(&#123;&#125;, &#123;&#125;); revoke();
                console.log(proxy); → TypeError
              </span>
            </p>
            <p>
              3&nbsp;
              <span onClick={() => copyToClipboard('Proxy handler traps')}>
                handler traps
              </span>
              &nbsp; Объект-обработчик содержит методы, которые перехватывают
              операции на прокси-объекте. Например:
            </p>
            <ul>
              <li>
                <span
                  onClick={() =>
                    copyToClipboard('get(target, property, receiver)')
                  }
                >
                  get(target, property, receiver)
                </span>
                &nbsp; Перехватывает чтение свойства.
                <br />
                Пример:&nbsp;
                <span
                  onClick={() =>
                    copyToClipboard(
                      "const handler = { get: (obj, prop) => prop === 'foo' ? 'bar' : undefined }; const proxy = new Proxy({}, handler); console.log(proxy.foo); → 'bar'",
                    )
                  }
                >
                  const handler = &#123; get: (obj, prop) =&gt; prop === 'foo' ?
                  'bar' : undefined &#125;; const proxy = new
                  Proxy(&#123;&#125;, handler); console.log(proxy.foo); → 'bar'
                </span>
              </li>
              <li>
                <span
                  onClick={() =>
                    copyToClipboard('set(target, property, value, receiver)')
                  }
                >
                  set(target, property, value, receiver)
                </span>
                &nbsp; Перехватывает запись в свойство.
                <br />
                Пример:&nbsp;
                <span
                  onClick={() =>
                    copyToClipboard(
                      'const handler = { set: (obj, prop, value) => { obj[prop] = value * 2; return true; } }; const proxy = new Proxy({}, handler); proxy.num = 3; console.log(proxy.num); → 6',
                    )
                  }
                >
                  const handler = &#123; set: (obj, prop, value) =&gt; &#123;
                  obj[prop] = value * 2; return true; &#125; &#125;; const proxy
                  = new Proxy(&#123;&#125;, handler); proxy.num = 3;
                  console.log(proxy.num); → 6
                </span>
              </li>
              <li>
                <span
                  onClick={() =>
                    copyToClipboard('apply(target, thisArg, argumentsList)')
                  }
                >
                  apply(target, thisArg, argumentsList)
                </span>
                &nbsp; Перехватывает вызов функции.
                <br />
                Пример:&nbsp;
                <span
                  onClick={() =>
                    copyToClipboard(
                      'const handler = { apply: (target, thisArg, args) => args[0] * 2 }; const proxy = new Proxy((x) => x + 1, handler); console.log(proxy(5)); → 10',
                    )
                  }
                >
                  const handler = &#123; apply: (target, thisArg, args) =&gt;
                  args[0] * 2 &#125;; const proxy = new Proxy((x) =&gt; x + 1,
                  handler); console.log(proxy(5)); → 10
                </span>
              </li>
              <li>
                <span
                  onClick={() =>
                    copyToClipboard(
                      'construct(target, argumentsList, newTarget)',
                    )
                  }
                >
                  construct(target, argumentsList, newTarget)
                </span>
                &nbsp; Перехватывает вызов с оператором `new`.
                <br />
                Пример:&nbsp;
                <span
                  onClick={() =>
                    copyToClipboard(
                      'const handler = { construct: (target, args) => ({ value: args[0] * 2 }) }; const proxy = new Proxy(function () {}, handler); console.log(new proxy(5).value); → 10',
                    )
                  }
                >
                  const handler = &#123; construct: (target, args) =&gt; (&#123;
                  value: args[0] * 2 &#125;) &#125;; const proxy = new
                  Proxy(function () &#123;&#125;, handler); console.log(new
                  proxy(5).value); → 10
                </span>
              </li>
            </ul>
          </Accordion>
        </div>
        <div className={styles.accordion_position}>
          <Accordion title="Методы Reflect">
            <p>
              1&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'Reflect.apply(target, thisArgument, argumentsList)',
                  )
                }
              >
                Reflect.apply(target, thisArgument, argumentsList)
              </span>
              &nbsp; Вызывает функцию с заданным `this` и аргументами, как в
              `Function.prototype.apply`.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'Reflect.apply(Math.max, null, [1, 2, 3]) → 3',
                  )
                }
              >
                Reflect.apply(Math.max, null, [1, 2, 3]) → 3
              </span>
            </p>
            <p>
              2&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'Reflect.construct(target, argumentsList, newTarget?)',
                  )
                }
              >
                Reflect.construct(target, argumentsList, newTarget?)
              </span>
              &nbsp; Осуществляет вызов конструктора, аналогично оператору
              `new`.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'Reflect.construct(Array, [1, 2, 3]) → [1, 2, 3]',
                  )
                }
              >
                Reflect.construct(Array, [1, 2, 3]) → [1, 2, 3]
              </span>
            </p>
            <p>
              3&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'Reflect.defineProperty(target, propertyKey, attributes)',
                  )
                }
              >
                Reflect.defineProperty(target, propertyKey, attributes)
              </span>
              &nbsp; Определяет новое свойство объекта, аналогично
              `Object.defineProperty`.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'Reflect.defineProperty(obj, "key", { value: 42 }); obj.key → 42',
                  )
                }
              >
                Reflect.defineProperty(obj, "key", &#123; value: 42 &#125;);
                obj.key → 42
              </span>
            </p>
            <p>
              4&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Reflect.deleteProperty(target, propertyKey)')
                }
              >
                Reflect.deleteProperty(target, propertyKey)
              </span>
              &nbsp; Удаляет свойство объекта, аналогично оператору `delete`.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Reflect.deleteProperty(obj, "key")')
                }
              >
                Reflect.deleteProperty(obj, "key")
              </span>
            </p>
            <p>
              5&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Reflect.get(target, propertyKey, receiver?)')
                }
              >
                Reflect.get(target, propertyKey, receiver?)
              </span>
              &nbsp; Возвращает значение свойства объекта, аналогично чтению
              `obj[key]`.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Reflect.get({ x: 10 }, "x") → 10')
                }
              >
                Reflect.get(&#123; x: 10 &#125;, "x") → 10
              </span>
            </p>
            <p>
              6&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'Reflect.getOwnPropertyDescriptor(target, propertyKey)',
                  )
                }
              >
                Reflect.getOwnPropertyDescriptor(target, propertyKey)
              </span>
              &nbsp; Возвращает дескриптор свойства, аналогично
              `Object.getOwnPropertyDescriptor`.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'Reflect.getOwnPropertyDescriptor({ x: 10 }, "x")',
                  )
                }
              >
                Reflect.getOwnPropertyDescriptor(&#123; x: 10 &#125;, "x")
              </span>
            </p>
            <p>
              7&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Reflect.has(target, propertyKey)')
                }
              >
                Reflect.has(target, propertyKey)
              </span>
              &nbsp; Проверяет, есть ли у объекта свойство, аналогично оператору
              `in`.
              <br />
              Пример:&nbsp;
              <span onClick={() => copyToClipboard('"x" in { x: 10 } → true')}>
                Reflect.has(&#123; x: 10 &#125;, "x") → true
              </span>
            </p>
            <p>
              8&nbsp;
              <span
                onClick={() => copyToClipboard('Reflect.isExtensible(target)')}
              >
                Reflect.isExtensible(target)
              </span>
              &nbsp; Проверяет, можно ли добавлять свойства в объект, аналогично
              `Object.isExtensible`.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Reflect.isExtensible({}) → true')
                }
              >
                Reflect.isExtensible({}) → true
              </span>
            </p>
            <p>
              9&nbsp;
              <span onClick={() => copyToClipboard('Reflect.ownKeys(target)')}>
                Reflect.ownKeys(target)
              </span>
              &nbsp; Возвращает массив собственных ключей объекта, аналогично
              `Object.getOwnPropertyNames` и `Object.getOwnPropertySymbols`.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'Reflect.ownKeys({ x: 10, [Symbol("y")]: 20 }) → ["x", Symbol("y")]',
                  )
                }
              >
                Reflect.ownKeys(&#123; x: 10, [Symbol("y")]: 20 &#125;) → ["x",
                Symbol("y")]
              </span>
            </p>
            <p>
              10&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Reflect.preventExtensions(target)')
                }
              >
                Reflect.preventExtensions(target)
              </span>
              &nbsp; Делает объект нерасширяемым, аналогично
              `Object.preventExtensions`.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'Reflect.preventExtensions(obj); Reflect.isExtensible(obj) → false',
                  )
                }
              >
                Reflect.preventExtensions(obj); Reflect.isExtensible(obj) →
                false
              </span>
            </p>
            <p>
              11&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'Reflect.set(target, propertyKey, value, receiver?)',
                  )
                }
              >
                Reflect.set(target, propertyKey, value, receiver?)
              </span>
              &nbsp; Устанавливает значение свойства, аналогично записи
              `obj[key] = value`.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Reflect.set(obj, "x", 42); obj.x → 42')
                }
              >
                Reflect.set(obj, "x", 42); obj.x → 42
              </span>
            </p>
            <p>
              12&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Reflect.setPrototypeOf(target, proto)')
                }
              >
                Reflect.setPrototypeOf(target, proto)
              </span>
              &nbsp; Устанавливает прототип объекта, аналогично
              `Object.setPrototypeOf`.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'Reflect.setPrototypeOf(obj, Array.prototype)',
                  )
                }
              >
                Reflect.setPrototypeOf(obj, Array.prototype)
              </span>
            </p>
          </Accordion>
        </div>
        <div className={styles.accordion_position}>
          <Accordion title="Методы Intl">
            <p>
              1&nbsp;
              <span onClick={() => copyToClipboard('Intl.DateTimeFormat')}>
                Intl.DateTimeFormat
              </span>
              &nbsp; Форматирует дату и время в зависимости от языка.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'new Intl.DateTimeFormat("en-US").format(new Date()) → "11/30/2024"',
                  )
                }
              >
                new Intl.DateTimeFormat("en-US").format(new Date()) →
                "11/30/2024"
              </span>
            </p>
            <p>
              2&nbsp;
              <span onClick={() => copyToClipboard('Intl.NumberFormat')}>
                Intl.NumberFormat
              </span>
              &nbsp; Форматирует числа в зависимости от языка.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'new Intl.NumberFormat("de-DE").format(1234567.89) → "1.234.567,89"',
                  )
                }
              >
                new Intl.NumberFormat("de-DE").format(1234567.89) →
                "1.234.567,89"
              </span>
            </p>
            <p>
              3&nbsp;
              <span onClick={() => copyToClipboard('Intl.Collator')}>
                Intl.Collator
              </span>
              &nbsp; Сравнивает строки с учётом локали.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'new Intl.Collator("en").compare("a", "b") → -1',
                  )
                }
              >
                new Intl.Collator("en").compare("a", "b") → -1
              </span>
            </p>
            <p>
              4&nbsp;
              <span onClick={() => copyToClipboard('Intl.PluralRules')}>
                Intl.PluralRules
              </span>
              &nbsp; Определяет форму числа (единственное/множественное) для
              локали.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'new Intl.PluralRules("en").select(1) → "one"',
                  )
                }
              >
                new Intl.PluralRules("en").select(1) → "one"
              </span>
            </p>
            <p>
              5&nbsp;
              <span onClick={() => copyToClipboard('Intl.RelativeTimeFormat')}>
                Intl.RelativeTimeFormat
              </span>
              &nbsp; Форматирует относительное время.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'new Intl.RelativeTimeFormat("en", { numeric: "auto" }).format(-1, "day") → "yesterday"',
                  )
                }
              >
                new Intl.RelativeTimeFormat("en", &#123; numeric: "auto"
                &#125;).format(-1, "day") → "yesterday"
              </span>
            </p>
            <p>
              6&nbsp;
              <span onClick={() => copyToClipboard('Intl.ListFormat')}>
                Intl.ListFormat
              </span>
              &nbsp; Форматирует списки с учётом локали.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'new Intl.ListFormat("en", { style: "long", type: "conjunction" }).format(["Apple", "Orange", "Banana"]) → "Apple, Orange, and Banana"',
                  )
                }
              >
                new Intl.ListFormat("en", &#123; style: "long", type:
                "conjunction" &#125;).format(["Apple", "Orange", "Banana"]) →
                "Apple, Orange, and Banana"
              </span>
            </p>
            <p>
              7&nbsp;
              <span onClick={() => copyToClipboard('Intl.Segmenter')}>
                Intl.Segmenter
              </span>
              &nbsp; Делит текст на сегменты (слова, символы и т.д.).
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'Array.from(new Intl.Segmenter("en", { granularity: "word" }).segment("Hello world")) → ["Hello", " ", "world"]',
                  )
                }
              >
                Array.from(new Intl.Segmenter("en", &#123; granularity: "word"
                &#125;).segment("Hello world")) → ["Hello", " ", "world"]
              </span>
            </p>
            <p>
              8&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Intl.getCanonicalLocales(locales)')
                }
              >
                Intl.getCanonicalLocales(locales)
              </span>
              &nbsp; Возвращает массив канонических идентификаторов языков.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'Intl.getCanonicalLocales(["EN-us", "fr-FR"]) → ["en-US", "fr-FR"]',
                  )
                }
              >
                Intl.getCanonicalLocales(["EN-us", "fr-FR"]) → ["en-US",
                "fr-FR"]
              </span>
            </p>
          </Accordion>
        </div>
        <div className={styles.accordion_position}>
          <Accordion title="Методы JSON">
            <p>
              1&nbsp;
              <span onClick={() => copyToClipboard('JSON.parse()')}>
                JSON.parse()
              </span>
              &nbsp; Преобразует строку JSON в объект.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'JSON.parse(\'{"name":"Alice","age":25}\') → {name: "Alice", age: 25}',
                  )
                }
              >
                JSON.parse('&#123;"name":"Alice","age":25&#125;') → &#123;name:
                "Alice", age: 25&#125;
              </span>
            </p>
            <p>
              2&nbsp;
              <span onClick={() => copyToClipboard('JSON.stringify()')}>
                JSON.stringify()
              </span>
              &nbsp; Преобразует объект в строку JSON.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'JSON.stringify({name: "Alice", age: 25}) → \'{"name":"Alice","age":25}\'',
                  )
                }
              >
                JSON.stringify(&#123;name: "Alice", age: 25&#125;) →
                '&#123;"name":"Alice","age":25&#125;'
              </span>
            </p>
            <p>
              3&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('JSON.stringify() с параметрами')
                }
              >
                JSON.stringify() с параметрами
              </span>
              &nbsp; Преобразует объект в строку JSON, включая только указанные
              ключи или с форматированием.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'JSON.stringify({name: "Alice", age: 25}, ["name"], 2) → \'{  "name":  "Alice"  }\'',
                  )
                }
              >
                JSON.stringify(&#123;name: "Alice", age: 25&#125;, ["name"], 2)
                →
                '&#123;&nbsp;&nbsp;"name":&nbsp;&nbsp;"Alice"&nbsp;&nbsp;&#125;'
              </span>
            </p>
          </Accordion>
        </div>
        <div className={styles.accordion_position}>
          <Accordion title="Методы console">
            <p>
              1&nbsp;
              <span onClick={() => copyToClipboard('console.log()')}>
                console.log()
              </span>
              &nbsp; Выводит сообщение в консоль.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'console.log("Hello, World!") → Выводит "Hello, World!" в консоль',
                  )
                }
              >
                console.log("Hello, World!") → Выводит "Hello, World!" в консоль
              </span>
            </p>
            <p>
              2&nbsp;
              <span onClick={() => copyToClipboard('console.error()')}>
                console.error()
              </span>
              &nbsp; Выводит сообщение об ошибке в консоль.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'console.error("Something went wrong!") → Выводит "Something went wrong!" как ошибку',
                  )
                }
              >
                console.error("Something went wrong!") → Выводит "Something went
                wrong!" как ошибку
              </span>
            </p>
            <p>
              3&nbsp;
              <span onClick={() => copyToClipboard('console.warn()')}>
                console.warn()
              </span>
              &nbsp; Выводит предупреждение в консоль.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'console.warn("This is a warning!") → Выводит "This is a warning!" как предупреждение',
                  )
                }
              >
                console.warn("This is a warning!") → Выводит "This is a
                warning!" как предупреждение
              </span>
            </p>
            <p>
              4&nbsp;
              <span onClick={() => copyToClipboard('console.info()')}>
                console.info()
              </span>
              &nbsp; Выводит информационное сообщение в консоль.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'console.info("Information message") → Выводит "Information message"',
                  )
                }
              >
                console.info("Information message") → Выводит "Information
                message"
              </span>
            </p>
            <p>
              5&nbsp;
              <span onClick={() => copyToClipboard('console.table()')}>
                console.table()
              </span>
              &nbsp; Выводит данные в виде таблицы в консоли.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'console.table([{name: "Alice", age: 25}, {name: "Bob", age: 30}]) → Таблица данных',
                  )
                }
              >
                console.table([&#123;name: "Alice", age: 25&#125;, &#123;name:
                "Bob", age: 30&#125;]) → Таблица данных
              </span>
            </p>
            <p>
              6&nbsp;
              <span onClick={() => copyToClipboard('console.group()')}>
                console.group()
              </span>
              &nbsp; Начинает новую группу сообщений в консоли.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'console.group("Group Title") → Открывает группу с названием "Group Title"',
                  )
                }
              >
                console.group("Group Title") → Открывает группу с названием
                "Group Title"
              </span>
            </p>
            <p>
              7&nbsp;
              <span onClick={() => copyToClipboard('console.groupEnd()')}>
                console.groupEnd()
              </span>
              &nbsp; Завершает текущую группу сообщений.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'console.groupEnd() → Закрывает последнюю открытую группу',
                  )
                }
              >
                console.groupEnd() → Закрывает последнюю открытую группу
              </span>
            </p>
            <p>
              8&nbsp;
              <span onClick={() => copyToClipboard('console.time()')}>
                console.time()
              </span>
              &nbsp; Начинает таймер.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'console.time("Timer") → Начинает таймер с названием "Timer"',
                  )
                }
              >
                console.time("Timer") → Начинает таймер с названием "Timer"
              </span>
            </p>
            <p>
              9&nbsp;
              <span onClick={() => copyToClipboard('console.timeEnd()')}>
                console.timeEnd()
              </span>
              &nbsp; Завершает таймер и выводит время выполнения.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'console.timeEnd("Timer") → Выводит время выполнения таймера "Timer"',
                  )
                }
              >
                console.timeEnd("Timer") → Выводит время выполнения таймера
                "Timer"
              </span>
            </p>
            <p>
              10&nbsp;
              <span onClick={() => copyToClipboard('console.assert()')}>
                console.assert()
              </span>
              &nbsp; Выводит сообщение, если утверждение ложно.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'console.assert(1 === 2, "1 is not equal to 2") → Выводит "1 is not equal to 2"',
                  )
                }
              >
                console.assert(1 === 2, "1 is not equal to 2") → Выводит "1 is
                not equal to 2"
              </span>
            </p>
          </Accordion>
        </div>
        <div className={styles.accordion_position}>
          <Accordion title="Методы window">
            <p>
              1&nbsp;
              <span onClick={() => copyToClipboard('window.alert()')}>
                window.alert()
              </span>
              &nbsp; Показывает модальное окно с сообщением.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'window.alert("Hello, World!") → Показывает окно с текстом "Hello, World!"',
                  )
                }
              >
                window.alert("Hello, World!") → Показывает окно с текстом
                "Hello, World!"
              </span>
            </p>
            <p>
              2&nbsp;
              <span onClick={() => copyToClipboard('window.confirm()')}>
                window.confirm()
              </span>
              &nbsp; Показывает модальное окно с подтверждением (ОК/Отмена).
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'window.confirm("Are you sure?") → Возвращает true или false',
                  )
                }
              >
                window.confirm("Are you sure?") → Возвращает true или false
              </span>
            </p>
            <p>
              3&nbsp;
              <span onClick={() => copyToClipboard('window.prompt()')}>
                window.prompt()
              </span>
              &nbsp; Показывает модальное окно для ввода текста.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'window.prompt("What is your name?") → Возвращает введённый текст или null',
                  )
                }
              >
                window.prompt("What is your name?") → Возвращает введённый текст
                или null
              </span>
            </p>
            <p>
              4&nbsp;
              <span onClick={() => copyToClipboard('window.open()')}>
                window.open()
              </span>
              &nbsp; Открывает новое окно или вкладку с указанным URL.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'window.open("https://example.com") → Открывает сайт example.com в новой вкладке',
                  )
                }
              >
                window.open("https://example.com") → Открывает сайт example.com
                в новой вкладке
              </span>
            </p>
            <p>
              5&nbsp;
              <span onClick={() => copyToClipboard('window.close()')}>
                window.close()
              </span>
              &nbsp; Закрывает текущее окно (если оно было открыто с помощью
              `window.open()`).
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('window.close() → Закрывает текущее окно')
                }
              >
                window.close() → Закрывает текущее окно
              </span>
            </p>
            <p>
              6&nbsp;
              <span onClick={() => copyToClipboard('window.scrollTo()')}>
                window.scrollTo()
              </span>
              &nbsp; Прокручивает окно до заданных координат.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'window.scrollTo(0, 500) → Прокручивает окно к позиции (0, 500)',
                  )
                }
              >
                window.scrollTo(0, 500) → Прокручивает окно к позиции (0, 500)
              </span>
            </p>
            <p>
              7&nbsp;
              <span
                onClick={() => copyToClipboard('window.addEventListener()')}
              >
                window.addEventListener()
              </span>
              &nbsp; Добавляет обработчик события для окна.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'window.addEventListener("resize", () => console.log("Resized")) → Логирует "Resized" при изменении размера окна',
                  )
                }
              >
                window.addEventListener("resize", () =&gt;
                console.log("Resized")) → Логирует "Resized" при изменении
                размера окна
              </span>
            </p>
            <p>
              8&nbsp;
              <span
                onClick={() => copyToClipboard('window.removeEventListener()')}
              >
                window.removeEventListener()
              </span>
              &nbsp; Удаляет обработчик события для окна.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'window.removeEventListener("resize", handler) → Удаляет обработчик события "resize"',
                  )
                }
              >
                window.removeEventListener("resize", handler) → Удаляет
                обработчик события "resize"
              </span>
            </p>
            <p>
              9&nbsp;
              <span onClick={() => copyToClipboard('window.setTimeout()')}>
                window.setTimeout()
              </span>
              &nbsp; Вызывает функцию через заданное время (в мс).
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'window.setTimeout(() => console.log("Hello"), 1000) → Логирует "Hello" через 1 секунду',
                  )
                }
              >
                window.setTimeout(() =&gt; console.log("Hello"), 1000) →
                Логирует "Hello" через 1 секунду
              </span>
            </p>
            <p>
              10&nbsp;
              <span onClick={() => copyToClipboard('window.clearTimeout()')}>
                window.clearTimeout()
              </span>
              &nbsp; Останавливает выполнение функции, запланированной через
              `setTimeout`.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'const timer = window.setTimeout(fn, 5000); window.clearTimeout(timer) → Останавливает таймер',
                  )
                }
              >
                const timer = window.setTimeout(fn, 5000);
                window.clearTimeout(timer) → Останавливает таймер
              </span>
            </p>
          </Accordion>
        </div>
        <div className={styles.accordion_position}>
          <Accordion title="Методы document">
            <p>
              1&nbsp;
              <span onClick={() => copyToClipboard('document.querySelector()')}>
                document.querySelector()
              </span>
              &nbsp; Возвращает первый элемент, соответствующий заданному
              селектору.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'document.querySelector(".example") → Первый элемент с классом "example"',
                  )
                }
              >
                document.querySelector(".example") → Первый элемент с классом
                "example"
              </span>
            </p>
            <p>
              2&nbsp;
              <span
                onClick={() => copyToClipboard('document.querySelectorAll()')}
              >
                document.querySelectorAll()
              </span>
              &nbsp; Возвращает NodeList элементов, соответствующих заданному
              селектору.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'document.querySelectorAll(".example") → Все элементы с классом "example"',
                  )
                }
              >
                document.querySelectorAll(".example") → Все элементы с классом
                "example"
              </span>
            </p>
            <p>
              3&nbsp;
              <span
                onClick={() => copyToClipboard('document.getElementById()')}
              >
                document.getElementById()
              </span>
              &nbsp; Возвращает элемент с указанным `id`.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'document.getElementById("header") → Элемент с id "header"',
                  )
                }
              >
                document.getElementById("header") → Элемент с id "header"
              </span>
            </p>
            <p>
              4&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('document.getElementsByClassName()')
                }
              >
                document.getElementsByClassName()
              </span>
              &nbsp; Возвращает HTMLCollection элементов с указанным классом.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'document.getElementsByClassName("menu-item") → Коллекция элементов с классом "menu-item"',
                  )
                }
              >
                document.getElementsByClassName("menu-item") → Коллекция
                элементов с классом "menu-item"
              </span>
            </p>
            <p>
              5&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('document.getElementsByTagName()')
                }
              >
                document.getElementsByTagName()
              </span>
              &nbsp; Возвращает HTMLCollection элементов с указанным тегом.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'document.getElementsByTagName("div") → Коллекция элементов "div"',
                  )
                }
              >
                document.getElementsByTagName("div") → Коллекция элементов "div"
              </span>
            </p>
            <p>
              6&nbsp;
              <span onClick={() => copyToClipboard('document.createElement()')}>
                document.createElement()
              </span>
              &nbsp; Создаёт новый элемент.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'document.createElement("p") → Создаёт элемент <p>',
                  )
                }
              >
                document.createElement("p") → Создаёт элемент &lt;p&gt;
              </span>
            </p>
            <p>
              7&nbsp;
              <span
                onClick={() => copyToClipboard('document.createTextNode()')}
              >
                document.createTextNode()
              </span>
              &nbsp; Создаёт новый текстовый узел.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'document.createTextNode("Hello") → Создаёт текстовый узел "Hello"',
                  )
                }
              >
                document.createTextNode("Hello") → Создаёт текстовый узел
                "Hello"
              </span>
            </p>
            <p>
              8&nbsp;
              <span onClick={() => copyToClipboard('document.body')}>
                document.body
              </span>
              &nbsp; Ссылка на элемент `&lt;body&gt;` текущего документа.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'console.log(document.body) → Логирует элемент <body>',
                  )
                }
              >
                console.log(document.body) → Логирует элемент &lt;body&gt;
              </span>
            </p>
            <p>
              9&nbsp;
              <span onClick={() => copyToClipboard('document.head')}>
                document.head
              </span>
              &nbsp; Ссылка на элемент `&lt;head&gt;` текущего документа.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'console.log(document.head) → Логирует элемент <head>',
                  )
                }
              >
                console.log(document.head) → Логирует элемент &lt;head&gt;
              </span>
            </p>
            <p>
              10&nbsp;
              <span onClick={() => copyToClipboard('document.title')}>
                document.title
              </span>
              &nbsp; Получает или устанавливает заголовок документа.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'document.title = "New Title" → Изменяет заголовок документа на "New Title"',
                  )
                }
              >
                document.title = "New Title" → Изменяет заголовок документа на
                "New Title"
              </span>
            </p>
            <p>
              11&nbsp;
              <span onClick={() => copyToClipboard('document.cookie')}>
                document.cookie
              </span>
              &nbsp; Получает или устанавливает куки.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'document.cookie = "username=John" → Устанавливает куки с именем "username" и значением "John"',
                  )
                }
              >
                document.cookie = "username=John" → Устанавливает куки с именем
                "username" и значением "John"
              </span>
            </p>
            <p>
              12&nbsp;
              <span
                onClick={() => copyToClipboard('document.addEventListener()')}
              >
                document.addEventListener()
              </span>
              &nbsp; Добавляет обработчик события.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'document.addEventListener("click", () => console.log("Clicked")) → Логирует "Clicked" при клике на документ',
                  )
                }
              >
                document.addEventListener("click", () =&gt;
                console.log("Clicked")) → Логирует "Clicked" при клике на
                документ
              </span>
            </p>
          </Accordion>
        </div>
        <div className={styles.accordion_position}>
          <Accordion title="Методы location">
            <p>
              1&nbsp;
              <span onClick={() => copyToClipboard('location.href')}>
                location.href
              </span>
              &nbsp; Получает или устанавливает URL текущей страницы.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'location.href = "https://example.com" → Перенаправляет на "https://example.com"',
                  )
                }
              >
                location.href = "https://example.com" → Перенаправляет на
                "https://example.com"
              </span>
            </p>
            <p>
              2&nbsp;
              <span onClick={() => copyToClipboard('location.protocol')}>
                location.protocol
              </span>
              &nbsp; Возвращает протокол текущей страницы.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('console.log(location.protocol) → "https:"')
                }
              >
                console.log(location.protocol) → "https:"
              </span>
            </p>
            <p>
              3&nbsp;
              <span onClick={() => copyToClipboard('location.host')}>
                location.host
              </span>
              &nbsp; Возвращает имя хоста и порт (если указан).
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'console.log(location.host) → "example.com:8080"',
                  )
                }
              >
                console.log(location.host) → "example.com:8080"
              </span>
            </p>
            <p>
              4&nbsp;
              <span onClick={() => copyToClipboard('location.hostname')}>
                location.hostname
              </span>
              &nbsp; Возвращает имя хоста (без порта).
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'console.log(location.hostname) → "example.com"',
                  )
                }
              >
                console.log(location.hostname) → "example.com"
              </span>
            </p>
            <p>
              5&nbsp;
              <span onClick={() => copyToClipboard('location.port')}>
                location.port
              </span>
              &nbsp; Возвращает номер порта текущего URL.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('console.log(location.port) → "8080"')
                }
              >
                console.log(location.port) → "8080"
              </span>
            </p>
            <p>
              6&nbsp;
              <span onClick={() => copyToClipboard('location.pathname')}>
                location.pathname
              </span>
              &nbsp; Возвращает путь текущего URL.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('console.log(location.pathname) → "/about"')
                }
              >
                console.log(location.pathname) → "/about"
              </span>
            </p>
            <p>
              7&nbsp;
              <span onClick={() => copyToClipboard('location.search')}>
                location.search
              </span>
              &nbsp; Возвращает строку запроса (query string) текущего URL.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'console.log(location.search) → "?id=123&name=John"',
                  )
                }
              >
                console.log(location.search) → "?id=123&name=John"
              </span>
            </p>
            <p>
              8&nbsp;
              <span onClick={() => copyToClipboard('location.hash')}>
                location.hash
              </span>
              &nbsp; Возвращает фрагмент (hash) текущего URL.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('console.log(location.hash) → "#section1"')
                }
              >
                console.log(location.hash) → "#section1"
              </span>
            </p>
            <p>
              9&nbsp;
              <span onClick={() => copyToClipboard('location.assign()')}>
                location.assign()
              </span>
              &nbsp; Загружает ресурс по указанному URL.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'location.assign("https://example.com") → Перенаправляет на "https://example.com"',
                  )
                }
              >
                location.assign("https://example.com") → Перенаправляет на
                "https://example.com"
              </span>
            </p>
            <p>
              10&nbsp;
              <span onClick={() => copyToClipboard('location.reload()')}>
                location.reload()
              </span>
              &nbsp; Перезагружает текущую страницу.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'location.reload() → Перезагружает текущую страницу',
                  )
                }
              >
                location.reload() → Перезагружает текущую страницу
              </span>
            </p>
            <p>
              11&nbsp;
              <span onClick={() => copyToClipboard('location.replace()')}>
                location.replace()
              </span>
              &nbsp; Заменяет текущий документ новым, без сохранения текущей
              записи в истории.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'location.replace("https://example.com") → Перенаправляет на "https://example.com" без записи в историю',
                  )
                }
              >
                location.replace("https://example.com") → Перенаправляет на
                "https://example.com" без записи в историю
              </span>
            </p>
          </Accordion>
        </div>
        <br />
        <p>
          Методы работы с объектами-обёртками примитивных типов данных (String,
          Number, Boolean, Symbol, BigInt) находятся на странице &nbsp;
          <Link to={'/lessons/primitive'}>'Примитивные типы данных'</Link>.
        </p>
      </div>
    </>
  )
}
