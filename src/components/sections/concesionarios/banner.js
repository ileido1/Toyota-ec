import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion'
import Spinner from 'react-bootstrap/Spinner';
import banner_portada from '../../../images/concesionarios/img-hero.png';
import svg_icon from '../../../images/concesionarios/Icon material-location-on.svg';
import Detalleconcesionarios from "./detalle-concesionarios";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
    NavLink
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import required modules
import { Autoplay } from "swiper";
import useFetch from "../../../hooks/useFetch2";

export default function BannerConcesionario() {
    let endpoint = 'v2/concesionarios/'
    const [ciudades, error] = useFetch(endpoint);
    const [ciudad, setCiudad] = useState(null);


    const detalles = useRef(null);


    function handleChange(event) {
        setCiudad(event.currentTarget.value);
        setTimeout(() => {
            scrollToElement();
        }, 500);
    }
    function Eliminaropcion(event) {
        console.log(event.currentTarget);
        document.querySelector('.selectconcesionario option[value=firts]').remove();

    }
    const scrollToElement = () => detalles.current.scrollIntoView();
    return (
        <>
            <Swiper
                className="mySwiper conceswiper"
            >
                {
                    ciudades ? (
                        <>
                            <SwiperSlide>
                                <div className="container-fluid contenedor " style={{ backgroundImage: `url(${'' + banner_portada})` }} >
                                    <div className="">

                                        <h1 className="titulotoyotaconsesionaro">TOYOTA</h1>
                                        <h1 className="tituloconcesionarios">CONCESIONARIOS</h1>

                                        <select className="form-select selectconcesionario" onChange={handleChange} onClick={Eliminaropcion}>
                                            <option value="firts">&#xf3c5;¿En qué ciudad te encuentras?</option>

                                            {

                                                ciudades.map(c => (
                                                    <>



                                                        <option value={c.city}>{c.city}</option>




                                                    </>
                                                )

                                                )
                                            }
                                        </select>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </>
                    ) : (
                        null
                    )

                }


            </Swiper>
            <div ref={detalles}>
                <Detalleconcesionarios ciudad={ciudad} ></Detalleconcesionarios>

            </div>
        </>
    );
}







