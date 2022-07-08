import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import {
    NavLink
} from "react-router-dom";

import useFetch from "../hooks/useFetch";
import { useInView } from "framer-motion";

export default function Noticias() {
    let endpoint = 'home/post'
    const [info, error] = useFetch(endpoint);
    const ref2 = useRef(null);
    const isInView = useInView(ref2, { once: false });
    return (
        <>
            <div className="container-fluid noticia">

                <div className="row">
                    <div className="col-12">
                        <h1 ref={ref2} style={{
                            transform: isInView ? "none" : "translateY(-400px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }} className="mundotoyotapequeno">Mundo <br></br>Toyota</h1>
                        <ul className="nav nav-tabs tabsnoticias ">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Toyota Go</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Toyota News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Toyota Gazoo Racing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Toyota Híbrido</a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="row">


                    {
                        info ? (
                            <>
                                {

                                    info.slice(0, 3).map(c => (
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







