import React, { useRef } from "react";
import { motion,  useInView} from "framer-motion";


import banner_tsn from '../../../images/tecnologia/banner-tsn.png'
import icon_hac from '../../../images/tecnologia/icon-HAC.svg'
import icon_trc from '../../../images/tecnologia/icon-trc.svg'
import icon_vsc from '../../../images/tecnologia/icon-vsc.svg'

const sin_padding = {
    div:{padding-left:0}
}

const variants = {
    hidden: { opacity: 0.1 },
    visible: { opacity: 1 },
}

function Tecnologia({ children }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <div ref={ref}
        
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
        {children}
      </div>
    );
  }

const Carttecnologia = () => { 

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
return( 
    <>
        <div className="container-fluid " id="content-galeria" >

                <div className="row mt40" id="tecnologia " >
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sin-padding-lr" >
                        <p className="text-color-tecnologia" >TECNOLOGIA RAIZE</p> 
                    </div>
                </div>

                <div className="row">
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 sin-padding-lr"  >
                        <img className="img-fluid icono-tecnologia" src={icon_hac} width="120px" alt="Icono Hac" />
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 sin-padding-lr" >
                        <img className="img-fluid icono-tecnologia" src={icon_trc} width="100px" alt="Icono Trc" />
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 sin-padding-lr" >
                        <img className="img-fluid icono-tecnologia" src={icon_vsc} width="100px" alt="Icono Vsc" />
                    </div>
                </div> 

                <div className="row mb40" >
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 sin-padding-lr" >
                        <p className="text-tecnologia" ><strong className="fuente-black" >Asistente de Arranque HAC</strong></p>
                        <p className="text-tecnologia" >Diseñado para reducir riesgos de retroceso al momento de arrancar en pendiente.</p>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 sin-padding-lr" >
                        <p className="text-tecnologia" ><strong className="fuente-black" >Control de tracción TRC</strong></p>
                        <p className="text-tecnologia">Previene la pérdida de adherencia de las ruedas, y que no patinen cuándo se acelera.</p>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 sin-padding-lr" >
                        <p className="text-tecnologia" ><strong className="fuente-black" >Control electrónico de estabilidad (VSC)</strong></p>
                        <p className="text-tecnologia" >Actúa frenando individualmente las ruedas en situaciones de riesgo para evitar derrapes.</p>
                    </div>
                </div>
                
                <div className="row" >
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sin-padding-lr" style={{
          fontWeight: 300
        }} >
                    <Tecnologia>
                        <div ref={ref} >   
                            <img className="img-fluid bannertec" src={banner_tsn} width="100%" alt="Banner Tecnologia" />
                        </div> 
                    </Tecnologia>
                    </div>
                </div>
                

    </div>
    </>

)
}

export default Carttecnologia