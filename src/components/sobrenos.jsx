import React from "react";
import Style from "../css/sobrenos.module.css";
import Escudo from "../img/escudo.png"
import Ideia from "../img/novaideia.png"
import Computador from "../img/computador.png"

function sobrenos() {
  return (
    <div id="Sobrenos">
      <h2 className={Style.h2}>Sobre a empresa</h2>
      <div className={Style.container}>
        <div className={Style.secondary}>
          <img src={Ideia} alt="Lampada de ideia" className={Style.img}/>
          <span className={Style.text}>Inovação</span>
          <span className={Style.textmain}>
            A inovação encontra a tecnologia para criar soluções digitais que
            impulsionam o sucesso de nossos clientes. Somos uma empresa dedicada
            ao desenvolvimento de sistemas e sites, comprometida em transformar
            ideias em realidade digital.
          </span>
        </div>
        <div className={Style.secondary}>
          <img src={Escudo} alt="Escudo" className={Style.img}/>
          <span className={Style.text}>Segurança</span>
          <span className={Style.textmain}>
          Na LogicWave, nossa abordagem é simples: entender as necessidades exclusivas de cada cliente e, em seguida, aplicar nossa experiência e criatividade para fornecer soluções sob medida que impulsionem o crescimento e o sucesso.
          </span>
        </div>
        <div className={Style.secondary}>
          <img src={Computador} alt="Imagem de computador" className={Style.img} />
          <span className={Style.text}>Soluções</span>
          <span className={Style.textmain}>
            Fundada por um grupo de apaixonados por tecnologia, nossa empresa
            nasceu da crença de que a tecnologia pode ser uma força motriz para
            o progresso, eficiência e inovação em todos os setores.
          </span>
        </div>
      </div>
    </div>
  );
}

export default sobrenos;
