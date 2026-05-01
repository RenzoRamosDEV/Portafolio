import { getPublicPath } from '../paths.js';

/**
 * Items de experiencia profesional.
 *
 * @type {import('../../domain/types.js').TrajectoryItem[]}
 */
export const experienceItems = [
  {
    title: "Desarrollador Fullstack",
    company: "SEIDOR",
    period: "sept. 2025 - Actualidad",
    location: "Madrid, España",
    preview: getPublicPath("/experiencia/SEIDOR.jpeg"),
    desc: "Desarrollador Full Stack en Adobe Experience Manager (AEM).\n\n- Desarrollo de componentes reutilizables y configurables en AEM\n- Creación de modales para componentes utilizando Java\n- Gestión y publicación de contenido multimedia mediante AEM Assets (DAM)\n- Resolución de incidencias backend y optimización de funcionalidades existentes\n- Elaboración de documentación técnica para soporte y mantenimiento de proyectos"
  }
];
