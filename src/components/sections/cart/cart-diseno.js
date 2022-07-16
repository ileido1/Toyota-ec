import useFetch from "../../../hooks/useFetch";
import { useLocation } from 'react-router-dom';
import Modalcotizacion from "./cart-modal-cotizacion"

import documento from "../../../images/diseno/icono-documento.svg"

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

let imagen_dc_vehiculo_color_6 =''
let hex_dc_vehiculo_color_6 =''

let imagen_dc_vehiculo_color_7 =''
let hex_dc_vehiculo_color_7 =''

let imagen_dc_vehiculo_color_8 =''
let hex_dc_vehiculo_color_8 =''

let imagen_dc_vehiculo_color_9 =''
let hex_dc_vehiculo_color_9 =''

let imagen_dc_vehiculo_color_10 =''
let hex_dc_vehiculo_color_10 =''

let nombre_color_1 = ""
let nombre_color_2 = ""
let nombre_color_3 = ""
let nombre_color_4 = ""
let nombre_color_5 = ""
let nombre_color_6 = ""
let nombre_color_7 = ""
let nombre_color_8 = ""
let nombre_color_9 = ""
let nombre_color_10 = ""

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
        
        detalle.map(v => { 
                
            logo_dc_vehiculo = url_backend+v.logo_dc_vehiculo
            texto_dc_vechiculo = v.texto_dc_vehiculo

            texto_boton_dc_vehiculo = v.texto_boton_dc_vehiculo
            url_boton_dc_vechiculo = v.url_boton_dc_vehiculo

            texto_pdf_dc_vehiculo = v.texto_pdf_dc_vehiculo
            url_pdf_dc_vehiculo = url_backend+v.url_pdf_dc_vehiculo

            imagen_dc_vehiculo_color_1 = url_backend+v.imagen_dc_vehiculo_color_1
            hex_dc_vehiculo_color_1 = v.hex_dc_vehiculo_color_1
            nombre_color_1 = nombreColor(hex_dc_vehiculo_color_1)

            imagen_dc_vehiculo_color_2 = url_backend+v.imagen_dc_vehiculo_color_2
            hex_dc_vehiculo_color_2 = v.hex_dc_vehiculo_color_2
            nombre_color_2 = nombreColor(hex_dc_vehiculo_color_2)

            imagen_dc_vehiculo_color_3 = url_backend+v.imagen_dc_vehiculo_color_3
            hex_dc_vehiculo_color_3 = v.hex_dc_vehiculo_color_3
            nombre_color_3 = nombreColor(hex_dc_vehiculo_color_3) 

            imagen_dc_vehiculo_color_4 = url_backend+v.imagen_dc_vehiculo_color_4
            hex_dc_vehiculo_color_4 = v.hex_dc_vehiculo_color_4
            nombre_color_4 = nombreColor(hex_dc_vehiculo_color_4)

            imagen_dc_vehiculo_color_5 = url_backend+v.imagen_dc_vehiculo_color_5
            hex_dc_vehiculo_color_5 = v.hex_dc_vehiculo_color_5
            nombre_color_5 = nombreColor(hex_dc_vehiculo_color_5)
            
            imagen_dc_vehiculo_color_6 = url_backend+v.imagen_dc_vehiculo_color_6
            hex_dc_vehiculo_color_6 = v.hex_dc_vehiculo_color_6
            nombre_color_6 = nombreColor(hex_dc_vehiculo_color_6)

            imagen_dc_vehiculo_color_7 = url_backend+v.imagen_dc_vehiculo_color_7
            hex_dc_vehiculo_color_7 = v.hex_dc_vehiculo_color_7
            nombre_color_7 = nombreColor(hex_dc_vehiculo_color_7)

            imagen_dc_vehiculo_color_8 = url_backend+v.imagen_dc_vehiculo_color_8
            hex_dc_vehiculo_color_8 = v.hex_dc_vehiculo_color_8
            nombre_color_8 = nombreColor(hex_dc_vehiculo_color_8)  

            imagen_dc_vehiculo_color_9 = url_backend+v.imagen_dc_vehiculo_color_9
            hex_dc_vehiculo_color_9 = v.hex_dc_vehiculo_color_9
            nombre_color_9 = nombreColor(hex_dc_vehiculo_color_9)

            imagen_dc_vehiculo_color_10 = url_backend+v.imagen_dc_vehiculo_color_10
            hex_dc_vehiculo_color_10 = v.hex_dc_vehiculo_color_10
            nombre_color_10 = nombreColor(hex_dc_vehiculo_color_10)
                  
            
            }
        )
        
    }

