import useFetch from "../../../hooks/useFetch";
import { useLocation } from 'react-router-dom';

import { motion } from "framer-motion"

import React, { useEffect, useRef, useState } from "react";
import ExoneradosForm from "../formulario/exonerados";

const variants = {
    hidden: { opacity: 0.1 },
    visible: { opacity: 1 },
}

let url_backend = 'https://www.toyota.com.ec/'

export default function Cartexonerados() {
    function abrirModal() {
        var modal = document.getElementById("myModalExonerado");
        modal.style.display = "block";
    }

    let url_api = 'v1/vehicle_data_sheet'
    const [respuesta, error] = useFetch(url_api);
    let url_detalle = ''
    const location = useLocation()

    let banner1 = ''
    let banner2 = ''
    let texto_cotizar = ''
    let link_cotizar = ''
    let flag_clase = ''
    let flag_clase2 = 'none'

    let contenedor = document.getElementById('content-auto-exonerados')

    if (location.pathname == '/corolla-sedan') {
        flag_clase = "none"
        flag_clase2 = 'block'
    }

    if (location.pathname == '/corolla-cross') {
        flag_clase = "none"
        flag_clase2 = 'block'
    }

    if (location.pathname == '/c-hr') {
        flag_clase = "none"
        flag_clase2 = 'block'
    }

    if (location.pathname == '/yaris-cross') {
        flag_clase = "none"
        flag_clase2 = 'block'
    }

    if (respuesta) {

        respuesta.map(c => {

            if (('/' + c.name_vehicle.toLowerCase()) == location.pathname) {
                url_detalle = 'v1/exempt_vehicle/' + c.exempt_vehicle
            }

        }
        )

    }

    const [detalle, error_detalle] = useFetch(url_detalle);

    if (detalle) {

        detalle.map(v => {

            banner1 = url_backend + v.banner_exonerados
            banner2 = url_backend + v.imagen_movilidad_para_todo
            texto_cotizar = v.texto_cotizar_exonerado
            link_cotizar = v.url_cotizar_exonerado

        }
        )

    }

    return (

        <>
            <div id="content-auto-exonerados" className="auto-individual container-fluid ocultar-mobile " >
                <div className="row" id="auto-exonerados" >

                    <div className="col-12 col-sm-6"  >
                        <motion.img src={banner1} alt="logo auto exonerados" className="imagen-banner-exonerados img-fluid" variants={variants} initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5, default: { duration: 1 } }} />
                    </div>

                    <div className="col-12 col-sm-6 logo-exonerados "  >
                        <div className='contenedor-logo-exonerados'>

                            <motion.img src={banner2} variants={variants} initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5, default: { duration: 1 } }} />
                            <motion.p className='text-exonerados' variants={variants} initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5, default: { duration: 1 } }}  > 
                            <a className="cart-link" onClick={abrirModal} style={{ display: flag_clase }} >{texto_cotizar}</a>
                            <a className="cart-link" href="/mundohibrido" style={{ display: flag_clase2 }} >{texto_cotizar}</a>
                            
                            </motion.p>

                        </div>
                    </div>

                </div>
            </div>
            <ExoneradosForm></ExoneradosForm>
        </>


    )

}