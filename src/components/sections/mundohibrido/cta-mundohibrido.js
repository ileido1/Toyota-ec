import icono_1_cta_vehiculo from '../../../images/cta/icono-test-drive.svg'
import icono_2_cta_vehiculo from '../../../images/cta/icono-cotizar.svg'
import Modalcotizacion from "../cart/cart-modal-cotizacion"

var hexadecimal_cta_vehiculo = "#000000"
var hexadecimal_2_cta_vehiculo = "#1E56ED"

const AmbientalCta = () => (

    <>
        <div className="mundo-hibrido-cta container-fluid" >
            <div className="row" id="auto-cta" >

                <div className="col-12 col-sm-6 contenedor-cta-testdrive" style={{ background: hexadecimal_cta_vehiculo }} onClick={abrirModal} >
                    <div className='contenedor-cta'>
                        <img src={icono_1_cta_vehiculo} alt="Icono test drive" className='iconos-cta' />
                        <p>Compruébalo tú mismo y déjate encantar por un TOYOTA. Solicita tu prueba de manejo</p>
                        <a id='btn-testdrive' className='btn d-none d-sm-none d-md-block d-xl-block d-lg-block' onClick={abrirModal} >SOLICITAR TEST DRIVE</a>
                    </div>
                </div>

                <div className="col-12 col-sm-6 contenedor-cta-cotizar" onClick={abrirModal}  style={{ background: hexadecimal_2_cta_vehiculo }} onClick={abrirModal} >
                    <div className='contenedor-cta'>
                        <img src={icono_2_cta_vehiculo} alt="Icono cotizar" className='iconos-cta'  />
                        <p>Estas a un paso de tener el auto de tus sueños, un TOYOTA. Haz clic para cotizar este vehículo.</p>
                        <a id='btn-cotizar-hibrido' className='btn d-none d-sm-none d-md-block d-xl-block d-lg-block' onClick={abrirModal} >COTIZAR</a>
                    </div>
                </div>

            </div>
        </div>

        <Modalcotizacion />
    </>
    
    
    )
    
    export default AmbientalCta


    function abrirModal() {
        // Get the modal
        var modal = document.getElementById("myModal");
        // Get the button that opens the modal
        var btn = document.getElementById("cotizar-vehiculo");
        modal.style.display = "block";
    }