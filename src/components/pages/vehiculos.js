import useFetch from "../../hooks/useFetch";
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion"
import React, { useEffect, useRef, useState } from "react";
import Vehiculossidebar from "./vehiculos-sidebar";
import Modalcotizacion from "../sections/cart/cart-modal-cotizacion"

const variants = {
    hidden: { opacity: 0.1 },
    visible: { opacity: 1 },
}

let url_backend = 'https://backend-toyota.247.com.ec'

export default function Vehiculos() {
    
    let array_automoviles = []
    let array_suv = []
    let array_camionetas = []
    let url_api = 'v1/vehicles'
    const [respuesta, error] = useFetch(url_api);

    if(respuesta){
                            
        respuesta.map(d => { 
                
                if ( (d.type_vehicle) == "Automóviles" ){
                    array_automoviles.push(d)
                }

                if ( (d.type_vehicle) == "SUV" ){
                    array_suv.push(d)
                }

                if ( (d.type_vehicle) == "Camionetas" ){
                    array_camionetas.push(d)
                }

                
                                    
            }
        )
        
    }
    
    return (
        <>
        <div id="pagina-vehiculos" className="container-fluid" >
        
              <div className="row fila-vehiculos" >
                <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 sinpadding">
                <div id="contenedor-autos-automoviles" className="contenedor-secciones-autos" >
                    <div className="row" id="titulo-vehiculos" >
                        <div classNme="col-12 col-sm-12">
                            <p className="subtitulos-vehiculos">Automóviles</p>
                        </div> 
                    </div>

                    <div className="row" >              
              {
                array_automoviles.length > 0 ? (
                    <>
                                 

                        {                           
                        array_automoviles.map(c => (
                        
                    <>
                    
                        <div className="col-4" >
                           <p className="titulo-autos-similares" >{c.name_vehicle}</p>
                           <img className="img-fluid autos-similares" src={url_backend+c.image_vehicle} alt={c.name_vehicle} />
                           <p className="content-btn-vehiculos " ><a className="enlace-vehiculos" href={c.url_vehicle} >{c.cta_boton_vehicle}</a></p>
                           
                        </div>

                    </>
                            )

                            )
                        }
                                                
                    </>
                ) : (

                    <span>Cargando...</span>

                )
                
            }       </div>
                    </div>


                    <div id="contenedor-autos-suv"  className="contenedor-secciones-autos"  >
                    <div className="row" id="titulo-vehiculos" >
                        <div classNme="col-12 col-sm-12">
                            <p className="subtitulos-vehiculos">Suv</p>
                        </div> 
                    </div>

                    <div className="row" >              
              {
                array_suv.length > 0 ? (
                    <>
                                 

                        {                           
                        array_suv.map(c => (
                        
                    <>
                    
                        <div className="col-4" >
                           <p className="titulo-autos-similares" >{c.name_vehicle}</p>
                           <img className="img-fluid autos-similares" src={url_backend+c.image_vehicle} alt={c.name_vehicle} />
                           <p className="content-btn-vehiculos " ><a className="enlace-vehiculos" href={c.url_vehicle} >{c.cta_boton_vehicle}</a></p>
                           
                        </div>

                    </>
                            )

                            )
                        }
                                                
                    </>
                ) : (

                    <span>Cargando...</span>

                )
                
            }
                    </div>  
                    </div>                   

                <div id="contenedor-autos-camionetas"  className="contenedor-secciones-autos"  >
                    <div className="row" id="titulo-vehiculos" >
                        <div classNme="col-12 col-sm-12">
                            <p className="subtitulos-vehiculos">Camionetas</p>
                        </div> 
                    </div>

                    <div className="row" >              
              {
                array_camionetas.length > 0 ? (
                    <>
                                 

                        {                           
                        array_camionetas.map(c => (
                        
                    <>
                    
                        <div className="col-4" >
                           <p className="titulo-autos-similares" >{c.name_vehicle}</p>
                           <img className="img-fluid autos-similares" src={url_backend+c.image_vehicle} alt={c.name_vehicle} />
                           <p className="content-btn-vehiculos " ><a className="enlace-vehiculos" href={c.url_vehicle} >{c.cta_boton_vehicle}</a></p>
                           
                        </div>

                    </>
                            )

                            )
                        }
                                                
                    </>
                ) : (

                    <span>Cargando...</span>

                )
                
            }
                    </div>
                    </div>


                    
                </div>
                <div id="sidebar-vehiculos" class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 sinpadding" >
                    <Vehiculossidebar />
                </div>
            
            </div>
        </div>

        <Modalcotizacion />

        </>
    );                  

}