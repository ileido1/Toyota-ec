import { useEffect, useState } from 'react';
import useFetch from "../../../hooks/useFetch";
import { useLocation } from 'react-router-dom';
import Modalcotizacion from "./cart-modal-cotizacion"

import documento from "../../../images/diseno/icono-documento.svg"

let url_backend = 'https://www.toyota.com.ec/'

let logo_dc_vehiculo = ''
let texto_dc_vechiculo = ''

let texto_boton_dc_vehiculo = ''
let url_boton_dc_vechiculo = ''

let texto_pdf_dc_vehiculo = ''
let url_pdf_dc_vehiculo = ''

let imagen_dc_vehiculo_color_1 = ''
let hex_dc_vehiculo_color_1 = ''


let imagen_dc_vehiculo_color_2 = ''
let hex_dc_vehiculo_color_2 = ''

let imagen_dc_vehiculo_color_3 = ''
let hex_dc_vehiculo_color_3 = ''

let imagen_dc_vehiculo_color_4 = ''
let hex_dc_vehiculo_color_4 = ''

let imagen_dc_vehiculo_color_5 = ''
let hex_dc_vehiculo_color_5 = ''

let imagen_dc_vehiculo_color_6 = ''
let hex_dc_vehiculo_color_6 = ''

let imagen_dc_vehiculo_color_7 = ''
let hex_dc_vehiculo_color_7 = ''

let imagen_dc_vehiculo_color_8 = ''
let hex_dc_vehiculo_color_8 = ''

let imagen_dc_vehiculo_color_9 = ''
let hex_dc_vehiculo_color_9 = ''

let imagen_dc_vehiculo_color_10 = ''
let hex_dc_vehiculo_color_10 = ''

let nombre_color_1 = ""
let nombre_color_2 = ""
let nombre_color_3 = ""
let nombre_color_4 = ""
let nombre_color_5 = ""
let nombre_color_6 = ""
let nombre_color_7 = ""
let nombre_color_8 = ""
let nombre_color_9 = ""
let nombre_color_10 = ""

