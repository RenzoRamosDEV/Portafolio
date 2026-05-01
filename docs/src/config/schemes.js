/**
 * Configuración de esquemas de color (theme tokens).
 *
 * Cada esquema define un par de acentos `a` (primario) y `b` (secundario)
 * que se usan en gradientes, hovers, badges y elementos destacados.
 *
 * `aRgb` / `bRgb` se mantienen aparte porque varios estilos inyectan los
 * componentes RGB en `rgba(...)` para controlar la opacidad — formato HEX
 * no permite alpha dinámico sin parsing.
 *
 * @typedef {import('../domain/types.js').Scheme}   Scheme
 * @typedef {import('../domain/types.js').SchemeId} SchemeId
 */

/** @type {Record<SchemeId, Scheme>} */
export const SCHEMES = {
  'purple-pink': {
    a: '#7b2ff7',
    b: '#f72585',
    aRgb: '123,47,247',
    bRgb: '247,37,133'
  },
  'blue-cyan': {
    a: '#0066ff',
    b: '#00d4ff',
    aRgb: '0,102,255',
    bRgb: '0,212,255'
  },
  'emerald-teal': {
    a: '#00c896',
    b: '#00e5ff',
    aRgb: '0,200,150',
    bRgb: '0,229,255'
  },
  'orange-red': {
    a: '#ff6b35',
    b: '#ff0055',
    aRgb: '255,107,53',
    bRgb: '255,0,85'
  }
};

/**
 * Valores por defecto del estado de "tweaks" (preferencias visuales).
 * Sirve como semilla del hook `useTweaks`.
 */
export const TWEAK_DEFAULTS = {
  accentScheme: 'emerald-teal'
};
