/**
 * Resuelve rutas a assets servidos desde `public/`, anteponiendo el
 * `BASE_URL` de Vite (configurable según el host: GitHub Pages, dominio
 * propio, subruta, etc.).
 *
 * Ejemplos:
 *   getPublicPath('/icons/react.png')  → '/RenzoRamos/icons/react.png'
 *   getPublicPath('icons/react.png')   → '/RenzoRamos/icons/react.png'
 *
 * @param {string} path - Ruta relativa desde `public/`, con o sin '/' inicial.
 * @returns {string} Ruta absoluta utilizable como `src` o `href`.
 */
export const getPublicPath = (path) => {
  const basePath = import.meta.env.BASE_URL;

  // Idempotente: si ya viene con basePath, no lo duplica.
  if (path.startsWith(basePath)) return path;

  // Normaliza el slash inicial para evitar dobles barras.
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  return `${basePath}${cleanPath}`;
};
