import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
    NavLink
} from "react-router-dom";

import { Autoplay,Navigation } from "swiper";
import useFetch from "../../../hooks/useFetch";
import { motion } from "framer-motion"

const variants = {
    hidden: { opacity: 0.1 },
    visible: { opacity: 1 },
}

export default function VideoliderMundoHibrido() {

    return (
        <>
        <div id="garantia-mundo-hibrido" className="tecnologia-mundo-hibrido container-fluid d-flex d-flex d-md-block d-xl-block d-lg-block col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 titulo-galeria-h sinpadding" >
         <Swiper spaceBetween={30}
                centeredSlides={true}
                navigation={true}
                speed={1000}
                modules={[Autoplay,Navigation]}
                className="mySwiper swipper-mundohibrido"
            >
                        <>

                            <SwiperSlide>
                              {({ isActive }) => (
                                <>
                                    <div className='player-wrapper d-none d-sm-none d-md-flex d-lg-flex d-xl-flex'  >
                                        <ReactPlayer
                                            className='react-player'
                                            width='1920px'
                                            height='800px'
                                            url="https://youtu.be/eiZHs4hzRMA"
                                        />

                                    </div>

                                    <div className='player-wrapper d-block d-sm-block d-md-none d-lg-none d-xl-none'  >
                                        <ReactPlayer
                                            className='react-player'
                                            width='480px'
                                            height='260px'
                                            url="https://youtu.be/eiZHs4hzRMA"
                                        />

                                    </div>
                                </>

                              )}
                            </SwiperSlide>

                            <SwiperSlide>
                              {({ isActive }) => (
                                <>
                                    <div className='player-wrapper d-none d-sm-none d-md-flex d-lg-flex d-xl-flex'  >
                                        <ReactPlayer
                                            className='react-player'
                                            width='1920px'
                                            height='800px'
                                            url="https://youtu.be/cIDaVP3DUuI"
                                        />

                                    </div>

                                    
                                    <div className='player-wrapper d-block d-sm-block d-md-none d-lg-none d-xl-none'  >
                                        <ReactPlayer
                                            className='react-player'
                                            width='480px'
                                            height='260px'
                                            url="https://youtu.be/cIDaVP3DUuI"
                                        />

                                    </div>
                                </>

                              )}
                            </SwiperSlide>

                            <SwiperSlide>
                              {({ isActive }) => (
                                <>
                                    <div className='player-wrapper d-none d-sm-none d-md-flex d-lg-flex d-xl-flex'  >
                                    <ReactPlayer
                                        className='react-player'
                                        width='1920px'
                                        height='800px'
                                        url="https://youtu.be/zoHCKD-u9Ms"
                                    />

                                </div>
                                                                   
                                <div className='player-wrapper d-block d-sm-block d-md-none d-lg-none d-xl-none'  >
                                        <ReactPlayer
                                            className='react-player'
                                            width='480px'
                                            height='260px'
                                            url="https://youtu.be/zoHCKD-u9Ms"
                                        />

                                    </div>
                                </>

                              )}
                            </SwiperSlide>

                            <SwiperSlide>
                              {({ isActive }) => (
                                <>
                                    <div className='player-wrapper d-none d-sm-none d-md-flex d-lg-flex d-xl-flex'  >
                                        <ReactPlayer
                                            className='react-player'
                                            width='1920px'
                                            height='800px'
                                            url="https://youtu.be/V5P3rioNz6Y"
                                        />

                                    </div>

                                    <div className='player-wrapper d-block d-sm-block d-md-none d-lg-none d-xl-none'  >
                                        <ReactPlayer
                                            className='react-player'
                                            width='480px'
                                            height='260px'
                                            url="https://youtu.be/V5P3rioNz6Y"
                                        />

                                    </div>
                                </>

                              )}
                            </SwiperSlide>

                            <SwiperSlide>
                              {({ isActive }) => (
                                <>
                                    <div className='player-wrapper d-none d-sm-none d-md-flex d-lg-flex d-xl-flex'  >
                                        <ReactPlayer
                                            className='react-player'
                                            width='1920px'
                                            height='800px'
                                            url="https://youtu.be/FYcBnxEwmvA"
                                        />

                                    </div>

                                    <div className='player-wrapper d-block d-sm-block d-md-none d-lg-none d-xl-none'  >
                                        <ReactPlayer
                                            className='react-player'
                                            width='480px'
                                            height='260px'
                                            url="https://youtu.be/FYcBnxEwmvA"
                                        />

                                    </div>
                                </>

                              )}
                            </SwiperSlide>

                        </>
                
            </Swiper>
          </div>   
        </>
    );
}