import { useState, useEffect } from 'react';
import { get } from 'axios';

import cerrar from '../../images/cotizacion/cerrar.svg'

export default function ModalPrius4g(){

    let endpoint = 'https://www.toyota.com.ec/api/v2/campaigns/service_prius_4g/?chasis=';
    const [proceso, setProceso] = useState('');
    const [proceso_campana, setProcesoCampana] = useState('');

    function handleClick(event) {

        let chasis = document.getElementById("chasis2").value;
        
        const getproceso = async () => {
            const resultexo = await get(`${endpoint + chasis}`);
            const procesos = resultexo.data;
            setProceso(procesos);
        }

        getproceso()
        
    }

    function EnviarDatosCampanaPrius4g(){
 
        let chasis = document.getElementById("chasis2").value;
        let nombre_apellido = document.getElementById("nombre_apellido2").value;
        let email1 = document.getElementById("email2").value;
        let celular1 = document.getElementById("celular2").value;
        let cedula1 = document.getElementById("cedula2").value;
        var select = document.getElementById('ciudadoconcesionario2');
        var ciudadoconcesionario = select.options[select.selectedIndex].value;

        let endpoint_campana = "https://www.toyota.com.ec/api/v2/campaigns_contacted/?nombre="+nombre_apellido+"&cedula="+cedula1+"&email="+email1+"&celular="+celular1+"&ciudad="+ciudadoconcesionario+"&chasis="+chasis;
        
        const getproceso_campana = async () => {
            const resultexo = await get(`${endpoint_campana}`);
            const procesos_campana = resultexo.data;
            setProcesoCampana(procesos_campana);
        }

        getproceso_campana()

    }

    setTimeout(
        function() {

            if(proceso.status==200){

                if(proceso.msj == 'Tú solicitud ya fue atentida.'){
                    
                    var mensaje_atendido = document.getElementById("mensaje-atendido-prius4g")
                    mensaje_atendido.innerHTML = proceso.msj
                    mensaje_atendido.classList.add('mostrar')

                }else if(proceso.msj == 'Su vehículo aplica a esta campaña de servicio.'){

                    var resultado_chasis = document.getElementById("resultado-chasis-prius4g")
                    var consulta_chasis = document.getElementById("consulta-chasis-prius4g")
                    var mensaje_atendido = document.getElementById("mensaje-atendido-prius4g")

                    mensaje_atendido.innerHTML = ''              
                    resultado_chasis.classList.remove("ocultar")
                    consulta_chasis.classList.add("ocultar")

                }else{

                    var resultado_chasis = document.getElementById("resultado-chasis-prius4g")
                    var consulta_chasis = document.getElementById("consulta-chasis-prius4g")
                    var mensaje_atendido = document.getElementById("mensaje-atendido-prius4g")
                    mensaje_atendido.innerHTML = ''
                
                    resultado_chasis.classList.remove("ocultar")
                    consulta_chasis.classList.add("ocultar")

                }
       
            }else if(proceso.status==404){

                ResultadoNA()

            }

            if(proceso_campana.status==200){

                console.log(1)

                if(proceso_campana.msj == 'Ya tenemos tus datos, muy pronto uno de nuestros asesores se comunicará.'){

                    console.log(2)
                    
                    var campos_form = document.getElementById("campos-form-prius4g")
                    var div_mensaje = document.getElementById("mensaje-prius4g")
                    div_mensaje.innerHTML = proceso_campana.msj
                    campos_form.classList.add("ocultar")

                }else if(proceso_campana.msj == 'Información recibida, muy pronto uno de nuestros asesores se comunicará.' ){

                    console.log(3)
                    
                    var campos_form = document.getElementById("campos-form-prius4g")
                    var div_mensaje = document.getElementById("mensaje-prius4g")
                    div_mensaje.innerHTML = proceso_campana.msj
                    campos_form.classList.add("ocultar")


                }
        
            }else if(proceso_campana.status==404){


            }


           
        }
        .bind(this),
        800
    );


    return (
        <>

            <div id="myModalPrius4g" className="modal modal-campana ">

                <div className="modal-content cuerpo-modal alto-modal">

                    <div className='container-fluid' >
                        <div className="row" >
                            <div className="col-12" >
                                <p className="close cerrar-modal-takata" onClick={cerrarModalPrius4g} >CERRAR <img src={cerrar} /> </p>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid " >

                    <div className="row">
                            <div id='consulta-chasis-prius4g' className='col-12' >

                                <p className='mt40' >POR FAVOR INGRESE LOS 17 NÚMEROS DEL CHASIS</p>
                                <p>(PUEDE ENCONTRARLO EN SU MATRÍCULA)</p>

                                <input type="text" name="chasis2" id="chasis2" placeholder="ESCRIBIR NÚMERO DE CHASIS" />
                                <p id='mensaje-atendido-prius4g' ></p>
                                <p className="boton-enviar" onClick={handleClick} >ENVIAR</p>

                            </div>
                            <div id='resultado-chasis-prius4g' className='col-12 ocultar' >

                                <div id='campos-form-prius4g' className='campos-form' >

                                <p className='mt_resultado_chasis' >SU VEHÍCULO APLICA A ESTA CAMPAÑA DE SERVICIO</p>
                                <p >Por favor complete el formulario a continuación. Tras su envío será contactado.</p>
                                <br></br>
                                <input type="text" name="nombre_apellido" id="nombre_apellido2" placeholder="NOMBRE Y APELLIDO" />
                                <input type="text" name="email" id="email2" placeholder="E-MAIL" />
                                <input type="text" name="celular" id="celular2" placeholder="CELULAR" maxLength="10" />
                                <input type="text" name="cedula" id="cedula2" placeholder="CEDULA" maxLength="13" />

                                <select class="form-select campo-select" id="ciudadoconcesionario2">

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

                                <p className="boton-enviar-chasis-datos" onClick={EnviarDatosCampanaPrius4g} >ENVIAR</p>

                                </div>

                                <p id='mensaje-prius4g' ></p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div id="myModalPrius4gResultado" className="modal modal-campana-resultado">

                <div className="modal-content cuerpo-modal">

                    <div className='container-fluid' >
                        <div className="row" >
                            <div className="col-12" >
                                <p className="close cerrar-modal-takata-resulta" onClick={cerrarModalResultado} >CERRAR <img src={cerrar} /> </p>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid " >

                        <div className="row">
                            <div id='resultado-campana' className='col-12' >

                                <p className='mt40' >SE HAN ENVIADO SUS DATOS CON ÉXITO. PRONTO UN ASESOR TE ESTARÁ CONTACTANDO.</p>                           

                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div id="myModalPrius4gResultadoNA" className="modal modal-campana-resultadoNA">

                <div className="modal-content cuerpo-modal">

                    <div className='container-fluid' >
                        <div className="row" >
                            <div className="col-12" >
                                <p className="close cerrar-modal-takata-resulta" onClick={cerrarModalResultadoNA} >CERRAR <img src={cerrar} /> </p>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid " >

                        <div className="row">
                            <div id='resultado-p' className='col-12' >

                                <p className='mt40 mensaje-campana-na' >Su vehículo no aplica a esta campaña de servicio.</p>                           

                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </>
    );

}


function EnviarDatosPrius4g(){

    cerrarModalPrius4g()
    var modal = document.getElementById("myModalPrius4gResultado");
    modal.style.display = "block";

}

function ResultadoNA(){

    cerrarModalPrius4g()
    var modal = document.getElementById("myModalTakataResultadoNA");
    modal.style.display = "block";

}

/* campanas */

function cerrarModalPrius4g(){
    // Get the modal
    var modal = document.getElementById("myModalPrius4g");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "none";
}

function cerrarModalResultado() {
    // Get the modal
    var modal = document.getElementById("myModalPrius4gResultado");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "none";
}

function cerrarModalResultadoNA() {
    // Get the modal
    var modal = document.getElementById("myModalPrius4gResultado");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "none";
}

/* campanas */