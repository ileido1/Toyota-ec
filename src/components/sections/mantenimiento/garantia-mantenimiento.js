import React, { useEffect, useRef, useState } from "react";
import { useLocation } from 'react-router-dom';
import { get } from 'axios';
import link_externo from '../../../images/cotizacion/link-externo.svg';

const useMountEffect = fun => useEffect(fun, []);

export default function GarantiaMantenimiento() {

    const location = useLocation()
    const myRefGarantia = useRef(null);
    const executeScroll = () => myRefGarantia.current.scrollIntoView();
    useMountEffect(executeScroll);

    if (location.hash == "#mantenimiento-garantia-formulario") {
        setTimeout(() => {
            executeScroll();
        }, 1500);
    }

    const [proceso, setProceso] = useState('');
    function handleClick(event){

        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let cedula = document.getElementById("cedula").value;
        let celular = document.getElementById("celular").value;
        let email = document.getElementById("email").value;
        let mensaje = document.getElementById("mensaje").value;
        var select = document.getElementById('ciudadoconcesionario');
        var ciudadoconcesionario = select.options[select.selectedIndex].value;
        let terminos = document.getElementById('terminos-mant').checked;

        if ( nombre == '' || apellido == '' || cedula == '' || celular == '' || email == '' || ciudadoconcesionario == '' || mensaje == '' || terminos != true ){

            alert('Todos los campos son obligatorios.')

        }else{

            const getproceso = async () => {
            const resulttexto = await get(`${'https://www.toyota.com.ec/api/v2/mantenimiento/contacto/?nombre=' + nombre + '&apellido=' + apellido + '&cedula=' + cedula + '&celular=' + celular + '&email=' + email + '&ciudad=' + ciudadoconcesionario + '&mensaje=' + mensaje }`);
            const procesos_mant = resulttexto.data;
            setProceso(procesos_mant);

            }

            getproceso()

        }

    }

    
    setTimeout(
        function () {

            if (proceso.status == 200) {

                var elemento = document.getElementById("enviar-cotizar");
                var mensaje = document.getElementById("mensaje-cotizar");

                elemento.classList.add("ocultar-icono");
                mensaje.innerHTML = proceso.msj;
                mensaje.classList.remove("ocultar-icono");


            } else if (proceso.status == 404) {

                var elemento = document.getElementById("enviar-cotizar");
                var mensaje = document.getElementById("mensaje-cotizar");

                elemento.classList.add("ocultar-icono");
                mensaje.innerHTML = proceso.msj;
                mensaje.classList.remove("ocultar-icono");

            }

        }
            .bind(this),
        800
    );

    return (
        <>

            <div id="mantenimiento-garantia-formulario" ref={myRefGarantia}  className="container-fluid formcontainer-mant"  >
                <h2>GARANTÍA EXTENDIDA TOYOTA</h2>
                <p className="subtitulo-form-mant">Extiende 2 años o 40.000km, lo que ocurra primero, la Garantía original de tu vehículo contra cobertura a nivel nacional. Esta Garantía aplica a todos los vehículos que tengan hasta  5 años ó 100.000km.</p>
                <div className="formcuadro formcuadro-mant">

                    <h3>CONTÁCTANOS PARA MÁS INFORMACIÓN</h3>
                    
                    <div className="centrar" >
                        <input type="text" class="form-control" id="nombre" placeholder="NOMBRE"></input>
                        <input type="text" class="form-control" id="apellido" placeholder="APELIDO"></input>
                        <input type="text" class="form-control" id="cedula" placeholder="CÉDULA"></input>
                        <input type="email" class="form-control" id="email" placeholder="E-MAIL"></input>
                        <input type="tel" class="form-control" id="celular" placeholder="CELULAR"></input>
                        <select class="form-select campo-select" id="ciudadoconcesionario">

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

                        <textarea rows="7" cols="1"  class="form-control" placeholder="DEJE SU MENSAJE" id="mensaje" name="mensaje" ></textarea>
                        
                        <div className="centrar contenedor-bottom">
                            <div className="content-checkbox" >
                                <input type="checkbox" name="terminos" id="terminos-mant" />
                                <label htmlFor="terminos"><a href="/terminos-y-condiciones" target="_blank" className='link-terminos' >Términos y condiciones <img src={link_externo} /></a>   </label>
                            </div>
                        </div>
                        
                        <p id="mensaje-cotizar" className="texto-terminos-mant" ></p>

                        <p id='enviar-cotizar' className="btn formulario-boton-enviar btn-primary"onClick={handleClick} >ENVÍAR</p>

                        <p className="texto-terminos-mant" >*Es requisito indispensable para aplicar la garantía que todos los mantenimientos se realicen en nuestros concesionarios Toyota.</p>

                    </div>

                </div>


            </div>

        </>
    );
}







