import useFetch from "../../../hooks/useFetch";
import { useLocation } from 'react-router-dom';

import logo_exonerados from '../../../images/exonerados/logo-exonerados.svg'
import raize_exonerados from '../../../images/exonerados/raize-exonerados.png'

import { motion } from "framer-motion"

import React, { useEffect, useRef, useState } from "react";

const variants = {
    hidden: { opacity: 0.1 },
    visible: { opacity: 1 },
}




let url_backend = 'https://backend-toyota.247.com.ec'


export default function Cartexonerados() {
    
    let url_api = 'v1/vehicle_data_sheet'
    const [respuesta, error] = useFetch(url_api);
    let url_detalle = ''
    
    let banner1 = ''
    let banner2 = ''
    let texto_cotizar = ''
    let link_cotizar = ''
    
    const location = useLocation()

    if(respuesta){
                            
        respuesta.map(c => { 
                
                if ( ('/' + c.name_vehicle.toLowerCase()) == location.pathname ){
                    url_detalle = 'api/v1/exempt_vehicle/' + c.exempt_vehicle
                }
                                    
            }
        )
        
    }

    const [detalle, error_detalle] = useFetch(url_detalle);

    if(detalle){

        detalle.map(v => { 
                
            banner1 = url_backend+v.banner_exonerados
            banner2 = url_backend+v.imagen_movilidad_para_todo
            texto_cotizar = v.texto_cotizar_exonerado
            link_cotizar = v.url_cotizar_exonerado      

            }
        )
        
    }


    return (

            <>
                <div className="auto-individual container-fluid" >
                    <div className="row" id="auto-exonerados" >

                        <div className="col-12 col-sm-6"  >
                            <motion.img src={raize_exonerados} alt="logo auto exonerados" variants={variants} initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5, default: { duration: 1 } }} />
                        </div>

                        <div className="col-12 col-sm-6 logo-exonerados "  >                                  
                            <div className='contenedor-logo-exonerados'>

                            <motion.img src={logo_exonerados} variants={variants} initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5, default: { duration: 1 } }} />                    
                            <motion.p className='text-exonerados' variants={variants} initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5, default: { duration: 1 } }} >Cotizar vehículo como Exonerado</motion.p>

                            </div>
                        </div>

                    </div>
                </div>
            </>


    )                  

}