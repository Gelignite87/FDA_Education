import styles from './DestructuringLesson.module.sass'
import { copyToClipboard } from '../../../utils/utils'

export const DestructuringLesson: React.FC = () => {
  return (
    <>
      <div className={styles.Destructuring_text}>
        <p>
          <i>Деструктуризация</i> - это синтаксис, который позволяет извлекать
          значения из объекта или массива и присваивать их переменным удобным
          образом.
        </p>
        <br />
        <p>1 Создаём сложный объект.</p>
        <p>
          <span
            onClick={() =>
              copyToClipboard(
                "const obj = { name: 'Alice', description: { age: 25, gender: 'female', residence: ['Oklahoma', 'Nebraska'], }, experience: ['JavaScript', 'React', 'Node.js'], last_workplace: 'developer', }",
              )
            }
          >
            const obj = &#123; name: 'Alice', description: &#123; age: 25,
            gender: 'female', residence: ['Oklahoma', 'Nebraska'], &#125;,
            experience: ['JavaScript', 'React', 'Node.js'], last_workplace:
            'developer', &#125;
          </span>
        </p>
        <br />
        <p>2 Деструктурируем объект.</p>
        <p>
          <span
            onClick={() =>
              copyToClipboard(
                'const { name: fullName, description: { age: yearsOld, residence: [townA, townB], }, ...rest } = obj',
              )
            }
          >
            const &#123; name: fullName, description: &#123; age: yearsOld,
            residence: [townA, townB], &#125;, ...rest &#125; = obj
          </span>
          &nbsp;в данном примере мы получили переменные fullName, yearsOld,
          townA, townB, rest. Намеренно пропустили свойство gender. Использовали
          rest-оператор для получения остальных свойств, независимо от их
          количества.
        </p>
        <br />
        <div>
          <div
            onClick={() =>
              copyToClipboard(
                `function logObject({
  name: fullName,
  description: {
    age: yearsOld,
    residence: [townA, townB],
  },
  ...rest
}) {
  console.log(fullName, yearsOld, townA, townB, rest)
}

logObject(obj)`,
              )
            }
          >
            function logObject(&#123;
            <br />
            &nbsp;&nbsp;name: fullName,
            <br />
            &nbsp;&nbsp;description: &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;age: yearsOld,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;residence: [townA, townB],
            <br />
            &nbsp;&nbsp;&#125;,
            <br />
            &nbsp;&nbsp;...rest
            <br />
            &#125;) &#123;
            <br />
            &nbsp;&nbsp;console.log(fullName, yearsOld, townA, townB, rest)
            <br />
            &#125;
            <br />
            <br />
            logObject(obj)
          </div>
          <b>&nbsp;&nbsp;</b>
          <p>Деструктуризация работает аналогично для аргументов функции.</p>
        </div>
      </div>
    </>
  )
}
