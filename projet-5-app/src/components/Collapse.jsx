import { useState } from 'react'

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <article className={`collapse ${isOpen ? 'collapse--open' : ''}`}>
      <button
        className="collapse__header"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className="collapse__arrow" aria-hidden="true">
          v
        </span>
      </button>
      <div className="collapse__body" role="region">
        <div className="collapse__content">{children}</div>
      </div>
    </article>
  )
}

export default Collapse
