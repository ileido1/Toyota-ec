import React, { useEffect, useRef, useState } from "react";
import { useInView } from 'framer-motion'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import circulo from "../../../images/siemprenuevo/circulo.png"
import flecha from "../../../images/siemprenuevo/flecha.png"
import fortuner from "../../../images/siemprenuevo/fortuner.png"

import useFetch from "../../../hooks/useFetch2";
import { motion, useScroll } from "framer-motion"

export default function Upgrade() {


    return (
        <>


            <div
                className="centrar drow">
                <div className="textos">
                    <motion.p initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, default: { duration: 0.7 } }} className="pupgrade" >Haz un UPGRADE
                    </motion.p>
                    <motion.img initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, default: { duration: 0.7 } }} src={circulo}  className="circuloimg"></motion.img>
                    <motion.p initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1, default: { duration: 0.7 } }} className="pupgrade derecha"> de tu vehículo </motion.p>
                    <motion.img initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.2, default: { duration: 0.7 } }} src={flecha} className="flechaimg"></motion.img>
                </div>
                <motion.img initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.4, default: { duration: 0.7 } }} src={fortuner} className="imgfortuner"></motion.img>
            </div>






        </>
    );
}







