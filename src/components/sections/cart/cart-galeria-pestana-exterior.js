import { useEffect, useRef} from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "../../../hooks/useFetch";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import {
    NavLink
} from "react-router-dom";

import { Autoplay,Navigation } from "swiper";
import { useLocation } from 'react-router-dom';

let url_backend = 'https://backend-toyota.247.com.ec'

const Cartgaleriapestanaexterior = () => { 

    let url_api = 'v1/vehicle_data_sheet'
    const [respuesta, error] = useFetch(url_api);
    let url_detalle = ''
    let video = ''
    let fotos = []
    let fotos_array = []
    const location =  useLocation()
    const videoRef = useRef();

    useEffect(() => {    
        videoRef.current?.load();
    }, [video]);

    if(respuesta){
                            
        respuesta.map(c => { 
                
                if ( ('/' + c.name_vehicle.toLowerCase()) == location.pathname ){
                    url_detalle = 'v1/gallery_vehicle/'+ c.gallery_vehiculo
                }
                                    
            }
        )
        
    }

    const [detalle_respuesta, error_detalle] = useFetch(url_detalle);

    if(detalle_respuesta){
        let fotos_array = detalle_respuesta[0]['exterior_galeria_vehiculo']       
        fotos = fotos_array.split(",")
    }
    
        return(
            <>             
                <Swiper               
                    spaceBetween={30}
                    centeredSlides={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiperPestanaVideo"
                    loop={true}
                >

    {
                    detalle_respuesta ? (
                        <>
                            {                
                                          
                                fotos.map((c,i) => (

                                
                                <>
                                    <SwiperSlide>
                                           
                                            <div>
                                                <img src={url_backend+c.replace(/ /g,'')} alt="Slide galeria exterior" className="img-fluid" />
                                               
                                            </div>

                                    </SwiperSlide>  
                                </>
                                )

                                )
                            }
                                                   
                        </>
                    ) : (
                        <span>Cargando...</span>
                    )
                    
}                                    
                                    
                </Swiper>
            </>


        );
  } 

export default Cartgaleriapestanaexterior;