return ( 
<>
<div className="container-fluid " id="content-diseno" >
<div className="row"  >
    <div className="col-12">
            <div id="diseno" className="row pd100"  >
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">

                    <div className="content-text">

                        <img src={logo_dc_vehiculo} width="200px" alt="" className="  " />
                        <p className="text-cotizar " > {texto_dc_vechiculo} </p>

                    </div>

                    <div className="content-cotizar">
                        <p data-auto="cotizar-auto" className="btn btn-cotizar " id="cotizar-vehiculo" onClick={abrirModal} >{texto_boton_dc_vehiculo}</p>
                    </div>

                    <div className="content-descarga">
                        <img src={documento} className="" alt="Boton descarga PDF" /> <span className="text-descargar-catalogo" ><a href={url_pdf_dc_vehiculo} target="_blank" className="cart-link" >{texto_pdf_dc_vehiculo}</a> </span>
                    </div>

                </div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                    <img id="imagen-auto-diseno" className=" img-fluid "  src={imagen_dc_vehiculo_color_1} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <p className="text-color-diseno secciones-subtitulos " id="titulo-colores" >Negro</p>
                </div>
            </div>
            <div className="row pd50" >
                <div className="col-2">
                    <span className="circulo-color icono-color" data-nombre={nombre_color_1}  data-auto={imagen_dc_vehiculo_color_1} data-color={hex_dc_vehiculo_color_1} style={{background: hex_dc_vehiculo_color_1 }} onClick={cambiarAuto} ></span>                   
                </div>
                <div className="col-2">
                    <span className="circulo-color icono-color" data-nombre={nombre_color_2} data-auto={imagen_dc_vehiculo_color_2} data-color={hex_dc_vehiculo_color_2} style={{background: hex_dc_vehiculo_color_2 }} onClick={cambiarAuto} ></span> 
                </div>
                <div className="col-2">
                    <span className="circulo-color icono-color" data-nombre={nombre_color_3} data-auto={imagen_dc_vehiculo_color_3} data-color={hex_dc_vehiculo_color_3} style={{background: hex_dc_vehiculo_color_3 }} onClick={cambiarAuto} ></span> 
                </div>
                <div className="col-2">
                    <span className="circulo-color icono-color" data-nombre={nombre_color_4} data-auto={imagen_dc_vehiculo_color_4}  data-color={hex_dc_vehiculo_color_4} style={{background: hex_dc_vehiculo_color_4 }} onClick={cambiarAuto} ></span> 
                </div>
                <div className="col-2">
                    <span className="circulo-color icono-color" data-nombre={nombre_color_5} data-auto={imagen_dc_vehiculo_color_5}  data-color={hex_dc_vehiculo_color_5} style={{background: hex_dc_vehiculo_color_5 }} onClick={cambiarAuto} ></span> 
                </div>
                <div className="col-2">
                    <span className="circulo-color icono-color" data-nombre={nombre_color_6} data-auto={imagen_dc_vehiculo_color_6}  data-color={hex_dc_vehiculo_color_6} style={{background: hex_dc_vehiculo_color_6 }} onClick={cambiarAuto} ></span> 
                </div>
            </div>
            <div className="row pd50" >

            {hex_dc_vehiculo_color_7 &&
                <div className="col-2">                  
                <span className="circulo-color icono-color" data-nombre={nombre_color_7}  data-auto={imagen_dc_vehiculo_color_7} data-color={hex_dc_vehiculo_color_7} style={{background: hex_dc_vehiculo_color_7 }} onClick={cambiarAuto} >
                </span>                   
                </div>
            }
            {hex_dc_vehiculo_color_8 &&
                <div className="col-2">                  
                <span className="circulo-color icono-color" data-nombre={nombre_color_8}  data-auto={imagen_dc_vehiculo_color_8} data-color={hex_dc_vehiculo_color_8} style={{background: hex_dc_vehiculo_color_8 }} onClick={cambiarAuto} >
                </span>                   
                </div>
            }
            {hex_dc_vehiculo_color_9 &&
                <div className="col-2">                  
                <span className="circulo-color icono-color" data-nombre={nombre_color_9}  data-auto={imagen_dc_vehiculo_color_9} data-color={hex_dc_vehiculo_color_9} style={{background: hex_dc_vehiculo_color_9 }} onClick={cambiarAuto} >
                </span>                   
                </div>
            }    
            {hex_dc_vehiculo_color_10 &&
                <div className="col-2">                  
                <span className="circulo-color icono-color" data-nombre={nombre_color_10}  data-auto={imagen_dc_vehiculo_color_10} data-color={hex_dc_vehiculo_color_10} style={{background: hex_dc_vehiculo_color_10 }} onClick={cambiarAuto} >
                </span>                   
                </div>
            }         

             
            </div>
        </div>
    </div>
</div>

<Modalcotizacion />

</>
);
}

