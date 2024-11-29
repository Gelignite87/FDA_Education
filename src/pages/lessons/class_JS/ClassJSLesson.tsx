import { copyToClipboard } from '../../../utils/utils'
import styles from './ClassJSLesson.module.sass'

export const ClassJSLesson: React.FC = () => {
  return (
    <>
      <div className={styles.ClassJS_text}>
        <p>
          <i>Класс в JavaScript</i> - это синтаксический сахар над прототипным
          наследованием. Он предоставляет удобный способ создавать объекты и
          задавать их поведение с помощью методов. Классы упрощают работу с
          объектно-ориентированным подходом в JavaScript, добавляя понятие
          конструктора, методов экземпляра и статических методов. Классы были
          введены в стандарте ES6 (2015) и не являются новым механизмом
          наследования, а только улучшением читаемости и структуры кода.
        </p>
        <br />
        <p>Объявление класса:</p>
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

  static info() {
    return "This is a Person class."
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
            <br />
            &nbsp;&nbsp;static info() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return "This is a Person class."
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
      </div>
    </>
  )
}
