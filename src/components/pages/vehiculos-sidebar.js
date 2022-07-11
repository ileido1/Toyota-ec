import useFetch from "../../hooks/useFetch";
import { useLocation } from 'react-router-dom';

import { motion } from "framer-motion"

import React, { useEffect, useRef, useState } from "react";

const variants = {
    hidden: { opacity: 0.1 },
    visible: { opacity: 1 },
}

let url_backend = 'https://backend-toyota.247.com.ec'

export default function Vehiculossidebar() {
    
    let url_api = 'v1/sidebar_vehicles'
    const [respuesta, error] = useFetch(url_api);
    
    return (
        <>
            {
                respuesta ? (
                    <>
                    <div className="content-filtros-sidebar" >
                        <p className="titulo-filtro-sidebar" >Ordenar por</p>
                        <p className="titulo-filtro-sidebar" >Exonerados</p>
                        <p className="titulo-filtro-sidebar" >Híbridos</p>
                        <p className="titulo-filtro-sidebar" >Todos los vehículos</p>
                    </div>
                   <div className="content-botones-sidebar-general" >
                    
                        {     

                        respuesta.map(c => (
                    <>

                    <div className="content-botones-sidebar" >
                        <div className="iconos-sidebar" >
                            <img className="" src={url_backend+c.icono_sidebar_vehiculos} />
                        </div>
                        <div className="titulo-botones-sidebar" >
                            
                            <a src={c.url_sidebar_vehiculos} >{c.texto_sidebar_vehiculos}</a>
                        </div>
                    </div>                        
              
                    </>
                            )

                            )
                        }
                        
                    </div>   
                         
                    </>
                ) : (

                    <span>Cargando...</span>

                )
                
            }
                   



        </>
    );                  

}