import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__content">
        <h1 className="site-title" aria-label="Kasa">
          Kasa
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
