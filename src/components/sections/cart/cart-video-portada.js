import useFetch from "../../../hooks/useFetch";
import { useLocation } from 'react-router-dom';
import React, { useEffect, useRef, useState } from "react";
let url_backend = 'https://www.toyota.com.ec/'

function Video(){
    
    let url_api = 'v1/vehicle_data_sheet'
    const [respuesta, error] = useFetch(url_api);
    let video = ''
    const location = useLocation()

    const videoRef = useRef();

    if(respuesta){
                            
        respuesta.map(c => { 
                
                if ( ('/' + c.name_vehicle.toLowerCase()) == location.pathname ){
                    video = url_backend+c.video_vehicle
                }
                        
            }
        )
        
    }

    useEffect(() => {    
        videoRef.current?.load();
    }, [video]);

   return(
        <>
            <video width="100%" autoPlay muted loop controls="false" ref={videoRef} >
                <source src={video} type="video/mp4"  />
                Your browser does not support HTML video.
            </video>
        </>
    )
 
}   

export default Video