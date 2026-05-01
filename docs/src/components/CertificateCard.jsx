import { SCHEMES } from '../constants/schemes';

export function CertificateCard({ data, scheme, onClick }) {
  const s = SCHEMES[scheme] || SCHEMES['purple-pink'];

  return (
    <div className="cert-card" onClick={onClick}>
      <div className="cert-card-preview">
        {data.preview ? (
          <img src={data.preview} alt={data.title} className="cert-card-img" />
        ) : (
          <div className="cert-card-no-preview">PDF</div>
        )}
        <div className="cert-card-overlay" style={{ background: `linear-gradient(to top, ${s.a}99, transparent)` }}>
          <span>Ver certificado</span>
        </div>
      </div>
      <div className="cert-card-info">
        <p className="cert-card-company" style={{ color: s.a }}>{data.company}</p>
        <h4 className="cert-card-title">{data.title}</h4>
        <p className="cert-card-period">{data.period}</p>
      </div>
    </div>
  );
}
