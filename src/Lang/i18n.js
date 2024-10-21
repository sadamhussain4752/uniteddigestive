import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../Lang/locales/en/translation.json';
import frTranslation from '../Lang/locales/ar/translation.json';

// Configure i18n
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    fr: {
      translation: frTranslation,
    },
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
