import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.css';
import './i18n';
import { LanguageProvider } from './contexts/LanguageContext';

ReactDOM.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
  document.getElementById('root')
);