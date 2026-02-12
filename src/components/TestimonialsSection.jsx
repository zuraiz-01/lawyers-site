function TestimonialsSection({ testimonials }) {
  return (
    <section className="testimonials reveal" id="testimonials">
      <div className="container">
        <p className="kicker center reveal" style={{ '--reveal-delay': '50ms' }}>
          Client Voices
        </p>
        <h3 className="section-title light reveal" style={{ '--reveal-delay': '110ms' }}>
          What Our Clients Say
        </h3>
        <div className="testimonial-grid scroll-float" data-scroll-speed="0.02">
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className="testimonial-card reveal"
              style={{ '--reveal-delay': `${170 + index * 100}ms` }}
              data-scroll-speed={index % 2 === 0 ? '0.04' : '0.05'}
            >
              <p>{item.quote}</p>
              <h4>{item.name}</h4>
              <span>{item.type}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
