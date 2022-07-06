import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
    NavLink
} from "react-router-dom";

// import required modules
import { Autoplay } from "swiper";
import useFetch from "../hooks/useFetch";

export default function Bannerhome() {
    let llenarbanner = 'home/banner'
    const [banner, error] = useFetch(llenarbanner);

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {
                    banner ? (
                        <>
                            {

                                banner.map(c => (
                                    <SwiperSlide>
                                        <div className="container-fluid contenedor " style={{ backgroundImage: `url(${'https://backend-toyota.247.com.ec/' + c.fondo_banner})` }} >
                                            <div className="mtopbanner">
                                                <div className="row" >
                                                    <div className="col-6">
                                                        <img src={'https://backend-toyota.247.com.ec/' + c.imagen_vehiculo} className="carrobanner"></img>
                                                    </div>
                                                    <div className="col-6">
                                                        <h1 className="Tbanner">{c.texto_alternativo}</h1>
                                                        <img src={'https://backend-toyota.247.com.ec/' + c.logo_del_vehiculo}></img>

                                                    </div>
                                                </div>
                                                <div className="row btnhome" >
                                                    <NavLink to="/cart"> <button className="btn-raize"> {c.texto_del_enlace} </button></NavLink>

                                                </div>
                                            </div>

                                        </div>
                                    </SwiperSlide>

                                )

                                )
                            }
                        </>
                    ) : (
                        <span> Cargando...</span>
                    )

                }


            </Swiper>
        </>
    );
}







