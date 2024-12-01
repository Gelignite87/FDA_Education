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
        <p>Основные концепции:</p>
        <p>
          1 Event Loop (Цикл событий). Это механизм, который управляет
          выполнением кода, обрабатывает события и выполняет операции,
          поставленные в очередь. JavaScript является однопоточным, но благодаря
          циклу событий он может выполнять асинхронные задачи, ставя их в
          очередь выполнения.
        </p>
        <p>
          2 Callbacks (Обратные вызовы). Это функции, которые передаются как
          аргументы другим функциям и вызываются позже, когда завершится
          асинхронная операция.
        </p>
        <p>
          3 Promises (Промисы). Промисы — это объекты, которые представляют
          результат асинхронной операции, который может быть получен в будущем.
          Промис может быть в одном из трёх состояний: Pending (ожидание):
          начальное состояние. Fulfilled (выполнено): операция завершилась
          успешно. Rejected (отклонено): операция завершилась с ошибкой.
        </p>
        <p>
          4 Async/Await. Это синтаксический сахар над промисами, который
          позволяет писать асинхронный код так, будто он синхронный.
        </p>
        <br />
        <div>
          <div
            onClick={() =>
              copyToClipboard(
                `function fetchData(callbackData: (data: string) => void, data: string) {
  setTimeout(() => {
    callbackData(data)
  }, 2000)
}

fetchData(data => console.log(data), 'Sample data')`,
              )
            }
          >
            function fetchData(callbackData: (data: string) =&gt; void, data:
            string) &#123;
            <br />
            &nbsp;&nbsp;setTimeout(() =&gt; &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;callbackData(data)
            <br />
            &nbsp;&nbsp;&#125;, 2000)
            <br />
            &#125;
            <br />
            <br />
            fetchData(data =&gt; console.log(data), 'Sample data')
          </div>
          <b>&nbsp;&nbsp;</b>
          <p>
            Асинхронность через Callbacks (функция передаётся как аргумент
            функции).
            <br />
            <br />
            Через 2 секунды сработает&nbsp;
            <span onClick={() => copyToClipboard('console.log(data)')}>
              console.log(data)
            </span>
            &nbsp;и выведет строку 'Sample data'.
          </p>
        </div>
        <br />
        <div>
          <div
            onClick={() =>
              copyToClipboard(
                `function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Sample data")
    }, 2000)
  })
}

fetchData().then(data => console.log(data))`,
              )
            }
          >
            function fetchData() &#123;
            <br />
            &nbsp;&nbsp;return new Promise((resolve, reject) =&gt; &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;setTimeout(() =&gt; &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resolve("Sample data")
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;, 2000)
            <br />
            &nbsp;&nbsp;&#125;)
            <br />
            &#125;
            <br />
            <br />
            fetchData().then(data =&gt; console.log(data))
          </div>
          <b>&nbsp;&nbsp;</b>
          <p>
            Асинхронность через Promises.
            <br />
            <br />
            Через 2 секунды сработает&nbsp;
            <span onClick={() => copyToClipboard('resolve("Sample data")')}>
              resolve("Sample data")
            </span>
            &nbsp;и через&nbsp;
            <span
              onClick={() =>
                copyToClipboard('.then(data => console.log(data))')
              }
            >
              .then(data =&gt; console.log(data))
            </span>
            &nbsp;попадет в console.log, который выведет строку 'Sample data'.
          </p>
        </div>
        <br />
        <div>
          <div
            onClick={() =>
              copyToClipboard(
                `async function fetchData() {
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => resolve('Sample data'), 2000)
  })
  console.log(data)
}

fetchData()`,
              )
            }
          >
            async function fetchData() &#123;
            <br />
            &nbsp;&nbsp;const data = await new Promise((resolve, reject) =&gt;
            &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;setTimeout(() =&gt; resolve('Sample data'),
            2000)
            <br />
            &nbsp;&nbsp;&#125;)
            <br />
            &nbsp;&nbsp;console.log(data)
            <br />
            &#125;
            <br />
            <br />
            fetchData()
          </div>
          <b>&nbsp;&nbsp;</b>
          <p>
            Асинхронность через Async/Await.
            <br />
            <br />
            Через 2 секунды сработает&nbsp;
            <span onClick={() => copyToClipboard('resolve("Sample data")')}>
              resolve("Sample data")
            </span>
            , запишется в константу data и попадет в console.log, который
            выведет строку 'Sample data'.
          </p>
        </div>
      </div>
    </>
  )
}
