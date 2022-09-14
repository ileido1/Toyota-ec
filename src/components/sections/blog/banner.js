import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion'
import axios from "axios";


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
    const ref = useRef(null);
    const btn = useRef(null);
    const [Datos, SetDatos] = useState({ email: '', terms: 'si' })
    const [Respuesta, SetRespuesta] = useState('')
    const [enable, SetEnable] = useState('true');




    const enviaremail = (e) => {
        e.preventDefault();
        const el2 = ref.current;
        SetDatos({ email: el2.value, terms: "si" });
        // axios.get("https://www.toyota.com.ec/api/v2/blog/boletin", Datos).then((response) => {
        //     console.log(response.status);
        //     SetRespuesta(response.data);
        // });
        const getproceso = async () => {
            const resultexo = await axios.get(`${'https://www.toyota.com.ec/api/v2/blog/boletin/?email=' + el2.value + '&terms=' + "si"}`);
            const procesos = resultexo.data;
            SetRespuesta(procesos);
            alert(Respuesta.msj)
        }

        getproceso()
    };

    const handlecheck = (e) => {
        const enviar = btn.current;
        if (e.target.checked === true)
            enviar.disabled = false;
        else enviar.disabled = true;
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
                className="mySwiper "
            >
                {
                    banner ? (
                        <>
                            {

                                banner.map(c => (
                                    <>
                                        <SwiperSlide>
                                            <div className="container-fluid contenedorpost p-40 " style={{ backgroundImage: `url(${'https://www.toyota.com.ec/' + c.blog_banner})` }} >
                                                <div className="row">
                                                    <div className="col-md-6 col-8">
                                                        <h1 className="tbannerpost">{c.blog_label_1}</h1>
                                                        <p className="pbannerpost">{c.blog_label_2}</p>
                                                        <div className='bannerinput'>

                                                            <input type="text" ref={ref} id="email" className="inputemail" placeholder="E-mail" />




                                                            <button className="btn-post" ref={btn} onClick={enviaremail}  > Suscribirme </button>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="flexCheckDefault" onClick={handlecheck} />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                                Acepto <span className="spanckeck">aviso de privacidad</span>
                                                            </label>
                                                        </div>
                                                    </div>
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







