import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from "@nextui-org/react";
import { I18nextProvider } from 'react-i18next';
import i18n from './Translations/i18n.js';
import App from './App.jsx'
import './index.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </NextUIProvider>
  </StrictMode>,
)
