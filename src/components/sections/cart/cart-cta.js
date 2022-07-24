import useFetch from "../../../hooks/useFetch";
import { useLocation } from 'react-router-dom';
import Modalcotizacion from "./cart-modal-cotizacion"

let url_backend = 'https://www.toyota.com.ec/'

const Cartcta = () => {

    let url_api = 'v1/vehicle_data_sheet'
    const [respuesta, error] = useFetch(url_api);
    let url_detalle = ''

    let icono_1_cta_vehiculo = ''
    let texto_1_cta_vehiculo = ''
    let boton_1_cta_vehiculo = ''
    let url_test_drive_cta_vehiculo = ''
    let hexadecimal_cta_vehiculo = ''

    let icono_2_cta_vehiculo = ''
    let texto_2_cta_vehiculo = ''
    let boton_2_cta_vehiculo = ''
    let url_cotizar_cta_vehiculo = ''
    let hexadecimal_2_cta_vehiculo = ''

    const location = useLocation()

    if (respuesta) {

        respuesta.map(c => {

            if (('/' + c.name_vehicle.toLowerCase()) == location.pathname) {
                url_detalle = 'v1/cta_vehicle/' + c.cta_vehiculo
            }

        }
        )

    }

    const [detalle, error_detalle] = useFetch(url_detalle);

    if (detalle) {

        detalle.map(v => {

            icono_1_cta_vehiculo = url_backend + v.icono_1_cta_vehiculo
            texto_1_cta_vehiculo = v.texto_1_cta_vehiculo
            boton_1_cta_vehiculo = v.boton_1_cta_vehiculo
            url_test_drive_cta_vehiculo = v.url_test_drive_cta_vehiculo
            hexadecimal_cta_vehiculo = v.hexadecimal_cta_vehiculo

            icono_2_cta_vehiculo = url_backend + v.icono_2_cta_vehiculo
            texto_2_cta_vehiculo = v.texto_2_cta_vehiculo
            boton_2_cta_vehiculo = v.boton_2_cta_vehiculo
            url_cotizar_cta_vehiculo = v.url_cotizar_cta_vehiculo
            hexadecimal_2_cta_vehiculo = v.hexadecimal_2_cta_vehiculo

        }
        )

    }

    return (
        <>
            <div className="auto-individual container-fluid" >
                <div className="row" id="auto-cta" >

                    <div className="col-12 col-sm-6 contenedor-cta-testdrive" style={{ background: hexadecimal_cta_vehiculo }} onClick={abrirModal} >
                        <div className='contenedor-cta'>
                            <img src={icono_1_cta_vehiculo} alt="Icono test drive" className='iconos-cta' />
                            <p>{texto_1_cta_vehiculo}</p>
                            <a id='btn-testdrive' className='btn d-none d-sm-none d-md-block d-xl-block d-lg-block' onClick={abrirModal} >{boton_1_cta_vehiculo}</a>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 contenedor-cta-cotizar" onClick={abrirModal} >
                        <div className='contenedor-cta'>
                            <img src={icono_2_cta_vehiculo} alt="Icono cotizar" className='iconos-cta' style={{ background: hexadecimal_2_cta_vehiculo }} />
                            <p>{texto_2_cta_vehiculo}</p>
                            <a id='btn-cotizar' className='btn d-none d-sm-none d-md-block d-xl-block d-lg-block' onClick={abrirModal} >{boton_2_cta_vehiculo}</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cartcta


function abrirModal() {
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the button that opens the modal
    var btn = document.getElementById("cotizar-vehiculo");
    modal.style.display = "block";
}