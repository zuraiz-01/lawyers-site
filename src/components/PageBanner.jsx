function PageBanner({ title, subtitle }) {
  return (
    <section className="page-banner reveal" data-scroll-speed="0.03">
      <div className="page-banner-overlay" />
      <div className="container page-banner-content">
        <p className="kicker">LEXOVIA</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  )
}

export default PageBanner
