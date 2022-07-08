import React, { useEffect, useRef, useState } from "react";
import useFetch from "../../../hooks/useFetch";

import { motion } from "framer-motion"

const variants = {
    hidden: { opacity: 0.1 },
    visible: { opacity: 1 },
}

export default function Carttest() {
    let url_api = 'v1/features_vehicle/28'
    const [respuesta, error] = useFetch(url_api);
    
    return (
        <>
                {
                    respuesta ? (
                        <>
                            {
                                
                                respuesta.map(c => (
                        <>




                            {c.fondo_caracteristicas}



                        </>
                                )

                                )
                            }
                                                   
                        </>
                    ) : (
                        <span> Cargando...</span>
                    )
                    
                }

            
        </>
    );
}