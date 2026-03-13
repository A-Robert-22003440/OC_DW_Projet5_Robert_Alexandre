import { useEffect, useState } from 'react'

function Slideshow({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const hasMultipleSlides = pictures.length > 1

  useEffect(() => {
    setCurrentIndex(0)
  }, [pictures])

  const goToPreviousSlide = () => {
    setCurrentIndex((index) => (index === 0 ? pictures.length - 1 : index - 1))
  }

  const goToNextSlide = () => {
    setCurrentIndex((index) => (index === pictures.length - 1 ? 0 : index + 1))
  }

  return (
    <section className="slideshow" aria-label={`Galerie photos du logement ${title}`}>
      <img
        key={pictures[currentIndex]}
        className="slideshow__image"
        src={pictures[currentIndex]}
        alt={`${title} - vue ${currentIndex + 1}`}
      />

      {hasMultipleSlides && (
        <>
          <button
            className="slideshow__arrow slideshow__arrow--left"
            type="button"
            onClick={goToPreviousSlide}
            aria-label="Image precedente"
          >
            {'<'}
          </button>
          <button
            className="slideshow__arrow slideshow__arrow--right"
            type="button"
            onClick={goToNextSlide}
            aria-label="Image suivante"
          >
            {'>'}
          </button>
          <p className="slideshow__counter" aria-live="polite">
            {currentIndex + 1}/{pictures.length}
          </p>
        </>
      )}
    </section>
  )
}

export default Slideshow
