import logo from '../assets/LOGO.png'

function Footer() {
  return (
    <footer className="site-footer">
      <img className="site-footer__logo" src={logo} alt="Kasa" />
      <p className="site-footer__copy">© 2026 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
