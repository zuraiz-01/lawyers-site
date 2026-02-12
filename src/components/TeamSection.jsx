function TeamSection({ attorneyCards }) {
  return (
    <section className="team reveal" id="our-team">
      <div className="container">
        <p className="kicker dark center reveal" style={{ '--reveal-delay': '50ms' }}>
          Our Attorneys
        </p>
        <h3 className="section-title reveal" style={{ '--reveal-delay': '110ms' }}>
          Meet Our Legal Experts
        </h3>
        <div className="team-grid scroll-float" data-scroll-speed="0.03">
          {attorneyCards.map((member, index) => (
            <article
              key={member.name}
              className="team-card reveal"
              style={{ '--reveal-delay': `${170 + index * 90}ms` }}
              data-scroll-speed={index % 2 === 0 ? '0.04' : '0.06'}
            >
              <div className="team-photo-wrap">
                <img src={member.image} alt={member.name} loading="lazy" />
                <span className="team-badge">LEXOVIA</span>
                <div className="team-overlay" />
              </div>
              <div className="team-meta">
                <p className="team-role">{member.role}</p>
                <h4>{member.name}</h4>
                <a
                  className="team-cta"
                  href={`mailto:info@lexovia.com?subject=${encodeURIComponent(
                    `Appointment with ${member.name}`,
                  )}`}
                >
                  Book Appointment
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
