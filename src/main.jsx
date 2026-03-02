import React from 'react'
import ReactDOM from 'react-dom' // Compte: importem de 'react-dom', NO de 'react-dom/client'
import App from './App.jsx'
import './index.css'

console.log("🚀 Intentant muntar l'app React...");

const rootElement = document.getElementById('root');

if (rootElement) {
  // Fem servir el mètode render clàssic (React 17 style) que funciona a React 18
  // Això evita problemes de Microtasks a Safari 12
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
  console.log("✅ App muntada correctament");
} else {
  console.error("❌ No s'ha trobat l'element 'root'");
}