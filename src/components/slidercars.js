import React, { useRef, useMemo, useState, useEffect } from "react";
import { get } from 'axios';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "../hooks/useFetch";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { NavLink } from "react-router-dom";


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

    useEffect(() => {
        const getItems = async () => {

            const result = await get(`${process.env.REACT_APP_URL_API}${endpoint}`);
            const allItems = result.data;
            setDefault('');
            if (!selectedCategory) {
                setDefault(allItems[0].categoria_del_vehiculo);
                const categoryItems = allItems.filter(item => item.categoria_del_vehiculo === allItems[0].categoria_del_vehiculo);
                setItems(categoryItems)
            } else {
                const categoryItems = allItems.filter(item => item.categoria_del_vehiculo === selectedCategory);
                setItems(categoryItems)
            }
        }
        getItems()
    }, [selectedCategory])





    return (
        <>
            <div className="supcarslider">


                <h1 className="h1Conoce">CONOCE NUESTROS VEHÍCULOS</h1>
                <ul className="nav nav-tabs ">
                    <>
                        {

                            categories ? (
                                <>
                                    {



                                        [...new Set(categories.map((Val, i) => Val.categoria_del_vehiculo))].map((c, i) => (

                                            <li className="nav-item">
                                                <a className={selectedCategory == c || defecto == c ? "nav-link active" : "nav-link"} aria-current="page" onClick={handleCategoryChange}  >{c}</a>
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
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={true}
                speed={1000}
                modules={[Navigation]}
                loop={true}
                style={{ backgroundImage: `url(${'https://backend-toyota.247.com.ec/' + background})` }}
                className="mySwipercar"

            >
                {
                    items ? (
                        <>
                            {items.map((c, i) => (
                                <SwiperSlide className="slider-cars" >
                                    {({ isActive }) => (


                                        <div className="container-fluid  "  >
                                            <div>{isActive ? setBackground(c.field_fondo_del_vehiculo) : ''}

                                            </div>

                                            <div className="row" >
                                                <div className="col-12 centrarbaseline">
                                                    <a href={c.enlace_ver_vehiculos}> <img src={'https://backend-toyota.247.com.ec/' + c.imagen_del_vehiculo} className="imagencarro"></img>
                                                    </a>
                                                </div>
                                                <div className="col-12 logocarro">
                                                    <img src={'https://backend-toyota.247.com.ec/' + c.logo_del_vehiculo} className="logocarroprev"></img>

                                                </div>
                                                <div className="col-12 infocarro">
                                                    <p className="pslidercarro">
                                                        {c.anio_del_vehiculo}
                                                    </p>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <img src={'https://backend-toyota.247.com.ec/' + c.logo_del_vehiculo} className="logoslider"></img>
                                                        </div>
                                                        <div className="col-6 textoabajo align-items ">
                                                            <NavLink to={c.enlace_todos_los_vehiculos}> <p className="vertodos">{c.texto_ver_vehiculos}</p></NavLink>
                                                        </div>

                                                    </div>
                                                    <div className="row carddetallesslider">
                                                        <div className="col-4 textoabajo border-right-slider ">
                                                            <p className="rendimientoslider">{c.texto_info_box_1}</p>
                                                        </div>
                                                        <div className="col-4 textoabajo border-right-slider ">
                                                            <p className="rendimientoslidertitulo">{c.titulo_info_box_2}</p>
                                                            <p className="rendimientoslider">{c.texto_info_box_2}</p> </div>
                                                        <div className="col-4 textoabajo">
                                                            <NavLink to={c.enlace_cotizar_vehiculo}><button className="btnslider">{c.texto_cotizar_vehiculo}</button></NavLink>
                                                            <NavLink to={c.enlace_test_drive_vehiculo}><button className="btnslider">{c.texto_test_drive_vehiculo}</button></NavLink>


                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    )}


                                </SwiperSlide>



                            ))}

                        </>) : (
                        <span> Cargando...</span>
                    )
                }

            </Swiper>
        </>
    );
}
