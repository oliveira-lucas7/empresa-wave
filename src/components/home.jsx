import React from "react";
import logohome from "../img/logoTransparente.png";
import Style from "../css/home.module.css";

function Home() {
  return (
    <main className={Style.container} id="LogicWave">
      <div className={Style.info}>
        <p>
          Transformando desafios em soluções <span className={Style.digitais}>digitais</span>.
        </p>
        <button className={Style.sobre}>Sobre Nós</button>
      </div>
      <div className={Style.imagemLogo}>
        <img className={Style.imagemLogo} src={logohome} alt="Logo da " />
      </div>
    </main>
  );
}

export default Home;
