import { useState } from 'react';
import { SCHEMES } from '../constants/schemes';
import { experienceItems } from '../data/experience';
import { educationItems } from '../data/education';
import { certificateItems } from '../data/certificates';
import { ExperienceCard } from './ExperienceCard';
import { ExperienceModal } from './ExperienceModal';
import { CertificateCard } from './CertificateCard';
import { CertificateModal } from './CertificateModal';

const TABS = [
  { id: 'experiencia',  label: 'Experiencia',  items: experienceItems,   type: 'exp' },
  { id: 'formacion',    label: 'Formación',    items: educationItems,    type: 'exp' },
  { id: 'certificados', label: 'Certificados', items: certificateItems,  type: 'cert' },
];

export function ExperienceSection({ scheme }) {
  const s = SCHEMES[scheme] || SCHEMES['purple-pink'];

  const [activeTab, setActiveTab]   = useState('experiencia');
  const [modalData, setModalData]   = useState(null);

  const currentTab = TABS.find(t => t.id === activeTab);

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
