import { useState, useEffect } from 'react';
import { get } from 'axios';

import cerrar from '../../images/cotizacion/cerrar.svg'

export default function ModalRav4(){

    let endpoint = 'https://www.toyota.com.ec/api/v2/campaigns/service_rav4_2002_2005/?chasis=';
    const [proceso, setProceso] = useState('');
    const [proceso_campana, setProcesoCampana] = useState('');

    function handleClick(event) {

        let chasis = document.getElementById("chasis-rav4").value;
        
        const getproceso = async () => {
            const resultexo = await get(`${endpoint + chasis}`);
            const procesos = resultexo.data;
            setProceso(procesos);
        }

        getproceso()
        
    }

    function EnviarDatosCampanaRav4(){
 
        let chasis = document.getElementById("chasis-rav4").value;
        let nombre_apellido = document.getElementById("nombre_apellido4").value;
        let email1 = document.getElementById("email4").value;
        let celular1 = document.getElementById("celular4").value;
        let cedula1 = document.getElementById("cedula4").value;
        var select = document.getElementById('ciudadoconcesionario4');
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
                    
                    var mensaje_atendido = document.getElementById("mensaje-atendido-rav4")
                    mensaje_atendido.innerHTML = proceso.msj
                    mensaje_atendido.classList.add('mostrar')

                }else if(proceso.msj == 'Su vehículo aplica a esta campaña de servicio.'){

                    var resultado_chasis = document.getElementById("resultado-chasis-rav4")
                    var consulta_chasis = document.getElementById("consulta-chasis-rav4")
                    var mensaje_atendido = document.getElementById("mensaje-atendido-rav4")

                    mensaje_atendido.innerHTML = ''              
                    resultado_chasis.classList.remove("ocultar")
                    consulta_chasis.classList.add("ocultar")

                }else{

                    var resultado_chasis = document.getElementById("resultado-chasis-rav4")
                    var consulta_chasis = document.getElementById("consulta-chasis-rav4")
                    var mensaje_atendido = document.getElementById("mensaje-atendido-rav4")
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
                    
                    var campos_form = document.getElementById("campos-form-rav4")
                    var div_mensaje = document.getElementById("mensaje-rav4")
                    div_mensaje.innerHTML = proceso_campana.msj
                    campos_form.classList.add("ocultar")

                }else if(proceso_campana.msj == 'Información recibida, muy pronto uno de nuestros asesores se comunicará.' ){

                    console.log(3)
                    
                    var campos_form = document.getElementById("campos-form-rav4")
                    var div_mensaje = document.getElementById("mensaje-rav4")
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

            <div id="myModalRav4" className="modal modal-campana">

                <div className="modal-content cuerpo-modal">

                    <div className='container-fluid' >
                        <div className="row" >
                            <div className="col-12" >
                                <p className="close cerrar-modal-takata" onClick={cerrarModalRav4} >CERRAR <img src={cerrar} /> </p>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid " >

                        <div className="row">
                            <div id='consulta-chasis-rav4' className='col-12' >

                                <p className='mt40' >POR FAVOR INGRESE LOS 17 NÚMEROS DEL CHASIS</p>
                                <p>(PUEDE ENCONTRARLO EN SU MATRÍCULA)</p>

                                <input type="text" name="chasis-rav4" id="chasis-rav4" placeholder="ESCRIBIR NÚMERO DE CHASIS" />
                                <p id='mensaje-atendido-rav4' ></p>
                                <p className="boton-enviar" onClick={handleClick} >ENVIAR</p>

                            </div>
                            <div id='resultado-chasis-rav4' className='col-12 ocultar resultado-chasis' >

                            <div id='campos-form-rav4' className='campos-form' >

                                <p className='mt_resultado_chasis' >SU VEHÍCULO APLICA A ESTA CAMPAÑA DE SERVICIO</p>
                                <p >Por favor complete el formulario a continuación. Tras su envío será contactado.</p>
                                <br></br>
                                <input type="text" name="nombre_apellido" id="nombre_apellido4" placeholder="NOMBRE Y APELLIDO" />
                                <input type="text" name="email" id="email4" placeholder="E-MAIL" />
                                <input type="text" name="celular" id="celular4" placeholder="CELULAR" maxLength="10" />
                                <input type="text" name="cedula" id="cedula4" placeholder="CEDULA" maxLength="13" />

                                <select class="form-select campo-select" id="ciudadoconcesionario4">

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
                                

                                <p className="boton-enviar-chasis-datos" onClick={EnviarDatosCampanaRav4} >ENVIAR</p>
                            </div>

                            <p id='mensaje-rav4' ></p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div id="myModalRav4Resultado" className="modal modal-campana-resultado">

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

            <div id="myModalRav4ResultadoNA" className="modal modal-campana-resultadoNA">

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


function EnviarDatosRav4(){

    cerrarModalRav4()
    var modal = document.getElementById("myModalRav4Resultado");
    modal.style.display = "block";

}

function ResultadoNA(){

    cerrarModalRav4()
    var modal = document.getElementById("myModalTakataResultadoNA");
    modal.style.display = "block";

}

/* campanas */

function cerrarModalRav4(){
    // Get the modal
    var modal = document.getElementById("myModalRav4");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "none";
}

function cerrarModalResultado() {
    // Get the modal
    var modal = document.getElementById("myModalRav4Resultado");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "none";
}

function cerrarModalResultadoNA() {
    // Get the modal
    var modal = document.getElementById("myModalRav4Resultado");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "none";
}

/* campanas */