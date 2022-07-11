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
    const [banner, error] = useFetch(endpoint);
    const [categories, error2] = useFetch(endpoint);

    const [data, setData] = useState()
    useEffect(() => {
        get(`${process.env.REACT_APP_URL_API}${endpoint}`)
            .then(({ data }) => setData(data.filter((item) => item.categoria_del_vehiculo === data[0].categoria_del_vehiculo)));
    }, [endpoint])


    const [selectedCategory, setSelectedCategory] = useState('');
    const [background, setBackground] = useState('');

    function handleCategoryChange(event) {
        setSelectedCategory(event.currentTarget.textContent);
    }

    function getFilteredList() {
        if (!selectedCategory) {
            return data;
        }
        return banner.filter((item) => item.categoria_del_vehiculo === selectedCategory);
    }
    var filteredList = useMemo(getFilteredList, [selectedCategory, banner]);




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



                                        [...new Set(categories.map((Val, i) => Val.categoria_del_vehiculo))].map(c => (

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
                    filteredList ? (
                        <>
                            {filteredList.map((c, i) => (
                                <SwiperSlide className="slider-cars" >
                                    {({ isActive }) => (


                                        <div className="container-fluid  "  >
                                            <div>{isActive ? setBackground(c.field_fondo_del_vehiculo) : ''}

                                            </div>

                                            <div className="row" >
                                                <div className="col-12 centrarbaseline">
                                                    <NavLink to={c.enlace_ver_vehiculos}> <img src={'https://backend-toyota.247.com.ec/' + c.imagen_del_vehiculo} className="imagencarro"></img>
                                                    </NavLink>
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
