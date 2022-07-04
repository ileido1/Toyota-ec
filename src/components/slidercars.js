import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "../hooks/useFetch";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

export default function Sliderscars() {
    let llenarbanner = 'home/carousel'
    const [banner, error] = useFetch(llenarbanner);
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            > {
                    banner ? (
                        <>


                            {banner.map((c, i) => (
                                <SwiperSlide>
                                    <div className="container-fluid  " style={{ backgroundImage: `url(${'https://backend-toyota.247.com.ec/' + c.field_fondo_del_vehiculo})` }} >

                                        <div className="row" >
                                            <div className="col-12">
                                                <img src={'https://backend-toyota.247.com.ec/' + c.imagen_del_vehiculo}></img>

                                            </div>
                                            <div className="col-12">
                                                <p>
                                                    {c.anio_del_vehiculo}
                                                </p>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <img src={'https://backend-toyota.247.com.ec/' + c.logo_del_vehiculo}></img>
                                                    </div>
                                                    <div className="col-6">
                                                        <p>{c.texto_ver_vehiculos}</p>
                                                    </div>

                                                </div>
                                                <div className="row">
                                                    <div className="col-4"> 
                                                    <p>{c.texto_info_box_1}</p>
                                                    </div>
                                                    <div className="col-4">
                                                    <p>{c.titulo_info_box_2}</p>
                                                    <p>{c.texto_info_box_2}</p> </div>
                                                    <div className="col-4"> 
                                                    <p>{c.texto_cotizar_vehiculo}</p>
                                                    <p>{c.texto_test_drive_vehiculo}</p>
                                                    
                                                    </div>
                                                    </div>

                                            </div>

                                        </div>

                                    </div>


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
