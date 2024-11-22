import { useEffect, useRef, useState } from 'react'
import styles from './Timer.module.sass'

export const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0) // useState вызывает повторный рендеринг при изменении seconds
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const timerRef = useRef<number | null>(null) // useRef создаёт объект с ключом current, который может хранить значение, но не вызывает повторного рендеринга компонента при изменении этого значения

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (error) {
      console.error('Ошибка при копировании: ', error)
    }
  }

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => setSeconds(s => s + 0.1), 100) // Записываем в timerRef.current уникальный идентификатор функции setInterval
      setIsRunning(true)
    }
  }

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
      setIsRunning(false)
    }
  }

  const clearTimer = () => {
    stopTimer()
    setSeconds(0)
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  return (
    <>
      <div className={styles.timer_text}>
        <p>
          Рассмотрим использование хуков React useState и useRef на примере
          таймера:
        </p>
        <br />
      </div>
      <div className={styles.timer_seconds}>
        <div>
          <p className={styles.timer_seconds_p_left}>Seconds: </p>
          <p>{seconds.toFixed(1)}</p>
        </div>
        <div>
          <button onClick={startTimer} disabled={isRunning}>
            Start
          </button>
          <button onClick={stopTimer} disabled={!isRunning}>
            Stop
          </button>
          <button onClick={clearTimer} disabled={seconds === 0}>
            Clear
          </button>
        </div>
      </div>
      <div className={styles.timer_text}>
        <br />
        <p>
          <i>useState</i> вызывает повторный рендеринг при изменении значения
          переменной. Записывается как &nbsp;
          <span
            onClick={() =>
              handleCopy('const [seconds, setSeconds] = useState<number>(0)')
            }
          >
            const [seconds, setSeconds] = useState&lt;number&gt;(0)
          </span>
        </p>
        <p>
          <i>useRef</i> создаёт объект с ключом current, который может хранить
          значение, но не вызывает повторного рендеринга компонента при
          изменении этого значения. Записывается как &nbsp;
          <span
            onClick={() =>
              handleCopy('const timerRef = useRef<number | null>(null)')
            }
          >
            const timerRef = useRef&lt;number | null&gt;(null)
          </span>
          .&nbsp; В дальнейшем запись происходит в переменную&nbsp;
          <span onClick={() => handleCopy('timerRef.current')}>
            timerRef.current
          </span>
        </p>
        <p>
          Суть таймера в следующем: каждую 0.1 секунду функция&nbsp;
          <span
            onClick={() =>
              handleCopy('setInterval(() => setSeconds(s => s + 0.1), 100)')
            }
          >
            setInterval(() =&gt; setSeconds(s =&gt; s + 0.1), 100)
          </span>
          &nbsp;изменяет переменную seconds через функцию setSeconds(). Функция
          setInterval() возвращает уникальный идентификатор, который можно
          внести в clearInterval() и остановить setInterval(). Куда сохранить
          уникальный идентификатор? Если сохранять его в let, то каждый раз при
          повторном рендеринге let будет создаваться заново и уникальный
          идентификатор будет потерян. Запишем его в&nbsp;
          <span onClick={() => handleCopy('timerRef.current')}>
            timerRef.current
          </span>
          &nbsp;и он не будет изменятся при повторном рендеринге компонента.
          Также в отличие от useState() запись в&nbsp;
          <span onClick={() => handleCopy('timerRef.current')}>
            timerRef.current
          </span>
          &nbsp; не вызывает повторный рендеринг компонента.
        </p>
      </div>
    </>
  )
}
