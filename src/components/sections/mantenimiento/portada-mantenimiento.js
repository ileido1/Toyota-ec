import React, { useEffect, useRef, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import MenuMantenimiento from './menu-mantenimiento'
import imagen_portada from '../../../images/mantenimiento/portada.png'
import imagen_portada_mobile from '../../../images/mantenimiento/portada-mobile.png'
import Cascada from './dropdown.js';

export default function PortadaMantenimiento() {

    return (
    <> 

        <div id="portada-mantenimiento" className="mundo-hibrido container-fluid video-cart d-block d-sm-block d-md-block d-xl-block d-lg-block" >

            <div className="row" >

                <MenuMantenimiento />

            </div>

            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 content-video d-none d-sm-block d-md-block d-xl-block d-lg-block"  >

                    <img className="img-fluid" src={imagen_portada} alt="Imagen portada mantenimiento"  />

                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 content-video d-block d-sm-none d-md-none d-xl-none d-lg-none"  >

                    <img className="img-fluid" src={imagen_portada_mobile} alt="Imagen portada mantenimiento"  />

                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mant-texto-portada"  >

                    <div className="row mant-contenedor-texto" >
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >
                            <p className="mant-portada-titulo-1" >TOYOTA</p>
                            <p className="mant-portada-titulo-2" >SERVICIO DE MANTENIMIENTO</p>
                        </div>
                    </div>

                    <div className="row mant-contenedor-buscador" >

                        
                        <Cascada />

                        
                    </div>

                </div>
            </div>
            
        </div>

    </>

    );
}