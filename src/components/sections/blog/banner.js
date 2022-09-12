import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
    NavLink
} from "react-router-dom";

// import required modules
import { Autoplay } from "swiper";
import useFetch from "../../../hooks/useFetch";

export default function BannerNoticias() {
    let llenarbanner = 'v1/blog_banner'
    const [banner, error] = useFetch(llenarbanner);


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
                className="mySwiper "
            >
                {
                    banner ? (
                        <>
                            {

                                banner.map(c => (
                                    <>
                                        <SwiperSlide>
                                            <div className="container-fluid contenedor " style={{ backgroundImage: `url(${'https://www.toyota.com.ec/' + c.blog_banner})` }} >
                                                <h1>{c.blog_label_1}</h1>
                                                <p>{c.blog_label_2}</p>
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







