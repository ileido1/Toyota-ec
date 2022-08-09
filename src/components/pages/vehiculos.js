import useFetch from "../../hooks/useFetch";
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion"
import React, { useEffect, useRef, useState } from "react";
import Vehiculossidebar from "./vehiculos-sidebar";
import Modalcotizacion from "../sections/cart/cart-modal-cotizacion";

const useMountEffect = fun => useEffect(fun, []);

const variants = {
    hidden: { opacity: 0.1 },
    visible: { opacity: 1 },
}

let url_backend = 'https://www.toyota.com.ec/'

export default function Vehiculos() {

    let array_automoviles = []
    let array_suv = []
    let array_camionetas = []
    let array_hibridos = []
    let array_discapacidad = []
    let array_diplomaticos = []
    let array_organismos = []

    let url_api = 'v1/vehicles'
    const [respuesta, error] = useFetch(url_api);

    const location = useLocation()

    console.log(location)

    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView(); // run this function from an event handler or pass it to useEffect to execute scroll
    useMountEffect(executeScroll); // Scroll on mount

    const myRef2 = useRef(null);
    const executeScroll2 = () => myRef2.current.scrollIntoView(); // run this function from an event handler or pass it to useEffect to execute scroll
    useMountEffect(executeScroll2); // Scroll on mount

    const myRef3 = useRef(null);
    const executeScroll3 = () => myRef3.current.scrollIntoView(); // run this function from an event handler or pass it to useEffect to execute scroll
    useMountEffect(executeScroll3); // Scroll on mount
    const myRef4 = useRef(null);
    const executeScroll4 = () => myRef4.current.scrollIntoView(); // run this function from an event handler or pass it to useEffect to execute scroll
    useMountEffect(executeScroll4); // Scroll on mount

    if (location.hash == "#discapacidad") {
        setTimeout(() => {
            executeScroll();
        }, 0);
    } else if (location.hash == "#diplomaticos") {
        setTimeout(() => {
            executeScroll2();
        }, 0);
    } else if (location.hash == "#ong") {
        setTimeout(() => {
            executeScroll3();
        }, 0);
    } else if (location.hash == "") {
        setTimeout(() => {
            executeScroll4();
        }, 0);
    }

    if (respuesta) {

        respuesta.map(d => {

            if ((d.type_vehicle) == "Automóviles") {
                array_automoviles.push(d)
            }

            if ((d.type_vehicle) == "SUV") {
                array_suv.push(d)
            }

            if ((d.type_vehicle) == "Camionetas") {
                array_camionetas.push(d)
            }

            if ((d.type_vehicle) == "Híbridos") {
                array_hibridos.push(d)
            }

            if ((d.type_vehicle) == "Personas con Discapacidad") {
                array_discapacidad.push(d)
            }

            if ((d.type_vehicle) == "Diplomáticos") {
                array_diplomaticos.push(d)
            }

            if ((d.type_vehicle) == "Organismos Internacionales - ONG&#039;S") {
                array_organismos.push(d)
            }



        }
        )

    }

    return (
        <>
            <div id="pagina-vehiculos" ref={myRef4} className="container-fluid" >

                <div className="row fila-vehiculos" >
                    <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 sinpadding order-1 order-sm-0">
                        <div id="contenedor-autos-automoviles" className="contenedor-secciones-autos" >
                            <div className="row" id="titulo-vehiculos" >
                                <div classNme="col-12 col-sm-12">
                                    <p className="subtitulos-vehiculos">Automóviles</p>
                                </div>
                            </div>

                            <div className="row" >
                                {
                                    array_automoviles.length > 0 ? (
                                        <>


                                            {
                                                array_automoviles.map(c => (

                                                    <>

                                                        <div className="col-6 col-sm-6 col-md-4 col-md-4" >
                                                            <p className="titulo-autos-similares" >{c.name_vehicle}</p>
                                                            <a className="enlace-vehiculos" href={c.url_vehicle} ><img className="img-fluid autos-similares" src={url_backend + c.image_vehicle} alt={c.name_vehicle} /></a>
                                                            <p className="content-btn-vehiculos " ><a className="enlace-vehiculos" href={c.url_vehicle} >{c.cta_boton_vehicle}</a></p>

                                                        </div>

                                                    </>
                                                )

                                                )
                                            }

                                        </>
                                    ) : (

                                        <span>Cargando...</span>

                                    )

                                }       </div>
                        </div>


                        <div id="contenedor-autos-suv" className="contenedor-secciones-autos"  >
                            <div className="row" id="titulo-vehiculos" >
                                <div classNme="col-12 col-sm-12">
                                    <p className="subtitulos-vehiculos">Suv</p>
                                </div>
                            </div>

                            <div className="row" >
                                {
                                    array_suv.length > 0 ? (
                                        <>


                                            {
                                                array_suv.map(c => (

                                                    <>

                                                        <div className="col-6 col-sm-6 col-md-4 col-md-4" >
                                                            <p className="titulo-autos-similares" >{c.name_vehicle}</p>
                                                            <a className="enlace-vehiculos" href={c.url_vehicle} ><img className="img-fluid autos-similares" src={url_backend + c.image_vehicle} alt={c.name_vehicle} /></a>
                                                            <p className="content-btn-vehiculos " ><a className="enlace-vehiculos" href={c.url_vehicle} >{c.cta_boton_vehicle}</a></p>

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

                        <div id="contenedor-autos-camionetas" className="contenedor-secciones-autos"  >
                            <div className="row" id="titulo-vehiculos" >
                                <div classNme="col-12 col-sm-12">
                                    <p className="subtitulos-vehiculos">Camionetas</p>
                                </div>
                            </div>

                            <div className="row" >
                                {
                                    array_camionetas.length > 0 ? (
                                        <>


                                            {
                                                array_camionetas.map(c => (

                                                    <>

                                                        <div className="col-6 col-sm-6 col-md-4 col-md-4" >
                                                            <p className="titulo-autos-similares" >{c.name_vehicle}</p>
                                                            <a className="enlace-vehiculos" href={c.url_vehicle} ><img className="img-fluid autos-similares" src={url_backend + c.image_vehicle} alt={c.name_vehicle} /></a>
                                                            <p className="content-btn-vehiculos " ><a className="enlace-vehiculos" href={c.url_vehicle} >{c.cta_boton_vehicle}</a></p>

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


                        <div id="contenedor-autos-hibridos" className="contenedor-secciones-autos"  >
                            <div className="row" id="titulo-vehiculos" >
                                <div classNme="col-12 col-sm-12">
                                    <p className="subtitulos-vehiculos">Híbridos</p>
                                </div>
                            </div>

                            <div className="row" >
                                {
                                    array_hibridos.length > 0 ? (
                                        <>


                                            {
                                                array_hibridos.map(c => (

                                                    <>

                                                        <div className="col-6 col-sm-6 col-md-4 col-md-4" >
                                                            <p className="titulo-autos-similares" >{c.name_vehicle}</p>
                                                            <a className="enlace-vehiculos" href={c.url_vehicle} ><img className="img-fluid autos-similares" src={url_backend + c.image_vehicle} alt={c.name_vehicle} /></a>
                                                            <p className="content-btn-vehiculos " ><a className="enlace-vehiculos" href={c.url_vehicle} >{c.cta_boton_vehicle}</a></p>

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

                        <div id="discapacidad" className="contenedor-secciones-autos contenedor-autos-exonerados"  >
                            <div className="row" id="titulo-vehiculos" >
                                <div classNme="col-12 col-sm-12">
                                    <p ref={myRef} className="subtitulos-vehiculos">PERSONAS CON DISCAPACIDAD</p>
                                </div>
                            </div>

                            <div className="row" >
                                {
                                    array_discapacidad.length > 0 ? (
                                        <>


                                            {
                                                array_discapacidad.map(c => (

                                                    <>

                                                        <div className="col-6 col-sm-6 col-md-4 col-md-4" >
                                                            <p className="titulo-autos-similares" >{c.name_vehicle}</p>
                                                            <a className="enlace-vehiculos" href={c.url_vehicle} ><img className="img-fluid autos-similares" src={url_backend + c.image_vehicle} alt={c.name_vehicle} /></a>
                                                            <p className="content-btn-vehiculos " ><a className="enlace-vehiculos" href={c.url_vehicle} >{c.cta_boton_vehicle}</a></p>

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

                        <div id="diplomaticos" className="contenedor-secciones-autos contenedor-autos-exonerados"  >
                            <div className="row" id="titulo-vehiculos" >
                                <div classNme="col-12 col-sm-12">
                                    <p ref={myRef2} className="subtitulos-vehiculos">Diplomáticos</p>
                                </div>
                            </div>

                            <div className="row" >
                                {
                                    array_diplomaticos.length > 0 ? (
                                        <>


                                            {
                                                array_diplomaticos.map(c => (

                                                    <>

                                                        <div className="col-6 col-sm-6 col-md-4 col-md-4" >
                                                            <p className="titulo-autos-similares" >{c.name_vehicle}</p>
                                                            <a className="enlace-vehiculos" href={c.url_vehicle} ><img className="img-fluid autos-similares" src={url_backend + c.image_vehicle} alt={c.name_vehicle} /></a>
                                                            <p className="content-btn-vehiculos " ><a className="enlace-vehiculos" href={c.url_vehicle} >{c.cta_boton_vehicle}</a></p>

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

                        <div id="ong" className="contenedor-secciones-autos"  >
                            <div className="row" id="titulo-vehiculos" >
                                <div classNme="col-12 col-sm-12">
                                    <p ref={myRef3} className="subtitulos-vehiculos">Organismos Internacionales - ONG'S</p>
                                </div>
                            </div>

                            <div className="row" >
                                {
                                    array_organismos.length > 0 ? (
                                        <>


                                            {
                                                array_organismos.map(c => (

                                                    <>

                                                        <div className="col-6 col-sm-6 col-md-4 col-md-4" >
                                                            <p className="titulo-autos-similares" >{c.name_vehicle}</p>
                                                            <a className="enlace-vehiculos" href={c.url_vehicle} ><img className="img-fluid autos-similares" src={url_backend + c.image_vehicle} alt={c.name_vehicle} /></a>
                                                            <p className="content-btn-vehiculos " ><a className="enlace-vehiculos" href={c.url_vehicle} >{c.cta_boton_vehicle}</a></p>

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


                    </div>
                    <div id="sidebar-vehiculos" class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 sinpadding order-0  order-sm-1" >
                        <Vehiculossidebar />
                    </div>

                </div>
            </div>

            <Modalcotizacion />

        </>
    );

}

function soloHibridos() {

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

function soloExonerados() {

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

function todos() {

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

