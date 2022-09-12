import React, { useEffect, useRef, useState } from "react";
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'
import useFetch from "../../../hooks/useFetch";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

let url_backend = 'https://www.toyota.com.ec/'

export default function Tranquilidad() {

    let url_api = 'v1/mantenimiento'
    const [respuesta, error] = useFetch(url_api)
    const location = useLocation()

    let texto6 = ''
    let texto7 = ''
    let imagen5 = ''

    if(respuesta){
                            
        respuesta.map(c => {
                
            texto6 = c.field_mantenimiento_label_6
            texto7 = c.field_mantenimiento_label_7
            imagen5 = url_backend+c.field_mantenimiento_imagen_5
                                  
            }
        )
        
    }


    return (
        <>
            <div className="container-fluid "  >
                <div className="estrenalodiv2">
                    <div className="carroestrenalo">
                        <h2 className="campanaestrenalo2">
                            TRANQUILIDAD
                        </h2>                        
                    </div>
                    <div className="carroestrenalo">
                        <h2 className="campanaestrenalo2">
                            TOTAL
                        </h2>
                        <img src={imagen5} className="imagencarroestranlo"></img>
                        
                    </div>
                    <div className="tranquilidad-texto">
                        <p>{texto7}</p>
                    </div>
                    

                </div>
            </div>

        </>
    );
}







