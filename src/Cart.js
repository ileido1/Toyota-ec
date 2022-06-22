import video from "./videos/video-raize-portada-1920x650.mp4"
import video_galeria_play from "./videos/video-raize-galeria.mp4"
import logo_raize from "./images/logo-raize-white.svg"
import hac from "./images/icon-hac-white.svg"
import frenos from "./images/freno-de-disco.svg"
import motor from "./images/motor.svg"
import footer from "./images/foot.png"

import logo_raize_2 from "./images/diseno/logo-raize.svg"
import documento from "./images/diseno/icono-documento.svg"

import negro from "./images/diseno/negro.svg"
import plata from "./images/diseno/plata.svg"
import gris from "./images/diseno/gris.svg"
import blanco from "./images/diseno/blanco.svg"
import turquesa from "./images/diseno/turquesa.svg"
import rojo from "./images/diseno/rojo.svg"

import raize_negro from "./images/diseno/raize-negro.png"

import './css/style.css';

const Cart = () => (
    <>
        <div className="auto-individual container-fluid" >
            <div className="row" id="menu-producto" >
                <div className="col-12"  >
                    <ul >
                        <li><a href="#versiones">VERSIONES</a></li>
                        <li className="plmenu" >  <a href="#content-feature">CARACTERISTICAS</a> </li>
                        <li className="plmenu" ><a href="#content-diseno">DISENO</a></li>
                        <li className="plmenu" > <a href="#tecnologia">TECNOLOGIA</a> </li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="auto-individual" className="auto-individual container-fluid video-cart" >
            <div className="row">
                <div className="col-12 col-sm-12 content-video"  >
                    <video width="100%" autoPlay muted loop controls="0" >
                        <source src={video} type="video/mp4" />
                        Your browser does not support HTML video.
                    </video>
                </div>
            </div>

            <div className="row">
            
            <div className="col-6">
                <div className="content_features" id="content-features" >
                <div className="row">
                            <div className="col-6 col-sm-6 border-right-filled">
                                <div className="row">
                                    <div className="col-12">
                                        <p className="titulo-feature  animated fadeInLeft delay2 duration4" >VERSIONES</p>
                                        <img className="img-logo-feature  animated fadeInLeft delay3 duration4" src={logo_raize} alt="Logo Raize" /><span className="text-feature-version animated fadeInLeft delay2 duration4 " > 4X2 TM</span>
                                        <p className="text-feature animated fadeInLeft delay2 duration4">Toyota Raize llegó a Ecuador, disponible en dos versiones, Transmisión manual de 5 velocidades.</p>
                                    </div>

                                    <div className="col-4 animated fadeInLeft delay3 duration4">
                                        <img className="img-icono-feature" src={hac} alt="Hac" />
                                        
                                    </div>
                                    <div className="col-4 animated fadeInLeft delay3 duration4">
                                        <img className="img-icono-feature-frenos" src={frenos} alt="Frenos" />
                                        
                                    </div>
                                    <div className="col-4 animated fadeInLeft delay3 duration4">
                                        <img className="img-icono-feature-motor" src={motor} alt="Motor" />
                                        
                                    </div>

                                    <div className="col-4 ">                       
                                        <p className="subtext-feature animated fadeInLeft delay3 duration4" >Arranque en Pendiente HAC</p>
                                    </div>
                                    <div className="col-4 ">                                 
                                        <p className="subtext-feature animated fadeInLeft delay3 duration4" >Frenos ABC + EBD</p>
                                    </div>
                                    <div className="col-4 ">                                   
                                        <p className="subtext-feature animated fadeInLeft delay3 duration4" >Motor 1.2Lt</p>
                                    </div>

                                </div>
                                
                            </div>
                            
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-12">
                                            <p className="titulo-feature  animated fadeInLeft delay2 duration4" > </p>
                                            <br></br>
                                            <br></br>
                                           <img className="img-logo-feature  animated fadeInLeft delay3 duration4" src={logo_raize} alt="Logo Raize" /><span className="text-feature-version animated fadeInLeft delay2 duration4 " > 4X2CVT</span>
                                            <p className="text-feature animated fadeInLeft delay4 duration4">Transmisión automática CVT Compacta, para una alta eficiencia mecánica. con 7 relaciones de cambio simuladas</p>
                                        </div>

                                        <div className="col-4 animated fadeInLeft delay5 duration4">
                                            <img className="img-icono-feature" src={hac} alt="Hac" />
                                            
                                        </div>
                                        <div className="col-4 animated fadeInLeft delay5 duration4">
                                            <img className="img-icono-feature-frenos" src={frenos} alt="Frenos" />
                                            
                                        </div>
                                        <div className="col-4 animated fadeInLeft delay5 duration4">
                                            <img className="img-icono-feature-motor" src={motor} alt="Motor" />
                                            
                                        </div>

                                        <div className="col-4 ">                       
                                            <p className="subtext-feature animated fadeInLeft delay5 duration4" >Arranque en Pendiente HAC</p>
                                        </div>
                                        <div className="col-4 ">                                 
                                            <p className="subtext-feature animated fadeInLeft delay5 duration4" >Frenos ABC + EBD</p>
                                        </div>
                                        <div className="col-4 ">                                   
                                            <p className="subtext-feature animated fadeInLeft delay5 duration4" >Motor 1.2Lt</p>
                                        </div>

                                    </div>                       
                                </div>
                            </div>
                        </div>
                    </div>
                

            </div>
    
        </div>
        
        <div className="row" id="content-diseno" >
            <div className="col-12">
                <div id="diseno" className="row pd100"  >
                    <div className="col-4">

                        <div className="content-text">

                            <img src={logo_raize_2} width="200px" alt="" className=" animated fadeInLeft delay2 duration4 eds-on-scroll" />
                            <p className="text-cotizar  animated fadeInLeft delay2 duration4 eds-on-scroll" > El nuevo Toyota Raize llega para expresar la energía y fuerza de quien lo conduce.</p>
                            
                        </div>

                        <div className="content-cotizar">
                        <a href="#" className="btn btn-cotizar  animated fadeInLeft delay2 duration4 eds-on-scroll" >COTIZAR</a>
                        </div>

                        <div className="content-descarga">
                            <img src={documento} width="28px" className=" animated fadeInLeft delay2 duration4 eds-on-scroll" alt="" /> <span  className="text-descargar-catalogo animated fadeInLeft delay2 duration4 eds-on-scroll" >DESCARGAR CATÁLOGO</span>
                        </div>
                        
                    </div>
                    <div className="col-8">
                        <img id="imagen-auto-diseno" className=" img-fluid  animated fadeInLeft delay2 duration4 eds-on-scroll" src={raize_negro} alt=""  />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <p className="text-color-diseno secciones-subtitulos animated fadeInLeft delay2 duration4 eds-on-scroll" >COLOR</p>               
                    </div>
                </div>
                <div className="row pd50" >
                    <div className="col-2">
                        <img className="icono-color  animated fadeInLeft delay2 duration4 eds-on-scroll" src={negro}  width="50px" alt="Negro" />
                    </div>
                    <div className="col-2">
                        <img className="icono-color  animated fadeInLeft delay2 duration4 eds-on-scroll" src={gris}  width="50px" alt="Gris" />
                    </div>
                    <div className="col-2">
                        <img className="icono-color  animated fadeInLeft delay2 duration4 eds-on-scroll" src={plata} width="50px" alt="Plata" />
                    </div>
                    <div className="col-2">
                        <img className="icono-color  animated fadeInLeft delay2 duration4 eds-on-scroll" src={blanco} width="50px" alt="Blanco" />
                    </div>
                    <div className="col-2">
                        <img className="icono-color  animated fadeInLeft delay2 duration4 eds-on-scroll" src={turquesa}  width="50px" alt="Turquesa" />
                    </div>
                    <div className="col-2">
                        <img className="icono-color  animated fadeInLeft delay2 duration4 eds-on-scroll"  src={rojo}   width="50px" alt="Rojo" />
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 titulo-galeria" >
                <p className="text-color-diseno2 secciones-subtitulos" >GALERIA RAIZE</p> 
            </div>
        </div>

        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pestana-galeria"  >
                <ul id="menu-galeria" >
                    <li> <span id="automovil-video cp" onClick={video_galeria} >VIDEO</span> </li>
                    <li> <span id="automovil-exterior cp" onClick={video_galeria} >EXTERIOR</span> </li>
                    <li> <span id="automovil-interior cp" onClick={video_galeria} >INTERIOR</span> </li>
                </ul>
            </div>
        </div> 

        <div className="row">
        
        <div className="col-12 col-sm-12 content-automovil-video pestaba-cuerpo-galeria"  >
            <div >

                <video width="100%" controls >
                    <source src={video_galeria_play} type="video/mp4" />
                    Your browser does not support HTML video.
                </video>

            </div>

        </div>

        <div className="col-12 col-sm-12 content-automovil-exterior hide"  >


            
            

        </div>

        
        <div className="col-12 col-sm-12 content-automovil-interior hide" >
        
            

        </div>
    
    </div>


    </>
)

function video_galeria(){
    console.log('video_galeria');
}

export default Cart