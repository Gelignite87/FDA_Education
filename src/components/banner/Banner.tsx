import './Banner.sass'

export const Banner = ({ text = 'Banner' }) => {
  return (
    <>
      <div className="background-banner">
        <h1 className="background-banner-content">{text}</h1>
      </div>
    </>
  )
}
