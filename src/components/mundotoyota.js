import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import {
    NavLink
} from "react-router-dom";

import useFetch from "../hooks/useFetch";

export default function MundoToyota() {
    let endpoint = 'home/square-categorias'
    const [info, error] = useFetch(endpoint);
    return (
        <>
            <div className="container mundotoyotacontainer">
                {
                    info ? (
                        <>
                            {

                                info.map(c => (
                                    <div className="row">
                                        <div className="col-4">
                                            <img src={'https://backend-toyota.247.com.ec/' + c.imagen_square_box_1} className="mundotoyotaimgsupi"></img>
                                            <img src={'https://backend-toyota.247.com.ec/' + c.imagen_square_box_3} className="carrobanner"></img>

                                        </div>
                                        <div className="col-4 centrar">
                                            <h1 className="mundotoyota">{c.title_square_box}</h1>
                                        </div>
                                        <div className="col-4">
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







