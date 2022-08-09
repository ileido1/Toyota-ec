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
    const [exo, setExo] = useState('');
    const [carroselect, setCarro] = useState('');
    const d = "Exonerados";
    const a = 'Automóviles';
    const s = "SUV"
    const c = "Camionetas"
    const h = "Híbrido"

    const [selectedCategory, setSelectedCategory] = useState(a);
    const [background, setBackground] = useState('');
    const [defecto, setDefault] = useState('');
    function handleCategoryChange(event) {
        setSelectedCategory(event.currentTarget.textContent);
    }

    function handleClick(event) {
        const swiper = document.querySelector('.mySwipercar').swiper;
        var padre = (event.currentTarget.parentElement.parentElement.parentElement.parentElement);
        if (padre.classList.contains('swiper-slide-next')) {
            console.log(event.currentTarget.getAttribute("data-url"))
            window.location.href = event.currentTarget.getAttribute("data-url")


        } else if (padre.classList.contains('swiper-slide-active')) {
            swiper.slidePrev();

        } else {
            swiper.slideNext()
        }
    }

    function abrirModal(event) {
        var modal = document.getElementById("myModal");
        var btn = document.getElementById("cotizar-vehiculo");
        var prueba = (event.currentTarget.getAttribute("data-url").replace('https://www.toyota.com.ec/', '')).replace('/', '').replace('-', ' ');

        setCarro(prueba);
        modal.style.display = "block";
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
        const getExo = async () => {

            const resultexo = await get(`${process.env.REACT_APP_URL_API}${endpoint}`);
            const allItemsexo = resultexo.data;

            setBackground(allItemsexo[0].fondo_vehiculo_exonerado);
            setExo(allItemsexo)

        }
        if (selectedCategory == d) {
            endpoint = 'v1/carousel_exonerados'
            setItems('');
            getExo()
        } else {
            endpoint = 'home/carousel'
            setExo('');
            getItems()
        }

    }, [selectedCategory])


    return (
        <>
            <div className="supcarslider destopk">

                <>
                    <h1 className="h1Conoce">CONOCE NUESTROS VEHÍCULOS</h1>
                    <ul className="nav nav-tabs ">
                        <li className="nav-item">
                            <a className={selectedCategory == a || defecto == a ? "nav-link active" : "nav-link"} aria-current="page" onClick={handleCategoryChange}  >{a}</a>
                        </li>
                        <li className="nav-item">
                            <a className={selectedCategory == s || defecto == s ? "nav-link active" : "nav-link"} aria-current="page" onClick={handleCategoryChange}  >{s}</a>
                        </li>

                        <li className="nav-item">
                            <a className={selectedCategory == h || defecto == h ? "nav-link active" : "nav-link"} aria-current="page" onClick={handleCategoryChange}  >{h}</a>
                        </li>


                        <li className="nav-item">
                            <a className={selectedCategory == c || defecto == c ? "nav-link active" : "nav-link"} aria-current="page" onClick={handleCategoryChange}  >{c}</a>
                        </li>

                        <li className="nav-item">
                            <a className={selectedCategory == d || defecto == d ? "nav-link active" : "nav-link"} aria-current="page" onClick={handleCategoryChange}  >{d}</a>
                        </li>





                    </ul>

                </>


            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={true}
                speed={1000}
                modules={[Navigation]}
                loop={true}
                style={{ backgroundImage: `url(${'https://www.toyota.com.ec/' + background})` }}
                className="mySwipercar destopk"


            >
                {
                    items ? (
                        <>
                            {items.map((c, i) => (

                                <SwiperSlide className="slider-cars" >

                                    {({ isActive }) => (


                                        <div className="container-fluid  "  >


                                            <div className="row" >
                                                <div className="col-12 centrarbaseline">
                                                    <img src={'https://www.toyota.com.ec/' + c.imagen_del_vehiculo} onClick={handleClick} data-url={c.enlace_ver_vehiculos} className="imagencarro"></img>

                                                </div>
                                                <div className="col-12 logocarro">
                                                    <img src={'https://www.toyota.com.ec/' + c.logo_del_vehiculo} className="logocarroprev"></img>

                                                </div>
                                                <div className="col-12 infocarro">
                                                    <p className="pslidercarro">

                                                    </p>
                                                    <div className="row infosupslider">
                                                        <div className="col-6">
                                                            <a href={c.enlace_ver_vehiculos}><img src={'https://www.toyota.com.ec/' + c.logo_del_vehiculo} className="logoslider"></img></a>
                                                        </div>
                                                        <div className="col-6 textoabajo align-items ">
                                                            <a href="/vehiculos"> <p className="vertodos">{c.texto_ver_vehiculos} <i className="fa-solid fa-arrow-up-right-from-square"></i></p></a>
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
                                                            <p onClick={abrirModal} data-url={c.enlace_ver_vehiculos} ><button className="btnslider" onClick={abrirModal} data-url={c.enlace_ver_vehiculos} >{c.texto_cotizar_vehiculo}</button></p>
                                                            <p onClick={abrirModal} data-url={c.enlace_ver_vehiculos} ><button className="btnslider" onClick={abrirModal} data-url={c.enlace_ver_vehiculos} >{c.texto_test_drive_vehiculo}</button></p>
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
                {
                    exo ? (
                        <>
                            {console.log(exo)}
                            {exo.map((c, i) => (

                                <SwiperSlide className="slider-cars" onClick={handleClick} data-url={c.url_todos_los_vehiculos_exonerado}>

                                    {({ isActive }) => (


                                        <div className="container-fluid  "  >


                                            <div className="row" >
                                                <div className="col-12 centrarbaseline">
                                                    <img src={'https://www.toyota.com.ec/' + c.imagen_vehiculo_exonerado} onClick={handleClick} data-url={c.url_todos_los_vehiculos_exonerado} className="imagencarro"></img>
                                                </div>
                                                <div className="col-12 centrarrow">
                                                    <img src={'https://www.toyota.com.ec/' + c.icono_vehiculo_exonerado} className="logoexo"></img>
                                                    <h2>{c.texto_vehiculo_exonerado}</h2>
                                                </div>
                                                <div className="col-12 textoabajo centrar ">
                                                    <a href={c.url_todos_los_vehiculos_exonerado}> <p className="vertodos">{c.texto_url_vehiculo_exonerado} <i className="fa-solid fa-arrow-up-right-from-square"></i></p></a>
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

            <Modalcotizacion carro={carroselect} />
        </>
    );
}

