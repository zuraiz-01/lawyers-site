function ProcessSection({ processSteps }) {
  return (
    <section className="process reveal" id="process">
      <div className="process-overlay" />
      <div className="container process-grid">
        <div
          className="process-copy reveal reveal-left"
          style={{ '--reveal-delay': '110ms' }}
          data-scroll-speed="0.03"
        >
          <p className="kicker">Work Process</p>
          <h3>Navigating the Law: Your Assurance of Peace</h3>
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="step reveal"
              style={{ '--reveal-delay': `${150 + index * 90}ms` }}
            >
              <span className="step-icon">O</span>
              <div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div
          className="process-image-card reveal reveal-right"
          style={{ '--reveal-delay': '190ms' }}
          data-scroll-speed="0.08"
        >
          <img
            src="/images/process-consultation.jpg"
            alt="Legal consultation"
            loading="lazy"
          />
          <div className="play-ring">PLAY</div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
