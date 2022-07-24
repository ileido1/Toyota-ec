import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion'
import Spinner from 'react-bootstrap/Spinner';
import banner_portada from '../images/bg-portada5.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
    NavLink
} from "react-router-dom";

// import required modules
import { Autoplay } from "swiper";
import useFetch from "../hooks/useFetch";

export default function Bannerhome() {
    let llenarbanner = 'home/banner'
    const [banner, error] = useFetch(llenarbanner);

    const [lastyPos, setLastYPost] = useState(0);
    const [Actions, SetActions] = useState(true);
    useEffect(() => {
        function handleScroll() {
            const ypos = window.scrollY;
            const isScrollingUp = ypos < lastyPos;
            SetActions(isScrollingUp);
            setLastYPost(ypos);
        }
        window.addEventListener('scroll', handleScroll, false);

        return () => {
            window.removeEventListener('scroll', handleScroll, false);
        }
    }, [lastyPos]);


    const boxVariant = {
        visible: { opacity: 1, scale: 1, x: 0, x: Actions ? 0 : 400 },
        hidden: { opacity: 0, scale: 0, x: -200 },
    }
    const btnVariant = {
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: { opacity: 0, scale: 0, y: 0 },
    }
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper mySwiperHome"
            >
                {
                    banner ? (
                        <>
                            {

                                banner.map(c => (
                                    <>
                                        <SwiperSlide>
                                            <div className="container-fluid contenedor " style={{ backgroundImage: `url(${'' + banner_portada})` }} >
                                                <div className="mtopbanner destopk">
                                                    <div className="row" >
                                                        <motion.div
                                                            animate={{
                                                                x: 0,
                                                                x: Actions ? 0 : -400
                                                            }}
                                                            initial={{ x: 200}} transition={{ delay: 0.2, default: { duration: 0.7 } }}
                                                            className="col-6">
                                                            <img src={'https://www.toyota.com.ec/' + c.imagen_vehiculo} className="carrobanner"></img>
                                                        </motion.div>
                                                        <motion.div className="col-6 m20"
                                                            variants={boxVariant}
                                                            initial="hidden"
                                                            animate="visible"
                                                            transition={{ delay: 0.2, default: { duration: 0.7 } }}
                                                        >
                                                            <h1 className="Tbanner">{c.texto_alternativo}</h1>
                                                            <img src={'https://www.toyota.com.ec/' + c.logo_del_vehiculo}></img>

                                                        </motion.div>
                                                    </div>
                                                    <motion.div
                                                        className="row btnhome"
                                                        variants={btnVariant}
                                                        animate="visible"
                                                        transition={{ delay: 0.2, default: { duration: 0.7 } }} initial={{ opacity:0}} >
                                                        <NavLink to="/raize" className="abanner" > <button className="btn-raize"> {c.texto_del_enlace} </button></NavLink>

                                                    </motion.div>

                                                </div>
                                                <div className="mtopbanner mobile">
                                                    <div className="row" >
                                                        <div className="col-12 m20"

                                                        >
                                                            <h1 className="Tbanner">{c.texto_alternativo}</h1>
                                                            <img src={'https://www.toyota.com.ec/' + c.logo_del_vehiculo} className="w-100"></img>

                                                        </div>
                                                        <div
                                                            className="col-12">
                                                            <img src={'https://www.toyota.com.ec/' + c.imagen_vehiculo} className="carrobanner"></img>
                                                        </div>

                                                    </div>
                                                    <div
                                                        className="row btnhome"
                                                        variants={btnVariant}
                                                        animate="visible"
                                                        transition={{ delay: 0.5, default: { duration: 1 } }} >
                                                        <NavLink to="/raize" className="abanner" > <button className="btn-raize"> {c.texto_del_enlace} </button></NavLink>

                                                    </div>

                                                </div>

                                            </div>
                                        </SwiperSlide>
                                    </>
                                )

                                )
                            }
                        </>
                    ) : (
                        null
                    )

                }


            </Swiper>

        </>
    );
}







