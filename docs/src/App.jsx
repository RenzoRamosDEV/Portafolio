import { useEffect } from 'react';

import { Nav } from './presentation/components/Nav';
import { Footer } from './presentation/components/Footer';
import { Hero } from './presentation/pages/Hero';
import { StackSection } from './presentation/pages/StackSection';
import { ExperienceSection } from './presentation/pages/ExperienceSection';
import { ProjectsSection } from './presentation/pages/ProjectsSection';

import { useTweaks } from './application/hooks/useTweaks';
import { initStarfield } from './infrastructure/canvas/starfield';
import { initCursorTrail } from './infrastructure/canvas/cursorTrail';
import { SCHEMES, TWEAK_DEFAULTS } from './config/schemes';

import './presentation/styles/base.css';
import './presentation/styles/nav.css';
import './presentation/styles/hero.css';
import './presentation/styles/stack.css';
import './presentation/styles/experience.css';
import './presentation/styles/projects.css';
import './presentation/styles/modal.css';
import './presentation/styles/footer.css';
import './presentation/styles/animations.css';

/**
 * Componente raíz de la aplicación.
 *
 * Compone el layout principal del portafolio (Nav + secciones + Footer)
 * y arranca los efectos canvas de fondo (starfield + cursor trail).
 *
 * Mantiene el estado global de "tweaks" (esquema de color activo) y lo
 * propaga a las secciones vía la prop `scheme`. También expone el color
 * de acento al cursor trail mediante `window.__trailAccent` para que el
 * efecto pueda mantenerse en sync sin re-instanciar el canvas.
 *
 * @returns {JSX.Element}
 */
export function App() {
  const [tweaks] = useTweaks(TWEAK_DEFAULTS);
  const scheme = tweaks.accentScheme;
  const s = SCHEMES[scheme] || SCHEMES['purple-pink'];

  // Sincroniza el acento usado por el cursor trail con el esquema activo.
  useEffect(() => {
    window.__trailAccent = s.a;
  }, [s.a]);

  // Arranque único de los efectos canvas. El cursor trail se omite en
  // dispositivos táctiles porque depende de eventos `mousemove`.
  useEffect(() => {
    const starfieldCanvas = document.getElementById('starfield');
    const cursorTrailCanvas = document.getElementById('cursor-trail');

    if (starfieldCanvas) initStarfield(starfieldCanvas);

    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (cursorTrailCanvas && !isTouchDevice) initCursorTrail(cursorTrailCanvas);
  }, []);

  /**
   * Scrolla suavemente a una sección por id, compensando la altura del
   * nav fijo (72px). Pasa como callback a Nav y al CTA del Hero.
   *
   * @param {string} id - id del elemento al que hacer scroll.
   */
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Nav scheme={scheme} onScrollTo={scrollTo} />

      <div className="portfolio-root">
        <Hero scheme={scheme} onScrollTo={scrollTo} />
        <ProjectsSection scheme={scheme} />
        <ExperienceSection scheme={scheme} />
        <StackSection scheme={scheme} />
        <Footer />
      </div>
    </>
  );
}
