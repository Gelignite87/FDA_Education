import styles from './Accordion.module.sass'
import { useState, useRef } from 'react'

export const Accordion: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className={styles.accordion}>
        <button
          className={`${styles.accordion_header} ${isOpen ? 'active' : ''}`}
          onClick={toggleAccordion}
        >
          События (events)
        </button>
        <div
          className={styles.accordion_content}
          style={{
            maxHeight: isOpen
              ? `${contentRef.current && contentRef.current.scrollHeight}px`
              : '0',
          }}
          ref={contentRef}
        >
          <div className={styles.accordion_content_inner}>{children}</div>
        </div>
      </div>
    </>
  )
}
