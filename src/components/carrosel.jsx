import { Swiper, SwiperSlide } from 'swiper/react';
import LogoHome from "../img/logoTransparente.png"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Style from "../css/carrosel.module.css"
import slidetres from "../img/soluçaodigital.jpg"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper className={Style.container}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className={Style.teste}>
          <span>Não construimos só sites, construimos seu futuro</span>
          <img src={LogoHome} alt="Imagem da logo da empresa com uma frase" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Style.teste}>
          <span>A um clique de mudar sua história</span>
          <img src={LogoHome} alt="Imagem da logo da empresa com uma frase" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Style.teste}>
          <span>Transformando desafios em soluções digitais</span>
          <img src={LogoHome} alt="Imagem da logo da empresa com uma frase" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Style.teste}>
          <span>Dê um passo para o futuro</span>
          <img src={LogoHome} alt="Imagem da logo da empresa com uma frase" />
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
};