const Cartdiseno = ({ path }) => {

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    let ancho = windowSize.innerWidth

    let url_api = 'v1/vehicle_data_sheet'
    const [respuesta, error] = useFetch(url_api);
    let url_detalle = ''
    const location = useLocation()

    if (respuesta) {

        respuesta.map(c => {

            if (('/' + c.name_vehicle.toLowerCase()) == location.pathname) {
                url_detalle = 'v1/diseno_color_vehicle/' + c.diseno_color_vehicle
            }

        }
        )

    }

    const [detalle, error_detalle] = useFetch(url_detalle);

    if (detalle) {

        detalle.map(v => {

            logo_dc_vehiculo = url_backend + v.logo_dc_vehiculo
            texto_dc_vechiculo = v.texto_dc_vehiculo

            texto_boton_dc_vehiculo = v.texto_boton_dc_vehiculo
            url_boton_dc_vechiculo = v.url_boton_dc_vehiculo

            texto_pdf_dc_vehiculo = v.texto_pdf_dc_vehiculo
            url_pdf_dc_vehiculo = url_backend + v.url_pdf_dc_vehiculo

            imagen_dc_vehiculo_color_1 = url_backend + v.imagen_dc_vehiculo_color_1
            hex_dc_vehiculo_color_1 = v.hex_dc_vehiculo_color_1
            nombre_color_1 = nombreColor(hex_dc_vehiculo_color_1)

            imagen_dc_vehiculo_color_2 = url_backend + v.imagen_dc_vehiculo_color_2
            hex_dc_vehiculo_color_2 = v.hex_dc_vehiculo_color_2
            nombre_color_2 = nombreColor(hex_dc_vehiculo_color_2)

            imagen_dc_vehiculo_color_3 = url_backend + v.imagen_dc_vehiculo_color_3
            hex_dc_vehiculo_color_3 = v.hex_dc_vehiculo_color_3
            nombre_color_3 = nombreColor(hex_dc_vehiculo_color_3)

            imagen_dc_vehiculo_color_4 = url_backend + v.imagen_dc_vehiculo_color_4
            hex_dc_vehiculo_color_4 = v.hex_dc_vehiculo_color_4
            nombre_color_4 = nombreColor(hex_dc_vehiculo_color_4)

            imagen_dc_vehiculo_color_5 = url_backend + v.imagen_dc_vehiculo_color_5
            hex_dc_vehiculo_color_5 = v.hex_dc_vehiculo_color_5
            nombre_color_5 = nombreColor(hex_dc_vehiculo_color_5)

            imagen_dc_vehiculo_color_6 = url_backend + v.imagen_dc_vehiculo_color_6
            hex_dc_vehiculo_color_6 = v.hex_dc_vehiculo_color_6
            nombre_color_6 = nombreColor(hex_dc_vehiculo_color_6)

            imagen_dc_vehiculo_color_7 = url_backend + v.imagen_dc_vehiculo_color_7
            hex_dc_vehiculo_color_7 = v.hex_dc_vehiculo_color_7
            nombre_color_7 = nombreColor(hex_dc_vehiculo_color_7)

            imagen_dc_vehiculo_color_8 = url_backend + v.imagen_dc_vehiculo_color_8
            hex_dc_vehiculo_color_8 = v.hex_dc_vehiculo_color_8
            nombre_color_8 = nombreColor(hex_dc_vehiculo_color_8)

            imagen_dc_vehiculo_color_9 = url_backend + v.imagen_dc_vehiculo_color_9
            hex_dc_vehiculo_color_9 = v.hex_dc_vehiculo_color_9
            nombre_color_9 = nombreColor(hex_dc_vehiculo_color_9)

            imagen_dc_vehiculo_color_10 = url_backend + v.imagen_dc_vehiculo_color_10
            hex_dc_vehiculo_color_10 = v.hex_dc_vehiculo_color_10
            nombre_color_10 = nombreColor(hex_dc_vehiculo_color_10)


        }
        )

    }

    return (
        <>
            <div className="container-fluid " id="content-diseno" >
                <div className="row"  >
                    <div className="col-12">
                        <div id="diseno" className="row pd100 d-none d-sm-none d-md-flex d-lg-flex d-xl-flex"  >
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ">

                                <div className="content-text">

                                    <img src={logo_dc_vehiculo} width="200px" alt="" className="logo-colores" />
                                    <p className="text-cotizar" > {texto_dc_vechiculo} </p>

                                </div>

                                <div className="content-cotizar">
                                    <p data-auto="cotizar-auto" className="btn btn-cotizar " id="cotizar-vehiculo" onClick={abrirModal} >{texto_boton_dc_vehiculo}</p>
                                </div>

                                <div className="content-descarga">
                                    <img src={documento} className="" alt="Boton descarga PDF" /> <span className="text-descargar-catalogo" ><a href={url_pdf_dc_vehiculo} target="_blank" className="cart-link" >{texto_pdf_dc_vehiculo}</a> </span>
                                </div>

                            </div>
                            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                <img id="imagen-auto-diseno" className=" img-fluid imagen-auto-diseno" src={imagen_dc_vehiculo_color_1} alt="Auto Toyota Colores" />
                            </div>
                        </div>

                        <div id="diseno2" className="row d-block d-sm-block d-md-none d-xl-none d-lg-none"  >

                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 d-block d-sm-block d-md-none d-xl-none d-lg-none">
                                <div className="row" >
                                    <div className="col-8" >
                                        <div className="content-text">

                                            <img src={logo_dc_vehiculo} width="200px" alt="" className="logo-mobile-colores" />
                                            <p className="text-cotizar " > {texto_dc_vechiculo} </p>

                                        </div>

                                    </div>

                                    <div className="col-4" >

                                        <div className="content-cotizar">
                                            <p data-auto="cotizar-auto" className="btn btn-cotizar " id="cotizar-vehiculo" onClick={abrirModal} >{texto_boton_dc_vehiculo}</p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                <img id="imagen-auto-diseno2" className=" img-fluid " src={imagen_dc_vehiculo_color_1} alt="" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <p className="text-color-diseno secciones-subtitulos titulo-colores" id="titulo-colores" >{nombre_color_1}</p>
                            </div>
                        </div>

                        <div className="row pd50 fila-colores"  >
                            <div className="col-1">
                                <span className="circulo-color icono-color" data-ancho={ancho} data-nombre={nombre_color_1} data-auto={imagen_dc_vehiculo_color_1} data-color={hex_dc_vehiculo_color_1} style={{ background: hex_dc_vehiculo_color_1 }} onClick={CambiarAuto} ></span>
                            </div>
                            <div className="col-1">
                                <span className="circulo-color icono-color" data-ancho={ancho} data-nombre={nombre_color_2} data-auto={imagen_dc_vehiculo_color_2} data-color={hex_dc_vehiculo_color_2} style={{ background: hex_dc_vehiculo_color_2 }} onClick={CambiarAuto} ></span>
                            </div>
                            <div className="col-1">
                                <span className="circulo-color icono-color" data-ancho={ancho} data-nombre={nombre_color_3} data-auto={imagen_dc_vehiculo_color_3} data-color={hex_dc_vehiculo_color_3} style={{ background: hex_dc_vehiculo_color_3 }} onClick={CambiarAuto} ></span>
                            </div>
                            <div className="col-1">
                                <span className="circulo-color icono-color" data-ancho={ancho} data-nombre={nombre_color_4} data-auto={imagen_dc_vehiculo_color_4} data-color={hex_dc_vehiculo_color_4} style={{ background: hex_dc_vehiculo_color_4 }} onClick={CambiarAuto} ></span>
                            </div>
                            <div className="col-1">
                                <span className="circulo-color icono-color" data-ancho={ancho} data-nombre={nombre_color_5} data-auto={imagen_dc_vehiculo_color_5} data-color={hex_dc_vehiculo_color_5} style={{ background: hex_dc_vehiculo_color_5 }} onClick={CambiarAuto} ></span>
                            </div>
                            <div className="col-1">
                                <span className="circulo-color icono-color" data-ancho={ancho} data-nombre={nombre_color_6} data-auto={imagen_dc_vehiculo_color_6} data-color={hex_dc_vehiculo_color_6} style={{ background: hex_dc_vehiculo_color_6 }} onClick={CambiarAuto} ></span>
                            </div>



                        </div>
                        <div className="row pd50 fila-colores" >

                            {hex_dc_vehiculo_color_7 &&
                                <div className="col-1">
                                    <span className="circulo-color icono-color" data-ancho={ancho} data-nombre={nombre_color_7} data-auto={imagen_dc_vehiculo_color_7} data-color={hex_dc_vehiculo_color_7} style={{ background: hex_dc_vehiculo_color_7 }} onClick={CambiarAuto} >
                                    </span>
                                </div>
                            }

                            {hex_dc_vehiculo_color_9 &&
                                <div className="col-1">
                                    <span className="circulo-color icono-color" data-ancho={ancho} data-nombre={nombre_color_9} data-auto={imagen_dc_vehiculo_color_9} data-color={hex_dc_vehiculo_color_9} style={{ background: hex_dc_vehiculo_color_9 }} onClick={CambiarAuto} >
                                    </span>
                                </div>
                            }

                            {hex_dc_vehiculo_color_10 &&
                                <div className="col-1">
                                    <span className="circulo-color icono-color" data-ancho={ancho} data-nombre={nombre_color_10} data-auto={imagen_dc_vehiculo_color_10} data-color={hex_dc_vehiculo_color_10} style={{ background: hex_dc_vehiculo_color_10 }} onClick={CambiarAuto} >
                                    </span>
                                </div>
                            }

                        </div>
                        <div className="row d-block d-sm-block d-md-none d-xl-none d-lg-none" >
                            <div className="col-12 content-descarga">
                                <img src={documento} className="icono-documento-descarga" alt="Boton descarga PDF" /> <span className="text-descargar-catalogo" ><a href={url_pdf_dc_vehiculo} target="_blank" className="cart-link" >{texto_pdf_dc_vehiculo}</a> </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



        </>
    );
}

