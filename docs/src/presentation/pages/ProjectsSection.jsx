import { useRef, useState, useEffect } from 'react';

import { ProjectCard } from '../components/ProjectCard';

import { SCHEMES } from '../../config/schemes';
import { PROJECTS } from '../../infrastructure/data/projects';

/**
 * Sección "Proyectos destacados".
 *
 * Render: scroll horizontal nativo (`projects-scroll-wrapper`) + paginación
 * (flechas + dots). Mantiene `current` sincronizado con la card más cercana
 * al borde izquierdo del wrapper para que los dots reflejen la posición real
 * cuando el usuario hace scroll manualmente con touch o trackpad.
 *
 * @param {Object} props
 * @param {import('../../domain/types.js').SchemeId} props.scheme - Esquema activo.
 * @returns {JSX.Element}
 */
export function ProjectsSection({ scheme }) {
  const s = SCHEMES[scheme] || SCHEMES['purple-pink'];
  const wrapperRef = useRef(null);
  const [current, setCurrent] = useState(0);

  /**
   * Hace scroll programático a la card en `index` y actualiza `current`.
   * @param {number} index
   */
  function scrollTo(index) {
    const el = wrapperRef.current;
    if (!el) return;
    const card = el.querySelectorAll('.project-card')[index];
    if (card) {
      el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: 'smooth' });
      setCurrent(index);
    }
  }

  /**
   * Avanza/retrocede `dir` posiciones desde la actual, con clamp a [0, n-1].
   * @param {number} dir - +1 siguiente, -1 anterior.
   */
  function scrollBy(dir) {
    const next = Math.max(0, Math.min(PROJECTS.length - 1, current + dir));
    scrollTo(next);
  }

  // Sincroniza el índice activo cuando el usuario hace scroll manual.
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    function onScroll() {
      const cards = el.querySelectorAll('.project-card');
      let closest = 0;
      let minDist = Infinity;
      cards.forEach((card, i) => {
        const dist = Math.abs(card.offsetLeft - el.offsetLeft - el.scrollLeft);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      setCurrent(closest);
    }
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="section" id="proyectos">
      <div className="section-tag" style={{ color: s.a }}>Portafolio</div>
      <h2 className="section-title">
        Proyectos
        <br />
        destacados
      </h2>

      <div className="projects-scroll-wrapper" ref={wrapperRef}>
        {PROJECTS.map((p) => (
          <ProjectCard key={p.num} proj={p} scheme={scheme} />
        ))}
      </div>

      {PROJECTS.length > 1 && (
        <div className={`projects-pagination ${PROJECTS.length <= 2 ? 'projects-pagination--desktop-hidden' : ''}`}>
          <button
            className={`projects-nav-btn ${current === 0 ? 'disabled' : ''}`}
            onClick={() => scrollBy(-1)}
            aria-label="Anterior"
          >
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path d="M11 4l-5 5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="projects-dots">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                className={`projects-dot ${i === current ? 'active' : ''}`}
                onClick={() => scrollTo(i)}
                aria-label={`Proyecto ${i + 1}`}
              />
            ))}
          </div>

          <button
            className={`projects-nav-btn ${current === PROJECTS.length - 1 ? 'disabled' : ''}`}
            onClick={() => scrollBy(1)}
            aria-label="Siguiente"
          >
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
