import useFetch from "../../hooks/useFetch";
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion"
import React, { useEffect, useRef, useState } from "react";
import Vehiculossidebar from "./vehiculos-sidebar";

const variants = {
    hidden: { opacity: 0.1 },
    visible: { opacity: 1 },
}

let url_backend = 'https://backend-toyota.247.com.ec'

export default function Vehiculos() {
    
    let url_api = 'v1/vehicles'
    const [respuesta, error] = useFetch(url_api);
    
    return (
        <>
        <div id="pagina-vehiculos" className="container-fluid" >
        
              <div className="row" id="titulo-vehiculos" >
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sinpadding"><p class=" secciones-subtitulos">TITULOS </p></div>
              </div>
              <div className="row" >
                <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 sinpadding">
                    <div className="row" >
            {
                respuesta ? (
                    <>
                        {                           
                        respuesta.map(c => (
                    <>
                        <div className="col-4" >
                           <p className="titulo-autos-similares" >{c.name_vehicle}</p>
                           <img className="img-fluid autos-similares" src={url_backend+c.image_vehicle} alt={c.name_vehicle} />
                           <p className="content-btn-vehiculos " ><a className="enlace-vehiculos" href={c.url_vehicle} >{c.cta_boton_vehicle}</a></p>
                           
                        </div>

                    </>
                            )

                            )
                        }
                                                
                    </>
                ) : (

                    <span>Cargando...</span>

                )
                
            }
                    </div>
                </div>
                <div id="sidebar-vehiculos" class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 sinpadding" >
                    <Vehiculossidebar />
                </div>
            
            </div>
        </div>
        </>
    );                  

}