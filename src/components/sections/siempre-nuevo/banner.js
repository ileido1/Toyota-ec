import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion'
import Spinner from 'react-bootstrap/Spinner';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import useFetch from "../../../hooks/useFetch2";
import banner_portada from "../../../images/siemprenuevo/banner.svg"
import video from "../../../videos/portada-tsn.mp4"

export default function BannerConcesionario() {


    return (
        <>

            <div className="container-fluid padding0"  >
                <video width="100%" autoPlay muted loop controls="false"  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support HTML video.
                </video>
            </div>






        </>
    );
}






