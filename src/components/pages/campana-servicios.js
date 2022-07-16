import useFetch from "../../hooks/useFetch";
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion"
import React, { useEffect, useRef, useState } from "react";
import Modaltakata from "./modal-takata"

let url_backend = 'https://backend-toyota.247.com.ec'

export default function Campanaservicios() {
        
    return (
        <>
            <div className="pagina-campanias container-fluid" >      
                <div className="row" >
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sinpadding ">
                        <div className="content-campanias">
                            <div>
                                <p className="texto-titulo-campanias">CAMPAÑAS DE SERVICIO</p>
                                <p className="texto-campanias">Por definición, es una revisión técnica que está enfocada en solucionar cualquier inconveniente de manera preventiva.</p>
                                <p className="texto-campanias">Estas campaña no tiene ningún costo para los propietarios del vehículo.</p>
                            </div>
                        </div>
                    </div>          
                </div>
                <div className="row" >
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sinpadding ">
                        <div className="content-campanias-takata" onClick={abrirModal} >
                            <div>
                                
                            </div>
                        </div>
                    </div>          
                </div>
                <div className="row" >
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sinpadding ">
                        <div className="content-campanias-prius4" >
                            <div>
                                
                            </div>
                        </div>
                    </div>          
                </div>
                <div className="row" >
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sinpadding ">
                        <div className="content-campanias-prius3" >
                            <div>
                                
                            </div>
                        </div>
                    </div>          
                </div>
                <div className="row" >
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sinpadding ">
                        <div className="content-campanias-rav4" >
                            <div>
                                
                            </div>
                        </div>
                    </div>          
                </div>
                <div className="row" >
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sinpadding ">
                        <div className="content-campanias-global" >
                            <div>
                                
                            </div>
                        </div>
                    </div>          
                </div>

            </div>
            <Modaltakata />
        </>
    );                  

}

function abrirModal(){
    var modal = document.getElementById("myModalTakata");
    modal.style.display = "block";
}

