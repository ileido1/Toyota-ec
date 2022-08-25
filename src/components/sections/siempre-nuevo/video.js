import React, { useEffect, useRef, useState } from "react";

import { motion } from 'framer-motion'


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import useFetch from "../../../hooks/useFetch2";







export default function Video() {


    return (
        <>

            <div className="container-fluid padding0"  >
                <iframe className="videotoyotanuevo" src="https://www.youtube.com/embed/qdclzCaYlqs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>






        </>
    );
}







