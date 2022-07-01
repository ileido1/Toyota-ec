import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Mousewheel } from "swiper";
import useFetch from "../hooks/useFetch";

export default function App() {
    let llenarbanner = 'home/slider-qdr'
    const [banner, error] = useFetch(llenarbanner);
    return (
        <>
            <Swiper
                direction={"horizontal"}
                slidesPerView={1}
                spaceBetween={80}
                mousewheel={true}
                modules={[Mousewheel]}
                className=""
            > {
                    banner ? (
                        <>


                            {banner.map((c, i) => (
                                <SwiperSlide>
                                    {i === 0 &&
                                        <h1>TOYOTA</h1>
                                    }


                                    <div className="container-fluid contenedor " style={{ backgroundImage: `url(${'https://backend-toyota.247.com.ec/' + c.fondo_slider_qdr})` }} >
                                        <div className="">
                                            <div className="row" >
                                                <div className="col-6">
                                                </div>
                                                <div className="col-6">
                                                    <h1 className="Tbanner rojo">{c.titulo_slider_qdr}</h1>
                                                    <h2 className="Textobanner">
                                                        {c.texto_slider_qdr}
                                                    </h2>
                                                    <h3>{c.enlace_texto_slider_qdr}</h3>
                                                    <img src={'https://backend-toyota.247.com.ec/' + c.imagen_slider_qdr}></img>

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    {i === 2 &&
                                        <h1>TOYOTA</h1>
                                    }

                                </SwiperSlide>



                            ))}

                        </>) : (
                        <span> Cargando...</span>
                    )
                }



            </Swiper>
        </>
    );
}
