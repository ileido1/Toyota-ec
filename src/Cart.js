import video from "./videos/video-raize-portada-1920x650.mp4"
import logo_raize from "./images/logo-raize-white.svg"
import hac from "./images/icon-hac-white.svg"
import frenos from "./images/freno-de-disco.svg"
import motor from "./images/motor.svg"

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

        <div id="auto-individual" className="auto-individual container-fluid" >
            <div className="row">
                <div className="col-12 col-sm-12 content-video"  >
                        <video width="100%" autoPlay muted loop controls="0" className="video-cart" >
                            <source src={video} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                </div>

            </div>

            <div className="row">
            
            <div className="col-6">
                <div className="content-feature" id="content-feature" >
                <div className="row">
                            <div className="col-6 col-sm-6 border-right-filled">
                                <div className="row">
                                    <div className="col-12">
                                        <p className="titulo-feature  animated fadeInLeft delay2 duration4" >VERSIONES</p>
                                        <img className="img-logo-feature  animated fadeInLeft delay3 duration4" src={logo_raize} alt="Logo Raize" /><span class="text-feature-version animated fadeInLeft delay2 duration4 " > 4X2 TM</span>
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
                                            <p className="titulo-feature  animated fadeInLeft delay4 duration4" >VERSIONES</p>
                                            <img className="img-logo-feature  animated fadeInLeft delay3 duration4" src={logo_raize} alt="Logo Raize" /><span class="text-feature-version animated fadeInLeft delay2 duration4 " > 4X2CVT</span>
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
    </>
)

export default Cart