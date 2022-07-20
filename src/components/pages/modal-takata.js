import {useState} from 'react';
import useFetch2 from "../../hooks/useFetch2";
import cerrar from '../../images/cotizacion/cerrar.svg'
export default function Modaltakata() {

    const HandleClick = event => {
        let chasis = document.getElementById("chasis").value;
        console.log(chasis)
        let url_api = 'v2/proceso/?chasis='+chasis
        const [respuesta, error] = useFetch2(url_api);
        return respuesta
    };

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

                    <div  className="container-fluid " >

                        <div className="row">
                            <div className='col-12' >

                                <p className='mt40' >POR FAVOR INGRESE LOS 17 NÚMEROS DEL CHASIS</p>
                                <p>(PUEDE ENCONTRARLO EN SU MATRÍCULA)</p>

                                <input type="text" name="chasis" id="chasis" placeholder="ESCRIBIR NÚMERO DE CHASIS"  />

                                <p className="boton-enviar" onClick={HandleClick} >ENVIAR</p>

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
    var modal = document.getElementById("myModalTakata");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "none";
}

function enviarDatosCotizar(){
    var elemento = document.getElementById("enviar-cotizar");
    var mensaje = document.getElementById("mensaje-cotizar");

    elemento.classList.add("ocultar-icono");
    mensaje.classList.remove("ocultar-icono");
}

function enviarDatosTestDrive(){
    var elemento = document.getElementById("enviar-testdrive");
    var mensaje = document.getElementById("mensaje-testdrive");

    elemento.classList.add("ocultar-icono");
    mensaje.classList.remove("ocultar-icono");
}