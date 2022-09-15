import React, { useEffect, useRef, useState } from "react";
import { useInView } from 'framer-motion'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import useFetch from "../../../hooks/useFetch2";
import logo from "../../../images/siemprenuevo/logo2.png"
import iconodinero from "../../../images/siemprenuevo/icono-dinero 2.png"
import iconoauto from "../../../images/siemprenuevo/icono-auto 1.png"
import iconotiempo from "../../../images/siemprenuevo/icono-tiempo 1.png"
import iconotoyota from "../../../images/siemprenuevo/icono-toyota.png"


export default function Comofunciona() {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });

    return (
        <>

            <div className="container-fluid "  >
                <div className="row ">
                    <div className="col-12 col-sm-4 cuadricula bghover"> <h1 className="comofuncionah1">¿Cómo funciona?</h1>
                        <img src={logo} className="logotns" ></img></div>
                    <div className="col-12 col-sm-4 cuadricula cuadriculamedio">
                        <div className="row">
                            <div className="col-12 cuadrointerno bghover">
                                <img src={iconodinero} className="iconostoyotanueva"></img>

                                <p className="pcuadro">Entrada única del</p>
                                <p className="pcuadronumeros">25% <span className="pcuadro">al</span> 40%</p>


                            </div>
                            <div className="col-12 cuadrointerno cuadrointernolinea bghover">
                                <img src={iconoauto} className="iconostoyotanueva"></img>
                                <p className="pcuadro">Recibe tu vehículo</p>
                                <p className="inmediata"> CON ENTREGA <br></br><span className="colorred">INMEDIATA</span></p>
                            </div>
                        </div>

                    </div>

                    <div className="col-12 col-sm-4  cuadricula">
                        <div className="row">
                            <div className="col-12 cuadrointerno bghover">
                                <img src={iconotiempo} className="iconostoyotanueva"></img>
                                <p className="pcuadro">Elige cuando estrenar tu próximo nuevo Toyota</p>
                                <p className="pcuadronumeros colorblack">24 / <span className="colorred">36</span> / 48   <span className="pcuadro">meses</span></p>
                            </div>
                            <div className="col-12 cuadrointerno cuadrointernolinea bghover">
                                <img src={iconotoyota} className="iconostoyotanueva"></img>
                                <div className="listatoyotanuevo">
                                    <p className="pcuadro">Experiencia de renovación</p>
                                    <p className="pcuadro">Refinancia tu Toyota nuevo, y continúa un nuevo ciclo.</p>
                                    <p className="pcuadro">Paga tu cuota final y conserva tu vehículo.</p>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>






        </>
    );
}







