import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import porque from "../images/Por-que.png"
import q from "../images/Q.png"
import d from "../images/D.png"
import r from "../images/R.png"
import m from "../images/Es-la-marca.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Mousewheel } from "swiper";

export default function App() {
    return (
        <>
            <Swiper
                direction={"horizontal"}
                slidesPerView={1}
                spaceBetween={0}
                mousewheel={true}
                modules={[Mousewheel]}
                className="mySwiper"
            >
                <SwiperSlide><img src={porque}></img></SwiperSlide>
                <SwiperSlide><img src={q}></img></SwiperSlide>
                <SwiperSlide><img src={d}></img></SwiperSlide>
                <SwiperSlide><img src={r}></img></SwiperSlide>
                <SwiperSlide><img src={m}></img></SwiperSlide>
            </Swiper>
        </>
    );
}
