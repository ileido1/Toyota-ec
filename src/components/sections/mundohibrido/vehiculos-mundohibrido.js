import yaris from '../../../images/mundohibrido/yaris.png'
import chr from '../../../images/mundohibrido/chr.png'
import corolla from '../../../images/mundohibrido/corolla.png'
import raize from '../../../images/mundohibrido/raize.png'


const AmbientalVehiculos = () => (

<div id="vehiculos-mundo-hibrido" className="vehiculos-mundo-hibrido container-fluid d-block d-sm-block d-md-block d-xl-block d-lg-block col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sinpadding" >

   <div className="col-12 contenedor-seccion-vehiculos-h"  >
        
        <p className="text-color-diseno2 secciones-subtitulos titulo-ambiental"><span className='fuente-azul' >ENCUENTRA TU HÍBRIDO</span> IDEAL</p>
        <p className='subtitulo-h-vehiculos' >Reserva un Test Drive en tu concesionario más cercano y lleva tu experiencia
de conducción al siguiente nivel con el rendimiento híbrido.</p>

        <div className='row pd40' >

            <div className='col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 h-content-vehiculo' >
            <a href="/corolla-sedan" className='vehiculos-h-enlace' ><img src={corolla} alt="Corolla Sedan" className='img-h-vehiculo' /></a>
                <div className='textos-h-vehiculo' >
                <a href="/corolla-sedan" className='vehiculos-h-enlace' ><p className='vehiculos-h-nombre' >Corolla Sédan</p></a>
                    <a href="/corolla-sedan" className='vehiculos-h-enlace' >Saber más <span className='fuente-rojo' >></span> </a>
                </div>
                
            </div>

            <div className='col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 h-content-vehiculo' >
            <a href="/yaris-cross" className='vehiculos-h-enlace' ><img src={yaris} alt="Yaris Cross" className='img-h-vehiculo' /></a>
                <div className='textos-h-vehiculo' >
                <a href="/yaris-cross" className='vehiculos-h-enlace' ><p className='vehiculos-h-nombre' >Yaris Cross</p></a>
                    <a href="/yaris-cross" className='vehiculos-h-enlace' >Saber más <span className='fuente-rojo' >></span> </a>
                </div>
            </div>

            <div className='col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 h-content-vehiculo' >
                    <a href="/c-hr" className='vehiculos-h-enlace' ><img src={chr} alt="C-HR" className='img-h-vehiculo' /></a>
                <div className='textos-h-vehiculo' >
                <a href="/c-hr" className='vehiculos-h-enlace' ><p className='vehiculos-h-nombre' >C-HR</p></a>
                    <a href="/c-hr" className='vehiculos-h-enlace' >Saber más <span className='fuente-rojo' >></span> </a>
                </div>
            </div>

            <div className='col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 h-content-vehiculo hmtop40' >
            <a href="/raize" className='vehiculos-h-enlace' ><img src={raize} alt="Raize" className='img-h-vehiculo' /> </a>
                <div className='textos-h-vehiculo' >
                    <a href="/raize" className='vehiculos-h-enlace' ><p className='vehiculos-h-nombre' >Raize</p> </a>
                    <a href="/raize" className='vehiculos-h-enlace' >Saber más <span className='fuente-rojo' >></span> </a>
                </div>
            </div>

            <div className='col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 h-content-vehiculo' >
                
            </div>

            <div className='col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 h-content-vehiculo' >
                
                </div>
            
        </div>
       
    </div> 
   
</div>
    
    
    )
    
    export default AmbientalVehiculos