export default Cartdiseno;

function abrirModal() {
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the button that opens the modal
    var btn = document.getElementById("cotizar-vehiculo");
    modal.style.display = "block";
}

function cerrarModal() {
    // Get the modal
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "none";
}

function nombreColor(color) {

    let nombre_color = "Color"

    if (color == "#0a0a0a") {

        nombre_color = "Negro"

    }

    if (color == "#ffffff") {

        nombre_color = "Blanco"

    }

    if (color == "#525252") {

        nombre_color = "Gris"

    }

    if (color == "#bababa") {

        nombre_color = "Plata"

    }

    if (color == "#807259") {

        nombre_color = "Bronce"

    }

    if (color == "#64534b") {

        nombre_color = "Café"

    }

    if (color == "#6c737f") {

        nombre_color = "Gris Metálito"

    }


    if (color == "#30515e") {

        nombre_color = "Negro Azulado"

    }

    if (color == "#232c2e") {

        nombre_color = "Negro Mica"

    }

    if (color == "#231f20") {

        nombre_color = "Negro"

    }

    if (color == "#ececee") {

        nombre_color = "Perla"

    }

    if (color == "#a0a2a3") {

        nombre_color = "Plata Metálico"

    }

    if (color == "#a0a2a3") {

        nombre_color = "Plata Metálico"

    }

    if (color == "#bababa") {
        nombre_color = "Plata"
    }

    if (color == "#edebeb") {
        nombre_color = "Blanco"
    }

    if (color == "#2bd1fd") {
        nombre_color = "Turquesa"
    }

    if (color == "#fc0d1b") {
        nombre_color = "Rojo"
    }

    if (color == "#000002") {
        nombre_color = "Negro"
    }

    if (color == "#2aafcc") {
        nombre_color = "Celeste"
    }

    if (color == "#7e9898") {
        nombre_color = "Verde"
    }

    if (color == "#7e9898") {
        nombre_color = "Verde"
    }

    if (color == "#c83942") {
        nombre_color = "Rojo"
    }

    if (color == "#324959") {
        nombre_color = "Azul"
    }

    if (color == "#414b4f") {
        nombre_color = "Gris"
    }

    if (color == "#a8b1b6") {
        nombre_color = "Blanco"
    }

    if (color == "#a8b1b6") {
        nombre_color = "Plata"
    }

    if (color == "#c96a58") {
        nombre_color = "Anaranjado"
    }

    if (color == "#305394") {
        nombre_color = "Azul"
    }

    if (color == "#818690") {
        nombre_color = "Celeste"
    }

    if (color == "#898275") {
        nombre_color = "Cobre"
    }

    if (color == "#262729") {
        nombre_color = "Negro"
    }

    if (color == "#b2b1b4") {
        nombre_color = "Plateado"
    }

    if (color == "#5a5c60") {
        nombre_color = "Plomo"
    }

    if (color == "#b2434b") {
        nombre_color = "Rojo"
    }

    if (color == "#27407b") {
        nombre_color = "Azul"
    }

    if (color == "#ededed") {
        nombre_color = "Perla"
    }

    if (color == "#3e4547") {
        nombre_color = "Gris"
    }

    if (color == "#000002") {
        nombre_color = "Negro"
    }

    if (color == "#99a1a3") {
        nombre_color = "Plata"
    }

    if (color == "#db2633") {
        nombre_color = "Rojo"
    }

    if (color == "#564943") {
        nombre_color = "Café"
    }

    if (color == "#6b7787") {
        nombre_color = "Celeste"
    }

    if (color == "#231f20") {
        nombre_color = "Negro"
    }

    if (color == "#898a8f") {
        nombre_color = "Plata"
    }

    if (color == "#982738") {
        nombre_color = "Rojo"
    }

    if (color == "#f5f4f3") {
        nombre_color = "Perla"
    }

    if (color == "#6e6967") {
        nombre_color = "Bronce"
    }

    if (color == "#473734") {
        nombre_color = "Café"
    }

    if (color == "#939ea4") {
        nombre_color = "Plateado"
    }

    if (color == "#4a5454") {
        nombre_color = "Plomo"
    }

    if (color == "#8d313b") {
        nombre_color = "Rojo"
    }

    if (color == "#8d313b") {
        nombre_color = "Rojo"
    }

    if (color == "#231f20") {
        nombre_color = "Negro"
    }

    if (color == "#371e28") {
        nombre_color = "Vino"
    }

    if (color == "#564943") {
        nombre_color = "Cobre"
    }

    if (color == "#cacbcd") {
        nombre_color = "Plateado"
    }

    if (color == "#cacbcd") {
        nombre_color = "Plateado"
    }

    if (color == "#305394") {
        nombre_color = "Azul"
    }

    if (color == "#3365b5") {
        nombre_color = "Azul Grisáceo"
    }

    if (color == "#b0953d") {
        nombre_color = "Cobre"
    }

    if (color == "#5a5c60") {
        nombre_color = "Gris"
    }

    if (color == "#b2434b") {
        nombre_color = "Rojo"
    }

    if (color == "#b2434b") {
        nombre_color = "Rojo"
    }

    if (color == "#9f562f") {
        nombre_color = "Anaranjado"
    }

    if (color == "#1b264b") {
        nombre_color = "Azul"
    }

    if (color == "#cdcfce") {
        nombre_color = "Plata"
    }

    if (color == "#909ba1") {
        nombre_color = "Plomo"
    }

    if (color == "#bc273f") {
        nombre_color = "Rojo"
    }

    if (color == "#313272") {
        nombre_color = "Azul"
    }

    if (color == "#a8a49f") {
        nombre_color = "Café"
    }

    if (color == "#617a8c") {
        nombre_color = "Azul"
    }

    if (color == "#3e3e3f") {
        nombre_color = "Gris"
    }

    if (color == "#231f20") {
        nombre_color = "Negro"
    }

    if (color == "#a0a2a3") {
        nombre_color = "Plata"
    }

    if (color == "#b9702c") {
        nombre_color = "Anaranjado"
    }

    if (color == "#3e3e3f") {
        nombre_color = "Gris"
    }

    if (color == "#231f2") {
        nombre_color = "Negro"
    }

    if (color == "#a0a2a3") {
        nombre_color = "Plata"
    }

    if (color == "#bd273d") {
        nombre_color = "Rojo"
    }

    if (color == "#c2baad") {
        nombre_color = "Baigue"
    }

    if (color == "#e6e1e1") {
        nombre_color = "Perla Blanco"
    }

    if (color == "#313133") {
        nombre_color = "Gris"
    }

    if (color == "#0a0a0a") {
        nombre_color = "Negro"
    }

    if (color == "#898c93") {
        nombre_color = "Plomo"
    }

    if (color == "#81282e") {
        nombre_color = "Rojo"
    }

    if (color == "#807259") {
        nombre_color = "Bronce"
    }

    if (color == "#64534b") {
        nombre_color = "Café"
    }

    if (color == "#8a969c") {
        nombre_color = "Plomo"
    }

    return nombre_color

}

// Get the modal
var modal = document.getElementById("myModal");
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onscroll = function () { myFunction() };

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {

    // Get the navbar
    var navbar = document.getElementById("menu-producto")
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        navbar.classList.remove("menu-sticky")
    } else {
        navbar.classList.remove("sticky")
        navbar.classList.add("menu-sticky")
    }
}

function CambiarAuto(e) {
    var ancho = e.target.dataset.ancho
    var imagen = e.target.dataset.auto
    let pantalla = ""

    if (ancho < 601) { pantalla = "2" }

    var nombre_color = e.target.dataset.nombre
    var automovil = document.getElementById('imagen-auto-diseno' + pantalla)
    automovil.setAttribute('style', 'transition:all 0.5s 0s ease', '-webkit-transition: all 0.5s 0s ease', '-moz-transition: all 0.5s 0s ease', '-o-transition: all 0.5s 0s ease');
    var titulo_colores = document.getElementById('titulo-colores')
    automovil.src = imagen
    //titulo_colores.setAttribute('style', 'color: '+color);
    titulo_colores.innerHTML = nombre_color;

}


function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}