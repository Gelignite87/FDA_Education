import { useState, useRef, useEffect } from 'react'
import styles from './Accordion.module.sass'

export const Accordion: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.setProperty(
        'max-height',
        isOpen ? `${contentRef.current.scrollHeight}px` : '0',
      )
    }
  }, [isOpen])

  return (
    <>
      <div className={styles.accordion}>
        <button
          className={isOpen ? styles.button_isOpen : styles.button_isClose}
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          <div>События (events)</div>
          <div>&nbsp;</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 10L12 16L18 10" />
          </svg>
        </button>
        <div
          className={`${styles.accordion_content}
            ${isOpen ? styles.accordion_isOpen : styles.accordion_isClose}
          `}
          ref={contentRef}
        >
          {children}
        </div>
      </div>
    </>
  )
}
