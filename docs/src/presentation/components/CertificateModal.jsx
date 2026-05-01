import { useEffect } from 'react';
import { SCHEMES } from '../constants/schemes';

export function CertificateModal({ data, scheme, isOpen, onClose }) {
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
      <div className="cert-modal">

        <button className="cert-modal-close" onClick={onClose}>✕</button>

        <div className="cert-modal-body">
          <div className="cert-modal-image-wrap">
            {data.preview ? (
              <img src={data.preview} alt={data.title} className="cert-modal-img" />
            ) : (
              <div className="cert-modal-no-img">Sin vista previa</div>
            )}
          </div>

          <div className="cert-modal-info">
            <p className="cert-modal-company" style={{ color: s.a }}>{data.company}</p>
            <h3 className="cert-modal-title">{data.title}</h3>
            <p className="cert-modal-period">{data.period}</p>
            {data.desc && <p className="cert-modal-desc">{data.desc}</p>}

            <div className="cert-modal-actions">
              {data.pdf && (
                <a
                  href={data.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-modal-btn cert-modal-btn--primary"
                  style={{ background: `linear-gradient(135deg, ${s.a}, ${s.b})` }}
                >
                  Ver PDF
                </a>
              )}
              {data.credential && (
                <a
                  href={data.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-modal-btn cert-modal-btn--secondary"
                >
                  Ver credencial
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
