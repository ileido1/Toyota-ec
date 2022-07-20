import React, { useRef } from "react";
import { motion,  useInView} from "framer-motion";

import useFetch from "../../../hooks/useFetch";
import { useLocation } from 'react-router-dom';

let url_backend = 'https://backend-toyota.247.com.ec'

const variants = {
    hidden: { opacity: 0.1 },
    visible: { opacity: 1 },
}

function Tecnologia({ children }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <div ref={ref}
        
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
        {children}
      </div>
    );

}

const Carttecnologia = () => { 

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    let url_api = 'v1/vehicle_data_sheet'
    const [respuesta, error] = useFetch(url_api);
    let url_detalle = ''
    const location =  useLocation()

    let titulo_tecnologia_vehiculo = ""  

    let icono_1_tecnologia_vehiculo = ""                      
    let icono_2_tecnologia_vehiculo = "" 
    let icono_3_tecnologia_vehiculo = "" 

    let titulo_1_tecnologia_vehiculo = ""      
    let titulo_2_tecnologia_vehiculo = ""      
    let titulo_3_tecnologia_vehiculo = "" 

    let texto_1_tecnologia_vehiculo = ""   
    let texto_2_tecnologia_vehiculo = ""          
    let texto_3_tecnologia_vehiculo = ""   
        
    let banner_tecnologia_vehiculo = "" 

    if(respuesta){
                            
        respuesta.map(c => { 
                
                if ( ('/' + c.name_vehicle.toLowerCase()) == location.pathname ){
                    url_detalle = 'v1/technology_vehicle/'+ c.technology_vehiculo
                }
                                    
            }
        )
        
    }

    const [detalle_respuesta, error_detalle] = useFetch(url_detalle);
    
    if(detalle_respuesta){

        titulo_tecnologia_vehiculo = detalle_respuesta[0]['titulo_tecnologia_vehiculo']  

        icono_1_tecnologia_vehiculo = url_backend+detalle_respuesta[0]['icono_1_tecnologia_vehiculo']                     
        icono_2_tecnologia_vehiculo = url_backend+detalle_respuesta[0]['icono_2_tecnologia_vehiculo']
        icono_3_tecnologia_vehiculo = url_backend+detalle_respuesta[0]['icono_3_tecnologia_vehiculo']

        titulo_1_tecnologia_vehiculo = detalle_respuesta[0]['titulo_1_tecnologia_vehiculo']      
        titulo_2_tecnologia_vehiculo = detalle_respuesta[0]['titulo_2_tecnologia_vehiculo']       
        titulo_3_tecnologia_vehiculo = detalle_respuesta[0]['titulo_tecnologia_vehiculo']

        texto_1_tecnologia_vehiculo = detalle_respuesta[0]['texto_2_tecnologia_vehiculo']  
        texto_2_tecnologia_vehiculo = detalle_respuesta[0]['texto_2_tecnologia_vehiculo']          
        texto_3_tecnologia_vehiculo = detalle_respuesta[0]['texto_3_tecnologia_vehiculo']       
               
        banner_tecnologia_vehiculo = url_backend+detalle_respuesta[0]['banner_tecnologia_vehiculo']       
    }
  
return( 
    <>
        <div className="container-fluid d-none d-sm-none d-md-block d-xl-block d-lg-block" id="tecnologia" >

                <div className="row mt40" id="tecnologia " >
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sinpadding" >
                        <p className="text-color-tecnologia" >{titulo_tecnologia_vehiculo}</p> 
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 sinpadding"  >
                        <img className="img-fluid icono-tecnologia" src={icono_1_tecnologia_vehiculo} width="120px" alt="Icono Hac" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 sinpadding" >
                        <img className="img-fluid icono-tecnologia" src={icono_2_tecnologia_vehiculo} width="100px" alt="Icono Trc" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 sinpaddingr" >
                        <img className="img-fluid icono-tecnologia" src={icono_3_tecnologia_vehiculo} width="100px" alt="Icono Vsc" />
                    </div>
                </div> 

                <div className="row mb40" >
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 sinpadding" >
                        <p className="text-tecnologia" ><strong className="fuente-black" >{titulo_1_tecnologia_vehiculo}</strong></p>
                        <p className="text-tecnologia" >{texto_1_tecnologia_vehiculo}</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 sinpadding" >
                        <p className="text-tecnologia" ><strong className="fuente-black" >{titulo_2_tecnologia_vehiculo}</strong></p>
                        <p className="text-tecnologia">{texto_2_tecnologia_vehiculo}</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 sinpadding" >
                        <p className="text-tecnologia" ><strong className="fuente-black" >{titulo_3_tecnologia_vehiculo}</strong></p>
                        <p className="text-tecnologia" >{texto_3_tecnologia_vehiculo}</p>
                    </div>
                </div>
                
                <div className="row" >
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sinpadding" style={{ fontWeight: 300 }} >
                        <Tecnologia>
                            <div ref={ref} >   
                                <img className="img-fluid bannertec" src={banner_tecnologia_vehiculo} width="100%" alt="Banner Tecnologia" />
                            </div> 
                        </Tecnologia>
                    </div>
                </div>
                

    </div>

    <div className="container-fluid d-block d-sm-block d-md-none d-xl-none d-lg-none" id="tecnologia" >

        <div className="row mt40" id="tecnologia2 " >
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sinpadding" >
                <p className="text-color-tecnologia" >{titulo_tecnologia_vehiculo}</p> 
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 sinpadding"  >
                <img className="icono-tecnologia" src={icono_1_tecnologia_vehiculo} width="120px" alt="Icono Hac" />
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 sinpadding bloque-text-tecnologia" >
                <p className="text-tecnologia" ><strong className="fuente-black" >{titulo_1_tecnologia_vehiculo}</strong></p>
                <p className="text-tecnologia" >{texto_1_tecnologia_vehiculo}</p>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 sinpadding" >
                <img className="icono-tecnologia" src={icono_2_tecnologia_vehiculo} width="100px" alt="Icono Trc" />
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 sinpadding bloque-text-tecnologia" >
                <p className="text-tecnologia" ><strong className="fuente-black" >{titulo_2_tecnologia_vehiculo}</strong></p>
                <p className="text-tecnologia">{texto_2_tecnologia_vehiculo}</p>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 sinpaddingr" >
                <img className=" icono-tecnologia" src={icono_3_tecnologia_vehiculo} width="100px" alt="Icono Vsc" />
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 sinpadding bloque-text-tecnologia" >
                <p className="text-tecnologia" ><strong className="fuente-black" >{titulo_3_tecnologia_vehiculo}</strong></p>
                <p className="text-tecnologia" >{texto_3_tecnologia_vehiculo}</p>
            </div>
        </div> 

        <div className="row" >
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sinpadding d-none d-sm-none" style={{ fontWeight: 300 }} >
                <Tecnologia>
                    <div ref={ref} >   
                        <img className="img-fluid bannertec" src={banner_tecnologia_vehiculo} width="100%" alt="Banner Tecnologia" />
                    </div> 
                </Tecnologia>
            </div>
        </div>

    </div>
    </>

)
}

export default Carttecnologia