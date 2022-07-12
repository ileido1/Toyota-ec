import icono_cotizacion_blanco from '../../../images/cotizacion/icono-cotizar-small.png'
import icono_cotizacion_gris from '../../../images/cotizacion/icono-cotizar-gris.png'
import isotipo from '../../../images/cotizacion/isotipo.png'
import icono_test_drive_blanco from '../../../images/cotizacion/icono-test-drive-blanco.png'
import icono_test_drive_gris from '../../../images/cotizacion/coche-gris.png'


export default function Modalcotizacion() {
        
    return (
        <>
            
            <div id="myModal" className="modal">

                <div className="modal-content cuerpo-modal">

                    <div  className="container-fluid" >
                        <div className="row">

                            <div className="barra-botones col-3 nopadding-cotizacion" >

                                <div className="formulario-logo" ><img src={isotipo} alt="Icono cotizacion" /></div>

                                <div className='flexbotones'  >
                                   
                                    <div className="icono-cotizacion" ><img src={icono_cotizacion_blanco} alt="Icono cotizacion" /><p className='texto-icono-cotizar' >SOLICIAR COTIZACION</p></div>
                                    <div className="icono-testdrive" ><img src={icono_test_drive_gris} alt="Icono testdrive" /><p className='texto-icono-testdrive' >QUIERO UN TEST DRIVE</p></div>  
                                       
                                </div>



                            </div>

                            <div className="barra-formulario col-9" >
                                <div className="row" >

                                    <div className="col-12" >
                                        <p className="close cerrar-modal" onClick={cerrarModal} >MINIMIZAR PESTANA&times;</p>
                                    </div>

                                </div>
                                <div className="row" >

                                    <div className="col-12" >
                                        
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