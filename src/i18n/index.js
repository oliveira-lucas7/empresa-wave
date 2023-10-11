import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enJson from "./translations/en.json";
import ptJson from "./translations/pt.json";

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: enJson,
    ptBR: ptJson,
  },
});

export default i18next;
