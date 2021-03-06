import React, { useEffect, useRef, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { useLocation } from 'react-router-dom';
import Video from './cart-video-portada'
import { motion } from "framer-motion"
import { faCircleRight } from "@fortawesome/free-regular-svg-icons";

let url_backend = 'https://www.toyota.com.ec/'

let logo_modelo_1 = ""
let texto_modelo_1 = ""

let logo_modelo_2 = ""
let texto_modelo_2 = ""

let uno_icono_versiones = ''
let uno_titulo_versiones = ''
let a_subtitulo_versiones = ''

let dos_icono_versiones = ''
let dos_titulo_versiones = ''
let b_subtitulo_versiones = ''

let tres_icono_versiones = ''
let tres_titulo_versiones = ''

let cuatro_icono_versiones = ''
let cuatro_titulo_versiones = ''

let cinco_icono_versiones = ''
let cinco_titulo_versiones = ''

let seis_icono_versiones = ''
let seis_titulo_versiones = ''

let logo_versiones = ''
let portada_versiones = ''

export default function Cartslider() {

    let url_api = 'v1/vehicle_data_sheet'
    const [respuesta, error] = useFetch(url_api);
    let url_detalle = ''
    let estilo_borde = ''
    let flag_version_2 = null
    const location = useLocation()

    if(respuesta){
                            
        respuesta.map(c => { 
                
                if ( ('/' + c.name_vehicle.toLowerCase()) == location.pathname ){
                    url_detalle = 'v1/vehicle_versions/'+ c.versions_vehicle
                    logo_versiones = c.logo_versiones_vehiculo_mobile
                    portada_versiones = c.imagen_banner_vehiculo_mobile
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
            a_subtitulo_versiones = v.a_subtitulo_versiones

            dos_icono_versiones = url_backend+v.dos_icono_versiones
            dos_titulo_versiones = v.dos_titulo_versiones
            b_subtitulo_versiones = v.b_subtitulo_versiones

            tres_icono_versiones = url_backend+v.tres_icono_versiones
            tres_titulo_versiones = v.tres_titulo_versiones

            flag_version_2 = v.b_logo_versiones
            logo_modelo_2 = url_backend+v.b_logo_versiones
            texto_modelo_2 = v.b_texto_versiones            

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

    flag_version_2 ? estilo_borde = 'border-right: 3px solid #FFFFFF' : estilo_borde = ''
 
    return (
<> 

<div id="auto-individual" className="auto-individual container-fluid video-cart d-none d-sm-none d-md-block d-xl-block d-lg-block" >

            <div className="row">
                <div className="col-12 col-sm-12 content-video"  >

                    <Video />

                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="content_features" id="content-features" >
                        <div className="row">
                            <motion.div  transition={{ delay: 0.5, default: { duration: 0.8 }, }} initial={{ x: 50, opacity: 0 }}  animate={{ x: 0, opacity: 1 }} className="col-6 col-sm-6 " >

                                <div className="row" >
                                    <div className="col-12">
                                        <p className="titulo-feature animated fadeInLeft delay2 duration4" >VERSIONES</p>
                                    </div>
                                </div>

                                <div className="row border-right-filled">

                                <div className="col-12">
                                        <img className="img-logo-feature " src={logo_modelo_1} alt="Logo versiones" /><span className="text-feature-version " >{a_subtitulo_versiones}</span>
                                        <p className="text-feature ">{texto_modelo_1}</p>
                                    </div>


                                    <div className="col-4 ">
                                        <img className="img-icono-feature" src={uno_icono_versiones} alt={uno_titulo_versiones} />

                                    </div>
                                    <div className="col-4 ">
                                        <img className="img-icono-feature-frenos" src={dos_icono_versiones} alt={dos_titulo_versiones} />

                                    </div>
                                    <div className="col-4 ">
                                        <img className="img-icono-feature-motor" src={tres_icono_versiones} alt={tres_titulo_versiones} />
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
{ flag_version_2 ?   
                            <motion.div transition={{ delay: 1, default: { duration: 0.8 }, }} initial={{ x: 50, opacity: 0 }}  animate={{ x: 0, opacity: 1 }} className="col-6 padding-logo-versiones ">
                                <div className="row">
                                    <div className="col-12">
                                        <img className="img-logo-feature " src={logo_modelo_2} alt="Logo Automovil" /><span className="text-feature-version " >{b_subtitulo_versiones}</span>
                                        <p className="text-feature animated fadeInLeft delay4 duration4">{texto_modelo_2}</p>
                                    </div>

                                    <div className="col-4 animated ">
                                        <img className="img-icono-feature" src={cuatro_icono_versiones} alt={cuatro_titulo_versiones} />
                                    </div>
                                    <div className="col-4 animated ">
                                        <img className="img-icono-feature-frenos" src={cinco_icono_versiones} alt={cinco_titulo_versiones} />
                                    </div>
                                    <div className="col-4 animated ">
                                        <img className="img-icono-feature-motor" src={seis_icono_versiones} alt={seis_titulo_versiones} />
                                    </div>

                                    <div className="col-4 ">
                                        <p className="subtext-feature animated " >{cuatro_titulo_versiones}</p>
                                    </div>
                                    <div className="col-4 ">
                                        <p className="subtext-feature animated " >{cinco_titulo_versiones}</p>
                                    </div>
                                    <div className="col-4 ">
                                        <p className="subtext-feature animated " >{seis_titulo_versiones}</p>
                                    </div>

                                </div>
                            </motion.div>

 :  console.log('.') }

                        </div>
                    </div>
                </div>
            </div>
        </div>
<div id="auto-individual" className="auto-individual container-fluid video-cart d-block d-sm-block d-md-none d-xl-none d-lg-none" >

    <div className="row">
        <div className="col-12 col-sm-12 content-video"  >
           <img src={url_backend+portada_versiones} alt="Imagen Portada" className="img-fluid" />
        </div>
    </div>

<div className="row">
    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div className="content_features" id="content-features" >
            <div className="row">
                <motion.div  transition={{ delay: 0.5, default: { duration: 0.8 }, }} initial={{ x: 50, opacity: 0 }}  animate={{ x: 0, opacity: 1 }} className="col-12 " >

                    <div className="row" >
                        <div className="col-12">
                            <img className="img-logo-feature img-fluid" src={logo_modelo_1} alt="Logo versiones mobile" />
                        </div>
                    </div>

                    <div className="row contenedor-versiones-features">

                        <div className="col-2 mtopft">
                            <img className="img-fluid iconos-features" src={uno_icono_versiones} alt={uno_titulo_versiones} />
                        </div>
                        <div className="col-10 mtopft">
                            <p className="subtext-feature " >{uno_titulo_versiones}</p>
                        </div>
                    
                        <div className="col-2 mtopft">
                            <img className="img-fluid iconos-features" src={dos_icono_versiones} alt={dos_titulo_versiones} />
                        </div>
                        <div className="col-10 mtopft">
                            <p className="subtext-feature " >{dos_titulo_versiones}</p>
                        </div>
                        
                        <div className="col-2 mtopft">
                            <img className="img-fluid iconos-features" src={tres_icono_versiones} alt={tres_titulo_versiones} />
                        </div>
                        <div className="col-10 mtopft">
                            <p className="subtext-feature " >{tres_titulo_versiones}</p>
                        </div>

                    </div>
                </motion.div>
            </div>



        </div>
    </div>
</div>
<div className="row" >
    <div className="col-6 " >
        <img className="img-logo-marca img-fluid" src={url_backend+logo_versiones} alt="Logo versiones mobile" />
    </div>
    <div className="col-6 boton-cotizar-mobile" onClick={abrirModal} >
        <span>Cotizar</span>
    </div>
</div>
</div>

    </>

    );
}


function abrirModal() {
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the button that opens the modal
    var btn = document.getElementById("cotizar-vehiculo");
    modal.style.display = "block";
}