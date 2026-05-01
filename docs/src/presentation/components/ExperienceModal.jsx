import { useEffect } from 'react';

import { SCHEMES } from '../../config/schemes';

/**
 * Modal de detalle para items de Experiencia / Formación.
 *
 * Reusa los estilos `cert-modal-*` del modal de certificados (mismo
 * lenguaje visual) y aplica la variante `exp-modal-*` para el lado
 * visual izquierdo (imagen o inicial de la empresa).
 *
 * @param {Object} props
 * @param {?import('../../domain/types.js').TrajectoryItem} props.data    - Item o null.
 * @param {import('../../domain/types.js').SchemeId}         props.scheme  - Esquema activo.
 * @param {boolean}                                          props.isOpen  - Visible si true.
 * @param {() => void}                                       props.onClose - Callback de cierre.
 * @returns {JSX.Element|null}
 */
export function ExperienceModal({ data, scheme, isOpen, onClose }) {
  const s = SCHEMES[scheme] || SCHEMES['purple-pink'];

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  return (
    <div className="cert-modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="cert-modal exp-modal">
        <button className="cert-modal-close" onClick={onClose}>✕</button>

        <div className="exp-modal-body">
          <div
            className="exp-modal-visual"
            style={!data.preview ? { background: `linear-gradient(135deg, ${s.a}22, ${s.b}11)` } : {}}
          >
            {data.preview ? (
              <img src={data.preview} alt={data.company} className="exp-modal-img" />
            ) : (
              <span className="exp-modal-initial" style={{ color: s.a }}>
                {data.company?.[0] ?? '?'}
              </span>
            )}
          </div>

          <div className="cert-modal-info">
            <p className="cert-modal-company" style={{ color: s.a }}>{data.company}</p>
            <h3 className="cert-modal-title">{data.title}</h3>
            <p className="cert-modal-period">
              {data.period}
              {data.location && (
                <span style={{ color: 'rgba(255,255,255,0.25)', marginLeft: 8 }}>
                  • {data.location}
                </span>
              )}
            </p>
            {data.desc && <p className="cert-modal-desc">{data.desc}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
