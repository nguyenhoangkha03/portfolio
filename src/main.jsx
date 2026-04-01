import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n';
import i18n from './i18n';

// Update html lang attribute on language change
const updateLangAttribute = (lng) => {
  document.documentElement.lang = lng;
};

// Initial set
updateLangAttribute(i18n.language);

// Listen for changes
i18n.on('languageChanged', updateLangAttribute);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
