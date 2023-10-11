import React from "react";
import Style from "../css/sobrenos.module.css";
import Escudo from "../img/escudo.png";
import Ideia from "../img/novaideia.png";
import Computador from "../img/computador.png";
import { useTranslation } from "react-i18next";

function Sobrenos() {
  const { t } = useTranslation();

  return (
    <div id="Sobrenos">
      <div className={Style.textodiv}>
        <span className={Style.h2}>Sobre a</span>
        <span className={Style.empresa}>empresa</span>
      </div>
      <div className={Style.container}>
        <div className={Style.secondary}>
          <img src={Ideia} alt="Lampada de ideia" className={Style.img} />
          <span className={Style.text}>Inovação</span>
          <span className={Style.textmain}>{t("Inovacao")}</span>
        </div>
        <div className={Style.secondary}>
          <img src={Escudo} alt="Escudo" className={Style.img} />
          <span className={Style.text}>Segurança</span>
          <span className={Style.textmain}>{t("Seguranca")}</span>
        </div>
        <div className={Style.secondary}>
          <img
            src={Computador}
            alt="Imagem de computador"
            className={Style.img}
          />
          <span className={Style.text}>Soluções</span>
          <span className={Style.textmain}>{t("Solucoes")}</span>
        </div>
      </div>
    </div>
  );
}

export default Sobrenos;
