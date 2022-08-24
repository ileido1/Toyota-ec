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

export default function BannerConcesionario() {


    return (
        <>

            <div className="container-fluid padding0"  >
                <img src={banner_portada} className="bannersiemprenuevo"></img>
            </div>






        </>
    );
}







