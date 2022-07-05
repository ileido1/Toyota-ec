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
import useFetch from "../../../hooks/useFetch";
let sliders_ag = ""

export default function Cartslider() {
    let datos_api = 'v1/features_vehicle/28'
    const [respuesta, error] = useFetch(datos_api);
    return (
        <>
         <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {
                    respuesta ? (
                        <>
                            {
                                
                                respuesta.map(c => (
                        <>
                              <SwiperSlide>
                                <div className="container-fluid contenedor swiper-slide" style={{ backgroundImage: `url(${'https://backend-toyota.247.com.ec/' + c.fondo_caracteristicas})` }} >
                                    <div className="mtopbanner">
                                        <div className="row" >
                                            <div className="col-3">

                                                <p className="cart-titulo-caracteristicas" >{c.titulo_potencia}</p>
                                                <p className="cart-texto-caracteristicas" >{c.texto_potencia}</p>
                                                
                                            </div>
                                            <div className="col-6">

                                                <img src={'https://backend-toyota.247.com.ec/' + c.imagen_potencia} className="cart-imagen-caracteristica"></img>
                                                
                                            </div>
                                            <div className="col-3">
                                                <ul className="cart-item-caracteristicas"  >
                                                    <li>{c.items_potencia[0]}</li>
                                                    <li>{c.items_potencia[1]}</li>
                                                    <li>{c.items_potencia[2]}</li>
                                                    <li>{c.items_potencia[3]}</li>
                                                </ul>
                                                
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>  

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="container-fluid contenedor swiper-slide" style={{ backgroundImage: `url(${'https://backend-toyota.247.com.ec/' + c.fondo_caracteristicas})` }} >
                                    <div className="mtopbanner">
                                        <div className="row" >
                                            <div className="col-3">

                                                <p className="cart-titulo-caracteristicas" >{c.titulo_seguridad}</p>
                                                <p className="cart-texto-caracteristicas" >{c.texto_seguridad}</p>
                                                
                                            </div>
                                            <div className="col-6">

                                                <img src={'https://backend-toyota.247.com.ec/' + c.imagen_seguridad} className="cart-imagen-caracteristica"></img>
                                                
                                            </div>
                                            <div className="col-3">
                                                <ul className="cart-item-caracteristicas"  >
                                                    <li>{c.items_seguridad[0]}</li>
                                                    <li>{c.items_seguridad[1]}</li>
                                                    <li>{c.items_seguridad[2]}</li>
                                                    <li>{c.items_seguridad[3]}</li>
                                                </ul>
                                                
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>  

                            </SwiperSlide>   

                            <SwiperSlide>
                                <div className="container-fluid contenedor swiper-slide" style={{ backgroundImage: `url(${'https://backend-toyota.247.com.ec/' + c.fondo_caracteristicas})` }} >
                                    <div className="mtopbanner">
                                        <div className="row" >
                                            <div className="col-3">

                                                <p className="cart-titulo-caracteristicas" >{c.titulo_equipamento_exterior}</p>
                                                <p className="cart-texto-caracteristicas" >{c.texto_equipamento_exterior}</p>
                                                
                                            </div>
                                            <div className="col-6">

                                                <img src={'https://backend-toyota.247.com.ec/' + c.imagen_equipamento_exterior} className="cart-imagen-caracteristica"></img>
                                                
                                            </div>
                                            <div className="col-3">
                                                <ul className="cart-item-caracteristicas"  >
                                                    <li>{c.items_equipamento_exterior[0]}</li>
                                                    <li>{c.items_equipamento_exterior[1]}</li>
                                                    <li>{c.items_equipamento_exterior[2]}</li>
                                                    <li>{c.items_equipamento_exterior[3]}</li>
                                                </ul>
                                                
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>  

                            </SwiperSlide>          

                            <SwiperSlide>
                                <div className="container-fluid contenedor swiper-slide" style={{ backgroundImage: `url(${'https://backend-toyota.247.com.ec/' + c.fondo_caracteristicas})` }} >
                                    <div className="mtopbanner">
                                        <div className="row" >
                                            <div className="col-3">

                                                <p className="cart-titulo-caracteristicas" >{c.titulo_equipamento_interior}</p>
                                                <p className="cart-texto-caracteristicas" >{c.texto_equipamento_interior}</p>
                                                
                                            </div>
                                            <div className="col-6">

                                                <img src={'https://backend-toyota.247.com.ec/' + c.imagen_equipamento_interior} className="cart-imagen-caracteristica img-fluid"></img>
                                                
                                            </div>
                                            <div className="col-3">
                                                <ul className="cart-item-caracteristicas"  >
                                                    <li>{c.items_equipamento_interior[0]}</li>
                                                    <li>{c.items_equipamento_interior[1]}</li>
                                                    <li>{c.items_equipamento_interior[2]}</li>
                                                    <li>{c.items_equipamento_interior[3]}</li>
                                                </ul>
                                                
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>  

                            </SwiperSlide>  







                        </>
                                )

                                )
                            }
                                                   
                        </>
                    ) : (
                        <span> Cargando...</span>
                    )
                    
                }

                

                    {sliders_ag}               

                


            </Swiper>
        </>
    );
}