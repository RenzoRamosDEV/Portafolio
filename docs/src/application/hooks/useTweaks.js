import { useState, useCallback } from 'react';

/**
 * Hook que gestiona "tweaks" (preferencias visuales en runtime).
 *
 * Mantiene un objeto de valores y emite cada cambio al `window.parent`
 * vía `postMessage` para que un editor externo (panel host de Vercel /
 * iframe en modo edición) pueda sincronizar el estado.
 *
 * Acepta dos formas de actualización para ergonomía del consumidor:
 *  - `setTweak('clave', valor)`            → edita una sola clave.
 *  - `setTweak({ clave1: v1, clave2: v2 })` → edita varias en batch.
 *
 * @template T
 * @param {T} defaults - Estado inicial del set de tweaks.
 * @returns {[T, (keyOrEdits: keyof T | Partial<T>, val?: any) => void]}
 *          Tupla `[values, setTweak]` al estilo `useState`.
 */
export function useTweaks(defaults) {
  const [values, setValues] = useState(defaults);

  const setTweak = useCallback((keyOrEdits, val) => {
    // Permite invocaciones con objeto parcial o (clave, valor).
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null
      ? keyOrEdits
      : { [keyOrEdits]: val };

    setValues((prev) => ({ ...prev, ...edits }));

    // Notifica al host (editor externo) los cambios aplicados.
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
  }, []);

  return [values, setTweak];
}
