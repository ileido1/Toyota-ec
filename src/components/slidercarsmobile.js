import React, { useRef, useMemo, useState, useEffect } from "react";
import { get } from 'axios';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "../hooks/useFetch";
import { Navigation } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { NavLink, Navigate } from "react-router-dom";

import Modalcotizacion from "./sections/cart/cart-modal-cotizacion"


// import required modules

export default function Sliderscars() {
    let endpoint = 'home/carousel'

    const [categories, error2] = useFetch(endpoint);


    const [items, setItems] = useState('');

    const [selectedCategory, setSelectedCategory] = useState('');
    const [background, setBackground] = useState('');
    const [defecto, setDefault] = useState('');
    function handleCategoryChange(event) {
        setSelectedCategory(event.currentTarget.textContent);
    }

    function handleClick(event) {
        const swiper = document.querySelector('.mySwipercar').swiper;
        if (event.currentTarget.classList.contains('swiper-slide-next')) {
            console.log(event.currentTarget.getAttribute("data-url"))
            window.location.href = event.currentTarget.getAttribute("data-url")


        } else if (event.currentTarget.classList.contains('swiper-slide-active')) {
            swiper.slidePrev();

        } else {
            swiper.slideNext()
        }
    }

    useEffect(() => {
        const getItems = async () => {

            const result = await get(`${process.env.REACT_APP_URL_API}${endpoint}`);
            const allItems = result.data;
            setDefault('');
            if (!selectedCategory) {
                setDefault(allItems[0].categoria_del_vehiculo);
                setBackground(allItems[0].field_fondo_del_vehiculo);
                const categoryItems = allItems.filter(item => item.categoria_del_vehiculo === allItems[0].categoria_del_vehiculo);
                setItems(categoryItems)
            } else {
                const categoryItems = allItems.filter(item => item.categoria_del_vehiculo === selectedCategory);
                setBackground(categoryItems[0].field_fondo_del_vehiculo);
                setItems(categoryItems)
            }
        }
        getItems()
    }, [selectedCategory])





    return (
        <>
            <div className="supcarslider mobile">
                {categories ? (
                    <>
                        <h1 className="h1Conoce">CONOCE NUESTROS VEHÍCULOS</h1>
                        <ul className="nav nav-tabs ">
                            {
                                [...new Set(categories.map((Val, i) => Val.categoria_del_vehiculo))].map((c, i) => (

                                    <li className="nav-item">
                                        <a className={selectedCategory == c || defecto == c ? "nav-link active" : "nav-link"} aria-current="page" onClick={handleCategoryChange}  >{c}</a>
                                    </li>
                                ))}


                        </ul>

                    </>
                ) : (
                    <span> </span>
                )
                }
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                speed={1000}
                clickable={true}
                modules={[Navigation]}
                loop={true}

                style={{ backgroundImage: `url(${'https://backend-toyota.247.com.ec/' + background})` }}
                className="mySwipercar mobile"

            >
                {
                    items ? (
                        <>
                            {items.map((c, i) => (
                                <SwiperSlide className="slider-cars" onClick={handleClick} data-url={c.enlace_ver_vehiculos}>
                                    {({ isActive }) => (


                                        <div className="container-fluid  "  >


                                            <div className="row" >
                                                <div className="col-12 centrarbaseline">
                                                    <a href={c.enlace_ver_vehiculos}><img src={'https://backend-toyota.247.com.ec/' + c.imagen_del_vehiculo} className="imagencarro2"></img></a>
                                                </div>

                                                <div className="col-12 infocarro2">
                                                    <p className="pslidercarro">
                                                       
                                                    </p>
                                                    <div className="row infosupslider">
                                                        <div className="col-6">
                                                            <img src={'https://backend-toyota.247.com.ec/' + c.logo_del_vehiculo} className="logoslider"></img>
                                                        </div>
                                                        <div className="col-6 textoabajo align-items ">
                                                            <NavLink to={c.enlace_todos_los_vehiculos}> <p className="vertodos">{c.texto_ver_vehiculos} <i className="fa-solid fa-arrow-up-right-from-square"></i></p></NavLink>
                                                        </div>

                                                    </div>
                                                    <div className="row carddetallesslider">
                                                        <div className="col-4 textoabajo border-right-slider ">
                                                            <p className="rendimientoslidertitulo">{c.titulo_info_box_1}</p>
                                                            <p className="rendimientoslider">{c.texto_info_box_1}</p>
                                                        </div>
                                                        <div className="col-4 textoabajo border-right-slider ">
                                                            <p className="rendimientoslidertitulo">{c.titulo_info_box_2}</p>
                                                            <p className="rendimientoslider">{c.texto_info_box_2}</p> </div>
                                                        <div className="col-4 textoabajo">
                                                            <p><button className="btnslider">{c.texto_cotizar_vehiculo}</button></p>
                                                            <p><button className="btnslider">{c.texto_test_drive_vehiculo}</button></p>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    )}


                                </SwiperSlide>



                            ))}

                        </>) : (
                        null
                    )
                }

            </Swiper>

            <Modalcotizacion />
        </>
    );
}

function abrirModal() {
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the button that opens the modal
    var btn = document.getElementById("cotizar-vehiculo");
    modal.style.display = "block";
}