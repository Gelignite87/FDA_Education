type TimerProps = {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
  timerRef: { current: number | null }
}

export const Timer: React.FC<TimerProps> = ({ count, setCount, timerRef }) => {
  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => setCount(s => s + 1), 1000)
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
    setCount(0)
  }

  return (
    <div>
      <p>Seconds: {count}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={clearTimer}>Clear</button>
    </div>
  )
}
