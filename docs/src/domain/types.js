/**
 * Tipos de dominio del portafolio (JSDoc).
 *
 * Este archivo no exporta runtime: define las "entidades de negocio"
 * mediante typedefs para que los editores e intérpretes JS ofrezcan
 * autocompletado, validación y trazabilidad sobre las estructuras de
 * datos que circulan por la app.
 *
 * Mantener este archivo sincronizado con los datos reales en
 * `infrastructure/data/*` y con los componentes que los consumen.
 */

/**
 * @typedef {'purple-pink' | 'blue-cyan' | 'emerald-teal' | 'orange-red'} SchemeId
 */

/**
 * Esquema de color usado para acentos visuales (gradientes, badges, hover).
 * @typedef {Object} Scheme
 * @property {string} a    - Color primario en formato HEX.
 * @property {string} b    - Color secundario en formato HEX.
 * @property {string} aRgb - Color primario en componentes RGB ("r,g,b").
 * @property {string} bRgb - Color secundario en componentes RGB ("r,g,b").
 */

/**
 * Item de stack tecnológico (lenguaje, framework, herramienta).
 * @typedef {Object} StackItem
 * @property {string} name  - Nombre legible (ej. "React").
 * @property {string} icon  - Ruta pública del icono.
 * @property {string} desc  - Descripción corta para tooltip / detalle.
 * @property {'back'|'front'|'ia'|'stack-tools'|'ides-so'} cat - Categoría agrupadora.
 */

/**
 * Item de metodología de trabajo (arquitectura, testing, UI…).
 * @typedef {Object} MethodologyItem
 * @property {string} name  - Nombre legible.
 * @property {string} label - Etiqueta corta mostrada en el chip.
 * @property {string} color - Color HEX del chip.
 * @property {string} desc  - Descripción extendida.
 * @property {'arch'|'ai'|'testing'|'process'|'ui'} cat - Categoría agrupadora.
 */

/**
 * Proyecto destacado del portafolio.
 * @typedef {Object} Project
 * @property {string}   num     - Identificador correlativo ("01", "02"…).
 * @property {string}   title   - Título del proyecto.
 * @property {string[]} images  - Rutas públicas de imágenes para el carrusel.
 * @property {string}   desc    - Descripción del proyecto.
 * @property {string[]} badges  - Tecnologías destacadas.
 * @property {string}   demo    - URL de demo en vivo o "#" si no hay.
 * @property {string}   repo    - URL del repositorio.
 */

/**
 * Item de la trayectoria: experiencia profesional, formación o certificado.
 * Los tres tipos comparten estructura para que la UI sea uniforme.
 *
 * @typedef {Object} TrajectoryItem
 * @property {string} title              - Cargo, programa o nombre del certificado.
 * @property {string} company            - Empresa, institución o emisor.
 * @property {string} period             - Periodo en formato libre ("sept. 2025 - Actualidad").
 * @property {string} [location]         - Ubicación (opcional).
 * @property {string} [desc]             - Descripción extendida (opcional).
 * @property {string} [preview]          - Imagen de portada (opcional).
 * @property {string} [pdf]              - Ruta a PDF (sólo certificados).
 * @property {string} [credential]       - URL de verificación (sólo certificados).
 */
