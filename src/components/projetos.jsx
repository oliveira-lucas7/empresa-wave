import React from 'react';
import imgproject from "../img/image 4 (1).png";
import Style from "../css/projects.module.css"

function Projetos() {
  return (
    <>
        <section class={Style.sectionprojetos}>
        <h2>Nossos projetos</h2>
        <section class={Style.container}>
            <div class={Style.item}>
                <img src={imgproject} alt="" class={Style.projectimg}/>
                <span>Project 1</span>
                <button class={Style.btnmais}>Veja mais</button>
            </div>
            <div class={Style.item}>
                <img src={imgproject} alt="" class={Style.projectimg}/>
                <span>Project 1</span>
                <button class={Style.btnmais}>Veja mais</button>
            </div>
            <div class={Style.item}>
                <img src={imgproject} alt="" class={Style.projectimg}/>
                <span>Project 1</span>
                <button class={Style.btnmais}>Veja mais</button>
            </div>
            <div class={Style.item}>
                <img src={imgproject} alt="" class={Style.projectimg}/>
                <span>Project 1</span>
                <button class={Style.btnmais}>Veja mais</button>
            </div>
            <div class={Style.item}>
                <img src={imgproject} alt="" class={Style.projectimg}/>
                <span>Project 1</span>
                <button class={Style.btnmais}>Veja mais</button>
            </div>
            <div class={Style.item}>
                <img src={imgproject} alt="" class={Style.projectimg}/>
                <span>Project 1</span>
                <button class={Style.btnmais}>Veja mais</button>
            </div>
            <div class={Style.item}>
                <img src={imgproject} alt="" class={Style.projectimg}/>
                <span>Project 1</span>
                <button class={Style.btnmais}>Veja mais</button>
            </div>
            <div class={Style.item}>
                <img src={imgproject} alt="" class={Style.projectimg}/>
                <span>Project 1</span>
                <button class={Style.btnmais}>Veja mais</button>
            </div>
                        <div class={Style.item}>
                <img src={imgproject} alt="" class={Style.projectimg}/>
                <span>Project 1</span>
                <button class={Style.btnmais}>Veja mais</button>
            </div>
        </section>
    </section>
    </>
  )
}

export default Projetos