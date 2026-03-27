import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import aboutBannerImage from '../assets/IMG_about.png'

const ABOUT_BANNER_IMAGE = aboutBannerImage

const ABOUT_ITEMS = [
  {
    title: 'Fiabilite',
    content:
      'Les annonces postees sur Kasa garantissent une fiabilite totale. Les photos sont conformes aux logements, et toutes les informations sont regulierement verifiees par nos equipes.',
  },
  {
    title: 'Respect',
    content:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de la plateforme.',
  },
  {
    title: 'Service',
    content:
      "La satisfaction de nos clients est au coeur de notre engagement. Nos equipes sont disponibles pour repondre a vos besoins et vous accompagner.",
  },
  {
    title: 'Securite',
    content:
      "La securite est la priorite de Kasa. Aussi bien pour nos hotes que pour les voyageurs, chaque logement correspond aux criteres de securite etablis par nos services.",
  },
]

function About() {
  return (
    <section className="about-page">
      <Banner className="banner--about" title="" imageSrc={ABOUT_BANNER_IMAGE} />

      <div className="about-collapses">
        {ABOUT_ITEMS.map((item) => (
          <Collapse key={item.title} title={item.title}>
            <p>{item.content}</p>
          </Collapse>
        ))}
      </div>
    </section>
  )
}

export default About
