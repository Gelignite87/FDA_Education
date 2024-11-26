import { copyToClipboard } from '../../../utils/utils'
import styles from './ObjectLesson.module.sass'

export const ObjectLesson: React.FC = () => {
  return (
    <>
      <div className={styles.Object_text}>
        <p>
          <i>Функция</i> — это объект высшего порядка, представляющий блок кода,
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
      </div>
    </>
  )
}
