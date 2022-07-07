import icono_testdrive from '../../../images/cta/icono-test-drive.svg'
import icono_cotizar from '../../../images/cta/icono-cotizar.svg'

const Cartcta = () => (
    <>
        <div className="auto-individual container-fluid" >
            <div className="row" id="auto-cta" >

                <div className="col-12 col-sm-6 contenedor-cta-testdrive"  >
                    <div className='contenedor-cta'>
                        <img src={icono_testdrive} alt="Icono test drive" className='iconos-cta'  />
                        <p>Compruébalo tu mismo y déjate encantar por un TOYOTA. Solicita tu prueba de manejo</p>
                        <a href="#" id='btn-testdrive' className='btn' >SOLICITAR TEST DRIVE</a>
                    </div>
                </div>

                <div className="col-12 col-sm-6 contenedor-cta-cotizar"  >
                    <div className='contenedor-cta'>
                        <img src={icono_cotizar} alt="Icono cotizar" className='iconos-cta'  />
                        <p>Estas a un paso de tener el auto De tus sueños, un TOYOTA. Haz clic para cotizar este vehículo.</p>
                        <a href="#" id='btn-cotizar' className='btn' >COTIZAR</a>
                    </div>
                </div>

            </div>
        </div>
    </>

)

export default Cartcta