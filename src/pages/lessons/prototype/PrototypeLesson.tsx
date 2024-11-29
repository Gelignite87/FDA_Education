import { copyToClipboard } from '../../../utils/utils'
import styles from './PrototypeLesson.module.sass'

export const PrototypeLesson: React.FC = () => {
  return (
    <>
      <div className={styles.Prototype_text}>
        <p>
          <i>Прототип</i> - механизм в JavaScript, который позволяет объектам
          наследовать свойства и методы от других объектов. Каждый объект в
          JavaScript имеет скрытое свойство [[Prototype]], которое ссылается на
          другой объект или null.
        </p>
        <br />
        <p>
          Когда мы пытаемся получить доступ к свойству объекта, JavaScript
          сначала ищет это свойство в самом объекте. Если свойство не найдено,
          поиск продолжается по цепочке прототипов (prototype chain). Почти все
          объекты в JavaScript (за исключением нескольких случаев) наследуют от
          Object.prototype, который содержит методы вроде toString, valueOf,
          hasOwnProperty.&nbsp;
          <span
            onClick={() =>
              copyToClipboard(
                'console.log(Object.prototype.hasOwnProperty("toString"))',
              )
            }
          >
            console.log(Object.prototype.hasOwnProperty("toString"))
          </span>
        </p>
        <br />
        <p>Создание прототипа через функцию конструктор:</p>
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

const person1 = new Person("Alice", 25)`,
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
          </div>
          <b>&nbsp;&nbsp;</b>
          <p>
            Объекты, созданные с помощью функции-конструктора, автоматически
            наследуют свойства и методы, определённые в prototype этой функции.
            <br />
            <br />
            <span
              onClick={() => copyToClipboard('console.log(person1.greet())')}
            >
              console.log(person1.greet())
            </span>
            &nbsp; // "Hi, my name is Alice and I'm 25 years old."
          </p>
        </div>
        <br />
        <p>Создание прототипа через класс (ES6)</p>
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
          </div>
          <b>&nbsp;&nbsp;</b>
          <p>
            Методы, описанные внутри класса, автоматически попадают в общий
            прототип для всех созданных через класс объектов.
          </p>
        </div>
        <br />
        <p>Создание прототипа через метод Object.create:</p>
        <div>
          <div
            onClick={() =>
              copyToClipboard(
                `const parent = { greet: function() { return "Hello" } }
const child = Object.create(parent)`,
              )
            }
          >
            const parent = &#123; greet: function() &#123; return "Hello" &#125;
            &#125;
            <br />
            const child = Object.create(parent)
          </div>
          <b>&nbsp;&nbsp;</b>
          <p>
            Можно создавать новые объекты с указанием общего прототипа напрямую.
            При этом исходный объект (прототип для будущих объектов) не
            изменяется.
            <br />
            <span onClick={() => copyToClipboard('console.log(child.greet())')}>
              console.log(child.greet())
            </span>
            &nbsp; // "Hello"
          </p>
        </div>
        <br />
        <p>Добавление прототипа в свойство __proto__:</p>
        <div>
          <div
            onClick={() =>
              copyToClipboard(
                `const parent = { greet: function() { return "Hello" } }
const obj = {}
obj.__proto__ = parent`,
              )
            }
          >
            const parent = &#123; greet: function() &#123; return "Hello" &#125;
            &#125;
            <br />
            const obj = &#123; &#125;
            <br />
            obj.__proto__ = parent
          </div>
          <b>&nbsp;&nbsp;</b>
          <p>
            Это исторический способ доступа к прототипу объекта. Хотя он
            работает, его использование не рекомендуется (вместо этого нужно
            использовать&nbsp;{' '}
            <span onClick={() => copyToClipboard('Object.getPrototypeOf(obj)')}>
              Object.getPrototypeOf(obj)
            </span>
            &nbsp;и&nbsp;
            <span
              onClick={() =>
                copyToClipboard('Object.setPrototypeOf(obj, parent))')
              }
            >
              Object.setPrototypeOf(obj, parent))
            </span>
          </p>
        </div>
        <br />
        <p>Ключевые особенности прототипов</p>
        <p>
          &emsp;1 Прототипы эффективны для наследования: Позволяют экономить
          память, поскольку методы и свойства определяются один раз и
          разделяются всеми объектами.
        </p>
        <p>
          &emsp;2 Модификация прототипа: Изменения, внесённые в прототип, сразу
          становятся доступны всем объектам, которые наследуют этот прототип.
        </p>
        <p>
          &emsp;3 Разрыв цепочки прототипов: Если объекту явно установить
          прототип как null, цепочка наследования прерывается.
        </p>
        <p>
          &emsp;4 Скрытые свойства: [[Prototype]] - это внутреннее свойство,
          недоступное напрямую. Для его управления используются методы вроде
          Object.getPrototypeOf.
        </p>
        <p>
          &emsp;5 Цепочка прототипов ограничена производительностью. Длинные
          цепочки наследования могут замедлить работу, так как поиск свойства
          становится затратнее.
        </p>
        <p>
          &emsp;6 Не путайте prototype и __proto__: prototype - это свойство
          функции-конструктора, __proto__ - это ссылка на прототип объекта
          (только у экземпляров).
        </p>
        <p>
          &emsp;7 Современный синтаксис классов в JavaScript (class) - это
          надстройка над прототипами. Методы класса добавляются в prototype.
        </p>
      </div>
    </>
  )
}
