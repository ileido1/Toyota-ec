import pic1 from '../../../images/seccion-tecnologia/bg-desafio-ambiental.png'
import icono1 from '../../../images/seccion-tecnologia/icono-ambiental.png'
import icono2 from '../../../images/seccion-tecnologia/icono-ambiental-2.png'
import icono3 from '../../../images/seccion-tecnologia/icon-reciclar-2.svg'

const AmbientalTecnologia = () => (

<div id="ambiental-mundo-hibrido" className="ambiental-mundo-hibrido container-fluid d-block d-sm-block d-md-block d-xl-block d-lg-block col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sinpadding" >
    <div className='row' >
    

        <div className="col-12 seccion-ambiental"  >

            <div className='ambiental-content-1 d-block d-sm-block' >
                <p class="text-color-diseno2 secciones-subtitulos titulo-ambiental fuente-blanco">Desafío Ambiental Toyota 2050</p>
            </div>
            
            <div className='ambiental-content-2' >
                <img className='img-fluid' src={pic1} alt="imagen seccion ambiental" />
            </div>

            <div className='row ambiental-content-3 d-none d-sm-none d-md-flex d-lg-flex d-xl-flex' >
                

                    <div className='col-12 col-sm-12 col-md-4 item-ambiental' >
                        <img src={icono1} alt="Icono ambiental 1" className='icono-ambiental' />
                        <p className='texto-ambiental' >Llegar a cero emisiones de C02 para todos los modelos Toyota hasta 2050.</p>
                    </div>
                    <div className='col-12 col-sm-12 col-md-4 item-ambiental' >
                        <img src={icono2} alt="Icono ambiental 1" className='icono-ambiental' />
                        <p className='texto-ambiental' >Eliminar emisiones C02 en la fabricación de los vehículos a través de la tecnología GEA-TOYOTA.</p>
                    </div>
                    <div className='col-12 col-sm-12 col-md-4 item-ambiental' >
                        <img src={icono1} alt="Icono ambiental 1" className='icono-ambiental' />
                        <p className='texto-ambiental' >Establecer sistemas de recolección de baterías a nivel mundial, además, instalaciones para el tratamiento y reciclaje de vehículos fuera de uso.</p>
                    </div>
                    
                
            </div>

        </div> 
    </div>

    <div className='row ambiental-content-3 d-flex d-sm-flex d-md-none d-lg-none d-xl-none ambiental-items-mobile' >

        <div className='col-12 col-sm-12 item-ambiental' >
            <img src={icono1} alt="Icono ambiental 1" className='icono-ambiental' />
            <p className='texto-ambiental' >Llegar a cero emisiones de C02 para todos los modelos Toyota hasta 2050.</p>
        </div>
        <div className='col-12 col-sm-12 item-ambiental' >
            <img src={icono2} alt="Icono ambiental 1" className='icono-ambiental' />
            <p className='texto-ambiental' >Eliminar emisiones C02 en la fabricación de los vehículos a través de la tecnología GEA-TOYOTA.</p>
        </div>
        <div className='col-12 col-sm-12 item-ambiental' >
            <img src={icono1} alt="Icono ambiental 1" className='icono-ambiental' />
            <p className='texto-ambiental' >Establecer sistemas de recolección de baterías a nivel mundial, además, instalaciones para el tratamiento y reciclaje de vehículos fuera de uso.</p>
        </div>

    </div>
   
</div>
    
    
    )
    
    export default AmbientalTecnologia