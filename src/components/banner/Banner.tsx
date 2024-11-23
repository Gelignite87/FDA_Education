import styles from './Banner.module.sass'

export const Banner: React.FC<{ text: string }> = ({ text = 'Banner' }) => {
  return (
    <>
      <div className={styles['background-banner']}>
        <h1>{text}</h1>
      </div>
    </>
  )
}
