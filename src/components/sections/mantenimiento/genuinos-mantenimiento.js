import React, { useEffect, useRef, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";

let url_backend = 'https://www.toyota.com.ec/'

export default function GenuinosMantenimiento() {

    let url_api = 'v1/mantenimiento'
    const [respuesta, error] = useFetch(url_api)
    const location = useLocation()
   
    let imagen4 = ''
    
    if(respuesta){
                            
        respuesta.map(c => { 
                
            imagen4= url_backend+c.field_mantenimiento_imagen_4
                                    
            }
        )
        
    }

    return (
    <> 

        <div id="portada-mantenimiento-genuinos" className="mundo-hibrido container-fluid video-cart d-block d-sm-block d-md-block d-xl-block d-lg-block" >

            <div className="row">
                <div className="col-12 col-sm-12 content-video"  >

                    <img src={imagen4} alt="Imagen portada mantenimiento genuinos"  />

                </div>
            </div>

            
        </div>

    </>

    );
}





