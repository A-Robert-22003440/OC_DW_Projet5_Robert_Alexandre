import Banner from '../components/Banner'
import Card from '../components/Card'
import logements from '../data/logements.json'

const HOME_BANNER_IMAGE =
  'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg'

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
