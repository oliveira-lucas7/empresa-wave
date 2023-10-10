import React from "react";
import imgproject from "../img/image 4 (1).png";
import Style from "../css/projects.module.css";

function Projetos(props) {
  return (
    <>
      <section className={Style.sectionprojetos} id="Nossoprojeto">
        <h2>Nossos projetos</h2>
        <section className={Style.container}>
          <div className={Style.item}>
            <img src={imgproject} alt="" className={Style.projectimg} />
            <span>Project 1</span>
            <button className={Style.btnmais}>Veja mais</button>
          </div>
          <div className={Style.item}>
            <img src={imgproject} alt="" className={Style.projectimg} />
            <span>Project 1</span>
            <button className={Style.btnmais}>Veja mais</button>
          </div>
          <div className={Style.item}>
            <img src={imgproject} alt="" className={Style.projectimg} />
            <span>Project 1</span>
            <button className={Style.btnmais}>Veja mais</button>
          </div>
          <div className={Style.item}>
            <img src={imgproject} alt="" className={Style.projectimg} />
            <span>Project 1</span>
            <button className={Style.btnmais}>Veja mais</button>
          </div>
          <div className={Style.item}>
            <img src={imgproject} alt="" className={Style.projectimg} />
            <span>Project 1</span>
            <button className={Style.btnmais}>Veja mais</button>
          </div>
          <div className={Style.item}>
            <img src={imgproject} alt="" className={Style.projectimg} />
            <span>Project 1</span>
            <button className={Style.btnmais}>Veja mais</button>
          </div>
          <div className={Style.item}>
            <img src={imgproject} alt="" className={Style.projectimg} />
            <span>Project 1</span>
            <button className={Style.btnmais}>Veja mais</button>
          </div>
          <div className={Style.item}>
            <img src={imgproject} alt="" className={Style.projectimg} />
            <span>Project 1</span>
            <button className={Style.btnmais}>Veja mais</button>
          </div>
          <div className={Style.item}>
            <img src={imgproject} alt="" className={Style.projectimg} />
            <span>Project 1</span>
            <button className={Style.btnmais}>Veja mais</button>
          </div>
          <div className={Style.item}>
            <img src={imgproject} alt="" className={Style.projectimg} />
            <span>Project 1</span>
            <button className={Style.btnmais}>Veja mais</button>
          </div>
        </section>
      </section>
    </>
  );
}

export default Projetos;
