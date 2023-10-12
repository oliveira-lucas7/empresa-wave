import React from "react";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import Style from "./assets/Language.module.css";
import br from "./assets/flagBR.svg";
import us from "./assets/flagUS.svg";

const languageOptions = [
  {
    name: "Português",
    value: "ptBR",
    flag: br,
  },
  {
    name: "English",
    value: "en",
    flag: us,
  },
];

function Language() {
  const { t, i18n } = useTranslation();
  return (
    <div className={Style.langSwitcher}>
      {languageOptions.map((languageOptions) => (
        <button
          key={languageOptions.value}
          onClick={() => {
            i18n.changeLanguage(languageOptions.value);
          }}
        >
          <img src={languageOptions.flag} alt="" className={Style.img} />
        </button>
      ))}
    </div>
  );
}

export default Language;
