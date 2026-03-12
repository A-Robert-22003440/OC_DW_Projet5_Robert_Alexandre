function Banner({ title, imageSrc, className = '' }) {
  return (
    <section className={`banner ${className}`.trim()}>
      <img className="banner__image" src={imageSrc} alt="" aria-hidden="true" />
      <div className="banner__overlay" />
      {title ? <h2 className="banner__title">{title}</h2> : null}
    </section>
  )
}

export default Banner
