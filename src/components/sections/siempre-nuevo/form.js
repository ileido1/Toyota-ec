import React, { useEffect, useRef, useState } from "react";

import { motion } from 'framer-motion'


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import useFetch from "../../../hooks/useFetch2";







export default function Form() {


    return (
        <>

            <div className="container-fluid formcontainer"  >
                <h1>CUMPLE EL SUEÑO DE<br></br>
                    TENER UN TOYOTA</h1>
                <p>Te ofrecemos flexibilidad para que al final del ciclo tu decidas si deseas<br></br>
                    Ronavar, hacer un Upgrade ó Cancelar tu cuota final</p>
                <div className="formcuadro">
                    <h3>¿QUISIERAS MÁS INFORMACIÓN?</h3>
                    <p>Por favor complete el formulario a continuación. Tras su envío será contactado.</p>
                    <div className="centrar" >
                        <input type="text" class="form-control" id="nombreyapellido" placeholder="Nombre y apellido"></input>
                        <input type="email" class="form-control" id="email" placeholder="E-mail"></input>
                        <input type="tel" class="form-control" id="celular" placeholder="Celular"></input>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>ciudad ó concesionario</option>
                            <option>ciudad ó concesionario</option>

                        </select>
                        <div className="centrar">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="terminos"></input>
                                <label class="form-check-label" for="terminos">
                                    acepto términos y condiciones
                                </label>
                            </div>
                        </div>


                        <p id='enviar-cotizar' className="btn formulario-boton-enviar btn-primary" >ENVÍAR</p>
                    </div>

                </div>


            </div>






        </>
    );
}







