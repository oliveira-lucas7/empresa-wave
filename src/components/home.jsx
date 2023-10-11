import React from "react";
import logohome from "../img/logoTransparente.png";
import Style from "../css/home.module.css";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <main className={Style.container} id="LogicWave">
      <div className={Style.info}>
        <p>
          {t("textoPrincipal")}{" "}
          <span className={Style.digitais}> {t("digitais")}</span>.
        </p>
        <button className={Style.sobre}>Sobre Nós</button>
      </div>
      <img className={Style.imagemLogo} src={logohome} alt="Logo da " />
    </main>
  );
}

export default Home;
