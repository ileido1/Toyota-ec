import React, { useEffect, useRef, useState } from "react";
import { useLocation } from 'react-router-dom';
import { motion,useInView } from 'framer-motion'
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

                      <motion.h1 initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2, default: { duration: 0.7 } }}   >
                            {texto1}
                      </motion.h1>
                      
                        <motion.img ref={ref} src={imagen1} className="imagencarroestranlo"  initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.6, default: { duration: 0.7 } }}  ></motion.img>

                    </div>
                    <div className="divsubestrenalo">
                        <motion.h1  initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 1, default: { duration: 0.7 } }}   className="campanaestrenalosub">{texto2}</motion.h1>
                    </div>
                    <div className="carroestrenalo">
                        <motion.img  initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 1.2, default: { duration: 0.7 } }}   src={imagen2} className="imagencarroestranlo"></motion.img>
                        <motion.h1  initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 1.6, default: { duration: 0.7 } }}   className="campanaestrenalo2">
                            {texto3}
                        </motion.h1>

                    </div>

                </div>
            </div>

        </>
    );
}