export default Cartdiseno;

function cambiarAuto(e){
    
    var imagen = e.target.dataset.auto
    //var color = e.target.dataset.color
    var nombre_color = e.target.dataset.nombre
    var automovil = document.getElementById('imagen-auto-diseno')

    automovil.setAttribute('style', 'transition:all 0.5s 0s ease','-webkit-transition: all 0.5s 0s ease','-moz-transition: all 0.5s 0s ease','-o-transition: all 0.5s 0s ease');
    var titulo_colores = document.getElementById('titulo-colores')
    automovil.src = imagen
    //titulo_colores.setAttribute('style', 'color: '+color);
    document.getElementById("titulo-colores").innerHTML = nombre_color; 
    
}

function abrirModal(){
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the button that opens the modal
    var btn = document.getElementById("cotizar-vehiculo");
    modal.style.display = "block";
}

function cerrarModal(){
    // Get the modal
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "none";
}

function nombreColor(color){

    let nombre_color = "Color"

    if ( color == "#0a0a0a" ) {
       
        nombre_color = "Negro"

    }

    if ( color == "#ffffff" ) {
       
        nombre_color = "Blanco"

    }

    if ( color == "#525252" ) {
       
        nombre_color = "Gris"

    }

    if ( color == "#bababa" ) {
       
        nombre_color = "Plata"

    }

    if ( color == "#807259" ) {
       
        nombre_color = "Bronce"

    }

    if ( color == "#64534b" ) {
       
        nombre_color = "Café"

    }   

    if ( color == "#6c737f" ) {
       
        nombre_color = "Gris Metálitoc"

    }  


    if ( color == "#30515e" ) {
       
        nombre_color = "Negro Azulado"

    }

    if ( color == "#232c2e" ) {
       
        nombre_color = "Negro Mica"

    }

    if ( color == "#231f20" ) {
       
        nombre_color = "Negro"

    }

    if ( color == "#ececee" ) {
       
        nombre_color = "Perla"

    }

    if ( color == "#a0a2a3" ) {
       
        nombre_color = "Plata Metálico"

    }

    if ( color == "#a0a2a3" ) {
       
        nombre_color = "Plata Metálico"

    }

    if ( color == "#bababa" ) {
        nombre_color = "Plata"
    }

    if ( color == "#edebeb" ) {
        nombre_color = "Blanco"
    }

    if ( color == "#2bd1fd" ) {
        nombre_color = "Turquesa"
    }

    if ( color == "#fc0d1b" ) {
        nombre_color = "Rojo"
    }

    
    return nombre_color

}

// Get the modal
var modal = document.getElementById("myModal");
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
