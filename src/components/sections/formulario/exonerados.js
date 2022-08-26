import React, { useEffect, useRef, useState } from "react";

import { motion } from 'framer-motion'


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import useFetch from "../../../hooks/useFetch2";
import link_externo from '../../../images/cotizacion/link-externo.svg'
import cerrar from '../../../images/cotizacion/cerrar.svg'







export default function ExoneradosForm() {

    function cerrarModal() {
        // Get the modal
        var modal = document.getElementById("myModalExonerado");
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "none";
    }


    return (
        <>


            <div id="myModalExonerado" className="modal">

                <div className="modal-content cuerpo-modal">

                    <div className='container-fluid' >
                        <div className="content-select-exo">
                            <div className="row" >
                                <div className="col-12" >
                                    <p className="close cerrar-modal-takata" onClick={cerrarModal} >CERRAR <img src={cerrar} /> </p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col-sm-6">
                                <label for="TIPODEEXONERACIÓN" class="form-label"> TIPO DE EXONERACIÓN</label>
                            </div>
                            <div class="col-sm-6">
                                <select class="form-control" id="TIPODEEXONERACIÓN">
                                    <option>PERSONA CON DISCAPACIDAD</option>
                                    <option>DIPLOMÁTICOS</option>
                                    <option>ORGANISMOS INTERNACIONALES</option>
                                    <option>COMPRAS PÚBLICAS</option>

                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col-sm-6">
                                <label for="discapacidad" class="form-label"> % DE DISCAPACIDAD</label>
                            </div>
                            <div class="col-sm-6">
                                <select class="form-control" id="discapacidad">
                                    <option>30 - 49%</option>
                                    <option>50 - 74%</option>
                                    <option>75 - 84%</option>
                                    <option>85 - 100%</option>

                                </select>
                            </div>
                        </div>




                        <div class="row">
                            <div className="col-sm-6">
                                <label for="vehiculo" class="form-label"> VEHÍCULO</label>
                            </div>
                            <div class="col-sm-6">
                                <select class="form-control" id="vehiculo">
                                    <option>30 - 49%</option>
                                    <option>50 - 74%</option>
                                    <option>75 - 84%</option>
                                    <option>85 - 100%</option>

                                </select>
                            </div>
                        </div>





                    </div>
                    <input type="text" class="form-control" id="nombreyapellido" placeholder="Nombre y apellido"></input>
                    <input type="tel" class="form-control" id="celular" placeholder="Celular"></input>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>ciudad ó concesionario</option>
                        <option>ciudad ó concesionario</option>

                    </select>
                    <input type="email" class="form-control" id="email" placeholder="E-mail"></input>
                    <input type="number" class="form-control" id="cedula" placeholder="CÉDULA"></input>




                    <div className="content-checkbox" >
                        <input type="checkbox" name="terminos" id="terminos" />
                        <label htmlFor="terminos"><a href="/terminos-y-condiciones" target="_blank" className='link-terminos' >Términos y condiciones <img src={link_externo} /></a>   </label>
                    </div>

                    <p className="boton-enviar" >COTIZAR</p>

                </div>
            </div>







        </>
    );
}







