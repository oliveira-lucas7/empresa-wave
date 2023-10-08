import React from "react";
import logohome from "../img/logo-home.png";
import Style from "../css/home.module.css";

function Home() {
  return (
    <main className={Style.container} id="LogicWave">
      <div className={Style.info}>
        <h1>LOGIC WAVE</h1>
        <p>
          Bem-vindo à LogicWave, onde a inovação encontra a tecnologia para
          criar soluções digitais que impulsionam o sucesso de nossos clientes.
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
