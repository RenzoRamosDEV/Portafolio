import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

/**
 * Bootstrap de la app: monta `<App />` dentro del nodo `#root` del HTML
 * con `StrictMode` activo para detectar efectos secundarios y APIs
 * deprecadas durante el desarrollo.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
