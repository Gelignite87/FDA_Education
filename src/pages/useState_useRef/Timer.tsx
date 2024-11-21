import { useRef, useState } from 'react'

// const useState_useRef = {
//   banner: 'Xуки React useState и useRef на примере таймера',
//   component: 'Timer',
// }

export const Timer = () => {
  const [seconds, setSeconds] = useState<number>(0)
  const timerRef = useRef<number | null>(null)

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => setSeconds(s => s + 1), 1000)
    }
  }

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  const clearTimer = () => {
    stopTimer()
    setSeconds(0)
  }

  return (
    <div>
      <p>Seconds: {seconds}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={clearTimer}>Clear</button>
    </div>
  )
}
