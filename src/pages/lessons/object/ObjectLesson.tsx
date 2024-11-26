import { copyToClipboard } from '../../../utils/utils'
import styles from './ObjectLesson.module.sass'

export const ObjectLesson: React.FC = () => {
  return (
    <>
      <div className={styles.Object_text}>
        <p>
          <i>Объекты</i> — это собрание пар "ключ-значение" или ассоциативные
          массивы. Они представляют собой наиболее фундаментальный тип данных,
          который используется для хранения и управления более сложными
          структурами данных. Объекты могут содержать данные (свойства) и
          функциональность (методы). Ключами всегда являются строки или символы,
          а значения могут быть любого типа, включая другие объекты, массивы или
          функции.
        </p>
        <br />
        <p>Создание объектов:</p>
        <p>
          &nbsp;&nbsp;1 Через литерал объекта&nbsp;
          <span
            onClick={() =>
              copyToClipboard("const obj = { name:'Alice', age:30 }")
            }
          >
            const obj = &#123; name:'Alice', age:30 &#125;
          </span>
        </p>
        <p>
          &nbsp;&nbsp;2 Через конструктор&nbsp;
          <span
            onClick={() =>
              copyToClipboard("const obj = new Object({ key: 'value' })")
            }
          >
            const obj = new Object(&#123; key: 'value' &#125;)
          </span>
        </p>
        <p>
          &nbsp;&nbsp;3 Через Object.create()&nbsp;
          <span
            onClick={() =>
              copyToClipboard("const obj = Object.create({ key: 'value' })")
            }
          >
            const obj = Object.create(&#123; key: 'value' &#125;)
          </span>
        </p>
        <p>&nbsp;&nbsp;4 Через класс (ES6)&nbsp;</p>
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
          <p>
            <br />
            То же самое что в примере выше, но с использованием классов.
          </p>
        </div>
        <p>
          &nbsp;&nbsp;5 Через функции-конструкторы (устаревший метод, но всё ещё
          используется)&nbsp;
        </p>
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
        <p>Свойства объекта:</p>
        <p>
          &nbsp;&nbsp;1 Объявление свойства&nbsp;
          <span onClick={() => copyToClipboard("const obj = { key: 'value' }")}>
            const obj = &#123; key: 'value' &#125;
          </span>
        </p>
        <p>&nbsp;&nbsp;2 Доступ к свойству&nbsp; </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span onClick={() => copyToClipboard('console.log(obj.key)')}>
            console.log(obj.key)
          </span>
          &nbsp;через точечную нотацию&nbsp;
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span onClick={() => copyToClipboard("console.log(obj['key'])")}>
            console.log(obj['key'])
          </span>
          &nbsp;через квадратные скобки.
        </p>
        <p>
          &nbsp;&nbsp;3 Динамическое добавление свойства&nbsp;
          <span onClick={() => copyToClipboard("obj.newKey = 'newValue'")}>
            obj.newKey = 'newValue'
          </span>
        </p>
        <p>
          &nbsp;&nbsp;4 Удаление свойства&nbsp;
          <span onClick={() => copyToClipboard('delete obj.key')}>
            delete obj.key
          </span>
        </p>
        <p>Методы объекта:</p>
        <p>
          &nbsp;&nbsp;
          <span
            onClick={() =>
              copyToClipboard(
                'const calculator = {add: function(a, b) {return a + b}}',
              )
            }
          >
            const calculator = &#123;add: function(a, b) &#123;return a +
            b&#125;&#125;
          </span>
          &nbsp;методы - это свойства объекта, значения которых являются
          функциями.
        </p>
        <p>
          &nbsp;&nbsp;
          <span
            onClick={() =>
              copyToClipboard('const calculator = {add(a, b) {return a + b}}')
            }
          >
            const calculator = &#123;add(a, b) &#123;return a + b&#125;&#125;
          </span>
          &nbsp;сокращенная запись.
        </p>
        <br />
        <p>Перебор свойств объекта:</p>
        <div>
          <p>
            &nbsp;&nbsp;1 for...in Перебирает все перечисляемые свойства,
            включая свойства прототипа
          </p>
          <div
            onClick={() =>
              copyToClipboard(`for (let key in obj) {
  console.log(key, obj[key])
}`)
            }
          >
            for (let key in obj) &#123;
            <br />
            &nbsp;&nbsp;console.log(key, obj[key])
            <br />
            &#125;
          </div>
          <b>&nbsp;</b>
        </div>
        <p>
          &nbsp;&nbsp;2 Object.keys() Возвращает массив собственных ключей
          объекта&nbsp;
          <span
            onClick={() => copyToClipboard('console.log(Object.keys(obj))')}
          >
            console.log(Object.keys(obj))
          </span>
        </p>
        <p>
          &nbsp;&nbsp;3 Object.values() Возвращает массив значений объекта&nbsp;
          <span
            onClick={() => copyToClipboard('console.log(Object.values(obj))')}
          >
            console.log(Object.values(obj))
          </span>
        </p>
        <p>
          &nbsp;&nbsp;4 Object.entries() Возвращает массив пар [ключ,
          значение]&nbsp;
          <span
            onClick={() => copyToClipboard('console.log(Object.entries(obj))')}
          >
            console.log(Object.entries(obj))
          </span>
        </p>
        <br />
        <p>Копирование объектов:</p>
        <p>
          &nbsp;&nbsp;1 Поверхностное копирование c использованием
          спред-оператора&nbsp;
          <span onClick={() => copyToClipboard('const copy = { ...original }')}>
            const copy = &#123; ...original &#125;
          </span>
        </p>
        <p>
          &nbsp;&nbsp;2 Поверхностное копирование c помощью
          Object.assign()&nbsp;
          <span
            onClick={() =>
              copyToClipboard('const copy = Object.assign( {}, original )')
            }
          >
            const copy = Object.assign( &#123; &#125;, original )
          </span>
        </p>
        <p>
          &nbsp;&nbsp;3 Глубокое копирование с использованием JSON()&nbsp;
          <span
            onClick={() =>
              copyToClipboard(
                'const deepCopy = JSON.parse(JSON.stringify(original))',
              )
            }
          >
            const deepCopy = JSON.parse(JSON.stringify(original))
          </span>
        </p>
        <br />
        <p>
          Наследование и прототипы. Каждый объект в JavaScript имеет скрытое
          свойство [[Prototype]], которое может быть доступно через
          Object.getPrototypeOf(obj) или __proto__.
        </p>
        <br />
        <p>Методы работы с объектами:</p>
        <p>
          &nbsp;&nbsp;1 Object.assign() копирует свойства одного или нескольких
          объектов в целевой объект&nbsp;
          <span
            onClick={() =>
              copyToClipboard('Object.assign(target, { a: 1 }, { b: 2 })')
            }
          >
            Object.assign(target, &#123; a: 1 &#125;, &#123; b: 2 &#125;)
          </span>
        </p>
        <p>
          &nbsp;&nbsp;2 Object.freeze() замораживает объект, делая его
          неизменяемым&nbsp;
          <span onClick={() => copyToClipboard('Object.freeze(obj)')}>
            Object.freeze(obj)
          </span>
        </p>
        <p>
          &nbsp;&nbsp;3 Object.seal() нельзя добавлять новые свойства, но старые
          менять можно&nbsp;
          <span onClick={() => copyToClipboard('Object.freeze(obj)')}>
            Object.seal(obj)
          </span>
        </p>
        <p>
          &nbsp;&nbsp;4 Object.is() сравнение. Объекты в JavaScript сравниваются
          по ссылке, а не по содержимому. Сравнение двух объектов с одинаковым
          содержанием покажет false&nbsp;
          <span onClick={() => copyToClipboard('Object.is(obj1, obj2)')}>
            Object.is(obj1, obj2)
          </span>
        </p>
      </div>
    </>
  )
}
