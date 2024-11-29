import { copyToClipboard } from '../../../utils/utils'
import styles from './FunctionLesson.module.sass'

export const FunctionLesson: React.FC = () => {
  return (
    <>
      <div className={styles.Function_text}>
        <p>
          <i>Функция</i> - это объект высшего порядка, представляющий блок кода,
          который можно вызывать и повторно использовать. Функция принимает
          аргументы, выполняет операции с ними и может возвращать результат. Это
          один из основных строительных блоков для организации и повторного
          использования кода.
        </p>
        <br />
        <p>
          <span
            onClick={() =>
              copyToClipboard('function greet(name) {return `Hello, ${name}!`}')
            }
          >
            function greet(name) &#123;return `Hello,
            &#36;&#123;name&#125;!`&#125;
          </span>
          &nbsp; объявление функции (Function Declarations). Функцию-объявление
          можно вызывать до определения, благодаря "поднятию" (hoisting).
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard(
                'const greet = function(name) {return `Hello, ${name}!`}',
              )
            }
          >
            const greet = function(name) &#123;return `Hello,
            &#36;&#123;name&#125;!`&#125;
          </span>
          &nbsp; выражение функции (Function Expressions). Функция-выражение
          может быть анонимной (без имени) и сохраняться в переменную.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard('const greet = name => `Hello, ${name}!`')
            }
          >
            const greet = name =&gt; `Hello, &#36;&#123;name&#125;!`
          </span>
          &nbsp; стрелочная функция (Arrow Function), не имеет собственного
          значения this. Если аргумент один, то ( ) не нужны. Если кроме return
          других действий нет return и &#123; &#125; можно не писать.
        </p>
        <p>
          Функции высшего порядка принимают другие функции в качестве аргументов
          или возвращают их.
        </p>
        <p>
          Функция в JavaScript является объектом, и у неё есть свойства, такие
          как .name и .length (количество параметров).
        </p>
        <p>
          Функции-объявления (Function Declarations) можно вызывать до
          определения, благодаря "поднятию" (hoisting). Функции, записываемые в
          переменную, можно вызвать только после записи.
        </p>
        <br />
        <p>
          Bind, Call, и Apply — это методы, которые позволяют привязывать
          контекст выполнения функции (значение this) или вызывать функцию с
          указанным контекстом. Они часто используются в JavaScript для
          управления контекстом, особенно при работе с объектами или в
          функциональном программировании.
        </p>
        <div>
          <div
            onClick={() =>
              copyToClipboard(
                `function describeAnimal(arg1, arg2, arg3, arg4) {
  return \`\${arg1} \${arg2} \${arg3} \${arg4} \${this.animal}\`
}

const cat = { animal: 'cat' }
const describeCat = describeAnimal.bind(cat, 'brown', 'tabby')`,
              )
            }
          >
            function describeAnimal(arg1, arg2, arg3, arg4) &#123;
            <br />
            &nbsp;&nbsp;return `&#36;&#123;arg1&#125; &#36;&#123;arg2&#125;
            &#36;&#123;arg3&#125; &#36;&#123;arg4&#125;
            &#36;&#123;this.animal&#125;`
            <br />
            &#125;
            <br />
            const cat = &#123; animal: 'cat' &#125;
            <br />
            const describeCat = describeAnimal.bind(cat, 'brown', 'tabby')
          </div>
          <b>&nbsp;&nbsp;</b>
          <p>
            Bind создаёт новую функцию с привязанным значением this и
            (опционально) предустановленными аргументами. Возвращает новую
            функцию. Не вызывает функцию сразу, а только закрепляет this.
            <br />
            <span
              onClick={() =>
                copyToClipboard("console.log(describeCat( 'fluffy', 'fat' ))")
              }
            >
              console.log(describeCat( 'fluffy', 'fat' ))
            </span>
            &nbsp; // "brown tabby fluffy fat cat"
          </p>
        </div>
        <br />
        <div>
          <div
            onClick={() =>
              copyToClipboard(
                `function describeAnimal(arg1, arg2, arg3, arg4) {
  return \`\${arg1} \${arg2} \${arg3} \${arg4} \${this.animal}\`
}

const cat = { animal: 'cat' }`,
              )
            }
          >
            function describeAnimal(arg1, arg2, arg3, arg4) &#123;
            <br />
            &nbsp;&nbsp;return `&#36;&#123;arg1&#125; &#36;&#123;arg2&#125;
            &#36;&#123;arg3&#125; &#36;&#123;arg4&#125;
            &#36;&#123;this.animal&#125;`
            <br />
            &#125;
            <br />
            const cat = &#123; animal: 'cat' &#125;
          </div>
          <b>&nbsp;&nbsp;</b>
          <div>
            <p>
              Call вызывает функцию с указанным значением this и передаёт
              аргументы через запятую. Вызывает функцию немедленно. Позволяет
              передать this и аргументы через запятую.
              <br />
              <span
                onClick={() =>
                  copyToClipboard(
                    "console.log(describeAnimal.call( cat, 'brown', 'tabby','fluffy', 'fat' ))",
                  )
                }
              >
                console.log(describeAnimal.call( cat, 'brown', 'tabby',
                'fluffy', 'fat' ))
              </span>
              &nbsp; // "brown tabby fluffy fat cat"
              <br />
            </p>
            <p>
              Apply похож на call, но принимает аргументы в виде массива.
              Вызывает функцию немедленно. Удобен, когда аргументы уже
              представлены в массиве.
              <br />
              <span
                onClick={() =>
                  copyToClipboard(
                    "console.log(describeAnimal.apply( cat, ['brown', 'tabby','fluffy', 'fat'] ))",
                  )
                }
              >
                console.log(describeAnimal.apply( cat, ['brown', 'tabby',
                'fluffy', 'fat'] ))
              </span>
              &nbsp; // "brown tabby fluffy fat cat"
            </p>
          </div>
        </div>
        <br />
        <p>
          Генератор - это специальный тип функции в JavaScript, которая может
          останавливать выполнение и возобновлять его позже.
        </p>
        <div>
          <div
            onClick={() =>
              copyToClipboard(
                `function* gen() { 
  yield 1
  yield 2
  return 3
}

const iterator = gen()`,
              )
            }
          >
            function* gen() &#123;
            <br />
            &nbsp;&nbsp;yield 1
            <br />
            &nbsp;&nbsp;yield 2
            <br />
            &nbsp;&nbsp;return 3
            <br />
            &#125;
            <br />
            <br />
            const iterator = gen()
          </div>
          <b>&nbsp;&nbsp;</b>
          <p>
            function* объявляет генераторную функцию. Генераторная функция
            возвращает специальный объект - итератор. Итератор позволяет
            вызывать метод .next(), который управляет выполнением функции.
            Ключевое слово yield используется для приостановки выполнения
            функции на определённой строке. При каждом вызове .next() выполнение
            возобновляется с того места, где оно было приостановлено. yield
            возвращает значение, переданное из функции в момент паузы.
            <br />
            <span
              onClick={() => copyToClipboard('console.log(iterator.next())')}
            >
              console.log(iterator.next())
            </span>
            &nbsp; // &#123; value: 1, done: false &#125;
            <br />
            <span
              onClick={() => copyToClipboard('console.log(iterator.next())')}
            >
              console.log(iterator.next())
            </span>
            &nbsp; // &#123; value: 2, done: false &#125;
            <br />
            <span
              onClick={() => copyToClipboard('console.log(iterator.next())')}
            >
              console.log(iterator.next())
            </span>
            &nbsp; // &#123; value: 3, done: true &#125;
            <br />
            <span
              onClick={() => copyToClipboard('console.log(iterator.next())')}
            >
              console.log(iterator.next())
            </span>
            &nbsp; // &#123; value: undefined, done: true &#125;
          </p>
        </div>
        <br />
        <p>Бесконечный генератор.</p>
        <div>
          <div
            onClick={() =>
              copyToClipboard(
                `function* gen() { 
  let i = 0
  while (true) {
    yield i++
  }
}

const iterator = gen()`,
              )
            }
          >
            function* gen() &#123;
            <br />
            &nbsp;&nbsp;let i = 0
            <br />
            &nbsp;&nbsp;while (true) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;yield i++
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &#125;
            <br />
            <br />
            const iterator = gen()
          </div>
          <b>&nbsp;&nbsp;</b>
          <p>
            Генераторы позволяют выдавать значения по мере необходимости
            (например, в бесконечных последовательностях).
            <br />
            <span
              onClick={() =>
                copyToClipboard('console.log(iterator.next().value)')
              }
            >
              console.log(iterator.next().value)
            </span>
            &nbsp; // 0
            <br />
            <span
              onClick={() =>
                copyToClipboard('console.log(iterator.next().value)')
              }
            >
              console.log(iterator.next().value)
            </span>
            &nbsp; // 1
            <br />
            <span
              onClick={() =>
                copyToClipboard('console.log(iterator.next().value)')
              }
            >
              console.log(iterator.next().value)
            </span>
            &nbsp; // 2
            <br />
            <span
              onClick={() =>
                copyToClipboard('console.log(iterator.next().value)')
              }
            >
              console.log(iterator.next().value)
            </span>
            &nbsp; // 3
          </p>
        </div>
      </div>
    </>
  )
}
