import React, { useEffect, useRef, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";

let url_backend = 'https://www.toyota.com.ec/'

export default function RecuperaMantenimiento() {

    let url_api = 'v1/mantenimiento'
    const [respuesta, error] = useFetch(url_api)
    const location = useLocation()
   
    let imagen6 = ''
    
    if(respuesta){
                            
        respuesta.map(c => { 
                
            imagen6 = url_backend+c.field_mantenimiento_imagen_6
                                    
            }
        )
        
    }

    return (
    <> 

        <div id="portada-mantenimiento-recupera" className="container-fluid video-cart d-block d-sm-block d-md-block d-xl-block d-lg-block" >

            <div className="row">
                <div className="col-12 col-sm-12 content-video"  >

                    <img src={imagen6} alt="Imagen portada mantenimiento recupera"  />

                </div>
            </div>

            
        </div>

    </>

    );
}





