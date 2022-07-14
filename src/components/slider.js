import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { motion } from 'framer-motion'


// import required modules
import { Mousewheel, Scrollbar } from "swiper";
import useFetch from "../hooks/useFetch";

export default function App() {
    let llenarbanner = 'home/slider-qdr'
    const [banner, error] = useFetch(llenarbanner);







    return (
        <>
            <Swiper
                modules={[Mousewheel]}
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                speed={2000}
                mousewheel={{
                    sensitivity: 1,
                    releaseOnEdges: true,
                }}
                className="sliderqdr"
            > {
                    banner ? (
                        <>


                            {banner.map((c, i) => (
                                <>
                                    <SwiperSlide>
                                        {i === 0 &&
                                            <div className="fraseizq">
                                                <h1 className="Textobanner"> POR QUÉ UN<br></br> TOYOTA?</h1>
                                            </div>
                                        }


                                        <div className="container fondoqdr  " style={{ backgroundImage: `url(${'https://backend-toyota.247.com.ec/' + c.field_fondo_slider_r})` }} >

                                            <div className="row"
                                            >
                                                <div className="col-6">
                                                </div>
                                                <motion.div className="col-6 contenido-slider" initial={{ y: 200, x: 50 }} transition={{ delay: 0.2, default: { duration: 0.5 } }}
                                                    whileInView={{ y: 0, x: 0 }}
                                                    viewport={{ once: true }}>
                                                    <h1 className="Tbanner rojo">{c.titulo_slider_qdr}</h1>
                                                    <h2 className="Textobanner">
                                                        {c.texto_slider_qdr}
                                                    </h2>
                                                    <h2 className="Textobanner rojo">{c.enlace_texto_slider_qdr}</h2>
                                                    <img src={'https://backend-toyota.247.com.ec/' + c.imagen_slider_qdr} className="imgqdr"></img>

                                                </motion.div>


                                            </div>

                                        </div>
                                        {i === 2 &&
                                            <div className="fraseizq">
                                                <h1 className="Textobanner"> ES LA MARCA MAS CONFIABLE</h1>
                                            </div>
                                        }

                                    </SwiperSlide>
                                </>


                            ))}

                        </>) : (
                        <span> </span>
                    )
                }



            </Swiper>
        </>
    );
}
