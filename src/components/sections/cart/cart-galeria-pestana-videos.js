import { useEffect, useRef} from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "../../../hooks/useFetch";
import ReactPlayer from "react-player"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
    NavLink
} from "react-router-dom";

import { Autoplay,Navigation } from "swiper";
import { useLocation } from 'react-router-dom';

let url_backend = 'https://www.toyota.com.ec/admin/'

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
                                    
                                    <div className='player-wrapper d-none d-sm-none d-md-flex d-lg-flex d-xl-flex'  >
                                        <ReactPlayer
                                            className='react-player'
                                            width='1920px'
                                            height='800px'
                                            url={c.video_galeria_vehiculo}
                                        />

                                    </div>

                                    <div className='player-wrapper d-md-none d-xl-none d-lg-none'  >
                                        <ReactPlayer
                                            className='react-player'
                                            width='100%'
                                            height='300px'
                                            url={c.video_galeria_vehiculo}
                                        />

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