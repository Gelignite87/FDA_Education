import { Accordion } from '../../../components/accordion/Accordion'
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
        <div className={styles.accordion_position}>
          <Accordion title="Методы работы с объектом-обёрткой String">
            <p>
              1&nbsp;
              <span onClick={() => copyToClipboard('charAt(index)')}>
                charAt(index)
              </span>
              &nbsp; Возвращает символ по указанному индексу.
              <br />
              Пример:&nbsp;
              <span onClick={() => copyToClipboard("'hello'.charAt(1) → 'e'")}>
                'hello'.charAt(1) → 'e'
              </span>
            </p>
            <p>
              2&nbsp;
              <span onClick={() => copyToClipboard('charCodeAt(index)')}>
                charCodeAt(index)
              </span>
              &nbsp; Возвращает числовой код символа в Unicode.
              <br />
              Пример:&nbsp;
              <span onClick={() => copyToClipboard("'A'.charCodeAt(0) → 65")}>
                'A'.charCodeAt(0) → 65
              </span>
            </p>
            <p>
              3&nbsp;
              <span onClick={() => copyToClipboard('codePointAt(index)')}>
                codePointAt(index)
              </span>
              &nbsp; Возвращает кодопойнт символа.
              <br />
              Пример:&nbsp;
              <span
                onClick={() => copyToClipboard("'𠮷'.codePointAt(0) → 134071")}
              >
                '𠮷'.codePointAt(0) → 134071
              </span>
            </p>
            <p>
              4&nbsp;
              <span onClick={() => copyToClipboard('concat(...strings)')}>
                concat(...strings)
              </span>
              &nbsp; Объединяет текущую строку с одной или несколькими строками.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    "'Hello'.concat(' ', 'World') → 'Hello World'",
                  )
                }
              >
                'Hello'.concat(' ', 'World') → 'Hello World'
              </span>
            </p>
            <p>
              5&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('includes(searchString, position = 0)')
                }
              >
                includes(searchString, position = 0)
              </span>
              &nbsp; Проверяет, содержит ли строка подстроку.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard("'hello'.includes('ell') → true")
                }
              >
                'hello'.includes('ell') → true
              </span>
            </p>
            <p>
              6&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('endsWith(searchString, length)')
                }
              >
                endsWith(searchString, length)
              </span>
              &nbsp; Проверяет, заканчивается ли строка указанной подстрокой.
              <br />
              Пример:&nbsp;
              <span
                onClick={() => copyToClipboard("'hello'.endsWith('lo') → true")}
              >
                'hello'.endsWith('lo') → true
              </span>
            </p>
            <p>
              7&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('indexOf(searchString, position = 0)')
                }
              >
                indexOf(searchString, position = 0)
              </span>
              &nbsp; Возвращает индекс первого вхождения подстроки.
              <br />
              Пример:&nbsp;
              <span onClick={() => copyToClipboard("'hello'.indexOf('l') → 2")}>
                'hello'.indexOf('l') → 2
              </span>
            </p>
            <p>
              8&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'lastIndexOf(searchString, position = this.length)',
                  )
                }
              >
                lastIndexOf(searchString, position = this.length)
              </span>
              &nbsp; Возвращает индекс последнего вхождения подстроки.
              <br />
              Пример:&nbsp;
              <span
                onClick={() => copyToClipboard("'hello'.lastIndexOf('l') → 3")}
              >
                'hello'.lastIndexOf('l') → 3
              </span>
            </p>
            <p>
              9&nbsp;
              <span
                onClick={() => copyToClipboard('localeCompare(compareString)')}
              >
                localeCompare(compareString)
              </span>
              &nbsp; Сравнивает строки с учётом локали.
              <br />
              Пример:&nbsp;
              <span
                onClick={() => copyToClipboard("'a'.localeCompare('b') → -1")}
              >
                'a'.localeCompare('b') → -1
              </span>
            </p>
            <p>
              10&nbsp;
              <span onClick={() => copyToClipboard('match(regexp)')}>
                match(regexp)
              </span>
              &nbsp; Возвращает массив совпадений или null.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard("'abc123'.match(/\\d+/) → ['123']")
                }
              >
                'abc123'.match(/\d+/) → ['123']
              </span>
            </p>
            <p>
              11&nbsp;
              <span onClick={() => copyToClipboard('matchAll(regexp)')}>
                matchAll(regexp)
              </span>
              &nbsp; Возвращает итератор совпадений.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    "Array.from('abcabc'.matchAll(/a/g)) → [Array]",
                  )
                }
              >
                Array.from('abcabc'.matchAll(/a/g)) → [Array]
              </span>
            </p>
            <p>
              12&nbsp;
              <span onClick={() => copyToClipboard('normalize(form)')}>
                normalize(form)
              </span>
              &nbsp; Нормализует строку Unicode.
              <br />
              Пример:&nbsp;
              <span
                onClick={() => copyToClipboard("'Ä'.normalize('NFD') → 'Ä'")}
              >
                'Ä'.normalize('NFD') → 'Ä'
              </span>
            </p>
            <p>
              13&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('padEnd(targetLength, padString)')
                }
              >
                padEnd(targetLength, padString)
              </span>
              &nbsp; Добавляет символы в конец строки.
              <br />
              Пример:&nbsp;
              <span
                onClick={() => copyToClipboard("'5'.padEnd(3, '0') → '500'")}
              >
                '5'.padEnd(3, '0') → '500'
              </span>
            </p>
            <p>
              14&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('padStart(targetLength, padString)')
                }
              >
                padStart(targetLength, padString)
              </span>
              &nbsp; Добавляет символы в начало строки.
              <br />
              Пример:&nbsp;
              <span
                onClick={() => copyToClipboard("'5'.padStart(3, '0') → '005'")}
              >
                '5'.padStart(3, '0') → '005'
              </span>
            </p>
            <p>
              15&nbsp;
              <span onClick={() => copyToClipboard('repeat(count)')}>
                repeat(count)
              </span>
              &nbsp; Повторяет строку указанное число раз.
              <br />
              Пример:&nbsp;
              <span onClick={() => copyToClipboard("'a'.repeat(3) → 'aaa'")}>
                'a'.repeat(3) → 'aaa'
              </span>
            </p>
            <p>
              16&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('replace(searchValue, replaceValue)')
                }
              >
                replace(searchValue, replaceValue)
              </span>
              &nbsp; Заменяет первое совпадение.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard("'hello'.replace('l', 'x') → 'hexlo'")
                }
              >
                'hello'.replace('l', 'x') → 'hexlo'
              </span>
            </p>
            <p>
              17&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('replaceAll(searchValue, replaceValue)')
                }
              >
                replaceAll(searchValue, replaceValue)
              </span>
              &nbsp; Заменяет все совпадения.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard("'hello'.replaceAll('l', 'x') → 'hexxo'")
                }
              >
                'hello'.replaceAll('l', 'x') → 'hexxo'
              </span>
            </p>
            <p>
              18&nbsp;
              <span onClick={() => copyToClipboard('slice(start, end)')}>
                slice(start, end)
              </span>
              &nbsp; Извлекает часть строки.
              <br />
              Пример:&nbsp;
              <span
                onClick={() => copyToClipboard("'hello'.slice(1, 4) → 'ell'")}
              >
                'hello'.slice(1, 4) → 'ell'
              </span>
            </p>
            <p>
              19&nbsp;
              <span onClick={() => copyToClipboard('split(separator, limit)')}>
                split(separator, limit)
              </span>
              &nbsp; Разбивает строку на массив.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard("'a,b,c'.split(',') → ['a', 'b', 'c']")
                }
              >
                'a,b,c'.split(',') → ['a', 'b', 'c']
              </span>
            </p>
            <p>
              20&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('startsWith(searchString, position)')
                }
              >
                startsWith(searchString, position)
              </span>
              &nbsp; Проверяет, начинается ли строка с подстроки.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard("'hello'.startsWith('he') → true")
                }
              >
                'hello'.startsWith('he') → true
              </span>
            </p>
            <p>
              21&nbsp;
              <span onClick={() => copyToClipboard('toLowerCase()')}>
                toLowerCase()
              </span>
              &nbsp; Преобразует строку в нижний регистр.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard("'HELLO'.toLowerCase() → 'hello'")
                }
              >
                'HELLO'.toLowerCase() → 'hello'
              </span>
            </p>
            <p>
              22&nbsp;
              <span onClick={() => copyToClipboard('toUpperCase()')}>
                toUpperCase()
              </span>
              &nbsp; Преобразует строку в верхний регистр.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard("'hello'.toUpperCase() → 'HELLO'")
                }
              >
                'hello'.toUpperCase() → 'HELLO'
              </span>
            </p>
            <p>
              23&nbsp;
              <span onClick={() => copyToClipboard('trim()')}>trim()</span>
              &nbsp; Удаляет пробелы с обоих концов строки.
              <br />
              Пример:&nbsp;
              <span
                onClick={() => copyToClipboard("' hello '.trim() → 'hello'")}
              >
                ' hello '.trim() → 'hello'
              </span>
            </p>
            <p>
              24&nbsp;
              <span onClick={() => copyToClipboard('trimStart()')}>
                trimStart()
              </span>
              &nbsp; Удаляет пробелы с начала строки.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard("' hello '.trimStart() → 'hello '")
                }
              >
                ' hello '.trimStart() → 'hello '
              </span>
            </p>
            <p>
              25&nbsp;
              <span onClick={() => copyToClipboard('trimEnd()')}>
                trimEnd()
              </span>
              &nbsp; Удаляет пробелы с конца строки.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard("' hello '.trimEnd() → ' hello'")
                }
              >
                ' hello '.trimEnd() → ' hello'
              </span>
            </p>
            <p>
              25&nbsp;
              <span onClick={() => copyToClipboard('valueOf()')}>
                valueOf()
              </span>
              &nbsp; Возвращает примитивное значение строки.
              <br />
              Пример:&nbsp;
              <span
                onClick={() => copyToClipboard("'hello'.valueOf() → 'hello'")}
              >
                'hello'.valueOf() → 'hello'
              </span>
            </p>
          </Accordion>
        </div>
        <div className={styles.accordion_position}>
          <Accordion title="Методы работы с объектом-обёрткой Number">
            <p>
              1&nbsp;
              <span onClick={() => copyToClipboard('Number.isNaN(value)')}>
                Number.isNaN(value)
              </span>
              &nbsp; Проверяет, является ли значение NaN.
              <br />
              Пример:&nbsp;
              <span onClick={() => copyToClipboard('Number.isNaN(NaN) → true')}>
                Number.isNaN(NaN) → true
              </span>
            </p>
            <p>
              2&nbsp;
              <span onClick={() => copyToClipboard('Number.isFinite(value)')}>
                Number.isFinite(value)
              </span>
              &nbsp; Проверяет, является ли значение конечным числом.
              <br />
              Пример:&nbsp;
              <span
                onClick={() => copyToClipboard('Number.isFinite(100) → true')}
              >
                Number.isFinite(100) → true
              </span>
            </p>
            <p>
              3&nbsp;
              <span onClick={() => copyToClipboard('Number.isInteger(value)')}>
                Number.isInteger(value)
              </span>
              &nbsp; Проверяет, является ли значение целым числом.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Number.isInteger(10.5) → false')
                }
              >
                Number.isInteger(10.5) → false
              </span>
            </p>
            <p>
              4&nbsp;
              <span
                onClick={() => copyToClipboard('Number.parseFloat(string)')}
              >
                Number.parseFloat(string)
              </span>
              &nbsp; Преобразует строку в число с плавающей запятой.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard("Number.parseFloat('3.14') → 3.14")
                }
              >
                Number.parseFloat('3.14') → 3.14
              </span>
            </p>
            <p>
              5&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Number.parseInt(string, radix)')
                }
              >
                Number.parseInt(string, radix)
              </span>
              &nbsp; Преобразует строку в целое число с заданной системой
              счисления.
              <br />
              Пример:&nbsp;
              <span
                onClick={() => copyToClipboard("Number.parseInt('101', 2) → 5")}
              >
                Number.parseInt('101', 2) → 5
              </span>
            </p>
            <p>
              6&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Number.prototype.toFixed(digits)')
                }
              >
                toFixed(digits)
              </span>
              &nbsp; Возвращает строку с числом, округлённым до заданного
              количества знаков после запятой.
              <br />
              Пример:&nbsp;
              <span
                onClick={() => copyToClipboard('(3.14159).toFixed(2) → "3.14"')}
              >
                (3.14159).toFixed(2) → "3.14"
              </span>
            </p>
            <p>
              7&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'Number.prototype.toExponential(fractionDigits)',
                  )
                }
              >
                toExponential(fractionDigits)
              </span>
              &nbsp; Возвращает строку в экспоненциальной записи.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('(12345).toExponential(2) → "1.23e+4"')
                }
              >
                (12345).toExponential(2) → "1.23e+4"
              </span>
            </p>
            <p>
              8&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Number.prototype.toPrecision(precision)')
                }
              >
                toPrecision(precision)
              </span>
              &nbsp; Возвращает строку числа с заданной точностью.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('(3.14159).toPrecision(3) → "3.14"')
                }
              >
                (3.14159).toPrecision(3) → "3.14"
              </span>
            </p>
            <p>
              9&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Number.prototype.toString(radix)')
                }
              >
                toString(radix)
              </span>
              &nbsp; Преобразует число в строку с заданной системой счисления.
              <br />
              Пример:&nbsp;
              <span
                onClick={() => copyToClipboard('(255).toString(16) → "ff"')}
              >
                (255).toString(16) → "ff"
              </span>
            </p>
            <p>
              10&nbsp;
              <span
                onClick={() => copyToClipboard('Number.prototype.valueOf()')}
              >
                valueOf()
              </span>
              &nbsp; Возвращает примитивное значение числа.
              <br />
              Пример:&nbsp;
              <span onClick={() => copyToClipboard('(42).valueOf() → 42')}>
                (42).valueOf() → 42
              </span>
            </p>
            <p>
              11&nbsp;
              <span
                onClick={() => copyToClipboard('Number.isSafeInteger(value)')}
              >
                Number.isSafeInteger(value)
              </span>
              &nbsp; Проверяет, является ли значение безопасным целым числом.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    'Number.isSafeInteger(9007199254740991) → true',
                  )
                }
              >
                Number.isSafeInteger(9007199254740991) → true
              </span>
            </p>
            <p>
              12&nbsp;
              <span onClick={() => copyToClipboard('Number.EPSILON')}>
                Number.EPSILON
              </span>
              &nbsp; Минимальная разница между двумя представимыми числами.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Number.EPSILON → 2.220446049250313e-16')
                }
              >
                Number.EPSILON → 2.220446049250313e-16
              </span>
            </p>
            <p>
              13&nbsp;
              <span onClick={() => copyToClipboard('Number.MAX_SAFE_INTEGER')}>
                Number.MAX_SAFE_INTEGER
              </span>
              &nbsp; Максимальное безопасное целое число.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Number.MAX_SAFE_INTEGER → 9007199254740991')
                }
              >
                Number.MAX_SAFE_INTEGER → 9007199254740991
              </span>
            </p>
            <p>
              14&nbsp;
              <span onClick={() => copyToClipboard('Number.MIN_SAFE_INTEGER')}>
                Number.MIN_SAFE_INTEGER
              </span>
              &nbsp; Минимальное безопасное целое число.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Number.MIN_SAFE_INTEGER → -9007199254740991')
                }
              >
                Number.MIN_SAFE_INTEGER → -9007199254740991
              </span>
            </p>
            <p>
              15&nbsp;
              <span onClick={() => copyToClipboard('Number.MAX_VALUE')}>
                Number.MAX_VALUE
              </span>
              &nbsp; Максимальное представимое значение числа.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Number.MAX_VALUE → 1.7976931348623157e+308')
                }
              >
                Number.MAX_VALUE → 1.7976931348623157e+308
              </span>
            </p>
            <p>
              16&nbsp;
              <span onClick={() => copyToClipboard('Number.MIN_VALUE')}>
                Number.MIN_VALUE
              </span>
              &nbsp; Минимальное представимое значение числа.
              <br />
              Пример:&nbsp;
              <span
                onClick={() => copyToClipboard('Number.MIN_VALUE → 5e-324')}
              >
                Number.MIN_VALUE → 5e-324
              </span>
            </p>
            <p>
              17&nbsp;
              <span onClick={() => copyToClipboard('Number.POSITIVE_INFINITY')}>
                Number.POSITIVE_INFINITY
              </span>
              &nbsp; Представляет бесконечность.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Number.POSITIVE_INFINITY → Infinity')
                }
              >
                Number.POSITIVE_INFINITY → Infinity
              </span>
            </p>
            <p>
              18&nbsp;
              <span onClick={() => copyToClipboard('Number.NEGATIVE_INFINITY')}>
                Number.NEGATIVE_INFINITY
              </span>
              &nbsp; Представляет отрицательную бесконечность.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Number.NEGATIVE_INFINITY → -Infinity')
                }
              >
                Number.NEGATIVE_INFINITY → -Infinity
              </span>
            </p>
            <p>
              19&nbsp;
              <span onClick={() => copyToClipboard('Number.NaN')}>
                Number.NaN
              </span>
              &nbsp; Представляет значение NaN (Not-A-Number).
              <br />
              Пример:&nbsp;
              <span onClick={() => copyToClipboard('Number.NaN → NaN')}>
                Number.NaN → NaN
              </span>
            </p>
          </Accordion>
        </div>
        <div className={styles.accordion_position}>
          <Accordion title="Методы работы с объектом-обёрткой Boolean">
            <p>
              1&nbsp;
              <span
                onClick={() => copyToClipboard('Boolean.prototype.toString()')}
              >
                toString()
              </span>
              &nbsp; Преобразует значение в строку.
              <br />
              Пример:&nbsp;
              <span
                onClick={() => copyToClipboard('(true).toString() → "true"')}
              >
                (true).toString() → "true"
              </span>
            </p>
            <p>
              2&nbsp;
              <span
                onClick={() => copyToClipboard('Boolean.prototype.valueOf()')}
              >
                valueOf()
              </span>
              &nbsp; Возвращает примитивное значение объекта.
              <br />
              Пример:&nbsp;
              <span
                onClick={() => copyToClipboard('(false).valueOf() → false')}
              >
                (false).valueOf() → false
              </span>
            </p>
            <p>
              3&nbsp;
              <span onClick={() => copyToClipboard('Boolean()')}>
                Boolean(value)
              </span>
              &nbsp; Преобразует значение в булев тип (true или false).
              <br />
              Пример:&nbsp;
              <span onClick={() => copyToClipboard('Boolean(1) → true')}>
                Boolean(1) → true
              </span>
            </p>
            <p>
              4&nbsp;
              <span onClick={() => copyToClipboard('Boolean.TRUE')}>
                Boolean.TRUE
              </span>
              &nbsp; Это эквивалент true, но не используется напрямую в
              JavaScript.
              <br />
              Пример:&nbsp;
              <span onClick={() => copyToClipboard('Boolean.TRUE → true')}>
                Boolean.TRUE → true
              </span>
            </p>
            <p>
              5&nbsp;
              <span onClick={() => copyToClipboard('Boolean.FALSE')}>
                Boolean.FALSE
              </span>
              &nbsp; Это эквивалент false, но не используется напрямую в
              JavaScript.
              <br />
              Пример:&nbsp;
              <span onClick={() => copyToClipboard('Boolean.FALSE → false')}>
                Boolean.FALSE → false
              </span>
            </p>
          </Accordion>
        </div>
        <div className={styles.accordion_position}>
          <Accordion title="Методы работы с объектом-обёрткой Simbol">
            <p>
              1&nbsp;
              <span
                onClick={() => copyToClipboard('Symbol.prototype.toString()')}
              >
                toString()
              </span>
              &nbsp; Преобразует объект Symbol в строку.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Symbol("foo").toString() → "Symbol(foo)"')
                }
              >
                Symbol("foo").toString() → "Symbol(foo)"
              </span>
            </p>
            <p>
              2&nbsp;
              <span
                onClick={() => copyToClipboard('Symbol.prototype.valueOf()')}
              >
                valueOf()
              </span>
              &nbsp; Возвращает сам символ как примитивное значение.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Symbol("bar").valueOf() → Symbol(bar)')
                }
              >
                Symbol("bar").valueOf() → Symbol(bar)
              </span>
            </p>
            <p>
              3&nbsp;
              <span onClick={() => copyToClipboard('Symbol.for()')}>
                Symbol.for(key)
              </span>
              &nbsp; Создаёт или возвращает символ, зарегистрированный в
              глобальном реестре символов.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Symbol.for("app") → Symbol(app)')
                }
              >
                Symbol.for("app") → Symbol(app)
              </span>
            </p>
            <p>
              4&nbsp;
              <span onClick={() => copyToClipboard('Symbol.keyFor()')}>
                Symbol.keyFor(symbol)
              </span>
              &nbsp; Возвращает ключ для символа, зарегистрированного в
              глобальном реестре.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('Symbol.keyFor(Symbol("foo")) → undefined')
                }
              >
                Symbol.keyFor(Symbol("foo")) → undefined
              </span>
            </p>
          </Accordion>
        </div>
        <div className={styles.accordion_position}>
          <Accordion title="Методы работы с объектом-обёрткой BigInt">
            <p>
              1&nbsp;
              <span
                onClick={() => copyToClipboard('BigInt.asIntN(bits, bigint)')}
              >
                BigInt.asIntN(bits, bigint)
              </span>
              &nbsp; Ограничивает BigInt до указанного количества битов,
              интерпретируя его как целое число со знаком.
              <br />
              Пример:&nbsp;
              <span
                onClick={() => copyToClipboard('BigInt.asIntN(4, 10n) → -6n')}
              >
                BigInt.asIntN(4, 10n) → -6n
              </span>
            </p>
            <p>
              2&nbsp;
              <span
                onClick={() => copyToClipboard('BigInt.asUintN(bits, bigint)')}
              >
                BigInt.asUintN(bits, bigint)
              </span>
              &nbsp; Ограничивает BigInt до указанного количества битов,
              интерпретируя его как беззнаковое целое число.
              <br />
              Пример:&nbsp;
              <span
                onClick={() => copyToClipboard('BigInt.asUintN(4, 10n) → 10n')}
              >
                BigInt.asUintN(4, 10n) → 10n
              </span>
            </p>
            <p>
              3&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('BigInt.prototype.toString([radix])')
                }
              >
                toString([radix])
              </span>
              &nbsp; Возвращает строковое представление BigInt, опционально в
              указанной системе счисления.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    '123456789123456789123456789n.toString(16) → "1bc16d674ec800000"',
                  )
                }
              >
                123456789123456789123456789n.toString(16) → "1bc16d674ec800000"
              </span>
            </p>
            <p>
              4&nbsp;
              <span
                onClick={() => copyToClipboard('BigInt.prototype.valueOf()')}
              >
                valueOf()
              </span>
              &nbsp; Возвращает примитивное значение объекта BigInt.
              <br />
              Пример:&nbsp;
              <span onClick={() => copyToClipboard('(10n).valueOf() → 10n')}>
                (10n).valueOf() → 10n
              </span>
            </p>
            <p>
              5&nbsp;
              <span
                onClick={() =>
                  copyToClipboard('BigInt.prototype.toLocaleString()')
                }
              >
                toLocaleString()
              </span>
              &nbsp; Возвращает строку, представляющую BigInt, с учетом текущей
              локали.
              <br />
              Пример:&nbsp;
              <span
                onClick={() =>
                  copyToClipboard(
                    '(123456789123456789n).toLocaleString() → "123,456,789,123,456,789"',
                  )
                }
              >
                (123456789123456789n).toLocaleString() →
                "123,456,789,123,456,789"
              </span>
            </p>
            <p>
              6&nbsp;
              <span onClick={() => copyToClipboard('BigInt()')}>
                BigInt(value)
              </span>
              &nbsp; Преобразует переданное значение в BigInt.
              <br />
              Пример:&nbsp;
              <span onClick={() => copyToClipboard('BigInt("123") → 123n')}>
                BigInt("123") → 123n
              </span>
            </p>
          </Accordion>
        </div>
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
