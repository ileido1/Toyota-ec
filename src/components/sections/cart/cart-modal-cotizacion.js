import { useState, useEffect } from 'react';
import { get } from 'axios';

import icono_cotizacion_blanco from '../../../images/cotizacion/icono-cotizar-small.png'
import icono_cotizacion_gris from '../../../images/cotizacion/icono-cotizar-gris.png'
import isotipo from '../../../images/cotizacion/toyota-logo.png'
import icono_test_drive_blanco from '../../../images/cotizacion/icono-test-drive-blanco.png'
import icono_test_drive_gris from '../../../images/cotizacion/coche-gris.png'
import cerrar from '../../../images/cotizacion/cerrar.svg'
import link_externo from '../../../images/cotizacion/link-externo.svg'
import cerrar_mobile from '../../../images/cotizacion/Icon ionic-ios-close-circle-outline.svg'


export default function Modalcotizacion({ carro }) {

    let endpoint = 'https://www.toyota.com.ec/api/v2/cotizar/?nombres=';
    const [proceso, setProceso] = useState('');

    function handleClick(event) {

        let nombres = document.getElementById("nombres").value;
        let cedula = document.getElementById("cedula2").value;
        let celular = document.getElementById("celular2").value;
        let email = document.getElementById("email2").value;

        var select = document.getElementById('modelo');
        var modelo = select.options[select.selectedIndex].value;
        
        let ciudad = document.getElementById("ciudad").value;
        let terminos = document.getElementById('terminos2').checked;

        //console.log(document.getElementById('terminos2'))
        console.log(nombres,cedula,celular,email,modelo,ciudad,terminos)

        if(nombres == '' || cedula == '' || celular == '' || email == '' || modelo == '' || ciudad == '' || terminos != true ){
            alert ('Todos los campos son obligatorios.')
        }else{

            const getproceso = async () => {
                const resultexo = await get(`${'https://www.toyota.com.ec/api/v2/cotizar/?nombres=' + nombres + '&cedula=' + cedula + '&celular=' + celular + '&email=' + email + '&modelo=' + modelo + '&ciudad=' + ciudad }`);
                const procesos = resultexo.data;
                setProceso(procesos);
            }
    
            getproceso()

        }
                
    }

    setTimeout(
        function() {

            if(proceso.status==200){

                var elemento = document.getElementById("enviar-cotizar");
                var mensaje = document.getElementById("mensaje-cotizar");
            
                elemento.classList.add("ocultar-icono");
                mensaje.innerHTML = proceso.msj; 
                mensaje.classList.remove("ocultar-icono");

        
            }else if(proceso.status==404){
                
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

            <div id="myModal" className="modal">

                <div className="modal-content cuerpo-modal">

                    <div className="container-fluid expansion-fondo-formulario" >
                        <div className="row">

                            <div className="barra-botones col-sm-3 col-md-3 col-lg-3 col-xl-3 nopadding-cotizacion d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex" >

                                <div className="formulario-logo" ><img src={isotipo} alt="Icono cotizacion" /></div>

                                <div className='flexbotones'  >

                                    <div id="icono-cotizacion" className="icono-cotizacion" >

                                        <img id='img-icono-cotizar-blanco' src={icono_cotizacion_blanco} alt="Icono cotizacion." onClick={activarCotizar} />
                                        <img id='img-icono-cotizar-gris' src={icono_cotizacion_gris} alt="Icono cotizacion." onClick={activarCotizar} className="ocultar-icono" />
                                        <p id="texto-icono-cotizar" className='texto-icono-cotizar' onClick={activarCotizar} >SOLICITAR COTIZACIÓN</p>

                                    </div>

                                    <div id="icono-testdrive" className="icono-testdrive" >

                                        <img id="img-testdrive-cotizar-gris" src={icono_test_drive_gris} alt="Icono testdrive" onClick={activarTestdrive} />
                                        <img id="img-testdrive-cotizar-blanco" src={icono_test_drive_blanco} alt="Icono testdrive" className='ocultar-icono' onClick={activarTestdrive} />

                                        <p id="texto-icono-testdrive" className='texto-icono-testdrive' onClick={activarTestdrive} >QUIERO UN TEST DRIVE</p></div>

                                </div>

                            </div>

                            <div className="barra-formulario col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9" >
                                <div className="row top-cerrar-modal" >

                                    <div className="col-12 d-none d-none d-sm-block d-md-block d-lg-block d-xl-block" >
                                        <p className="close cerrar-modal" onClick={cerrarModal} >MINIMIZAR PESTAÑA <img src={cerrar} /> </p>
                                    </div>

                                    <div className="col-8 d-flex d-sm-none d-md-none d-lg-none d-xl-none" >
                                        <div className="formulario-logo" ><img src={isotipo} alt="Icono cotizacion" /></div>
                                    </div>

                                    <div className="col-4 d-flex d-sm-none d-md-none d-lg-none d-xl-none" >
                                        <p className="close cerrar-modal" onClick={cerrarModal} >CERRAR <img src={cerrar_mobile} /> </p>
                                    </div>

                                </div>

                                <div className="row flex-botones-mobile" >

                                    <div id='boton-mobile-cotizar' className="col-6 d-flex d-sm-none d-md-none d-lg-none d-xl-none boton-mobile-red" onClick={activarCotizarMobile} >
                                        <p>COTIZAR</p>
                                    </div>

                                    <div id='boton-mobile-td' className="col-6 d-flex d-sm-none d-md-none d-lg-none d-xl-none boton-mobile-white" onClick={activarTestdriveMobile} >
                                        <p>TEST DRIVE</p>
                                    </div>

                                </div>

                                <div className="row" >

                                    <div id='formulario-cotizar-contenedor' className="col-12" >

                                        <p className="titulo-formulario-cotizar d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex" >Cotizar</p>
                                        <p className="parrafo-formulario-cotizar d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex" >Solicita aquí la cotización de tu vehículo la cual enviaremos a tu correo</p>
                                        <p className="parrafo-formulario-cotizar d-block d-sm-none d-md-none d-lg-none d-xl-none" >Pide una cotización</p>
                                        <div className="content-formulario-campos" >
                                            <input type="text" name="nombres" id="nombres" placeholder="NOMBRE Y APELLIDO*" />
                                            <br></br>
                                            <input type="text" name="cedula" id="cedula2" placeholder="CÉDULA*" />
                                            <br></br>
                                            <input type="text" name="celular" id="celular2" placeholder="CELULAR*" />
                                            <br></br>
                                            <input type="text" name="email" id="email2" placeholder="E-MAIL*" />
                                            <br></br>
                                            <div className="content-selects" >
                                                <label className='d-none d-sm-inline-block d-md-inline-block d-lg-inline-block d-xl-inline-block' htmlFor="modelo">MODELO DE INTERÉS</label>
                                      { carro ?          
                                                <select id="modelo" name="modelo" >
                                                    <option value={carro} selected="selected">{carro}</option>
                                                </select>
                                     : 
                                     
                                                <select id="modelo" name="modelo" className='modelo' >
                                                <option value="" >-- Seleccione --</option>
                                                <option value="Raize">Raize</option>
                                                <option value="Yaris Sport">Yaris Sport</option>
                                                <option value="Yaris Sedan">Yaris Sedán</option>
                                                <option value="Corolla Sedán">Corolla Sedán</option>
                                                <option value="Corolla Cross">Corolla Cross</option>
                                                <option value="C-HR Hibrido">C-HR Híbrido</option>
                                                <option value="RAV 4">RAV 4</option>
                                                <option value="Fortuner">Fortuner</option>
                                                <option value="Land Cruiser Prado">Land Cruiser Prado</option>
                                                <option value="Land Cruiser 200">Land Cruiser 300</option>
                                                <option value="Rush">Rush</option>
                                                <option value="Hilux 4X2 Cabina Doble">Hilux 4X2 Cabina Doble</option>
                                                <option value="Hilux 4x4 Cabina Doble">Hilux 4x4 Cabina Doble</option>
                                                <option value="Hilux Cabina Simple">Hilux Cabina Simple</option>
                                                <option value="Hilux 4X4 Cabina Doble AT">Hilux 4X4 Cabina Doble AT</option>
                                            </select>
                                     
                                     }                       
                                            </div>
                                            <br></br>
                                            <div className="content-selects" >
                                                <label className='d-none d-sm-inline-block d-md-inline-block d-lg-inline-block d-xl-inline-block' htmlFor="ciudad">CIUDAD Y CONCESIONARIO</label>
                                                <select id="ciudad" name="ciudad" >

                                                    <option value="" selected="selected">- Seleccionar -</option>
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
                                            </div>
                                            <br></br>
                                            <div className="content-checkbox" >
                                                <input type="checkbox" name="terminos" id="terminos2" />
                                                <label htmlFor="terminos"><a href="/terminos-y-condiciones" target="_blank" className='link-terminos' >Términos y condiciones <img src={link_externo}/></a>   </label>
                                            </div>

                                            <br></br>
                                            <p id='enviar-cotizar' className="btn formulario-boton-enviar btn-primary" onClick={handleClick} >ENVÍAR</p>
                                            <p id='mensaje-cotizar' className='ocultar-icono mensaje-formulario' >Datos enviados correctamente.</p>
                                        </div>

                                    </div>

                                    <div id='formulario-testdrive-contenedor' className="col-12 ocultar" >

                                        <p className="titulo-formulario-cotizar d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex" >Test Drive</p>
                                        <p className="parrafo-formulario-cotizar d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex" >Compruébalo tu mismo y déjate encantar por un TOYOTA.</p>
                                        <p className="parrafo-formulario-cotizar d-block d-sm-none d-md-none d-lg-none d-xl-none" >Pide tu Test Drive</p>
                                        <div className="content-formulario-campos" >
                                            <input type="text" name="nombres" id="nombres" placeholder="NOMBRE Y APELLIDO*" />
                                            <br></br>
                                            <input type="text" name="nombres" id="nombres" placeholder="CELULAR*" />
                                            <br></br>
                                            <div className="content-selects" >
                                                <label className='d-none d-sm-inline-block d-md-inline-block d-lg-inline-block d-xl-inline-block' htmlFor="modelo">MODELO DE INTERÉS</label>
                                                <select id="modelo" name="modelo" >
                                                    <option value="" selected="selected">- Seleccionar -</option>
                                                    <option value="Raize">Raize</option>
                                                    <option value="Yaris Sport">Yaris Sport</option>
                                                    <option value="Yaris Sedan">Yaris Sedán</option>
                                                    <option value="Corolla Sedán">Corolla Sedán</option>
                                                    <option value="Corolla Cross">Corolla Cross</option>
                                                    <option value="C-HR Hibrido">C-HR Híbrido</option>
                                                    <option value="RAV 4">RAV 4</option>
                                                    <option value="Fortuner">Fortuner</option>
                                                    <option value="Land Cruiser Prado">Land Cruiser Prado</option>
                                                    <option value="Land Cruiser 200">Land Cruiser 300</option>
                                                    <option value="Rush">Rush</option>
                                                    <option value="Hilux 4X2 Cabina Doble">Hilux 4X2 Cabina Doble</option>
                                                    <option value="Hilux 4x4 Cabina Doble">Hilux 4x4 Cabina Doble</option>
                                                    <option value="Hilux Cabina Simple">Hilux Cabina Simple</option>
                                                    <option value="Hilux 4X4 Cabina Doble AT">Hilux 4X4 Cabina Doble AT</option>
                                                </select>
                                            </div>
                                            <br></br>
                                            <div className="content-selects" >
                                                <label className='d-none d-sm-inline-block d-md-inline-block d-lg-inline-block d-xl-inline-block' htmlFor="ciudad">CIUDAD Y CONCESIONARIO</label>
                                                <select id="ciudad" name="ciudad" >
                                                    <option value="" selected="selected">- Seleccionar -</option>
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
                                            </div>

                                            <br></br>
                                            <p id='enviar-testdrive' className="btn formulario-boton-enviar btn-primary" onClick={enviarDatosTestDrive} >ENVÍAR</p>
                                            <br></br>
                                            <br></br>
                                            <p className="text-experiencia-testdrive" >Experiencia Test Drive</p>
                                            <p id='mensaje-testdrive' className='ocultar-icono mensaje-formulario' >Datos enviados correctamente.</p>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>




                </div>

            </div>



        </>
    );

}

function cerrarModal() {
    // Get the modal
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "none";
}

function enviarDatosCotizar() {
    var elemento = document.getElementById("enviar-cotizar");
    var mensaje = document.getElementById("mensaje-cotizar");

    elemento.classList.add("ocultar-icono");
    mensaje.classList.remove("ocultar-icono");
}

function enviarDatosTestDrive() {
    var elemento = document.getElementById("enviar-testdrive");
    var mensaje = document.getElementById("mensaje-testdrive");

    elemento.classList.add("ocultar-icono");
    mensaje.classList.remove("ocultar-icono");
}

function activarTestdriveMobile() {

    var testdrive = document.getElementById("formulario-testdrive-contenedor");
    var cotizar_c = document.getElementById("formulario-cotizar-contenedor");

    var cotizar = document.getElementById("boton-mobile-cotizar");
    var td = document.getElementById("boton-mobile-td");

    cotizar.classList.remove("boton-mobile-red");
    cotizar.classList.add("boton-mobile-white");
    td.classList.remove("boton-mobile-white");
    td.classList.add("boton-mobile-red");

    cotizar_c.classList.add("ocultar");
    testdrive.classList.remove("ocultar");

}

function activarCotizarMobile() {

    var testdrive = document.getElementById("formulario-testdrive-contenedor");
    var cotizar_c = document.getElementById("formulario-cotizar-contenedor");

    var cotizar = document.getElementById("boton-mobile-cotizar");
    var td = document.getElementById("boton-mobile-td");

    cotizar.classList.remove("boton-mobile-white");
    cotizar.classList.add("boton-mobile-red");

    td.classList.remove("boton-mobile-red");
    td.classList.add("boton-mobile-white");

    cotizar_c.classList.remove("ocultar");
    testdrive.classList.add("ocultar");

}

function activarTestdrive() {

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

function activarCotizar() {

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

    img_icono_cotizarblanco.classList.remove("ocultar-icono");
    img_icono_cotizargris.classList.add("ocultar-icono");
    img_testdrive_cotizargris.classList.remove("ocultar-icono");
    img_testdrive_cotizarblanco.classList.add("ocultar-icono");

    cotizar.classList.remove("ocultar");
    testdrive.classList.add("ocultar");

    iconocotizar.style.background = "#E20B2A";

    iconotestdrive.style.background = "transparent";
    iconotestdrive.style.borderBottom = "1px solid #817F7F";
    iconocotizar.style.borderTop = "0px solid #817F7F";
    textoiconocotizar.style.color = "#FFFFFF";
    textoiconotestdrive.style.color = "#817F7F";

}

