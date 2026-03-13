import { useParams } from 'react-router-dom'
import Collapse from '../components/Collapse'
import Slideshow from '../components/Slideshow'
import logements from '../data/logements.json'
import NotFound from './NotFound'

function Logements() {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <NotFound />
  }

  const rating = Number.parseInt(logement.rating, 10)
  const hostNameParts = logement.host.name.split(' ')

  return (
    <section className="lodging-page">
      <Slideshow pictures={logement.pictures} title={logement.title} />

      <div className="lodging-page__summary">
        <div>
          <h2 className="lodging-page__title">{logement.title}</h2>
          <p className="lodging-page__location">{logement.location}</p>
          <ul className="lodging-page__tags" aria-label="Tags du logement">
            {logement.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>

        <div className="lodging-page__host-panel">
          <div className="lodging-page__host">
            <p>
              {hostNameParts.map((part, index) => (
                <span key={`${part}-${index}`}>{part}</span>
              ))}
            </p>
            <img src={logement.host.picture} alt={`Photo de ${logement.host.name}`} />
          </div>

          <div className="lodging-page__rating" aria-label={`Note ${rating} sur 5`}>
            {Array.from({ length: 5 }, (_, index) => (
              <span
                key={`star-${index + 1}`}
                className={index < rating ? 'lodging-page__star lodging-page__star--active' : 'lodging-page__star'}
                aria-hidden="true"
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="lodging-page__details">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Equipements">
          <ul>
            {logement.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </section>
  )
}

export default Logements
