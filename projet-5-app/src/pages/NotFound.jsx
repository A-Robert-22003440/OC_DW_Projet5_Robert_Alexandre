import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="not-found-page" aria-labelledby="not-found-title">
      <p className="not-found-page__code">404</p>
      <h2 id="not-found-title" className="not-found-page__title">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link className="not-found-page__link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </section>
  )
}

export default NotFound
