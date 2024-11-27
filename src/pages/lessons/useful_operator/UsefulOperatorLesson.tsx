import styles from './UsefulOperatorLesson.module.sass'
import { copyToClipboard } from '../../../utils/utils'

export const UsefulOperatorLesson: React.FC = () => {
  return (
    <>
      <div className={styles.UsefulOperator_text}>
        <p>
          <i>Оператор</i> - это элемент языка, задающий полное описание
          действия, которое необходимо выполнить.
        </p>
        <br />
        <p>
          <span
            onClick={() =>
              copyToClipboard('const discount = isMember ? 0.1 : 0.05')
            }
          >
            const discount = isMember ? lowPrice : null
          </span>
          &nbsp; тернарный оператор.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard(
                'const result = grade >= 90 ? "A" : grade >= 80 ? "B" : grade >= 70 ? "C" : "F"',
              )
            }
          >
            const result = grade &gt;= 90 ? "A" : grade &gt;= 80 ? "B" : grade
            &gt;= 70 ? "C" : "F"
          </span>
          &nbsp; вложенный тернарный оператор.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard("const adult = age >= 18 && 'You can vote'")
            }
          >
            const adult = age &gt;= 18 && 'You can vote'
          </span>
          &nbsp; логическое И. Возвращает второе значение если первое true.
        </p>
        <p>
          <span
            onClick={() => copyToClipboard('let timeout = userTimeout || 1000')}
          >
            let timeout = userTimeout || 1000
          </span>
          &nbsp; логическое ИЛИ. Возвращает первое значение если оно true.
        </p>
        <p>
          <span
            onClick={() => copyToClipboard("let name = userInput ?? 'Гость'")}
          >
            let name = userInput ?? 'Гость'
          </span>
          &nbsp; нулевое слияние. Возвращает первое значение если оно не
          undefined или null (в том числе возвращает false, 0, '').
        </p>
        <p>
          <span onClick={() => copyToClipboard('!isWorks')}>!isWorks</span>
          &nbsp; логическое НЕ. Переводит true в false и наоборот.
        </p>
        <p>
          <span onClick={() => copyToClipboard('=, +=, -=, *=, /=, %=')}>
            =, +=, -=, *=, /=, %=
          </span>
          &nbsp; операторы присваивания. (x += 5 означает x = x + 5). (x %= 5
          означает остаток от x = x / 5).
        </p>
        <p>
          <span onClick={() => copyToClipboard('typeof 42')}>typeof 42</span>
          &nbsp; typeof определяет тип данных.
        </p>
      </div>
    </>
  )
}
