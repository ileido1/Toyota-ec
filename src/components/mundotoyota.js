import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import {
    NavLink
} from "react-router-dom";

import useFetch from "../hooks/useFetch";
import { motion } from 'framer-motion'
import { useInView } from "framer-motion";


export default function MundoToyota() {
    let endpoint = 'home/square-categorias'
    const [info, error] = useFetch(endpoint);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <>
            <div className="container mundotoyotacontainer">
                {
                    info ? (
                        <>
                            {

                                info.map(c => (
                                    <div className="row">
                                        <div ref={ref} style={{
                                            transform: isInView ? "none" : "translateX(-300px)",
                                            opacity: isInView ? 1 : 0,
                                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                                        }}

                                            className="col-4">
                                            <img src={'https://backend-toyota.247.com.ec/' + c.imagen_square_box_1} className="mundotoyotaimgsupi"></img>
                                            <img src={'https://backend-toyota.247.com.ec/' + c.imagen_square_box_3} className="carrobanner"></img>

                                        </div>
                                        <div className="col-4 centrar" ref={ref} style={{
                                            transform: isInView ? "none" : "translateY(300px)",
                                            opacity: isInView ? 1 : 0,
                                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                                        }}>
                                            <h1 className="mundotoyota">{c.title_square_box}</h1>
                                        </div>
                                        <div className="col-4" ref={ref} style={{
                                            transform: isInView ? "none" : "translateX(300px)",
                                            opacity: isInView ? 1 : 0,
                                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                                        }}
                                        >
                                            <img src={'https://backend-toyota.247.com.ec/' + c.imagen_square_box_2} className="mundotoyotaimgsupd"></img>
                                            <img src={'https://backend-toyota.247.com.ec/' + c.imagen_square_box_4} className="carrobanner"></img>

                                        </div>
                                    </div>

                                )

                                )
                            }
                        </>
                    ) : (
                        <span> Cargando...</span>
                    )
                }

            </div>

        </>
    );
}







