import icono_cotizacion_blanco from '../../../images/cotizacion/icono-cotizar-small.png'
import icono_cotizacion_gris from '../../../images/cotizacion/icono-cotizar-gris.png'
import isotipo from '../../../images/cotizacion/toyota-logo.png'
import icono_test_drive_blanco from '../../../images/cotizacion/icono-test-drive-blanco.png'
import icono_test_drive_gris from '../../../images/cotizacion/coche-gris.png'


export default function Modalcotizacion() {
        
    return (
        <>
            
            <div id="myModal" className="modal">

                <div className="modal-content cuerpo-modal">

                    <div  className="container-fluid expansion-fondo-formulario" >
                        <div className="row">

                            <div className="barra-botones col-3 nopadding-cotizacion" >

                                <div className="formulario-logo" ><img src={isotipo} alt="Icono cotizacion" /></div>

                                <div className='flexbotones'  >
                                   
                                    <div id="icono-cotizacion" className="icono-cotizacion" >
                                        
                                        <img id='img-icono-cotizar-blanco' src={icono_cotizacion_blanco} alt="Icono cotizacion." onClick={activarCotizar} />
                                        <img id='img-icono-cotizar-gris' src={icono_cotizacion_gris} alt="Icono cotizacion." onClick={activarCotizar} className="ocultar-icono" />
                                        <p id="texto-icono-cotizar" className='texto-icono-cotizar' >SOLICITAR COTIZACIÓN</p>
                                    
                                    </div>

                                    <div id="icono-testdrive" className="icono-testdrive" >

                                        <img id="img-testdrive-cotizar-gris" src={icono_test_drive_gris} alt="Icono testdrive" onClick={activarTestdrive} />
                                        <img id="img-testdrive-cotizar-blanco" src={icono_test_drive_blanco} alt="Icono testdrive" className='ocultar-icono' onClick={activarTestdrive} />
                                                                              
                                        <p id="texto-icono-testdrive" className='texto-icono-testdrive' >QUIERO UN TEST DRIVE</p></div>  
                                       
                                </div>

                            </div>

                            <div className="barra-formulario col-9" >
                                <div className="row" >

                                    <div className="col-12" >
                                        <p className="close cerrar-modal" onClick={cerrarModal} >MINIMIZAR PESTANA X</p>
                                    </div>

                                </div>
                                <div className="row" >

                                    <div id='formulario-cotizar-contenedor' className="col-12" >
                                        
                                        <p className="titulo-formulario-cotizar" >Cotizar</p>
                                        <p className="parrafo-formulario-cotizar" >Solicita aquí la cotización de tu vehículo la cual enviaremos a tu correo</p>
                                        <div className="content-formulario-campos" >
                                            <input type="text" name="nombres" id="nombres" value="" placeholder="NOMBRE Y APELLIDO*" />
                                            <br></br>
                                            <input type="text" name="nombres" id="nombres" value="" placeholder="CÉDULA*" />
                                            <br></br>
                                            <input type="text" name="nombres" id="nombres" value="" placeholder="CELULAR*" />
                                            <br></br>
                                            <input type="text" name="nombres" id="nombres" value="" placeholder="E-MAIL*" />
                                            <br></br>
                                            <div className="content-selects" >
                                                <label for="modelo">MODELO DE INTERÉS</label>
                                                <select id="modelo" name="modelo" >
                                                    <option value="">-Seleccione</option>
                                                </select>
                                            </div>
                                            <br></br>
                                            <div className="content-selects" >
                                                <label for="ciudad">CIUDAD Y CONCESIONARIO</label>
                                                <select id="ciudad" name="ciudad" >
                                                    <option value="">-Seleccione</option>
                                                </select>
                                            </div>
                                            <br></br>
                                            <div className="content-checkbox" >
                                                <input type="checkbox" name="terminos" id="terminos" value="" />
                                                <label for="terminos">Términos y condiciones</label>
                                            </div>

                                            <br></br>
                                            <p className="btn formulario-boton-enviar btn-primary" >ENVIAR</p>
                                        </div>

                                    </div>

                                    <div id='formulario-testdrive-contenedor' className="col-12 ocultar" >
                                        
                                        <p className="titulo-formulario-cotizar" >Test Drive</p>
                                        <p className="parrafo-formulario-cotizar" >Compruébalo tu mismo y déjate encantar por un TOYOTA.</p>
                                        <div className="content-formulario-campos" >
                                            <input type="text" name="nombres" id="nombres" value="" placeholder="NOMBRE Y APELLIDO*" />
                                            <br></br>
                                            <input type="text" name="nombres" id="nombres" value="" placeholder="CELULAR*" />
                                            <br></br>
                                            <div className="content-selects" >
                                                <label for="modelo">MODELO DE INTERÉS</label>
                                                <select id="modelo" name="modelo" >
                                                    <option value="">-Seleccione</option>
                                                </select>
                                            </div>                                            
                                            <br></br>
                                            <div className="content-selects" >
                                                <label for="ciudad">CIUDAD Y CONCESIONARIO</label>
                                                <select id="ciudad" name="ciudad" >
                                                    <option value="">-Seleccione</option>
                                                </select>
                                            </div>
                                            <br></br>
                                            <div className="content-checkbox" >
                                                <input type="checkbox" name="terminos" id="terminos" value="" />
                                                <label for="terminos">Términos y condiciones</label>
                                            </div>

                                            <br></br>
                                            <p className="text-experiencia-testdrive" >Experiencia Test Drive</p>
                                            <p></p>
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

function cerrarModal(){
    // Get the modal
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "none";
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

function activarCotizar(){

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

