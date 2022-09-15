import React, { useEffect, useRef, useState } from "react";
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'
import useFetch from "../../../hooks/useFetch";

import { useInView } from 'framer-motion'

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

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });

    <motion.p initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2, default: { duration: 0.7 } }} className="pupgrade" >Haz un UPGRADE
        </motion.p>

    return (
        <>
            <div className="container-fluid "  >
                <div className="estrenalodivmant2">
                    <div className="carroestrenalo">
                        <motion.h2 initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2, default: { duration: 0.7 } }} className="campanaestrenalo2">
                            TRANQUILIDAD
                        </motion.h2>                        
                    </div>
                    <div className="carroestrenalo">
                        <motion.h2 initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.6, default: { duration: 0.7 } }}  className="campanaestrenalo2">
                            TOTAL
                        </motion.h2>
                        <motion.img initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 1, default: { duration: 0.7 } }}  src={imagen5} className="imagencarroestranlo"></motion.img>
                        
                    </div>
                    <motion.div initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 1.2, default: { duration: 0.7 } }}  className="tranquilidad-texto">
                        <p>{texto7}</p>
                    </motion.div>
                    

                </div>
            </div>

        </>
    );
}







