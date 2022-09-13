import React, { useEffect, useRef, useState } from "react";

import { motion } from 'framer-motion'


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import useFetch from "../../../hooks/useFetch2";
import link_externo from '../../../images/cotizacion/link-externo.svg'

export default function Form() {


    return (
        <>

            <div className="container-fluid formcontainer"  >
                <h1>CUMPLE EL SUEÑO DE<br></br>
                    TENER UN TOYOTA</h1>
                <p className="infoformtns">Te ofrecemos flexibilidad para que al final del ciclo tu decidas si deseas<br></br>
                    Ronavar, hacer un Upgrade ó Cancelar tu cuota final</p>
                <div className="formcuadro">
                    <h3>¿QUISIERAS MÁS INFORMACIÓN?</h3>
                    <p>Por favor complete el formulario a continuación. Tras su envío será contactado.</p>
                    <div className="centrar" >
                        <input type="text" class="form-control" id="nombreyapellido" placeholder="Nombre y apellido"></input>
                        <input type="email" class="form-control" id="email" placeholder="E-mail"></input>
                        <input type="tel" class="form-control" id="celular" placeholder="Celular"></input>
                        <select class="form-select campo-select" id="exampleFormControlSelect1">

                            <option selected>CIUDAD O CONCESIONARIO</option>
                            <option value="Quito (Casabaca)">Quito (Casabaca)</option>
                            <option value="Santo Domingo (Casabaca)">Santo Domingo (Casabaca)</option>
                            <option value="El Coca (Casabaca)">El Coca (Casabaca)</option>
                            <option value="Ambato (Automotores Carlos Larrea)">Ambato (Automotores Carlos Larrea)</option>
                            <option value="Ibarra (Comercial Hidrobo)">Ibarra (Comercial Hidrobo)</option>
                            <option value="Riobamba (Importadora Tomebamba)">Riobamba (Importadora Tomebamba)</option>
                            <option value="Azogues (Importadora Tomebamba)">Azogues (Importadora Tomebamba)</option>
                            <option value="Cuenca (Importadora Tomebamba)">Cuenca (Importadora Tomebamba)</option>
                            <option value="Loja (Importadora Tomebamba)">Loja (Importadora Tomebamba)</option>
                            <option value="Macas (Importadora Tomebamba)">Macas (Importadora Tomebamba)</option>
                            <option value="Machala (Importadora Tomebamba)">Machala (Importadora Tomebamba)</option>
                            <option value="Guayaquil (Toyocosta)">Guayaquil (Toyocosta)</option>
                            <option value="Daule (Toyocosta)">Daule (Toyocosta)</option>
                            <option value="Quevedo (Toyocosta)">Quevedo (Toyocosta)</option>
                            <option value="Manta (Toyocosta)">Manta (Toyocosta)</option>

                        </select>
                        <div className="centrar">
                            <div className="content-checkbox" >
                                <input type="checkbox" name="terminos" id="terminos" />
                                <label htmlFor="terminos"><a href="/terminos-y-condiciones" target="_blank" className='link-terminos' >Términos y condiciones <img src={link_externo} /></a>   </label>
                            </div>
                        </div>



                        <p id='enviar-cotizar' className="btn formulario-boton-enviar btn-primary" >ENVÍAR</p>
                    </div>

                </div>


            </div>






        </>
    );
}







