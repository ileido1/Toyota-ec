import React, { useEffect, useRef, useState } from "react";



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


            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, default: { duration: 0.7 } }}
                className="centrar drow">
                <div className="textos">
                    <p className="pupgrade" >Haz un UPGRADE
                    </p>
                    <img src={circulo} className="circuloimg"></img>
                    <p className="pupgrade derecha"> de tu vehículo </p>
                    <img src={flecha} className="flechaimg"></img>
                </div>
                <img src={fortuner} className="imgfortuner"></img>
            </motion.div>






        </>
    );
}







