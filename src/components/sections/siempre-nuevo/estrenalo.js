import React, { useEffect, useRef, useState } from "react";
import { motion,useInView } from 'framer-motion'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import useFetch from "../../../hooks/useFetch2";
import corolla from "../../../images/siemprenuevo/corrolla.png"
import rav4 from "../../../images/siemprenuevo/rav4.png"

import vector from "../../../images/siemprenuevo/flecha2.png"


export default function Estrenalo() {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });

    return (
        <>

            <div className="container-fluid "  >
                <div className="estrenalodiv">
                    <div className="carroestrenalo">
                        <motion.h1 initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, default: { duration: 0.7 } }} className="campanaestrenalo">
                            Estrénalo
                        </motion.h1>
                        <motion.img initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, default: { duration: 0.7 } }}  src={corolla} className="imagencarroestranlo"></motion.img>
                    </div>
                    <div className="divsubestrenalo">
                        <motion.h1 initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1, default: { duration: 0.7 } }}  className="campanaestrenalosub">CADA 3 AÑOS</motion.h1>
                    </div>
                    <div className="carroestrenalo">
                        <motion.img initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.2, default: { duration: 0.7 } }} src={rav4} className="imagencarroestranlo"></motion.img>
                        <motion.h1 initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.4, default: { duration: 0.7 } }}  className="campanaestrenalo2">
                            1 Sola entrada
                        </motion.h1>

                    </div>
                    <div className="flechaestrenalo">
                        <motion.img  initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.6, default: { duration: 0.7 } }} src={vector} className="vectorflecha"></motion.img>


                    </div>

                </div>
            </div>






        </>
    );
}







