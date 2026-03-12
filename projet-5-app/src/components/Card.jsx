import { Link } from 'react-router-dom'

function Card({ id, title, cover }) {
  return (
    <article className="lodging-card">
      <Link className="lodging-card__link" to={`/logements/${id}`}>
        <img className="lodging-card__image" src={cover} alt={title} />
        <div className="lodging-card__overlay" />
        <h3 className="lodging-card__title">{title}</h3>
      </Link>
    </article>
  )
}

export default Card
