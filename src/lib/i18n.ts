
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    defaultNS: 'common',
    fallbackNS: false,
    ns: ['common'],
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false,
    },
    
    backend: {
      loadPath: (lng, ns) => `${import.meta.env.BASE_URL || '/'}locales/${lng}/${ns}.json`,
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;

// Debug logging for i18n path resolution
console.log('i18n BASE_URL:', import.meta.env.BASE_URL);
console.log('i18n loadPath example:', `${import.meta.env.BASE_URL || '/'}locales/en/common.json`);
