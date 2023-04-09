import React from 'react';
import { render } from 'react-dom'; // Modifiez cette ligne
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

// Utilisez render() au lieu de createRoot()
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

reportWebVitals();
