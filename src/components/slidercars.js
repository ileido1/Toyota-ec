import React, { useRef, useMemo, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "../hooks/useFetch";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules

export default function Sliderscars() {
    let llenarbanner = 'home/carousel'
    const [banner, error] = useFetch(llenarbanner);
    const [categories, error2] = useFetch(llenarbanner);
    const menuItems = [...new Set(categories.map((Val) => Val.categoria_del_vehiculo))];
    const [selectedCategory, setSelectedCategory] = useState();
    const [background, setBackground] = useState('');

    function handleCategoryChange(event) {
        setSelectedCategory(event.currentTarget.textContent);
    }

    function getFilteredList() {
        if (!selectedCategory) {
            return banner;
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
                            menuItems ? (
                                <>
                                    {

                                        menuItems.map(c => (

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
                                                    <img src={'https://backend-toyota.247.com.ec/' + c.imagen_del_vehiculo} className="imagencarro"></img>

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
                                                            <p className="vertodos">{c.texto_ver_vehiculos}</p>
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
                                                            <button className="btnslider">{c.texto_cotizar_vehiculo}</button>
                                                            <button className="btnslider">{c.texto_test_drive_vehiculo}</button>


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
