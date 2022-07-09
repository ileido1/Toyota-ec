/* begin web service */

import React, { useEffect, useRef, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { useLocation } from 'react-router-dom';

/* end web service */

import video from "../../../videos/video-raize-portada-1920x650.mp4"
import logo_raize from "../../../images/logo-raize-white.svg"
import hac from "../../../images/icon-hac-white.svg"
import frenos from "../../../images/freno-de-disco.svg"
import motor from "../../../images/motor.svg"

import { motion } from "framer-motion"

let url_backend = 'https://backend-toyota.247.com.ec'

export default function Cartslider() {

    let url_api = 'v1/vehicle_data_sheet'
    const [respuesta, error] = useFetch(url_api);
    let video = ''
    const location = useLocation()

    if(respuesta){
                            
        respuesta.map(c => { 
                //console.log(('/' + c.name_vehicle.toLowerCase()))
                if ( ('/' + c.name_vehicle.toLowerCase()) == location.pathname ){
                    video = c.video_vehicle
                }
                                    
                console.log('nothing to do','/' + c.name_vehicle.toLowerCase())

            }
        )
        
    }
 
    return (
<> 

<div id="auto-individual" className="auto-individual container-fluid video-cart" >

            <div className="row">
                <div className="col-12 col-sm-12 content-video"  >
                    <video width="100%" autoPlay muted loop controls="0" >
                        <source src={url_backend+video} type="video/mp4" />
                        Your browser does not support HTML video.
                    </video>
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <div className="content_features" id="content-features" >
                        <div className="row">
                            <motion.div  transition={{ delay: 0.5, default: { duration: 0.8 }, }} initial={{ x: 50, opacity: 0 }}  animate={{ x: 0, opacity: 1 }} className="col-6 col-sm-6 border-right-filled">
                                <div className="row">
                                    <div className="col-12">
                                        <p className="titulo-feature animated fadeInLeft delay2 duration4" >VERSIONES</p>
                                        <img className="img-logo-feature " src={logo_raize} alt="Logo Raize" /><span className="text-feature-version " > 4X2 TM</span>
                                        <p className="text-feature ">Toyota Raize llegó a Ecuador, disponible en dos versiones, Transmisión manual de 5 velocidades.</p>
                                    </div>

                                    <div className="col-4 ">
                                        <img className="img-icono-feature" src={hac} alt="Hac" />

                                    </div>
                                    <div className="col-4 ">
                                        <img className="img-icono-feature-frenos" src={frenos} alt="Frenos" />

                                    </div>
                                    <div className="col-4 ">
                                        <img className="img-icono-feature-motor" src={motor} alt="Motor" />

                                    </div>

                                    <div className="col-4 ">
                                        <p className="subtext-feature " >Arranque en Pendiente HAC</p>
                                    </div>
                                    <div className="col-4 ">
                                        <p className="subtext-feature " >Frenos ABC + EBD</p>
                                    </div>
                                    <div className="col-4 ">
                                        <p className="subtext-feature " >Motor 1.2Lt</p>
                                    </div>

                                </div>
                            </motion.div>

                            <motion.div transition={{ delay: 1, default: { duration: 0.8 }, }} initial={{ x: 50, opacity: 0 }}  animate={{ x: 0, opacity: 1 }} className="col-6">
                                <div className="row">
                                    <div className="col-12">
                                        <p className="titulo-feature " > </p>
                                        <br></br>
                                        <br></br>
                                        <img className="img-logo-feature " src={logo_raize} alt="Logo Raize" /><span className="text-feature-version " > 4X2CVT</span>
                                        <p className="text-feature animated fadeInLeft delay4 duration4">Transmisión automática CVT Compacta, para una alta eficiencia mecánica. con 7 relaciones de cambio simuladas</p>
                                    </div>

                                    <div className="col-4 animated ">
                                        <img className="img-icono-feature" src={hac} alt="Hac" />

                                    </div>
                                    <div className="col-4 animated ">
                                        <img className="img-icono-feature-frenos" src={frenos} alt="Frenos" />
                                    </div>
                                    <div className="col-4 animated ">
                                        <img className="img-icono-feature-motor" src={motor} alt="Motor" />
                                    </div>

                                    <div className="col-4 ">
                                        <p className="subtext-feature animated " >Arranque en Pendiente HAC</p>
                                    </div>
                                    <div className="col-4 ">
                                        <p className="subtext-feature animated " >Frenos ABC + EBD</p>
                                    </div>
                                    <div className="col-4 ">
                                        <p className="subtext-feature animated " >Motor 1.2Lt</p>
                                    </div>

                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>

    );
}