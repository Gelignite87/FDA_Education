import { copyToClipboard } from '../../../utils/utils'
import styles from './AsyncLesson.module.sass'
import { useEffect, useState } from 'react'

export const AsyncLesson: React.FC = () => {
  const [fulfilled, setFulfilled] = useState<any[]>([])
  const [rejected, setRejected] = useState<any[]>([])

  async function fetchAllData(): Promise<void> {
    try {
      const urls: string[] = [
        `https://api.adviceslip.com/advice/${Math.floor(Math.random() * 223) + 1}`,
        `https://api.adviceslip.com/advice/${Math.floor(Math.random() * 223) + 1}`,
        `https://api.adviceslip.com/advice/${Math.floor(Math.random() * 223) + 1}`,
        `https://api.adviceslip.com/advice/element`,
        `https://api.adviceslip.com/advice/number`,
      ]
      const fetchPromises: Promise<any>[] = urls.map((url: string) =>
        fetch(url).then(response => {
          if (!response.ok) {
            throw new Error(`Failed to fetch ${url}: ${response.status}`)
          }
          return response.json() as Promise<any>
        }),
      )
      const fetchResults: any[] = await Promise.allSettled(fetchPromises)
      // Сортируем успешные и неудачные результаты
      const fulfilled = fetchResults
        .filter(result => result.status === 'fulfilled')
        .map(result => result.value) // Успешные данные
      const rejected = fetchResults
        .filter(result => result.status === 'rejected')
        .map(result => result.reason.message) // Ошибки

      setFulfilled(fulfilled)
      setRejected(rejected)

      console.log('Results 1:', fulfilled[0]?.slip?.advice)
      console.log('Results 2:', fulfilled[1]?.slip?.advice)
      console.log('Results 3:', fulfilled[2]?.slip?.advice)
      console.log('Rejected:', rejected.join(', '))
    } catch (error) {
      console.error('Error fetching data:', (error as Error).message)
    }
  }

  useEffect(() => {
    fetchAllData()
  }, [])

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
        <br />
        <p>Проблемы асинхронного кода и их решения:</p>
        <p>
          1 Callback Hell (Ад колбэков). Множественные вложенные функции,
          усложняющие чтение и поддержку кода. Решение: Использование промисов
          или async/await.
        </p>
        <p>
          2 Обработка ошибок. Асинхронный код сложнее в отладке. Решение:
          Использовать .catch с промисами или try-catch с async/await.
        </p>
        <p>
          3 Состояния гонки (Race conditions). Когда порядок выполнения
          асинхронных операций влияет на результат. Решение: Использование
          синхронизации с помощью Promise.all или Promise.race.
        </p>
        <br />
        <div>
          <div
            onClick={() =>
              copyToClipboard(
                `function fetchData(): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5
        ? resolve('Sample data')
        : reject(new Error('Ошибка получения данных'))
    }, 2000)
  })
}

fetchData()
  .then((data: string) => console.log(data))
  .catch((error: Error) => console.error("Произошла ошибка:", error.message))`,
              )
            }
          >
            function fetchData(): Promise&lt;string&gt; &#123;
            <br />
            &nbsp;&nbsp;return new Promise&lt;string&gt;((resolve, reject) =&gt;
            &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;setTimeout(() =&gt; &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Math.random() &gt; 0.5
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;? resolve('Sample
            data')
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: reject(new
            Error('Ошибка получения данных'))
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;, 2000)
            <br />
            &nbsp;&nbsp;&#125;)
            <br />
            &#125;
            <br />
            <br />
            fetchData()
            <br />
            &nbsp;&nbsp;.then((data: string) =&gt; console.log(data))
            <br />
            &nbsp;&nbsp;.catch((error: Error) =&gt; console.error("Произошла
            ошибка:", error.message))
          </div>
          <b>&nbsp;&nbsp;</b>
          <p>
            Обработка ошибок через&nbsp;
            <span
              onClick={() =>
                copyToClipboard('.catch(error => console.error(error.message))')
              }
            >
              .catch(error =&gt; console.error(error.message))
            </span>
            .
            <br />
            <br />
            <span onClick={() => copyToClipboard('console.log(fetchData())')}>
              console.log(fetchData())
            </span>
            &nbsp;всегда возвращает Promise &#123;&lt;pending&gt;&#125;.
            Добраться до результата работы Promise можно только через&nbsp;
            <span onClick={() => copyToClipboard('.then(data => {})')}>
              .then(data =&gt; &#123;&#125;)
            </span>
            &nbsp; и записать этот результат например в State.
          </p>
        </div>
        <br />
        <div>
          <div
            onClick={() =>
              copyToClipboard(
                `async function fetchData(): Promise<void> {
  try {
    const data: string = await new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5
          ? resolve('Sample data')
          : reject(new Error('Ошибка получения данных'))
      }, 2000)
    })
    console.log(data)
  } catch (error) {
    console.error('Произошла ошибка:', (error as Error).message)
  }
}

fetchData()`,
              )
            }
          >
            async function fetchData(): Promise&lt;void&gt; &#123;
            <br />
            &nbsp;&nbsp;try &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;const data: string = await new
            Promise&lt;string&gt;((resolve, reject) =&gt; &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setTimeout(() =&gt; &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Math.random() &gt;
            0.5
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;?
            resolve('Sample data')
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            reject(new Error('Ошибка получения данных'))
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;, 2000)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;console.log(data)
            <br />
            &nbsp;&nbsp;&#125; catch (error) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;console.error('Произошла ошибка:', (error as
            Error).message)
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &#125;
            <br />
            <br />
            fetchData()
          </div>
          <b>&nbsp;&nbsp;</b>
          <p>
            Обработка ошибок через&nbsp;
            <span onClick={() => copyToClipboard('try...catch')}>
              try...catch
            </span>
            .
            <br />
            <br />
            <span onClick={() => copyToClipboard('console.log(fetchData())')}>
              console.log(fetchData())
            </span>
            &nbsp;всегда возвращает Promise &#123;&lt;pending&gt;&#125;.
            Добраться до результата работы Promise можно только в блоке try и
            записать этот результат например в State.
          </p>
        </div>
        <br />
        <div>
          <div
            className={styles.promise_method}
            onClick={() =>
              copyToClipboard(
                `async function fetchAllData(): Promise<void> {
  try {
    const urls: string[] = [
      'https://api.adviceslip.com/advice/\${Math.floor(Math.random() * 223) + 1}',
      'https://api.adviceslip.com/advice/\${Math.floor(Math.random() * 223) + 1}',
      'https://api.adviceslip.com/advice/\${Math.floor(Math.random() * 223) + 1}',
    ]
    const fetchPromises: Promise<any>[] = urls.map((url: string) =>
      fetch(url).then(response => {
        if (!response.ok) {
          throw new Error(\`Failed to fetch \${url}: \${response.status}\`)
        }
        return response.json() as Promise<any>
      }),
    )
    const results: any[] = await Promise.all(fetchPromises)

    console.log('Results 1:', results[0]?.slip?.advice)
    console.log('Results 2:', results[1]?.slip?.advice)
    console.log('Results 3:', results[2]?.slip?.advice)
  } catch (error) {
    console.error('Error fetching data:', (error as Error).message)
  }
}

fetchAllData()`,
              )
            }
          >
            async function fetchAllData(): Promise&lt;void&gt; &#123;
            <br />
            &nbsp;&nbsp;try &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;const urls: string[] = [
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'https://api.adviceslip.com/advice/$&#123;Math.floor(Math.random()
            * 223) + 1&#125;',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'https://api.adviceslip.com/advice/$&#123;Math.floor(Math.random()
            * 223) + 1&#125;',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'https://api.adviceslip.com/advice/$&#123;Math.floor(Math.random()
            * 223) + 1&#125;',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;]
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;const fetchPromises: Promise&lt;any&gt;[] =
            urls.map((url: string) =&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fetch(url).then(response =&gt;
            &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (!response.ok)
            &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;throw
            new Error(`Failed to fetch $&#123;url&#125;:
            $&#123;response.status&#125;`)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return
            response.json() as Promise&lt;any&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;),
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;const results: any[] = await
            Promise.all(fetchPromises)
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;console.log('Results 1:',
            results[0]?.slip?.advice)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;console.log('Results 2:',
            results[1]?.slip?.advice)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;console.log('Results 3:',
            results[2]?.slip?.advice)
            <br />
            &nbsp;&nbsp;&#125; catch (error) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;console.error('Error fetching data:', (error
            as Error).message)
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            <br />
            fetchData()
          </div>
          <b>&nbsp;&nbsp;</b>
          <p>
            Promise.all().
            <br />
            <br />
            Ожидает результат работы нескольких промисов. Если хотя бы один не
            выполнен, выдаёт ошибку.
            <br />
            <br />
            <span
              onClick={() =>
                copyToClipboard(
                  "console.log('Results 1:', results[0].slip.advice)",
                )
              }
            >
              console.log('Results 1:', results[0].slip.advice)
            </span>
            &nbsp; // {fulfilled[0]?.slip?.advice}
            <br />
            <span
              onClick={() =>
                copyToClipboard(
                  "console.log('Results 2:', results[1].slip.advice)",
                )
              }
            >
              console.log('Results 2:', results[1].slip.advice)
            </span>
            &nbsp; // {fulfilled[1]?.slip?.advice}
            <br />
            <span
              onClick={() =>
                copyToClipboard(
                  "console.log('Results 3:', results[2].slip.advice)",
                )
              }
            >
              console.log('Results 3:', results[2].slip.advice)
            </span>
            &nbsp; // {fulfilled[2]?.slip?.advice}
          </p>
        </div>
        <br />
        <div>
          <div
            className={styles.promise_method}
            onClick={() =>
              copyToClipboard(
                `async function fetchAllData(): Promise<void> {
  try {
    const urls: string[] = [
      'https://api.adviceslip.com/advice/\${Math.floor(Math.random() * 223) + 1}',
      'https://api.adviceslip.com/advice/\${Math.floor(Math.random() * 223) + 1}',
      'https://api.adviceslip.com/advice/\${Math.floor(Math.random() * 223) + 1}',
      'https://api.adviceslip.com/advice/element',
      'https://api.adviceslip.com/advice/number',
    ]
    const fetchPromises: Promise<any>[] = urls.map((url: string) =>
      fetch(url).then(response => {
        if (!response.ok) {
          throw new Error(\`Failed to fetch \${url}: \${response.status}\`)
        }
        return response.json() as Promise<any>
      }),
    )
    const results: any[] = await Promise.allSettled(fetchPromises)
    const fulfilled = fetchResults
      .filter(result => result.status === 'fulfilled')
      .map(result => result.value)
    const rejected = fetchResults
      .filter(result => result.status === 'rejected')
      .map(result => result.reason.message)

    console.log('Results 1:', results[0]?.slip?.advice)
    console.log('Results 2:', results[1]?.slip?.advice)
    console.log('Results 3:', results[2]?.slip?.advice)
    console.log('Rejected:', rejected.join(', '))
  } catch (error) {
    console.error('Error fetching data:', (error as Error).message)
  }
}

fetchAllData()`,
              )
            }
          >
            async function fetchAllData(): Promise&lt;void&gt; &#123;
            <br />
            &nbsp;&nbsp;try &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;const urls: string[] = [
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'https://api.adviceslip.com/advice/$&#123;Math.floor(Math.random()
            * 223) + 1&#125;',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'https://api.adviceslip.com/advice/$&#123;Math.floor(Math.random()
            * 223) + 1&#125;',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'https://api.adviceslip.com/advice/$&#123;Math.floor(Math.random()
            * 223) + 1&#125;',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'https://api.adviceslip.com/advice/element',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'https://api.adviceslip.com/advice/number',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;]
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;const fetchPromises: Promise&lt;any&gt;[] =
            urls.map((url: string) =&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fetch(url).then(response =&gt;
            &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (!response.ok)
            &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;throw
            new Error(`Failed to fetch $&#123;url&#125;:
            $&#123;response.status&#125;`)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return
            response.json() as Promise&lt;any&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;),
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;const results: any[] = await
            Promise.allSettled(fetchPromises)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;const fulfilled = fetchResults
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.filter(result =&gt;
            result.status === 'fulfilled')
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.map(result =&gt; result.value)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;const rejected = fetchResults
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.filter(result =&gt;
            result.status === 'rejected')
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.map(result =&gt;
            result.reason.message)
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;console.log('Results 1:',
            results[0]?.slip?.advice)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;console.log('Results 2:',
            results[1]?.slip?.advice)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;console.log('Results 3:',
            results[2]?.slip?.advice)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;console.log('Rejected:', rejected.join(',
            '))
            <br />
            &nbsp;&nbsp;&#125; catch (error) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;console.error('Error fetching data:', (error
            as Error).message)
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            <br />
            fetchData()
          </div>
          <b>&nbsp;&nbsp;</b>
          <p>
            Promise.allSettled().
            <br />
            <br />
            Ожидает результат работы нескольких промисов. Выдаёт массив объектов
            &#123;status: 'fulfilled', value: &#123; &#125;&#125;.
            <br />
            <br />
            <span
              onClick={() =>
                copyToClipboard(
                  "console.log('Results 1:', results[0].slip.advice)",
                )
              }
            >
              console.log('Results 1:', results[0].slip.advice)
            </span>
            &nbsp; // {fulfilled[0]?.slip?.advice}
            <br />
            <span
              onClick={() =>
                copyToClipboard(
                  "console.log('Results 2:', results[1].slip.advice)",
                )
              }
            >
              console.log('Results 2:', results[1].slip.advice)
            </span>
            &nbsp; // {fulfilled[1]?.slip?.advice}
            <br />
            <span
              onClick={() =>
                copyToClipboard(
                  "console.log('Results 3:', results[2].slip.advice)",
                )
              }
            >
              console.log('Results 3:', results[2].slip.advice)
            </span>
            &nbsp; // {fulfilled[2]?.slip?.advice}
            <br />
            <span
              onClick={() =>
                copyToClipboard("console.log('Rejected:', rejected.join(', '))")
              }
            >
              console.log('Rejected:', rejected.join(', '))
            </span>
            &nbsp; // {rejected.join(', ')}
          </p>
        </div>
      </div>
    </>
  )
}
