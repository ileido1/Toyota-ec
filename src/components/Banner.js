import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion'
import Spinner from 'react-bootstrap/Spinner';


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
        hidden: { opacity: 0, scale: 0, y: 200 },
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
                className="mySwiper"
            >
                {
                    banner ? (
                        <>
                            {

                                banner.map(c => (
                                    <>
                                        <SwiperSlide>
                                            <div className="container-fluid contenedor " style={{ backgroundImage: `url(${'https://backend-toyota.247.com.ec/' + c.fondo_banner})` }} >
                                                <div className="mtopbanner">
                                                    <div className="row" >
                                                        <motion.div
                                                            animate={{
                                                                x: 0,
                                                                x: Actions ? 0 : -400
                                                            }}
                                                            initial={{ x: 200 }} transition={{ delay: 0.5, default: { duration: 1 } }}
                                                            className="col-6">
                                                            <img src={'https://backend-toyota.247.com.ec/' + c.imagen_vehiculo} className="carrobanner"></img>
                                                        </motion.div>
                                                        <motion.div className="col-6 m20"
                                                            variants={boxVariant}
                                                            initial="hidden"
                                                            animate="visible"
                                                            transition={{ delay: 0.5, default: { duration: 1 } }}
                                                        >
                                                            <h1 className="Tbanner">{c.texto_alternativo}</h1>
                                                            <img src={'https://backend-toyota.247.com.ec/' + c.logo_del_vehiculo}></img>

                                                        </motion.div>
                                                    </div>
                                                    <motion.div
                                                        className="row btnhome"
                                                        variants={btnVariant}
                                                        animate="visible"
                                                        transition={{ delay: 0.5, default: { duration: 1 } }} >
                                                        <NavLink to="/raize" className="abanner" > <button className="btn-raize"> {c.texto_del_enlace} </button></NavLink>

                                                    </motion.div>

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







