import React, { useEffect, useRef, useState } from "react";
import { useLocation } from 'react-router-dom';

// custom hook to get the current pathname in React

import useFetch from "../../../hooks/useFetch";

import { motion } from "framer-motion"

const variants = {
    hidden: { opacity: 0.1 },
    visible: { opacity: 1 },
}

export default function Carttest() {
    
    let url_api = 'v1/vehicle_data_sheet'
    const [respuesta, error] = useFetch(url_api);
    let video = ''
    const location = useLocation()

    if(respuesta){
                            
        respuesta.map(c => { 
                console.log(('/' + c.name_vehicle.toLowerCase()))
                if ( ('/' + c.name_vehicle.toLowerCase()) == location.pathname ){
                video = c.video_vehicle
                }
                                    
                console.log('nothing to do','/' + c.name_vehicle.toLowerCase())

            }
        )
        
    }

    return(
        <div>
           
        </div>
    )
       
}