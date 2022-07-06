import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
    NavLink
} from "react-router-dom";

import { Autoplay } from "swiper";
import useFetch from "../../../hooks/useFetch";

import { motion } from "framer-motion"

const variants = {
    hidden: { opacity: 0.1 },
    visible: { opacity: 1 },
}

export default function Cartslider() {
    let url_api = 'v1/features_vehicle/28'
    const [respuesta, error] = useFetch(url_api);
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
                              {({ isActive }) => (
                                <div className="container-fluid contenedor swiper-slide" style={{ backgroundImage: `url(${'https://backend-toyota.247.com.ec/' + c.fondo_caracteristicas})` }} >
                                    <div className="mtopbanner">
                                        <div className="row" >
                                            <div className="col-3">
                                
                                            { isActive && <motion.p className="cart-titulo-caracteristicas"  initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.5, default: { duration: 0.8 }, }} >{c.titulo_potencia}</motion.p> }
                                             
                                            { isActive && <motion.p className="cart-texto-caracteristicas" >{c.texto_potencia}</motion.p> }
                                                
                                            </div>
                                            <div className="col-6">

                                            { isActive && <motion.img src={'https://backend-toyota.247.com.ec/' + c.imagen_potencia} className="cart-imagen-caracteristica img-fluid"  initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.0, default: { duration: 1 }, }}   ></motion.img> }
                                                
                                            </div>
                                            <div className="col-3">
                                            { isActive && <motion.ul className="cart-item-caracteristicas" initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.5, default: { duration: 1 }, }}  >
                                                    <li>{c.items_potencia[0]}</li>
                                                    <li>{c.items_potencia[1]}</li>
                                                    <li>{c.items_potencia[2]}</li>
                                                    <li>{c.items_potencia[3]}</li>
                                                </motion.ul> }
                                                
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>  
                              )}
                            </SwiperSlide>
                            <SwiperSlide>

                            {({ isActive }) => (
                                <div className="container-fluid contenedor swiper-slide" style={{ backgroundImage: `url(${'https://backend-toyota.247.com.ec/' + c.fondo_caracteristicas})` }} >
                                    <div className="mtopbanner">
                                        <div className="row" >
                                            <div className="col-3">

                                        { isActive && <motion.p className="cart-titulo-caracteristicas" initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.5, default: { duration: 0.8 }, }} >{c.titulo_seguridad}</motion.p> }
                                        { isActive && <motion.p className="cart-texto-caracteristicas" initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.5, default: { duration: 0.8 }, }} >{c.texto_seguridad}</motion.p> }
                                                
                                            </div>
                                            <div className="col-6">

                                            { isActive && <motion.img src={'https://backend-toyota.247.com.ec/' + c.imagen_seguridad} className="cart-imagen-caracteristica  img-fluid" initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.0, default: { duration: 1 }, }}  ></motion.img> }
                                                
                                            </div>
                                            <div className="col-3">
                                            { isActive && <motion.ul className="cart-item-caracteristicas" initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.5, default: { duration: 1 }, }} >
                                                    <li>{c.items_seguridad[0]}</li>
                                                    <li>{c.items_seguridad[1]}</li>
                                                    <li>{c.items_seguridad[2]}</li>
                                                    <li>{c.items_seguridad[3]}</li>
                                                </motion.ul> }
                                                
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>  
                            )}

                            </SwiperSlide>   

                            <SwiperSlide>
                            {({ isActive }) => (
                                <div className="container-fluid contenedor swiper-slide" style={{ backgroundImage: `url(${'https://backend-toyota.247.com.ec/' + c.fondo_caracteristicas})` }} >
                                    <div className="mtopbanner">
                                        <div className="row" >
                                            <div className="col-3">

                                            { isActive && <motion.p className="cart-titulo-caracteristicas" initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.5, default: { duration: 0.8 }, }} >{c.titulo_equipamento_exterior}</motion.p> }
                                            { isActive && <motion.p className="cart-texto-caracteristicas" initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.5, default: { duration: 0.8 }, }} >{c.texto_equipamento_exterior}</motion.p> }
                                                
                                            </div>
                                            <div className="col-6">

                                            { isActive && <motion.img src={'https://backend-toyota.247.com.ec/' + c.imagen_equipamento_exterior} className="cart-imagen-caracteristica img-fluid" initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.0, default: { duration: 1 }, }} ></motion.img> }
                                                
                                            </div>
                                            <div className="col-3">
                                            { isActive && <motion.ul className="cart-item-caracteristicas" initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.5, default: { duration: 1 }, }}  >
                                                    <li>{c.items_equipamento_exterior[0]}</li>
                                                    <li>{c.items_equipamento_exterior[1]}</li>
                                                    <li>{c.items_equipamento_exterior[2]}</li>
                                                    <li>{c.items_equipamento_exterior[3]}</li>
                                                </motion.ul> }
                                                
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>  
                            )}                          
                            </SwiperSlide>          

                            <SwiperSlide>
                            {({ isActive }) => (
                                <div className="container-fluid contenedor swiper-slide" style={{ backgroundImage: `url(${'https://backend-toyota.247.com.ec/' + c.imagen_equipamento_interior})` }} >
                                    <div className="mtopbanner">
                                        <div className="row" >
                                            <div className="col-3">

                                            { isActive && <motion.p className="cart-titulo-caracteristicas fuente-blanco"  initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.5, default: { duration: 0.8 }, }} >{c.titulo_equipamento_interior}</motion.p> }
                                            { isActive && <motion.p className="cart-texto-caracteristicas fuente-blanco"  initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.5, default: { duration: 0.8 }, }} >{c.texto_equipamento_interior}</motion.p> }
                                                
                                            </div>
                                            <div className="col-6">

                                                
                                                
                                            </div>
                                            <div className="col-3">
                                            { isActive && <motion.ul className="cart-item-caracteristicas"  initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.5, default: { duration: 1 }, }} >
                                                    <li className="fuente-blanco" >{c.items_equipamento_interior[0]}</li>
                                                    <li className="fuente-blanco" >{c.items_equipamento_interior[1]}</li>
                                                    <li className="fuente-blanco" >{c.items_equipamento_interior[2]}</li>
                                                    <li className="fuente-blanco" >{c.items_equipamento_interior[3]}</li>
                                                </motion.ul> }
                                                
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>  
                            )}
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

            </Swiper>
        </>
    );
}