import Banner from '../components/Banner'
import Card from '../components/Card'
import logements from '../data/logements.json'
import homeBannerImage from '../assets/IMG_home.png'

const HOME_BANNER_IMAGE = homeBannerImage

function Home() {
  return (
    <section className="home-page">
      <Banner
        title="Chez vous, partout et ailleurs"
        imageSrc={HOME_BANNER_IMAGE}
      />

      <section className="lodgings-grid" aria-label="Liste des logements disponibles">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </section>
  )
}

export default Home
