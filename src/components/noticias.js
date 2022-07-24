import React, { useEffect, useRef, useState, useMemo } from "react";
// Import Swiper React components
import {
    NavLink
} from "react-router-dom";

import useFetch from "../hooks/useFetch";
import { useInView } from "framer-motion";
import { get } from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


export default function Noticias() {
    let endpoint = 'home/post'
    const [info, error] = useFetch(endpoint);
    const [categories, error2] = useFetch(endpoint);
    const [items, setItems] = useState('');
    const [defecto, setDefault] = useState('');

    const [selectedCategory, setSelectedCategory] = useState('');

    function handleCategoryChange(event) {
        setSelectedCategory(event.currentTarget.textContent);
    }

    useEffect(() => {
        const getItems = async () => {

            const result = await get(`${process.env.REACT_APP_URL_API}${endpoint}`);
            const allItems = result.data;
            setDefault('');
            if (!selectedCategory) {
                setDefault(allItems[0].tag);
                const categoryItems = allItems.filter(item => item.tag === allItems[0].tag);
                setItems(categoryItems)
            } else {
                const categoryItems = allItems.filter(item => item.tag === selectedCategory);
                setItems(categoryItems)
            }
        }
        getItems()
    }, [selectedCategory])






    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, { once: false });
    return (
        <>
            <div className="container-fluid noticia">

                <div className="row  ">
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
                                                        <a className={selectedCategory == c || defecto == c ? "nav-link active" : "nav-link"} aria-current="page" onClick={handleCategoryChange}  >{c}</a>
                                                    </li>
                                                )
                                                )
                                            }
                                        </>
                                    ) : (
                                        <span> </span>
                                    )
                                }
                            </>

                        </ul>
                    </div>
                </div>
                <div className="d-none d-sm-block">
                    <div className="row ">


                        {
                            items ? (
                                <>
                                    {

                                        items.slice(0, 3).map(c => (
                                            <div className=" col-sm-4 col-4">
                                                <img src={'https://www.toyota.com.ec/admin//' + c.image_post} className=""></img>
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

                <Swiper
                    slidesPerView={1.5}
                    spaceBetween={30}

                    className="mySwiperNoticias d-block d-sm-none"
                >
                    {
                        items ? (
                            <>
                                {

                                    items.slice(0, 3).map(c => (
                                        <SwiperSlide>

                                            <div className=" col-12">
                                                <img src={'https://www.toyota.com.ec/admin//' + c.image_post} className=""></img>
                                                <h4 className="titulo_post">{c.titulo_post}</h4>
                                                <p className="body_post">{c.body_post}</p>
                                            </div>

                                        </SwiperSlide>

                                    )

                                    )
                                }
                            </>
                        ) : (
                            <span> Cargando...</span>
                        )
                    }
                </Swiper>

            </div>


        </>
    );
}







