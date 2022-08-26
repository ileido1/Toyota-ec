import React, { useEffect, useRef, useState } from "react";

import { motion } from 'framer-motion'


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import useFetch from "../../../hooks/useFetch2";
import corolla from "../../../images/siemprenuevo/corrolla.png"
import rav4 from "../../../images/siemprenuevo/rav4.png"

import vector from "../../../images/siemprenuevo/flecha2.png"


export default function Estrenalo() {


    return (
        <>

            <div className="container-fluid "  >
                <div className="estrenalodiv">
                    <div className="carroestrenalo">
                        <h1 className="campanaestrenalo">
                            Estrénalo
                        </h1>
                        <img src={corolla} className="imagencarroestranlo"></img>
                    </div>
                    <div className="divsubestrenalo">
                        <h1 className="campanaestrenalosub">CADA 3 AÑOS</h1>
                    </div>
                    <div className="carroestrenalo">
                        <img src={rav4} className="imagencarroestranlo"></img>
                        <h1 className="campanaestrenalo2">
                            1 Sola entrada
                        </h1>

                    </div>
                    <div className="flechaestrenalo">
                        <img src={vector} className="vectorflecha"></img>


                    </div>

                </div>
            </div>






        </>
    );
}







