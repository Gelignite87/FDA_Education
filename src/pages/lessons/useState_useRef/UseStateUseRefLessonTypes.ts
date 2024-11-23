export type UseStateUseRefLessonTypes = {
  props: {
    seconds: number
    setSeconds: React.Dispatch<React.SetStateAction<number>>
    isRunning: boolean
    setIsRunning: React.Dispatch<React.SetStateAction<boolean>>
    timerRef: React.MutableRefObject<number | null>
  }
}
