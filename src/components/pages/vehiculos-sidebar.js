import useFetch from "../../hooks/useFetch";
import { useLocation } from 'react-router-dom';

import { motion } from "framer-motion"

import React, { useEffect, useRef, useState } from "react";

const variants = {
    hidden: { opacity: 0.1 },
    visible: { opacity: 1 },
}

let url_backend = 'https://www.toyota.com.ec/'
let estilo_link = "none"

export default function Vehiculossidebar() {
    
    let url_api = 'v1/sidebar_vehicles'
    const [respuesta, error] = useFetch(url_api);
    
    return (
        <>
            {
                respuesta ? (
                    <>
                    <div className="content-filtros-sidebar" >
                        <p className="titulo-filtro-sidebar titulo-filtro-sidebar-bb" >Ordenar por</p>
                        <p className="titulo-filtro-sidebar" onClick={soloExonerados} >Exonerados</p>
                        <p className="titulo-filtro-sidebar" onClick={soloHibridos}  >Mundo Híbrido</p>
                        <p className="titulo-filtro-sidebar" onClick={todos}  >Todos los vehículos</p>
                    </div>
                   <div className="content-botones-sidebar-general" >
                    
                        {     

                        respuesta.map(c => (
                    <>

                    <div className="content-botones-sidebar" >
                        <div className="iconos-sidebar" >
                            <img className="" src={url_backend+c.icono_sidebar_vehiculos} />
                        </div>
                        <div className="titulo-botones-sidebar" >

                        { c.texto_sidebar_vehiculos == "Mundo híbrido" ? ( 
                            <a style={{textDecoration:estilo_link}} href="/mundohibrido" className="ag" >MUNDO HÍBRIDO</a>
                        ) : (
                            
                            <p></p>
                            
                            )    
                        }

                        { c.texto_sidebar_vehiculos == "Buscar concesionario" ? ( 
                            <a style={{textDecoration:estilo_link}} href="/concesionarios" className="ag" >Buscar concesionario</a>
                        ) : (
                            
                            <p></p>
                            
                            )    
                        }

                        { c.texto_sidebar_vehiculos == "Cotizar" ? ( 
                            <p onClick={abrirModal} className="ag" >{c.texto_sidebar_vehiculos}</p>
                        ) : (
                            
                            <p></p>
                            
                            )    
                        }


                        { c.texto_sidebar_vehiculos == "Test Drive" ? ( 
                            <p onClick={abrirModal} className="ag" >{c.texto_sidebar_vehiculos}</p>
                        ) : (
                            
                            <p></p>
                            
                            )    
                        }
                    
                        </div>

                    </div>                        
              
                    </>
                            )

                            )
                        }
                        
                    </div>   
                         
                    </>
                ) : (

                    <span>Cargando...</span>

                )
                
            }
                   



        </>
    );                  

}

function abrirModal(){

    var modal = document.getElementById("myModal");
    var btn = document.getElementById("cotizar-vehiculo");
    modal.style.display = "block";

}

function activarTestdrive(){

    var testdrive = document.getElementById("formulario-testdrive-contenedor");
    var cotizar = document.getElementById("formulario-cotizar-contenedor");

    var iconotestdrive = document.getElementById("icono-testdrive");
    var iconocotizar = document.getElementById("icono-cotizacion");
    var textoiconocotizar = document.getElementById("texto-icono-cotizar");
    var textoiconotestdrive = document.getElementById("texto-icono-testdrive");
    var img_icono_cotizarblanco = document.getElementById("img-icono-cotizar-blanco");
    var img_icono_cotizargris = document.getElementById("img-icono-cotizar-gris");

    var img_testdrive_cotizarblanco = document.getElementById("img-testdrive-cotizar-blanco");
    var img_testdrive_cotizargris = document.getElementById("img-testdrive-cotizar-gris");

    img_icono_cotizarblanco.classList.add("ocultar-icono");
    img_icono_cotizargris.classList.remove("ocultar-icono");
    img_testdrive_cotizargris.classList.add("ocultar-icono");
    img_testdrive_cotizarblanco.classList.remove("ocultar-icono");

    cotizar.classList.add("ocultar");
    testdrive.classList.remove("ocultar");
    iconotestdrive.style.background = "#E20B2A";

    iconocotizar.style.background = "transparent"; 
    iconocotizar.style.borderTop = "1px solid #817F7F";
    iconotestdrive.style.borderBottom = "0px solid #817F7F";
    textoiconocotizar.style.color = "#817F7F";
    textoiconotestdrive.style.color = "#FFFFFF";

}

function soloHibridos(){

    let hibridos = document.getElementById("contenedor-autos-hibridos");
    let exonerados1 = document.getElementById("discapacidad");
    let exonerados2 = document.getElementById("diplomaticos");
    let exonerados3 = document.getElementById("ong");
    let camionetas = document.getElementById("contenedor-autos-camionetas");
    let suv = document.getElementById("contenedor-autos-suv");
    let automoviles = document.getElementById("contenedor-autos-automoviles");

    hibridos.classList.remove("ocultar");
    exonerados1.classList.add("ocultar");
    exonerados2.classList.add("ocultar");
    exonerados3.classList.add("ocultar");
    suv.classList.add("ocultar");
    camionetas.classList.add("ocultar");
    automoviles.classList.add("ocultar");

return true;

}

function soloExonerados(){

    let hibridos = document.getElementById("contenedor-autos-hibridos");
    let exonerados1 = document.getElementById("discapacidad");
    let exonerados2 = document.getElementById("diplomaticos");
    let exonerados3 = document.getElementById("ong");
    let camionetas = document.getElementById("contenedor-autos-camionetas");
    let suv = document.getElementById("contenedor-autos-suv");
    let automoviles = document.getElementById("contenedor-autos-automoviles");

    hibridos.classList.add("ocultar");
    exonerados1.classList.remove("ocultar");
    exonerados2.classList.remove("ocultar");
    exonerados3.classList.remove("ocultar");
    suv.classList.add("ocultar");
    camionetas.classList.add("ocultar");
    automoviles.classList.add("ocultar");

return true;

}

function todos(){

    let hibridos = document.getElementById("contenedor-autos-hibridos");
    let exonerados1 = document.getElementById("discapacidad");
    let exonerados2 = document.getElementById("diplomaticos");
    let exonerados3 = document.getElementById("ong");
    let camionetas = document.getElementById("contenedor-autos-camionetas");
    let suv = document.getElementById("contenedor-autos-suv");
    let automoviles = document.getElementById("contenedor-autos-automoviles");

    hibridos.classList.remove("ocultar");
    suv.classList.remove("ocultar");
    exonerados1.classList.remove("ocultar");
    exonerados2.classList.remove("ocultar");
    exonerados3.classList.remove("ocultar");
    camionetas.classList.remove("ocultar");
    automoviles.classList.remove("ocultar");

return true;

}