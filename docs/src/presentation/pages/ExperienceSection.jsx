import { useState } from 'react';

import { ExperienceCard } from '../components/ExperienceCard';
import { ExperienceModal } from '../components/ExperienceModal';
import { CertificateCard } from '../components/CertificateCard';
import { CertificateModal } from '../components/CertificateModal';

import { SCHEMES } from '../../config/schemes';
import { experienceItems } from '../../infrastructure/data/experience';
import { educationItems } from '../../infrastructure/data/education';
import { certificateItems } from '../../infrastructure/data/certificates';

/**
 * Definición declarativa de los tabs.
 * `type` decide qué par Card/Modal renderizar:
 *  - 'exp'  → trayectoria: usa Experience{Card,Modal}
 *  - 'cert' → certificados: usa Certificate{Card,Modal} (incluye PDF/credencial).
 */
const TABS = [
  { id: 'experiencia',  label: 'Experiencia',  items: experienceItems,  type: 'exp'  },
  { id: 'formacion',    label: 'Formación',    items: educationItems,   type: 'exp'  },
  { id: 'certificados', label: 'Certificados', items: certificateItems, type: 'cert' },
];

/**
 * Sección de trayectoria con tabs (Experiencia / Formación / Certificados).
 *
 * Cada tab renderiza un grid de cards homogéneo; al hacer click sobre
 * una card se abre un modal con el detalle completo. El modal varía
 * según el tipo del tab (CV vs certificado con PDF).
 *
 * @param {Object} props
 * @param {import('../../domain/types.js').SchemeId} props.scheme - Esquema activo.
 * @returns {JSX.Element}
 */
export function ExperienceSection({ scheme }) {
  const s = SCHEMES[scheme] || SCHEMES['purple-pink'];

  const [activeTab, setActiveTab] = useState('experiencia');
  const [modalData, setModalData] = useState(null);

  const currentTab = TABS.find(t => t.id === activeTab);

  /**
   * Cambia de tab y cierra cualquier modal abierto para evitar mostrar
   * datos de un tipo distinto al tab visible.
   *
   * @param {string} tabId
   */
  function handleTabChange(tabId) {
    setActiveTab(tabId);
    setModalData(null);
  }

  return (
    <section className="section" id="experiencia">
      <div className="section-tag" style={{ color: s.b }}>Trayectoria</div>
      <h2 className="section-title">
        Experiencia &amp;<br />Formación
      </h2>

      <div className="exp-tabs-container">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`exp-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleTabChange(tab.id)}
            style={activeTab === tab.id ? { color: s.a } : {}}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {currentTab.type === 'cert' ? (
        <>
          <div className="cert-grid">
            {currentTab.items.map((item, idx) => (
              <CertificateCard
                key={idx}
                data={item}
                scheme={scheme}
                onClick={() => setModalData(item)}
              />
            ))}
          </div>
          <CertificateModal
            data={modalData}
            scheme={scheme}
            isOpen={!!modalData}
            onClose={() => setModalData(null)}
          />
        </>
      ) : (
        <>
          <div className="cert-grid">
            {currentTab.items.map((item, idx) => (
              <ExperienceCard
                key={idx}
                data={item}
                scheme={scheme}
                onClick={() => setModalData(item)}
              />
            ))}
          </div>
          <ExperienceModal
            data={modalData}
            scheme={scheme}
            isOpen={!!modalData}
            onClose={() => setModalData(null)}
          />
        </>
      )}
    </section>
  );
}
