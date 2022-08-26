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
        <div id="garantia-mundo-hibrido" className="tecnologia-mundo-hibrido container-fluid d-flex d-flex d-md-block d-xl-block d-lg-block col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 titulo-galeria sinpadding" >
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
                                            url="https://www.youtube.com/watch?v=eiZHs4hzRMA&list=PLPNYBLHyUz21BSHAy-DrRuDcOpztSxZLh&index=3"
                                        />

                                    </div>

                                    <div className='player-wrapper d-block d-sm-block d-md-none d-lg-none d-xl-none'  >
                                        <ReactPlayer
                                            className='react-player'
                                            width='480px'
                                            height='260px'
                                            url="https://www.youtube.com/watch?v=eiZHs4hzRMA&list=PLPNYBLHyUz21BSHAy-DrRuDcOpztSxZLh&index=3"
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
                                            url="https://www.youtube.com/watch?v=cIDaVP3DUuI&list=PLPNYBLHyUz21BSHAy-DrRuDcOpztSxZLh&index=4"
                                        />

                                    </div>

                                    
                                    <div className='player-wrapper d-block d-sm-block d-md-none d-lg-none d-xl-none'  >
                                        <ReactPlayer
                                            className='react-player'
                                            width='480px'
                                            height='260px'
                                            url="https://www.youtube.com/watch?v=cIDaVP3DUuI&list=PLPNYBLHyUz21BSHAy-DrRuDcOpztSxZLh&index=4"
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
                                        url="https://www.youtube.com/watch?v=zoHCKD-u9Ms&list=PLPNYBLHyUz21BSHAy-DrRuDcOpztSxZLh&index=5"
                                    />

                                </div>
                                                                   
                                <div className='player-wrapper d-block d-sm-block d-md-none d-lg-none d-xl-none'  >
                                        <ReactPlayer
                                            className='react-player'
                                            width='480px'
                                            height='260px'
                                            url="https://www.youtube.com/watch?v=zoHCKD-u9Ms&list=PLPNYBLHyUz21BSHAy-DrRuDcOpztSxZLh&index=5"
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
                                            url="https://www.youtube.com/watch?v=V5P3rioNz6Y&list=PLPNYBLHyUz21BSHAy-DrRuDcOpztSxZLh&index=6"
                                        />

                                    </div>

                                    <div className='player-wrapper d-block d-sm-block d-md-none d-lg-none d-xl-none'  >
                                        <ReactPlayer
                                            className='react-player'
                                            width='480px'
                                            height='260px'
                                            url="https://www.youtube.com/watch?v=V5P3rioNz6Y&list=PLPNYBLHyUz21BSHAy-DrRuDcOpztSxZLh&index=6"
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
                                            url="https://www.youtube.com/watch?v=FYcBnxEwmvA&list=PLPNYBLHyUz21BSHAy-DrRuDcOpztSxZLh&index=7"
                                        />

                                    </div>

                                    <div className='player-wrapper d-block d-sm-block d-md-none d-lg-none d-xl-none'  >
                                        <ReactPlayer
                                            className='react-player'
                                            width='480px'
                                            height='260px'
                                            url="https://www.youtube.com/watch?v=FYcBnxEwmvA&list=PLPNYBLHyUz21BSHAy-DrRuDcOpztSxZLh&index=7"
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