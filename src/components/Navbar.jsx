import { NavLink } from 'react-router-dom'

function Navbar({ navItems }) {
  return (
    <div className="nav-wrap reveal" style={{ '--reveal-delay': '70ms' }}>
      <div className="container nav">
        <div className="brand">
          <span className="brand-mark">L</span>
          <div>
            <h1>LEXOVIA</h1>
            <p>Lawyers & Attorneys</p>
          </div>
        </div>

        <nav>
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.to} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <NavLink className="btn btn-consult" to="/contact">
          Free Consultation
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
