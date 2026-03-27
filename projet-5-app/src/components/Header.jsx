import { NavLink } from 'react-router-dom'
import logo from '../assets/LOGO.png'

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__content">
        <h1 className="site-title">
          <img className="site-logo" src={logo} alt="Kasa" />
        </h1>
        <nav className="site-nav" aria-label="Navigation principale">
          <NavLink to="/" end>
            Accueil
          </NavLink>
          <NavLink to="/about">À propos</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
