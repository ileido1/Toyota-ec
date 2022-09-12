import React, { useEffect, useRef, useState } from "react";
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'
import useFetch from "../../../hooks/useFetch";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

let url_backend = 'https://www.toyota.com.ec/'

export default function Estrenalo() {

    let url_api = 'v1/mantenimiento'
    const [respuesta, error] = useFetch(url_api)
    const location = useLocation()
    let texto1 = ''
    let imagen1 = ''
    let texto2 = ''
    let imagen2 = ''
    let texto3 = ''

    if(respuesta){
                            
        respuesta.map(c => { 
                
            texto1 = c.field_mantenimiento_label_1
            imagen1 = url_backend+c.field_mantenimiento_imagen_1
            texto2 = c.field_mantenimiento_label_2
            imagen2 = url_backend+c.field_mantenimiento_imagen_2
            texto3 = c.field_mantenimiento_label_3
                                    
            }
        )
        
    }


    return (
        <>
            <div className="container-fluid "  >
                <div className="estrenalodiv">
                    <div className="carroestrenalo">
                        <h1 className="campanaestrenalo">
                            {texto1}
                        </h1>
                        <img src={imagen1} className="imagencarroestranlo"></img>
                    </div>
                    <div className="divsubestrenalo">
                        <h1 className="campanaestrenalosub">{texto2}</h1>
                    </div>
                    <div className="carroestrenalo">
                        <img src={imagen2} className="imagencarroestranlo"></img>
                        <h1 className="campanaestrenalo2">
                            {texto3}
                        </h1>

                    </div>
                    <div className="flechaestrenalo">
                        


                    </div>

                </div>
            </div>

        </>
    );
}







