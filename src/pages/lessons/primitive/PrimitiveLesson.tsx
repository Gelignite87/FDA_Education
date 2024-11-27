import { copyToClipboard } from '../../../utils/utils'
import styles from './PrimitiveLesson.module.sass'

export const PrimitiveLesson: React.FC = () => {
  return (
    <>
      <div className={styles.Primitive_text}>
        <p>
          <i>Примитивные типы данных</i> - это простые и неизменяемые значения,
          которые не являются объектами. 7 примитивных типов - это базовые
          строительные блоки JavaScript. Всё остальное в языке (например,
          массивы, объекты, функции) - это объекты, построенные на основе
          примитивов.
        </p>
        <br />
        <p>
          <span onClick={() => copyToClipboard('const num = 42')}>
            const number = 42
          </span>
          &nbsp; Number. Представляет числовые значения: целые числа и числа с
          плавающей запятой. Специальные значения: Infinity, -Infinity
          (результат деления на 0). NaN (не число, например, результат
          некорректной математической операции).
        </p>
        <p>
          <span onClick={() => copyToClipboard("const str = 'Hello'")}>
            const str = 'Hello'
          </span>
          &nbsp; String. Представляет строки - последовательности символов.
          Можно использовать шаблонные строки: &nbsp;
          <span
            onClick={() =>
              copyToClipboard('const greeting = `Hello, ${name}!`')
            }
          >
            const greeting = `Hello, &#36;&#123;name&#125;!`
          </span>
        </p>
        <p>
          <span onClick={() => copyToClipboard('const isTrue = true')}>
            const isTrue = true
          </span>
          &nbsp; Boolean. Представляет логические значения: true (истина) и
          false (ложь).
        </p>
        <p>
          <span onClick={() => copyToClipboard('let a')}>let a</span>
          &nbsp; Undefined. Указывает, что переменная была объявлена, но
          значение ей не присвоено.
        </p>
        <p>
          <span onClick={() => copyToClipboard('const empty = null')}>
            const empty = null
          </span>
          &nbsp; Null. Представляет намеренное отсутствие значения. Это значение
          нужно задавать вручную. Typeof null возвращает "object" - это ошибка в
          языке, появившаяся из-за особенностей первой реализации JavaScript.
          Несмотря на это, null остаётся примитивом.
        </p>
        <p>
          <span onClick={() => copyToClipboard("const id = Symbol('id')")}>
            const id = Symbol('id')
          </span>
          &nbsp; Symbol. Уникальный и неизменяемый идентификатор. Используется
          для создания уникальных ключей объектов. &nbsp;
          <span
            onClick={() =>
              copyToClipboard("console.log(Symbol('id') === Symbol('id'))")
            }
          >
            console.log(Symbol('id') === Symbol('id'))
          </span>
          &nbsp; // false.
        </p>
        <p>
          <span
            onClick={() =>
              copyToClipboard(
                'const big = 1234567890123456789012345678901234567890n',
              )
            }
          >
            const big = 1234567890123456789012345678901234567890n
          </span>
          ,&nbsp;
          <span onClick={() => copyToClipboard('const small = 42n')}>
            const small = 42n
          </span>
          &nbsp; Bigint. Представляет целые числа произвольной длины.
          Используется для работы с очень большими числами.
        </p>
        <br />
        <p>Особенности:</p>
        <p>
          &emsp;Примитивные значения сравниваются по их содержимому, а не по
          ссылке, как это происходит с объектами.
        </p>
        <p>
          &emsp;В большинстве случаев примитивные значения хранятся в стеке, что
          делает доступ к ним быстрым.
        </p>
        <p>
          &emsp;Все примитивные типы, кроме null и undefined, имеют
          соответствующие объекты-обёртки: Number, String, Boolean, Symbol,
          BigInt. Они позволяют использовать методы и свойства для работы с
          примитивами.
        </p>
        <p>
          &emsp;Примитивы не являются объектами. Однако при доступе к методам
          (например, "text".toUpperCase()) временно создаётся объект-обёртка.
        </p>
        <p>
          &emsp;Примитивные значения иммутабельны (неизменяемы). Любое изменение
          приводит к созданию нового значения.
        </p>
      </div>
    </>
  )
}
