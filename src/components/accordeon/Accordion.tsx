import { useState, useRef, useEffect } from 'react'
import styles from './Accordion.module.sass'

export const Accordion: React.FC<{
  title: string
  children: React.ReactNode
}> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentAccordionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentAccordionRef.current) {
      contentAccordionRef.current.style.setProperty(
        '--dynamic-max-height',
        isOpen ? `${contentAccordionRef.current.scrollHeight}px` : '0',
      )
    }
  }, [isOpen])

  return (
    <>
      <div className={styles.accordion}>
        <div
          className={`${styles.accordion_button} ${isOpen ? styles.accordion_button_isOpen : styles.accordion_button_isClose}
          `}
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          <div>{title}</div>
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
        </div>
        <div
          className={`${styles.accordion_content}
            ${isOpen ? styles.accordion_isOpen : styles.accordion_isClose}
          `}
          ref={contentAccordionRef}
        >
          {children}
        </div>
      </div>
    </>
  )
}
