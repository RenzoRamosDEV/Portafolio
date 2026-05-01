/**
 * Pie de página del portafolio.
 *
 * Componente puramente presentacional sin props ni estado.
 *
 * @returns {JSX.Element}
 */
export function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer-name">Renzo Ramos</div>
        <div style={{ marginTop: 4, fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>
          Desarrollador de Aplicaciones Multiplataforma · Madrid
        </div>
      </div>
      <div className="footer-copy">© 2026 · Hecho con algunos cuantos tokens y cafés.</div>
    </footer>
  );
}
