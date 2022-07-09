import React, { useEffect, useRef, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { useLocation } from 'react-router-dom';
import Video from './cart-video-portada'

import logo_raize from "../../../images/logo-raize-white.svg"
import hac from "../../../images/icon-hac-white.svg"
import frenos from "../../../images/freno-de-disco.svg"
import motor from "../../../images/motor.svg"

import { motion } from "framer-motion"

let url_backend = 'https://backend-toyota.247.com.ec'
let logo_modelo_1 = ""
let texto_modelo_1 = ""

let uno_icono_versiones = ''
let uno_titulo_versiones = ''

let dos_icono_versiones = ''
let dos_titulo_versiones = ''

let tres_icono_versiones = ''
let tres_titulo_versiones = ''

let cuatro_icono_versiones = ''
let cuatro_titulo_versiones = ''

let cinco_icono_versiones = ''
let cinco_titulo_versiones = ''

let seis_icono_versiones = ''
let seis_titulo_versiones = ''

export default function Cartslider() {

    let url_api = 'v1/vehicle_data_sheet'
    const [respuesta, error] = useFetch(url_api);
    let url_detalle = ''
    const location = useLocation()

    if(respuesta){
                            
        respuesta.map(c => { 
                
                if ( ('/' + c.name_vehicle.toLowerCase()) == location.pathname ){
                    url_detalle = 'v1/vehicle_versions/'+ c.versions_vehicle
                }
                                    
            }
        )
        
    }

    const [detalle, error_detalle] = useFetch(url_detalle);

    if(detalle){

        detalle.map(v => { 
                
            logo_modelo_1 = url_backend+v.a_logo_versiones
            texto_modelo_1 = v.a_texto_versiones

            uno_icono_versiones = url_backend+v.uno_icono_versiones
            uno_titulo_versiones = v.uno_titulo_versiones

            dos_icono_versiones = url_backend+v.dos_icono_versiones
            dos_titulo_versiones = v.dos_titulo_versiones

            tres_icono_versiones = url_backend+v.tres_icono_versiones
            tres_titulo_versiones = v.tres_titulo_versiones

            cuatro_icono_versiones = url_backend+v.cuatro_icono_versiones
            cuatro_titulo_versiones = v.cuatro_titulo_versiones

            cinco_icono_versiones = url_backend+v.cinco_icono_versiones
            cinco_titulo_versiones = v.cinco_titulo_versiones

            cinco_icono_versiones = url_backend+v.cinco_icono_versiones
            cinco_titulo_versiones = v.cinco_titulo_versiones  
            
            seis_icono_versiones = url_backend+v.seis_icono_versiones
            seis_titulo_versiones = v.seis_titulo_versiones 

            
            }
        )
        
    }
 
    return (
<> 

<div id="auto-individual" className="auto-individual container-fluid video-cart" >

            <div className="row">
                <div className="col-12 col-sm-12 content-video"  >

                    <Video />

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
                                        <img className="img-logo-feature " src={logo_modelo_1} alt="Logo Raize" /><span className="text-feature-version " > 4X2 TM</span>
                                        <p className="text-feature ">{texto_modelo_1}</p>
                                    </div>

                                    <div className="col-4 ">
                                        <img className="img-icono-feature" src={uno_icono_versiones} alt="Hac" />

                                    </div>
                                    <div className="col-4 ">
                                        <img className="img-icono-feature-frenos" src={dos_icono_versiones} alt="Frenos" />

                                    </div>
                                    <div className="col-4 ">
                                        <img className="img-icono-feature-motor" src={tres_icono_versiones} alt="Motor" />

                                    </div>

                                    <div className="col-4 ">
                                        <p className="subtext-feature " >{uno_titulo_versiones}</p>
                                    </div>
                                    <div className="col-4 ">
                                        <p className="subtext-feature " >{dos_titulo_versiones}</p>
                                    </div>
                                    <div className="col-4 ">
                                        <p className="subtext-feature " >{tres_titulo_versiones}</p>
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