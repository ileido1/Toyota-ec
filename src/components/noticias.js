import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import {
    NavLink
} from "react-router-dom";

import useFetch from "../hooks/useFetch";

export default function Noticias() {
    let endpoint = 'home/post'
    const [info, error] = useFetch(endpoint);
    return (
        <>
            <div className="container-fluid noticia">
                <div className="row">

                    {
                        info ? (
                            <>
                                {

                                    info.map(c => (
                                        <div className=" col-4 ">
                                            <img src={'https://backend-toyota.247.com.ec/' + c.image_post} className=""></img>
                                            <h4 className="titulo_post">{c.titulo_post}</h4>
                                            <p className="body_post">{c.body_post}</p>
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

            </div>


        </>
    );
}







