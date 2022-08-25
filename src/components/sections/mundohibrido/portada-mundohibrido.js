import React, { useEffect, useRef, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import VideoMundoHibrido from './video-portada'
import MenuMundoHibrido from './menu-mundohibrido'

export default function PortadaMundoHibrido() {
 
    return (
    <> 

        <div id="portada-mundo-hibrido" className="mundo-hibrido container-fluid video-cart d-none d-sm-none d-md-block d-xl-block d-lg-block" >

            <div className="row" >

                <MenuMundoHibrido />

            </div>

            <div className="row">
                <div className="col-12 col-sm-12 content-video"  >

                    <VideoMundoHibrido />

                </div>
            </div>
            
        </div>

    </>

    );
}