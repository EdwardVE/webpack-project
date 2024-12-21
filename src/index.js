// Importa React y ReactDOM
import React from 'react';
import { createRoot } from 'react-dom/client'; // Usar createRoot en lugar de render
// Importa el archivo de estilos globales
import './styles.css';
// Importa el componente principal de la aplicación
import App from './App.jsx';

// Selecciona el contenedor raíz del HTML
const rootElement = document.getElementById('root');

// Crea la raíz y renderiza la aplicación
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
