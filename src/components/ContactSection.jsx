function ContactSection() {
  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')

    const mailSubject = subject || 'New consultation request'
    const mailBody = `Name: ${name}\nEmail: ${email}\n\n${message}`

    window.location.href = `mailto:info@lexovia.com?subject=${encodeURIComponent(
      mailSubject,
    )}&body=${encodeURIComponent(mailBody)}`
  }

  return (
    <section className="contact-section reveal" id="contact-form">
      <div className="container contact-grid">
        <div className="contact-info reveal reveal-left" style={{ '--reveal-delay': '80ms' }}>
          <h2>Let's Discuss Your Case</h2>
          <p>
            Share your concern and our legal team will guide you with a clear,
            practical next step.
          </p>

          <div className="contact-cards">
            <article>
              <h3>Call Us</h3>
              <a href="tel:+1234567890">+123 456 7890</a>
            </article>
            <article>
              <h3>Email</h3>
              <a href="mailto:info@lexovia.com">info@lexovia.com</a>
            </article>
            <article>
              <h3>Office</h3>
              <a
                href="https://maps.google.com/?q=450+Lexington+Ave,+New+York,+NY+10017"
                target="_blank"
                rel="noreferrer"
              >
                450 Lexington Ave, New York
              </a>
            </article>
          </div>
        </div>

        <form
          className="contact-form-card reveal reveal-right"
          style={{ '--reveal-delay': '140ms' }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" type="text" required />

          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" required />

          <label htmlFor="subject">Subject</label>
          <input id="subject" name="subject" type="text" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required />

          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
