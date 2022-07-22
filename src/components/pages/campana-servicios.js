import useFetch from "../../hooks/useFetch";
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion"
import campa from "../../images/campanias/campania-airbag.png"
import airbag from "../../images/campanias/campania-airbag-hover.png";
import prius3 from '../../images/campanias/prius-3g.png';
import prius3hover from '../../images/campanias/prius-3g_.png';
import prius4 from '../../images/campanias/prius-4g_.png';
import prius4hover from '../../images/campanias/prius-4g.png';
import rav4 from '../../images/campanias/rav-4.png';
import rav4hover from '../../images/campanias/rav-4_.png';
import campanag from '../../images/campanias/camapana-global.png';
import campanaghover from '../../images/campanias/camapana-global_.png';




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
                                <p className="texto-campanias texto-rojo">Estas campaña no tiene ningún costo para los propietarios del vehículo.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sinpadding ">
                        <div className="content-campanias-takata" onClick={abrirModal} >
                            <div>
                                <img id="my-img" src={campa} onMouseOver={e => (e.currentTarget.src = airbag)} onMouseOut={e => (e.currentTarget.src = campa)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sinpadding ">
                        <div className="content-campanias-prius4" >
                            <div>
                                <img id="my-img" src={prius4} onMouseOver={e => (e.currentTarget.src = prius4hover)} onMouseOut={e => (e.currentTarget.src = prius4)} />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sinpadding ">
                        <div className="content-campanias-prius3" >
                            <div>
                                <img id="my-img" src={prius3} onMouseOver={e => (e.currentTarget.src = prius3hover)} onMouseOut={e => (e.currentTarget.src = prius3)} />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sinpadding ">
                        <div className="content-campanias-rav4" >
                            <div>
                                <img id="my-img" src={rav4} onMouseOver={e => (e.currentTarget.src = rav4hover)} onMouseOut={e => (e.currentTarget.src = rav4)} />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sinpadding ">
                        <div className="content-campanias-global" >
                            <div>
                                <img id="my-img" src={campanag} onMouseOver={e => (e.currentTarget.src = campanaghover)} onMouseOut={e => (e.currentTarget.src = campanag)} />

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Modaltakata />
        </>
    );

}

function abrirModal() {
    var modal = document.getElementById("myModalTakata");
    modal.style.display = "block";
}

