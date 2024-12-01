import { copyToClipboard } from '../../../utils/utils'
import styles from './AsyncLesson.module.sass'

export const AsyncLesson: React.FC = () => {
  return (
    <>
      <div className={styles.Async_text}>
        <p>
          <i>Асинхронные операции</i> - это операции, которые выполняются
          независимо от основного потока выполнения программы (основного потока
          событий). Вместо того чтобы блокировать выполнение программы,
          асинхронные операции позволяют продолжать выполнение других задач,
          пока ожидаются результаты длительных процессов, таких как запросы к
          серверу, чтение файлов или задержки.
        </p>
        <br />
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
      </div>
    </>
  )
}
