import { useParams } from 'react-router-dom'

function Logements() {
  const { id } = useParams()

  return (
    <section className="page">
      <h2>Fiche logement</h2>
      <p>La page detaillee du logement sera construite a l'etape suivante.</p>
      <p>
        Identifiant du logement: <strong>{id}</strong>
      </p>
    </section>
  )
}

export default Logements
