import { useState, useEffect } from 'react';
import { get } from 'axios';

import cerrar from '../../images/cotizacion/cerrar.svg'

export default function Modaltakata(){

    let endpoint = 'https://www.toyota.com.ec/api/v2/proceso/?chasis=';
    const [proceso, setProceso] = useState('');

    function handleClick(event) {

        let chasis = document.getElementById("chasis").value;
        
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

                var resultado_chasis = document.getElementById("resultado-chasis")
                var consulta_chasis = document.getElementById("consulta-chasis")
            
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

            <div id="myModalTakata" className="modal">

                <div className="modal-content cuerpo-modal">

                    <div className='container-fluid' >
                        <div className="row" >
                            <div className="col-12" >
                                <p className="close cerrar-modal-takata" onClick={cerrarModal} >CERRAR <img src={cerrar} /> </p>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid " >

                        <div className="row">
                            <div id='consulta-chasis' className='col-12' >

                                <p className='mt40' >POR FAVOR INGRESE LOS 17 NÚMEROS DEL CHASIS</p>
                                <p>(PUEDE ENCONTRARLO EN SU MATRÍCULA)</p>

                                <input type="text" name="chasis" id="chasis" placeholder="ESCRIBIR NÚMERO DE CHASIS" />

                                <p className="boton-enviar" onClick={handleClick} >ENVIAR</p>

                            </div>
                            <div id='resultado-chasis' className='col-12 ocultar' >

                                <p className='mt_resultado_chasis' >SU VEHÍCULO APLICA A ESTA CAMPAÑA DE SERVICIO</p>
                                <p >Por favor complete el formulario a continuación. Tras su envío será contactado.</p>
                                <br></br>
                                <input type="text" name="nombre_apellido" id="nombre_apellido" placeholder="NOMBRE Y APELLIDO" />
                                <input type="text" name="email" id="email" placeholder="E-MAIL" />
                                <input type="text" name="celular" id="celular" placeholder="CELULAR" />
                                <input type="text" name="ciudad_concesionario" id="ciudad_concesionario" placeholder="CIUDAD O CONCESIONARIO" />

                                <p className="boton-enviar-chasis-datos" onClick={EnviarDatosChasis} >ENVIAR</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div id="myModalTakataResultado" className="modal">

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
                            <div id='resultado-chasis' className='col-12' >

                                <p className='mt40' >SE HAN ENVIADO SUS DATOS CON ÉXITO. PRONTO UN ASESOR TE ESTARÁ CONTACTANDO.</p>                           

                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div id="myModalTakataResultadoNA" className="modal">

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
                            <div id='resultado-chasis' className='col-12' >

                                <p className='mt40 mensaje-chasis-na' >Su vehículo no aplica a esta campaña de servicio.</p>                           

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
    var modal = document.getElementById("myModalTakata");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "none";
}

function cerrarModalResultado() {
    // Get the modal
    var modal = document.getElementById("myModalTakataResultado");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "none";
}

function cerrarModalResultadoNA() {
    // Get the modal
    var modal = document.getElementById("myModalTakataResultadoNA");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "none";
}

function EnviarDatosChasis(){

    cerrarModal()

    var modal = document.getElementById("myModalTakataResultado");
    modal.style.display = "block";
}

function ResultadoNA(){

    cerrarModal()

    var modal = document.getElementById("myModalTakataResultadoNA");
    modal.style.display = "block";
}

