import useFetch from "../../../hooks/useFetch";
import { useLocation } from 'react-router-dom';
import React, { useEffect, useRef, useState } from "react";
import video from '../../../videos/portada-mundo-hibrido.mp4'

function VideoMundoHibrido(){
    
    const videoRef = useRef();
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

export default VideoMundoHibrido