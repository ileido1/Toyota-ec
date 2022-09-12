import React, { useEffect, useRef, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import MenuMantenimiento from './menu-mantenimiento'
import imagen_portada from '../../../images/mantenimiento/portada.png'

export default function PortadaMantenimiento() {
 
    return (
    <> 

        <div id="portada-mantenimiento" className="mundo-hibrido container-fluid video-cart d-block d-sm-block d-md-block d-xl-block d-lg-block" >

            <div className="row" >

                <MenuMantenimiento />

            </div>

            <div className="row">
                <div className="col-12 col-sm-12 content-video"  >

                    <img src={imagen_portada} alt="Imagen portada mantenimiento"  />

                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-12 mant-texto-portada"  >

                    <div className="row mant-contenedor-texto" >
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >
                            <p className="mant-portada-titulo-1" >TOYOTA</p>
                            <p className="mant-portada-titulo-2" >SERVICIO DE MANTENIMIENTO</p>
                        </div>
                    </div>

                    <div className="row mant-contenedor-buscador" >

                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mant-campo-buscador" >

                            <label for="mant_modelo">Seleccione el modelo</label>
                            <select id="mant_modelo" name="mant_modelo" >MODELO</select>
                            
                        </div>

                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mant-campo-buscador" >

                            <label for="mant_versiones">Versiones</label>
                            <select>VERSIONES</select>
                            
                        </div>

                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mant-campo-buscador" >

                            <label for="mant_tipo">Tipo de Mantenimiento ó Km</label>
                            <select id="mant_tipo" name="mant_tipo" >MODELO</select>
                            
                        </div>
                        
                    </div>

                </div>
            </div>
            
        </div>

    </>

    );
}