import useFetch from "../../../hooks/useFetch";
import { useLocation } from 'react-router-dom';

import { motion } from "framer-motion"

import React, { useEffect, useRef, useState } from "react";
import Modalcotizacion from "./cart-modal-cotizacion";


const variants = {
    hidden: { opacity: 0.1 },
    visible: { opacity: 1 },
}

let url_backend = 'https://backend-toyota.247.com.ec'

export default function Cartmodelossimilares({ path }) {

    let url_api = 'v1/models_vehicles'
    const [respuesta, error] = useFetch(url_api);
    const [patho, setpath] = useState(path);


    function abrirModal(event) {
        // Get the modal
        var modal = document.getElementById("myModal");
        // Get the button that opens the modal
        var btn = document.getElementById("cotizar-vehiculo");
        var prueba = (event.currentTarget.getAttribute("data-url"));
        setpath(prueba);
        modal.style.display = "block";
    }


    return (
        <>
            <div className="auto-individual container-fluid d-none d-sm-none d-md-block d-xl-block d-lg-block" >

                <div className="row" id="autos-similares" >
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sinpadding"><p className="text-color-similares secciones-subtitulos">MODELOS SIMILARES</p></div>
                    {
                        respuesta ? (
                            <>
                                {
                                    respuesta.map(c => (
                                        <>
                                            <div className="col-3" >
                                                <p className="titulo-autos-similares" >{c.name_vehicle}</p>
                                                <img className="img-fluid autos-similares" src={url_backend + c.image_model_vehicle} alt={c.name_vehicle} />
                                                <p className="content-btn-similares " ><a className="boton-saber-mas-similares" href={c.url_button_model_de_vehicle} >{c.text_button_model_vehicle}</a></p>
                                                <p className="content-btn-similares " ><p className="boton-cta-similares" href={c.url_button_cta_model_vehicle} onClick={abrirModal} data-url={c.name_vehicle} >{c.text_button_cta_model}</p></p>
                                            </div>

                                        </>
                                    )

                                    )
                                }

                            </>
                        ) : (
                            <span>Cargando...</span>
                        )

                    }
                </div>
            </div>
            <Modalcotizacion carro={patho} />
        </>
    );

}

