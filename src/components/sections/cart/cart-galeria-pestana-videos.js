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

const Cartgaleriapestanavideo = () => { 

    let url_api = 'v1/vehicle_data_sheet'
    const [respuesta, error] = useFetch(url_api);
    let url_detalle = ''
    let video = ''
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

    const [detalle, error_detalle] = useFetch(url_detalle);

        return(
            <>             
                <Swiper               
                    spaceBetween={30}
                    centeredSlides={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiperPestanaVideo"
                >

{
                    detalle ? (
                        <>
                            {                              
                                detalle.map(c => (
                              <>
                              <SwiperSlide>
                                    
                                    <div>
                                        <video width="100%" controls ref={videoRef} >
                                            <source src={url_backend+c.video_galeria_vehiculo} type="video/mp4" />
                                            Your browser does not support HTML video.
                                        </video>
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

export default Cartgaleriapestanavideo;