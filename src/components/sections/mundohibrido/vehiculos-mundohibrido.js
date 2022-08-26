import yaris from '../../../images/mundohibrido/yaris.png'
import chr from '../../../images/mundohibrido/chr.png'
import corolla from '../../../images/mundohibrido/corolla.png'
import raize from '../../../images/mundohibrido/raize.png'


const AmbientalVehiculos = () => (

<div id="vehiculos-mundo-hibrido" className="vehiculos-mundo-hibrido container-fluid d-none d-sm-none d-md-block d-xl-block d-lg-block col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sinpadding" >

   <div className="col-12 contenedor-seccion-vehiculos-h"  >
        
        <p className="text-color-diseno2 secciones-subtitulos titulo-ambiental"><span className='fuente-azul' >ENCUENTRA TU HÍBRIDO</span> IDEAL</p>
        <p className='subtitulo-h-vehiculos' >Reserva un Test Drive en tu concesionario más cercano y lleva tu experiencia
de conducción al siguiente nivel con el rendimiento híbrido.</p>

        <div className='row' >

            <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 h-content-vehiculo' >
                <img src={corolla} alt="Corolla Sedan" className='img-h-vehiculo' />
                <div className='textos-h-vehiculo' >
                    <p className='vehiculos-h-nombre' >Corolla Sédan</p>
                    <a href="/corolla-sedan" className='vehiculos-h-enlace' >Saber más <span className='fuente-rojo' >></span> </a>
                </div>
                
            </div>

            <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 h-content-vehiculo' >
                <img src={yaris} alt="Yaris Cross" className='img-h-vehiculo' />
                <div className='textos-h-vehiculo' >
                    <p className='vehiculos-h-nombre' >Yaris Cross</p>
                    <a href="/yaris-cross" className='vehiculos-h-enlace' >Saber más <span className='fuente-rojo' >></span> </a>
                </div>
            </div>

            <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 h-content-vehiculo' >
                <img src={chr} alt="C-HR" className='img-h-vehiculo' />
                <div className='textos-h-vehiculo' >
                    <p className='vehiculos-h-nombre' >C-HR</p>
                    <a href="/c-hr" className='vehiculos-h-enlace' >Saber más <span className='fuente-rojo' >></span> </a>
                </div>
            </div>

            <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 h-content-vehiculo' >
                <img src={raize} alt="Raize" className='img-h-vehiculo' />
                <div className='textos-h-vehiculo' >
                    <p className='vehiculos-h-nombre' >Raize</p>
                    <a href="/raize" className='vehiculos-h-enlace' >Saber más <span className='fuente-rojo' >></span> </a>
                </div>
            </div>
            
        </div>
       
    </div> 
   
</div>
    
    
    )
    
    export default AmbientalVehiculos