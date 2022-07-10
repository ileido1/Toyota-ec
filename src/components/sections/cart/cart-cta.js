import useFetch from "../../../hooks/useFetch";
import { useLocation } from 'react-router-dom';

import icono_testdrive from '../../../images/cta/icono-test-drive.svg'
import icono_cotizar from '../../../images/cta/icono-cotizar.svg'

let url_backend = 'https://backend-toyota.247.com.ec'

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

    if(respuesta){
                            
        respuesta.map(c => { 
                
                if ( ('/' + c.name_vehicle.toLowerCase()) == location.pathname ){
                    url_detalle = 'v1/cta_vehicle/' + c.cta_vehiculo
                }
                                    
            }
        )
        
    }

    const [detalle, error_detalle] = useFetch(url_detalle);

    if(detalle){

        console.log(detalle)

        detalle.map(v => { 
                
            icono_1_cta_vehiculo = url_backend+v.icono_1_cta_vehiculo
            texto_1_cta_vehiculo = v.texto_1_cta_vehiculo
            boton_1_cta_vehiculo = v.boton_1_cta_vehiculo
            url_test_drive_cta_vehiculo = v.url_test_drive_cta_vehiculo      
            hexadecimal_cta_vehiculo = v.hexadecimal_cta_vehiculo      

            icono_2_cta_vehiculo = url_backend+v.icono_2_cta_vehiculo
            texto_2_cta_vehiculo = v.texto_2_cta_vehiculo
            boton_2_cta_vehiculo = v.boton_2_cta_vehiculo
            url_cotizar_cta_vehiculo = v.url_cotizar_cta_vehiculo      
            hexadecimal_2_cta_vehiculo = v.hexadecimal_2_cta_vehiculo 

            }
        )
        
    }

    return( 
    <>
        <div className="auto-individual container-fluid" >
            <div className="row" id="auto-cta" >

                <div className="col-12 col-sm-6 contenedor-cta-testdrive" style={{background: hexadecimal_cta_vehiculo}} >
                    <div className='contenedor-cta'>
                        <img src={icono_1_cta_vehiculo} alt="Icono test drive" className='iconos-cta'  />
                        <p>{texto_1_cta_vehiculo}</p>
                        <a href={url_test_drive_cta_vehiculo} id='btn-testdrive' className='btn' >{boton_1_cta_vehiculo}</a>
                    </div>
                </div>

                <div className="col-12 col-sm-6 contenedor-cta-cotizar"  >
                    <div className='contenedor-cta'>
                        <img src={icono_2_cta_vehiculo} alt="Icono cotizar" className='iconos-cta' style={{background: hexadecimal_2_cta_vehiculo}}  />
                        <p>{texto_2_cta_vehiculo}</p>
                        <a href={url_cotizar_cta_vehiculo} id='btn-cotizar' className='btn' >{boton_2_cta_vehiculo}</a>
                    </div>
                </div>

            </div>
        </div>
    </>
    )
}

export default Cartcta
