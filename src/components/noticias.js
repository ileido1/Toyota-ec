import React, { useEffect, useRef, useState, useMemo } from "react";
// Import Swiper React components
import {
    NavLink
} from "react-router-dom";

import useFetch from "../hooks/useFetch";
import { useInView } from "framer-motion";

export default function Noticias() {
    let endpoint = 'home/post'
    const [info, error] = useFetch(endpoint);
    const [categories, error2] = useFetch(endpoint);
    const [selectedCategory, setSelectedCategory] = useState('');

    function handleCategoryChange(event) {
        setSelectedCategory(event.currentTarget.textContent);
    }

    function getFilteredList() {
        if (!selectedCategory) {
            return info;
        }
        return info.filter((item) => item.tag === selectedCategory);
    }
    var filteredList = useMemo(getFilteredList, [selectedCategory, info]);
    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, { once: false });
    return (
        <>
            <div className="container-fluid noticia">

                <div className="row">
                    <div className="col-12">
                        <h1 ref={ref2} style={{
                            transform: isInView2 ? "none" : "translateY(10px)",
                            opacity: isInView2 ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }} className="mundotoyotapequeno">Mundo <br></br>Toyota</h1>
                        <ul className="nav nav-tabs tabsnoticias ">
                            <>
                                {

                                    categories ? (
                                        <>
                                            {


                                                [...new Set(categories.map((Val) => Val.tag))].map(c => (

                                                    <li className="nav-item">
                                                        <a className="nav-link " aria-current="page" onClick={handleCategoryChange}  >{c}</a>
                                                    </li>
                                                )
                                                )
                                            }
                                        </>
                                    ) : (
                                        <span> Cargando...</span>
                                    )
                                }
                            </>

                        </ul>
                    </div>
                </div>
                <div className="row">


                    {
                        filteredList ? (
                            <>
                                {

                                    filteredList.slice(0, 3).map(c => (
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







