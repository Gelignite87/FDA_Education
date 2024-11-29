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
    return \`Hi, my name is \${this.name} and I'm \${this.age} years old\`
  }

  static info() {
    return "This is a Person class"
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
            old`
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            <br />
            &nbsp;&nbsp;static info() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return "This is a Person class"
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
            Конструктор (constructor) - это специальный метод, вызываемый при
            создании нового экземпляра класса. Он используется для инициализации
            свойств объекта.
            <br />
            <br />
            Методы, определённые в классе, записываются в прототип и принадлежат
            экземплярам класса. Могут вызываться только через объект, созданный
            с помощью класса.
            <br />
            <br />
            Статические методы (static) - принадлежат самому классу, а не его
            экземплярам. Они вызываются напрямую через класс.
            <br />
            <br />
            Для классов нет хостинга. В отличие от функций, классы должны быть
            объявлены до их использования.
            <br />
            <br />
            Код внутри классов автоматически выполняется в strict mode.
            <br />
            <br />
            <span
              onClick={() => copyToClipboard('console.log(person1.greet())')}
            >
              console.log(person1.greet())
            </span>
            &nbsp; // "Hi, my name is Alice and I'm 25 years old"
            <br />
            <span onClick={() => copyToClipboard('console.log(Person.info())')}>
              console.log(Person.info())
            </span>
            &nbsp; // "This is a Person class"
          </p>
        </div>
        <br />
        <p>Наследование класса:</p>
        <div>
          <div
            onClick={() =>
              copyToClipboard(
                `class Employee extends Person {
  constructor(name, age, job) {
    super(name, age)
    this.job = job
  }

  describeJob() {
    return \`I work as a \${this.job}\`
  }

  greet() {
    return \`\${super.greet()} I work as a \${this.job}.\`
  }
}

const employee = new Employee("Alice", 30, "Developer")`,
              )
            }
          >
            class Employee extends Person &#123;
            <br />
            &nbsp;&nbsp;constructor(name, age, job) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;super(name, age)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.job = job
            <br />
            &#125;
            <br />
            <br />
            &nbsp;&nbsp;describeJob() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return `I work as a $&#123;this.job&#125;`
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            <br />
            &nbsp;&nbsp;greet() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return `$&#123;super.greet()&#125; I work as
            a $&#123;this.job&#125;`
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &#125;
            <br />
            <br />
            const employee = new Employee("Alice", 30, "Developer")
          </div>
          <b>&nbsp;&nbsp;</b>
          <p>
            Ключевое слово extends указывает, что класс Employee наследует от
            класса Person. Метод super вызывает конструктор Person и передаёт
            параметры name и age, чтобы инициализировать соответствующие
            свойства в Person. После вызова super в конструкторе можно добавить
            дополнительные свойства, которые относятся только к дочернему классу
            (this.job = job).
            <br />
            <br />
            В дочернем классе можно добавлять новые методы, которых нет в
            родительском (describeJob()). Методы родителя могут быть
            переопределены в дочернем классе. При этом можно вызвать
            оригинальную реализацию родительского метода через super (greet()).
            <br />
            <br />
            Статические методы родительского класса также наследуются, если они
            объявлены с использованием ключевого слова static.&nbsp;
            <span
              onClick={() => copyToClipboard('console.log(Employee.info())')}
            >
              console.log(Employee.info())
            </span>
            &nbsp; // "This is a Person class"
            <br />
            <br />
            Оператор instanceof проверяет принадлежность объекта к классу,
            включая его родителей.&nbsp;
            <span
              onClick={() =>
                copyToClipboard('console.log(employee instanceof Person)')
              }
            >
              console.log(employee instanceof Person)
            </span>
            &nbsp; // true
            <br />
            <br />
            <span
              onClick={() => copyToClipboard('console.log(employee.greet())')}
            >
              console.log(employee.greet())
            </span>
            &nbsp; // "Hi, my name is Alice and I'm 30 years old. I work as a
            Developer"
            <br />
            <span
              onClick={() =>
                copyToClipboard('console.log(employee.describeJob())')
              }
            >
              console.log(employee.describeJob())
            </span>
            &nbsp; // "I work as a Developer"
          </p>
        </div>
        <br />
        <p>Геттеры и сеттеры (get и set):</p>
        <div>
          <div
            onClick={() =>
              copyToClipboard(
                `class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  get getName() {
    return \`Name: \${this.name}, age: \${this.age}\`
  }

  set setAge(newAge) {
    (Number.isInteger(newAge) && newAge > 0)
    ? this.age = newAge
    : console.error("Invalid age")
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
            &nbsp;&nbsp;get getName() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return `Name: $&#123;this.name&#125;, age:
            $&#123;this.age&#125;`
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            <br />
            &nbsp;&nbsp;set setAge(newAge) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;(Number.isInteger(newAge) && newAge &gt; 0)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;? this.age = newAge
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;: console.error("Invalid age")
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
            Геттеры и сеттеры вызываются как свойства объекта (person1.getName и
            person1.setAge).
            <br />
            <br />
            Геттеры не принимают аргументов.
            <br />
            <br />
            Название геттера/сеттера не должно совпадать с this.&lt;название&gt;
            внутри себя, чтобы избежать рекурсии (они будут вызывать сами себя).
            <br />
            <br />
            В данном примере сеттер проводит валидацию входящего числа (число
            должно быть целое и больше 0).
            <br />
            <br />
            <span
              onClick={() => copyToClipboard('console.log(person1.getName)')}
            >
              console.log(person1.getName)
            </span>
            &nbsp; // "Name: Alice, age: 25"
            <br />
            <span
              onClick={() => copyToClipboard('console.log(person1.setAge)')}
            >
              console.log(person1.setAge)
            </span>
            &nbsp; // 25
            <br />
            person1.setAge = 30 &nbsp;
            <span
              onClick={() => copyToClipboard('console.log(person1.setAge)')}
            >
              console.log(person1.setAge)
            </span>
            &nbsp; // 30
            <br />
            person1.setAge = -5 &nbsp;
            <span
              onClick={() => copyToClipboard('console.log(person1.setAge)')}
            >
              console.log(person1.setAge)
            </span>
            &nbsp; // 30 (валидация не пройдена)
          </p>
        </div>
      </div>
    </>
  )
}
