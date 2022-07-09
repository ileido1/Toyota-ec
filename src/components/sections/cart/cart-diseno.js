import useFetch from "../../../hooks/useFetch";
import { useLocation } from 'react-router-dom';

import documento from "../../../images/diseno/icono-documento.svg"

import negro from "../../../images/diseno/negro.svg"
import plata from "../../../images/diseno/plata.svg"
import gris from "../../../images/diseno/gris.svg"
import blanco from "../../../images/diseno/blanco.svg"
import turquesa from "../../../images/diseno/turquesa.svg"
import rojo from "../../../images/diseno/rojo.svg"

import raize_negro from "../../../images/diseno/raize-negro.png"
import raize_gris from "../../../images/diseno/raize-gris.png"
import raize_plata from "../../../images/diseno/raize-plata.png"
import raize_blanco from "../../../images/diseno/raize-blanco.png"
import raize_turquesa from "../../../images/diseno/raize-turquesa.png"
import raize_rojo from "../../../images/diseno/raize-rojo.png"

let url_backend = 'https://backend-toyota.247.com.ec'

let logo_dc_vehiculo =''
let texto_dc_vechiculo =''

let texto_boton_dc_vehiculo =''
let url_boton_dc_vechiculo =''

let texto_pdf_dc_vehiculo =''
let url_pdf_dc_vehiculo =''

let imagen_dc_vehiculo_color_1 =''
let hex_dc_vehiculo_color_1 =''

let imagen_dc_vehiculo_color_2 =''
let hex_dc_vehiculo_color_2 =''

let imagen_dc_vehiculo_color_3 =''
let hex_dc_vehiculo_color_3 =''

let imagen_dc_vehiculo_color_4 =''
let hex_dc_vehiculo_color_4 =''

let imagen_dc_vehiculo_color_5 =''
let hex_dc_vehiculo_color_5 =''

const Cartdiseno = () => { 

    let url_api = 'v1/vehicle_data_sheet'
    const [respuesta, error] = useFetch(url_api);
    let url_detalle = ''
    const location = useLocation()

    if(respuesta){
                            
        respuesta.map(c => { 
                
                if ( ('/' + c.name_vehicle.toLowerCase()) == location.pathname ){
                    url_detalle = 'v1/diseno_color_vehicle/'+ c.diseno_color_vehicle
                }
                                    
            }
        )
        
    }

    const [detalle, error_detalle] = useFetch(url_detalle);

    if(detalle){
        console.log(detalle)
        detalle.map(v => { 
                
            logo_dc_vehiculo = url_backend+v.logo_dc_vehiculo
            texto_dc_vechiculo = v.texto_dc_vehiculo

            texto_boton_dc_vehiculo = v.texto_boton_dc_vehiculo
            url_boton_dc_vechiculo = v.url_boton_dc_vechiculo

            texto_pdf_dc_vehiculo = url_backend+v.texto_pdf_dc_vehiculo
            url_pdf_dc_vehiculo = v.url_pdf_dc_vehiculo

            imagen_dc_vehiculo_color_1 = url_backend+v.imagen_dc_vehiculo_color_1
            hex_dc_vehiculo_color_1 = v.hex_dc_vehiculo_color_1

            imagen_dc_vehiculo_color_2 = url_backend+v.imagen_dc_vehiculo_color_2
            hex_dc_vehiculo_color_2 = v.hex_dc_vehiculo_color_2

            imagen_dc_vehiculo_color_3 = url_backend+v.imagen_dc_vehiculo_color_3
            hex_dc_vehiculo_color_3 = v.hex_dc_vehiculo_color_3  

            imagen_dc_vehiculo_color_4 = url_backend+v.imagen_dc_vehiculo_color_4
            hex_dc_vehiculo_color_4 = v.hex_dc_vehiculo_color_4

            imagen_dc_vehiculo_color_5 = url_backend+v.imagen_dc_vehiculo_color_5
            hex_dc_vehiculo_color_5 = v.hex_dc_vehiculo_color_5
      
            
            }
        )
        
    }

return ( 
<>
<div className="container-fluid " id="content-diseno" >
<div className="row"  >
    <div className="col-12">
            <div id="diseno" className="row pd100"  >
                <div className="col-4">

                    <div className="content-text">

                        <img src={logo_dc_vehiculo} width="200px" alt="" className="  " />
                        <p className="text-cotizar " > {texto_dc_vechiculo} </p>

                    </div>

                    <div className="content-cotizar">
                        <a href={url_boton_dc_vechiculo} className="btn btn-cotizar " >{texto_boton_dc_vehiculo}</a>
                    </div>

                    <div className="content-descarga">
                        <img src={documento} width="28px" className=" " alt="Boton descarga PDF" /> <span className="text-descargar-catalogo" >{texto_pdf_dc_vehiculo}</span>
                    </div>

                </div>
                <div className="col-8">
                    <img id="imagen-auto-diseno" className=" img-fluid   " src={raize_negro} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <p className="text-color-diseno secciones-subtitulos" >COLOR</p>
                </div>
            </div>
            <div className="row pd50" >
                <div className="col-2">
                    <span className="circulo-color" ></span>
                    <img className="icono-color" data-auto={raize_negro}  src={negro} width="50px" alt="Negro" onClick={cambiarAuto} />
                </div>
                <div className="col-2">
                    <img className="icono-color" data-auto={raize_gris}  src={gris} width="50px" alt="Gris" onClick={cambiarAuto} />
                </div>
                <div className="col-2">
                    <img className="icono-color" data-auto={raize_plata}  src={plata} width="50px" alt="Plata" onClick={cambiarAuto} />
                </div>
                <div className="col-2">
                    <img className="icono-color" data-auto={raize_blanco}  src={blanco} width="50px" alt="Blanco" onClick={cambiarAuto} />
                </div>
                <div className="col-2">
                    <img className="icono-color" data-auto={raize_turquesa}  src={turquesa} width="50px" alt="Turquesa" onClick={cambiarAuto} />
                </div>
                <div className="col-2">
                    <img className="icono-color" data-auto={raize_rojo} src={rojo} width="50px" alt="Rojo" onClick={cambiarAuto} />
                </div>
            </div>
        </div>
    </div>
</div>
</>
);
}

export default Cartdiseno;

function cambiarAuto(e){
    var imagen = e.target.dataset.auto   
    var automovil = document.getElementById('imagen-auto-diseno')
    automovil.src = imagen
}
