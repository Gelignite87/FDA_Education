import { copyToClipboard } from '../../../utils/utils'
import styles from './ConstructorLesson.module.sass'

export const ConstructorLesson: React.FC = () => {
  return (
    <>
      <div className={styles.Constructor_text}>
        <p>
          <i>Конструктор</i> - это специальная функция, которая используется для
          создания и инициализации объектов. Обычно он применяется в сочетании с
          ключевым словом new. Конструкторы позволяют задавать начальные
          значения и методы для создаваемых объектов.
        </p>
        <br />
        <p>
          Что делает конструктор? Когда вы вызываете функцию-конструктор с new:
        </p>
        <p>&emsp;1. Создаётся новый пустой объект.</p>
        <p>
          &emsp;2. Этот объект связывается с прототипом конструктора (через
          свойство __proto__).
        </p>
        <p>
          &emsp;3. Код внутри конструктора выполняется, часто инициализируя
          свойства нового объекта.
        </p>
        <p>
          &emsp;4. Функция автоматически возвращает этот объект (если не указан
          другой объект для возврата).
        </p>
        <br />
        <p>
          В JavaScript существует несколько встроенных конструкторов для
          создания различных объектов:
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard('const arr = new Array(1, 2, 3, 4, 5)')
            }
          >
            const arr = new Array(1, 2, 3, 4, 5)
          </span>
          &nbsp; Конструктор для создания массивов.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard("const obj = new Object({ key: 'value' })")
            }
          >
            const obj = new Object(&#123; key: 'value' &#125;)
          </span>
          &nbsp; Конструктор для создания объектов.
        </p>
        <p>
          <span
            onClick={() => copyToClipboard("const str = new String('Hello')")}
          >
            const str = new String('Hello')
          </span>
          &nbsp; Конструктор для создания объектов-обёрток строк. Принимает
          строку или число (преобразуется в строку).
        </p>
        <p>
          <span onClick={() => copyToClipboard('const num = new Number(42)')}>
            const num = new Number(42)
          </span>
          &nbsp; Конструктор для создания объектов-обёрток чисел.
        </p>
        <p>
          <span
            onClick={() => copyToClipboard('const bool = new Boolean(true)')}
          >
            const bool = new Boolean(true)
          </span>
          &nbsp; Конструктор для создания объектов-обёрток логических значений.
        </p>
        <p>
          <i>Объекты-обёртки (wrapper objects)</i> в JavaScript — это
          специальные объекты, созданные для примитивных типов данных, таких как
          string, number, boolean и тд. Они обеспечивают доступ к методам и
          свойствам, позволяя примитивным типам вести себя как объекты.
          Примитивы не являются объектами, значит у них нет методов и свойств.
          Однако, чтобы упростить работу с примитивами, JavaScript автоматически
          создаёт временные объекты-обёртки.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard('const specificDate = new Date("2024-01-01")')
            }
          >
            const specificDate = new Date("2024-01-01")
          </span>
          &nbsp; Конструктор для работы с датами и временем.
        </p>
        <p>
          <span
            onClick={() => copyToClipboard('const regex = new RegExp("\\d+")')}
          >
            const regex = new RegExp("\\d+")
          </span>
          &nbsp; Конструктор для работы с регулярными выражениями.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard(
                'const add = new Function("a", "b", "return a + b")',
              )
            }
          >
            const add = new Function("a", "b", "return a + b")
          </span>
          &nbsp; Конструктор для создания функций (не рекомендуется из-за
          сложностей с безопасностью и читаемостью кода).
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard('const error = new Error("Something went wrong")')
            }
          >
            const error = new Error("Something went wrong")
          </span>
          &nbsp; Конструктор для создания объектов ошибок.
        </p>
        <p>
          <span
            onClick={() => copyToClipboard('const set = new Set([1, 2, 2, 3])')}
          >
            const set = new Set([1, 2, 2, 3])
          </span>
          &nbsp; Конструктор для создания множеств (уникальные значения).
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard(
                'const map = new Map([ ["key1", "value1"],  ["key2", "value2"], ])',
              )
            }
          >
            const map = new Map([ ["key1", "value1"], ["key2", "value2"], ])
          </span>
          &nbsp; Конструктор для создания коллекций ключ-значение.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard(
                'const promise = new Promise((resolve, reject) => {resolve("Success!")})',
              )
            }
          >
            const promise = new Promise((resolve, reject) =&gt; &#123;
            resolve("Success!") &#125; )
          </span>
          &nbsp; Конструктор для создания промисов (обещаний).
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard('const symbol = Symbol("description")')
            }
          >
            const symbol = Symbol("description")
          </span>
          &nbsp; Конструктор для создания уникальных идентификаторов.
        </p>
        <br />
        <p>Пример конструктора c методом в прототипе:</p>
        <div>
          <div
            onClick={() =>
              copyToClipboard(
                `function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.greet = function() {
  return \`Hi, my name is \${this.name} and I'm \${this.age} years old.\`
}

const person1 = new Person("Alice", 25)
const person2 = new Person("Bob", 30)`,
              )
            }
          >
            function Person(name, age) &#123;
            <br />
            &nbsp;&nbsp;this.name = name
            <br />
            &nbsp;&nbsp;this.age = age
            <br />
            &#125;
            <br />
            <br />
            Person.prototype.greet = function() &#123;
            <br />
            &nbsp;&nbsp;return `Hi, my name is &#36;&#123;this.name&#125; and
            I'm &#36;&#123;this.age&#125; years old.`
            <br />
            &#125;
            <br />
            <br />
            const person1 = new Person("Alice", 25)
            <br />
            const person2 = new Person("Bob", 30)
          </div>
          <b>&nbsp;&nbsp;</b>
          <p>
            Метод можно добавить напрямую в объект, например в this.greet, но
            запись в прототип имеет преимущество. Методы в прототипе сохраняются
            в одном месте и не копируются для каждого объекта, что экономит
            память.
            <br />
            <br />
            Без new, this внутри конструктора будет ссылаться на глобальный
            объект (в строгом режиме — на undefined).
            <br />
            <br />
            <span
              onClick={() => copyToClipboard('console.log(person1.greet())')}
            >
              console.log(person1.greet())
            </span>
            &nbsp; // "Hi, my name is Alice and I'm 25 years old."
            <br />
            <span
              onClick={() => copyToClipboard('console.log(person2.greet())')}
            >
              console.log(person2.greet())
            </span>
            &nbsp; // "Hi, my name is Bob and I'm 30 years old."
          </p>
        </div>
        <br />
        <div>
          <div
            onClick={() =>
              copyToClipboard(
                `class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    return \`Hi, my name is \${this.name} and I'm \${this.age} years old.\`
  }
}

const person1 = new Person("Alice", 25)`,
              )
            }
          >
            class Person &#123;
            <br />
            &nbsp;&nbsp;constructor(name, age) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.name = name
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.age = age
            <br />
            &#125;
            <br />
            <br />
            &nbsp;&nbsp;greet() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return `Hi, my name is
            &#36;&#123;this.name&#125; and I'm &#36;&#123;this.age&#125; years
            old.`
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &#125;
            <br />
            <br />
            const person1 = new Person("Alice", 25)
            <br />
            const person2 = new Person("Bob", 30)
          </div>
          <b>&nbsp;&nbsp;</b>
          <p>То же самое что в примере выше, но с использованием классов.</p>
        </div>
      </div>
    </>
  )
}
