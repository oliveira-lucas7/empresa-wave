import React from "react";
import imgproject from "../img/image 4 (1).png";
import Style from "../css/projects.module.css";

function Projetos(props) {
  return (
    <>
      <section className={Style.sectionprojetos} id="Nossoprojeto">
        <h2>Nossos Projetos</h2>
        <section className={Style.container}>
          <div className={Style.project1}>
              <button>Veja mais</button>
          </div>
          <div className={Style.project2}>
          <button>Veja mais</button>
          </div>
          <div className={Style.project3}>
          <button>Veja mais</button>
          </div>
          <div className={Style.project4}>
          <button>Veja mais</button>
          </div>
      </section>
      </section>
    </>
  );
}

export default Projetos;
