import styles from './Banner.module.sass'

export const Banner = ({ text = 'Banner' }) => {
  return (
    <>
      <div className={styles['background-banner']}>
        <h1>{text}</h1>
      </div>
    </>
  )
}
