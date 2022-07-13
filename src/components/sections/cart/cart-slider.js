import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
    NavLink
} from "react-router-dom";

import { Autoplay,Navigation } from "swiper";
import useFetch from "../../../hooks/useFetch";
import { useLocation } from 'react-router-dom';

import { motion } from "framer-motion"

const variants = {
    hidden: { opacity: 0.1 },
    visible: { opacity: 1 },
}

export default function Cartslider() {
    
    let url_api = 'v1/vehicle_data_sheet'
    const [respuesta, error] = useFetch(url_api);
    let url_detalle = ''
    const location =  useLocation()

    if(respuesta){
                            
        respuesta.map(c => { 
                
                if ( ('/' + c.name_vehicle.toLowerCase()) == location.pathname ){
                    url_detalle = 'v1/features_vehicle/'+ c.features_vehicle
                }
                                    
            }
        )
        
    }

    const [detalle_respuesta, error_detalle] = useFetch(url_detalle);
    
    return (
        <>
         <Swiper
                spaceBetween={30}
                centeredSlides={true}
                navigation={true}
                speed={1000}
                modules={[Autoplay,Navigation]}
                className="mySwiper"
            >
                {
                    detalle_respuesta ? (
                        <>
                            {
                                
                                detalle_respuesta.map(c => (
                        <>
                              <SwiperSlide>
                              {({ isActive }) => (
                                <div id="content-feature" className="container-fluid contenedor " style={{ backgroundImage: `url(${'https://backend-toyota.247.com.ec/' + c.fondo_caracteristicas})` }} >
                                    <div className="mtopbanner">
                                        <div className="row" >
                                            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                
                                            { isActive && <motion.p className="cart-titulo-caracteristicas" variants={variants} transition={{ delay: 1.5, default: { duration: 0.8 }, }} initial={{ x: 50, opacity: 0 }}  animate={{ x: 0, opacity: 1 }} >{c.titulo_potencia}</motion.p> }
                                             
                                            { isActive && <motion.p className="cart-texto-caracteristicas"variants={variants} transition={{ delay: 1.5, default: { duration: 0.8 }, }} initial={{ x: 50, opacity: 0 }}  animate={{ x: 0, opacity: 1 }} >{c.texto_potencia}</motion.p> }
                                                
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">

                                            { isActive && <motion.img src={'https://backend-toyota.247.com.ec/' + c.imagen_potencia} className="cart-imagen-caracteristica img-fluid" variants={variants} transition={{ delay: 1, default: { duration: 1 }, }} initial={{ x: 50, opacity: 0 }}  animate={{ x: 0, opacity: 1 }} ></motion.img> }
                                                
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                            { isActive && <motion.ul className="cart-item-caracteristicas fa-ul" variants={variants} transition={{ delay: 1.5, default: { duration: 1 }, }} initial={{ x: 50, opacity: 0 }}  animate={{ x: 0, opacity: 1 }} >
                                                    <li><span class="fa-li"><i class="fa-solid fa-check"></i></span> {c.items_potencia[0]}</li>
                                                    <li><span class="fa-li"><i class="fa-solid fa-check"></i></span>  {c.items_potencia[1]}</li>
                                                    <li><span class="fa-li"><i class="fa-solid fa-check"></i></span>  {c.items_potencia[2]}</li>
                                                    <li><span class="fa-li"><i class="fa-solid fa-check"></i></span>  {c.items_potencia[3]}</li>
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
                                            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">

                                        { isActive && <motion.p className="cart-titulo-caracteristicas" variants={variants} transition={{ delay: 1.5, default: { duration: 0.8 }, }} initial={{ x: 50, opacity: 0 }}  animate={{ x: 0, opacity: 1 }} >{c.titulo_seguridad}</motion.p> }
                                        { isActive && <motion.p className="cart-texto-caracteristicas" variants={variants} transition={{ delay: 1.5, default: { duration: 0.8 }, }} initial={{ x: 50, opacity: 0 }}  animate={{ x: 0, opacity: 1 }} >{c.texto_seguridad}</motion.p> }
                                                
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">

                                            { isActive && <motion.img src={'https://backend-toyota.247.com.ec/' + c.imagen_seguridad} className="cart-imagen-caracteristica  img-fluid" variants={variants} transition={{ delay: 1, default: { duration: 1 }, }} initial={{ x: 50, opacity: 0 }}  animate={{ x: 0, opacity: 1 }}  ></motion.img> }
                                                
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
                                            { isActive && <motion.ul className="cart-item-caracteristicas fa-ul" variants={variants} transition={{ delay: 1.5, default: { duration: 1 }, }} initial={{ x: 50, opacity: 0 }}  animate={{ x: 0, opacity: 1 }} >
                                                    <li><span class="fa-li"><i class="fa-solid fa-check"></i></span> {c.items_seguridad[0]}</li>
                                                    <li><span class="fa-li"><i class="fa-solid fa-check"></i></span> {c.items_seguridad[1]}</li>
                                                    <li><span class="fa-li"><i class="fa-solid fa-check"></i></span> {c.items_seguridad[2]}</li>
                                                    <li><span class="fa-li"><i class="fa-solid fa-check"></i></span> {c.items_seguridad[3]}</li>
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
                                            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">

                                            { isActive && <motion.p className="cart-titulo-caracteristicas" variants={variants} transition={{ delay: 1.5, default: { duration: 0.8 }, }} initial={{ x: 50, opacity: 0 }}  animate={{ x: 0, opacity: 1 }} >{c.titulo_equipamento_exterior}</motion.p> }
                                            { isActive && <motion.p className="cart-texto-caracteristicas" variants={variants} transition={{ delay: 1.5, default: { duration: 0.8 }, }} initial={{ x: 50, opacity: 0 }}  animate={{ x: 0, opacity: 1 }} >{c.texto_equipamento_exterior}</motion.p> }
                                                
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-3 col-lg-6 col-xl-6">

                                            { isActive && <motion.img src={'https://backend-toyota.247.com.ec/' + c.imagen_equipamento_exterior} className="cart-imagen-caracteristica img-fluid" variants={variants} transition={{ delay: 1, default: { duration: 1 }, }} initial={{ x: 50, opacity: 0 }}  animate={{ x: 0, opacity: 1 }} ></motion.img> }
                                                
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                            { isActive && <motion.ul className="cart-item-caracteristicas fa-ul" variants={variants} transition={{ delay: 1.5, default: { duration: 1 }, }} initial={{ x: 50, opacity: 0 }}  animate={{ x: 0, opacity: 1 }}  >
                                                    <li><span class="fa-li"><i class="fa-solid fa-check"></i></span> {c.items_equipamento_exterior[0]}</li>
                                                    <li><span class="fa-li"><i class="fa-solid fa-check"></i></span> {c.items_equipamento_exterior[1]}</li>
                                                    <li><span class="fa-li"><i class="fa-solid fa-check"></i></span> {c.items_equipamento_exterior[2]}</li>
                                                    <li><span class="fa-li"><i class="fa-solid fa-check"></i></span> {c.items_equipamento_exterior[3]}</li>
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
                                            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">

                                            { isActive && <motion.p className="cart-titulo-caracteristicas fuente-blanco"  initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.5, default: { duration: 0.8 }, }} >{c.titulo_equipamento_interior}</motion.p> }
                                            { isActive && <motion.p className="cart-texto-caracteristicas fuente-blanco"  initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.5, default: { duration: 0.8 }, }} >{c.texto_equipamento_interior}</motion.p> }
                                                
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">

                                                
                                                
                                            </div>
                                            <div className="ccol-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                            { isActive && <motion.ul className="cart-item-caracteristicas fa-ul"  initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.5, default: { duration: 1 }, }} >
                                                    <li className="fuente-blanco" ><span class="fa-li"><i class="fa-solid fa-check"></i></span> {c.items_equipamento_interior[0]}</li>
                                                    <li className="fuente-blanco" ><span class="fa-li"><i class="fa-solid fa-check"></i></span> {c.items_equipamento_interior[1]}</li>
                                                    <li className="fuente-blanco" ><span class="fa-li"><i class="fa-solid fa-check"></i></span> {c.items_equipamento_interior[2]}</li>
                                                    <li className="fuente-blanco" ><span class="fa-li"><i class="fa-solid fa-check"></i></span> {c.items_equipamento_interior[3]}</li>
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