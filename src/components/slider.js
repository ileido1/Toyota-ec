// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

import imagenq from '../images/sliderqdr/Q.png'
import imagend from '../images/sliderqdr/D.png'
import imagenr from '../images/sliderqdr/R.png'
import imagenqm from '../images/sliderqdr/Q-responsive.png'
import imagendm from '../images/sliderqdr/D-responsive.png'
import imagenrm from '../images/sliderqdr/R-responsive.png'


import "swiper/css";
import "swiper/css/pagination";


export default function App() {
  //let llenarbanner = 'home/slider-qdr'
  //const [banner, error] = useFetch(llenarbanner);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper SliderQDR"
      >
        <SwiperSlide>

          <img className="img-fluid" src={imagenqm} srcSet={`${imagenqm} 300w, ${imagenq} 768w, ${imagenq} 1280w, ${imagenq} 3200w`} alt="imagen q" />

        </SwiperSlide>
        <SwiperSlide>

          <img className="img-fluid" src={imagendm} srcSet={`${imagenqm} 300w, ${imagend} 768w, ${imagend} 1280w, ${imagend} 3200w`} alt="imagen q" />


        </SwiperSlide>
        <SwiperSlide>

          <img className="img-fluid" src={imagenrm} srcSet={`${imagenr} 300w, ${imagenr} 768w, ${imagenr} 1280w, ${imagenr} 3200w`} alt="imagen q" />


        </SwiperSlide>


      </Swiper>
    </>
  );
}
