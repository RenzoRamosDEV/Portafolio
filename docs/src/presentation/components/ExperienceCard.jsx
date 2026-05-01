import { SCHEMES } from '../../config/schemes';

/**
 * Card de experiencia / formación para el grid de los tabs
 * "Experiencia" y "Formación".
 *
 * Si el item tiene `preview` se muestra como imagen de portada;
 * si no, se renderiza la inicial de la empresa con un fondo de
 * gradiente del scheme activo.
 *
 * @param {Object} props
 * @param {import('../../domain/types.js').TrajectoryItem} props.data    - Item de trayectoria.
 * @param {import('../../domain/types.js').SchemeId}        props.scheme  - Esquema activo.
 * @param {() => void}                                      props.onClick - Abre el modal.
 * @returns {JSX.Element}
 */
export function ExperienceCard({ data, scheme, onClick }) {
  const s = SCHEMES[scheme] || SCHEMES['purple-pink'];

  return (
    <div className="exp-grid-card" onClick={onClick}>
      <div
        className="exp-grid-card-visual"
        style={!data.preview ? { background: `linear-gradient(135deg, ${s.a}22, ${s.b}11)` } : {}}
      >
        {data.preview ? (
          <img src={data.preview} alt={data.company} className="exp-grid-card-img" />
        ) : (
          <span className="exp-grid-card-initial" style={{ color: s.a }}>
            {data.company?.[0] ?? '?'}
          </span>
        )}
        <div
          className="exp-grid-card-overlay"
          style={{ background: `linear-gradient(to top, ${s.a}99, transparent)` }}
        >
          <span>Ver detalle</span>
        </div>
      </div>
      <div className="exp-grid-card-info">
        <p className="exp-grid-card-company" style={{ color: s.a }}>{data.company}</p>
        <h4 className="exp-grid-card-title">{data.title}</h4>
        <p className="exp-grid-card-period">{data.period}</p>
      </div>
    </div>
  );
}
