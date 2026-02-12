function TopBar() {
  return (
    <header className="top-bar reveal">
      <div className="container top-inner">
        <a href="tel:+1234567890">+123 456 7890</a>
        <a href="mailto:info@lexovia.com">info@lexovia.com</a>
        <a
          href="https://maps.google.com/?q=450+Lexington+Ave,+New+York,+NY+10017"
          target="_blank"
          rel="noreferrer"
        >
          450 Lexington Ave, New York, NY 10017
        </a>
      </div>
    </header>
  )
}

export default TopBar
