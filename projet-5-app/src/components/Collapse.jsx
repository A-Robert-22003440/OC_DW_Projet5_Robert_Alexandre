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
          <svg
            className="collapse__arrow-icon"
            viewBox="0 0 24 14"
            role="presentation"
            focusable="false"
          >
            <polyline points="2 12 12 2 22 12" />
          </svg>
        </span>
      </button>
      <div className="collapse__body" role="region">
        <div className="collapse__content">{children}</div>
      </div>
    </article>
  )
}

export default Collapse
