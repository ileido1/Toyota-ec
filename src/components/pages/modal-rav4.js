import { useState, useEffect } from 'react';
import { get } from 'axios';

import cerrar from '../../images/cotizacion/cerrar.svg'

export default function ModalRav4(){

    let endpoint = 'https://www.toyota.com.ec/api/v2/campaigns/service_rav4_2002_2005/?chasis=';
    const [proceso, setProceso] = useState('');

    function handleClick(event) {

        let chasis = document.getElementById("chasis-rav4").value;
        
        const getproceso = async () => {
            const resultexo = await get(`${endpoint + chasis}`);
            const procesos = resultexo.data;
            setProceso(procesos);
        }

        getproceso()
        
    }

    setTimeout(
        function() {

            if(proceso.status==200){

                var resultado_chasis = document.getElementById("resultado-chasis-rav4")
                var consulta_chasis = document.getElementById("consulta-chasis-rav4")
            
                resultado_chasis.classList.remove("ocultar")
                consulta_chasis.classList.add("ocultar")
        
            }else if(proceso.status==404){

                ResultadoNA()

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

                                <p className="boton-enviar" onClick={handleClick} >ENVIAR</p>

                            </div>
                            <div id='resultado-chasis-rav4' className='col-12 ocultar resultado-chasis' >

                                <p className='mt_resultado_chasis' >SU VEHÍCULO APLICA A ESTA CAMPAÑA DE SERVICIO</p>
                                <p >Por favor complete el formulario a continuación. Tras su envío será contactado.</p>
                                <br></br>
                                <input type="text" name="nombre_apellido" id="nombre_apellido" placeholder="NOMBRE Y APELLIDO" />
                                <input type="text" name="email" id="email" placeholder="E-MAIL" />
                                <input type="text" name="celular" id="celular" placeholder="CELULAR" />
                                <input type="text" name="ciudad_concesionario" id="ciudad_concesionario" placeholder="CIUDAD O CONCESIONARIO" />
                                

                                <p className="boton-enviar-chasis-datos" onClick={EnviarDatosRav4} >ENVIAR</p>

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