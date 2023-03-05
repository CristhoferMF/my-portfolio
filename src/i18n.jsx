import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import es from "./lang/es.json";
import en from "./lang/en.json";

import { initReactI18next } from "react-i18next";

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en,
      es,
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
