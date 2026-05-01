import { useState, useEffect } from 'react';

/**
 * Modal con detalle ampliado de un proyecto.
 *
 * Renderiza carrusel manual (prev/next + dots), descripción, badges y
 * los enlaces a repositorio y demo. Se cierra con tecla Escape o click
 * en el backdrop.
 *
 * @param {Object} props
 * @param {import('../../domain/types.js').Project}  props.proj    - Proyecto a mostrar.
 * @param {boolean}                                   props.isOpen  - Visible si true.
 * @param {() => void}                                props.onClose - Callback de cierre.
 * @param {import('../../domain/types.js').SchemeId}  props.scheme  - Esquema activo (no usado actualmente, reservado).
 * @returns {JSX.Element|null}
 */
export function ProjectModal({ proj, isOpen, onClose, scheme }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cierre con Escape + bloqueo del scroll del body mientras está abierto.
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Resetea a la primera imagen cada vez que se abre el modal.
  useEffect(() => {
    if (isOpen) setCurrentImageIndex(0);
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => prev === 0 ? proj.images.length - 1 : prev - 1);
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % proj.images.length);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Cerrar modal">
          ✕
        </button>

        <div className="modal-header">
          <div className="modal-num">{proj.num}</div>
          <h3 className="modal-title">{proj.title}</h3>
        </div>

        {proj.images && proj.images.length > 0 ? (
          <div className="modal-carousel">
            <img
              src={proj.images[currentImageIndex]}
              alt={`${proj.title} - imagen ${currentImageIndex + 1}`}
              className="modal-image"
            />

            {proj.images.length > 1 && (
              <>
                <button
                  className="modal-carousel-btn modal-carousel-btn-prev"
                  onClick={handlePrevImage}
                  aria-label="Imagen anterior"
                >‹</button>
                <button
                  className="modal-carousel-btn modal-carousel-btn-next"
                  onClick={handleNextImage}
                  aria-label="Siguiente imagen"
                >›</button>

                <div className="modal-carousel-counter">
                  {currentImageIndex + 1} / {proj.images.length}
                </div>

                <div className="modal-carousel-dots">
                  {proj.images.map((_, index) => (
                    <button
                      key={index}
                      className={`modal-carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Ir a imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="modal-no-images">
            <span>No hay imágenes disponibles</span>
          </div>
        )}

        <div className="modal-footer">
          <p className="modal-desc">{proj.desc}</p>

          <div className="modal-badges">
            {proj.badges && proj.badges.map((badge) => (
              <span key={badge} className="modal-badge">{badge}</span>
            ))}
          </div>

          <div className="modal-links">
            {proj.repo && proj.repo !== '#' && (
              <a className="modal-link modal-link-repo" href={proj.repo} target="_blank" rel="noopener noreferrer">
                Ver Repositorio
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
            {proj.demo && proj.demo !== '#' && (
              <a className="modal-link" href={proj.demo} target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Ver Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
