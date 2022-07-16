import cerrar from '../../images/cotizacion/cerrar.svg'
export default function Modaltakata() {
        
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

                                <p className='mt40' >POR FAVOR INGRESE LOS 17 NUMEROS DEL CHASIS</p>
                                <p>(PUEDE ENCONTRARLO EN SU MATRICULA)</p>

                                

                                <input type="text" name="chasis" placeholder="ESCRIBIR NÚMERO DE CHASIS" />

                                <p className="boton-enviar" >ENVIAR</p>

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