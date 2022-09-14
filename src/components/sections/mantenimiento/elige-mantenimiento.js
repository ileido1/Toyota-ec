import React, { useEffect, useRef, useState } from "react";
import { useLocation } from 'react-router-dom';
import { useInView } from 'framer-motion'
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

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });


    return (
        <>
            <div className="container-fluid "  >
                <div className="estrenalodiv">
                    <div className="carroestrenalo">

                      <h1 ref={ref} className="campanaestrenalo" style={{ opacity: isInView ? 1 : 0, transition: " all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s" }}  >
                            {texto1}
                      </h1>
                      
                        <img ref={ref} src={imagen1} className="imagencarroestranlo"  style={{ opacity: isInView ? 1 : 0, transition: " all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s" }}  ></img>

                    </div>
                    <div className="divsubestrenalo">
                        <h1  style={{ opacity: isInView ? 1 : 0, transition: " all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 2s", duration: "3s" }}  className="campanaestrenalosub">{texto2}</h1>
                    </div>
                    <div className="carroestrenalo">
                        <img  style={{ opacity: isInView ? 1 : 0, transition: " all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 2.3s" }}  src={imagen2} className="imagencarroestranlo"></img>
                        <h1  style={{ opacity: isInView ? 1 : 0, transition: " all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 2.5s" }}  className="campanaestrenalo2">
                            {texto3}
                        </h1>

                    </div>

                </div>
            </div>

        </>
    );
}







