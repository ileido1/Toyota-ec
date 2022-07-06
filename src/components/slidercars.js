import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "../hooks/useFetch";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules

export default function Sliderscars() {
    let llenarbanner = 'home/carousel'
    const [banner, error] = useFetch(llenarbanner);
    const [background, setBackground] = useState('');
    return (
        <>
            <div className="supcarslider">


                <h1 className="h1Conoce">CONOCE NUESTROS VEHÍCULOS</h1>
                <ul class="nav nav-tabs ">
                    <li class="nav-item">
                        <a class="nav-link " aria-current="page" href="#">Automoviles</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">SUV</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">HÍBRIDOS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">CAMIONETAS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">EXONERADOS</a>
                    </li>

                </ul>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}

                loop={true}
                style={{ backgroundImage: `url(${'https://backend-toyota.247.com.ec/' + background})` }}

                className="mySwipercar"


            >
                {
                    banner ? (
                        <>


                            {banner.map((c, i) => (
                                <SwiperSlide className="slider-cars" >
                                    {({ isActive }) => (


                                        <div className="container-fluid  "  >
                                            <div>{isActive ? setBackground(c.field_fondo_del_vehiculo) : ''}

                                            </div>

                                            <div className="row" >
                                                <div className="col-12 centrarbaseline">
                                                    <img src={'https://backend-toyota.247.com.ec/' + c.imagen_del_vehiculo} className="imagencarro"></img>

                                                </div>
                                                <div className="col-12 logocarro">
                                                    <img src={'https://backend-toyota.247.com.ec/' + c.logo_del_vehiculo} className="logocarroprev"></img>

                                                </div>
                                                <div className="col-12 infocarro">
                                                    <p className="pslidercarro">
                                                        {c.anio_del_vehiculo}
                                                    </p>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <img src={'https://backend-toyota.247.com.ec/' + c.logo_del_vehiculo} className="logoslider"></img>
                                                        </div>
                                                        <div className="col-6 textoabajo align-items ">
                                                            <p className="vertodos">{c.texto_ver_vehiculos}</p>
                                                        </div>

                                                    </div>
                                                    <div className="row carddetallesslider">
                                                        <div className="col-4 textoabajo border-right-slider ">
                                                            <p className="rendimientoslider">{c.texto_info_box_1}</p>
                                                        </div>
                                                        <div className="col-4 textoabajo border-right-slider ">
                                                            <p className="rendimientoslidertitulo">{c.titulo_info_box_2}</p>
                                                            <p className="rendimientoslider">{c.texto_info_box_2}</p> </div>
                                                        <div className="col-4 textoabajo">
                                                            <button className="btnslider">{c.texto_cotizar_vehiculo}</button>
                                                            <button className="btnslider">{c.texto_test_drive_vehiculo}</button>


                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    )}


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
