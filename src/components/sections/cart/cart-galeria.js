import { Component,useEffect, useRef } from "react"

import useFetch from "../../../hooks/useFetch";
import { useLocation } from 'react-router-dom';

import Cartgaleriapestanavideo from './cart-galeria-pestana-videos'
import Cartgaleriapestanaexterior from './cart-galeria-pestana-exterior'
import Cartgaleriapestanaeinterior from './cart-galeria-pestana-interior'

const Cartgaleria = () => { 

    let url_api = 'v1/vehicle_data_sheet'
    const [respuesta, error] = useFetch(url_api);
    let url_detalle = ''
    let titulo = ''
    const location =  useLocation()
    const videoRef = useRef()

    if(respuesta){
                            
        respuesta.map(c => { 
                
                if ( ('/' + c.name_vehicle.toLowerCase()) == location.pathname ){
                    url_detalle = 'v1/gallery_vehicle/'+ c.gallery_vehiculo
                }
                                    
            }
        )
        
    }

    const [detalle_respuesta, error_detalle] = useFetch(url_detalle);

    if(detalle_respuesta){
        titulo = detalle_respuesta[0]['titulo_galeria_vehiculo']       
    }

    return(
        <>
        
            <div className="container-fluid " id="content-galeria" >
            
            <div className="row ">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 titulo-galeria sinpadding" >
                    <p className="text-color-diseno2 secciones-subtitulos" >{titulo}</p>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pestana-galeria sinpadding"  >
                    <ul id="menu-galeria" >
                        <li> <span id="automovil-video" onClick={videoGaleria} >VIDEO</span> </li>
                        <li> <span id="automovil-exterior cp " className="cp galeria-menu-padding" onClick={exteriorGaleria} >EXTERIOR</span> </li>
                        <li> <span id="automovil-interior" className="cp galeria-menu-padding" onClick={interiorGaleria} >INTERIOR</span> </li>
                    </ul>
                </div>
            </div>

            <div className="row">

                    <div id="content-automovil-video" className="col-12 col-sm-12 content-automovil-video pestaba-cuerpo-galeria mostrar sinpadding" >
                            
                        <Cartgaleriapestanavideo />
                            
                    </div>     
                        
                    <div id="content-automovil-exterior" className="col-12 col-sm-12 content-automovil-exterior sinpadding ocultar"  >

                        <Cartgaleriapestanaexterior />
                    
                    </div>
                    
                    <div id="content-automovil-interior" className="col-12 col-sm-12 content-automovil-interior sinpadding ocultar" >

                        <Cartgaleriapestanaeinterior />

                    </div>

                </div>
            </div>

        </>

    );
  } 

export default Cartgaleria;


function videoGaleria(){   

    var element_video = document.getElementById("content-automovil-video");
    var element_exterior = document.getElementById("content-automovil-exterior");
    var element_interior = document.getElementById("content-automovil-interior");

    element_video.classList.remove("ocultar");
    element_exterior.classList.add("ocultar");
    element_interior.classList.add("ocultar");
    
}

function exteriorGaleria(){
      
    var element_video = document.getElementById("content-automovil-video");
    var element_exterior = document.getElementById("content-automovil-exterior");
    var element_interior = document.getElementById("content-automovil-interior");

    element_video.classList.add("ocultar");
    element_exterior.classList.remove("ocultar");
    element_interior.classList.add("ocultar");
   
}

function interiorGaleria(){   

    var element_video = document.getElementById("content-automovil-video");
    var element_exterior = document.getElementById("content-automovil-exterior");
    var element_interior = document.getElementById("content-automovil-interior");

    element_video.classList.add("ocultar");
    element_exterior.classList.add("ocultar");
    element_interior.classList.remove("ocultar");
    
}

