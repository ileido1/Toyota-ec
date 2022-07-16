// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

import imagenq  from '../images/sliderqdr/Q.png'
import imagend  from '../images/sliderqdr/D.png'
import imagenr  from '../images/sliderqdr/R.png'

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
                                                            
                        <img src={imagenq} alt="imagen q" />

                    </SwiperSlide> 
                    <SwiperSlide>
                                                            
                        <img src={imagend} alt="imagen d" />

                    </SwiperSlide>
                    <SwiperSlide>
                        
                        <img src={imagenr} alt="imagen r" />

                    </SwiperSlide> 
                                

            </Swiper>
        </>
    );
}
