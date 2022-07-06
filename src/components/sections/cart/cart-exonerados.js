
import logo_exonerados from '../../../images/exonerados/logo-exonerados.svg'
import raize_exonerados from '../../../images/exonerados/raize-exonerados.png'

const Cartexonerados = () => (

    <div className="auto-individual container-fluid" >
        <div className="row" id="auto-exonerados" >

            <div className="col-12 col-sm-6"  >
               <img src={raize_exonerados} alt="logo auto exonerados" />
            </div>

            <div className="col-12 col-sm-6 logo-exonerados "  >
                <div className='contenedor-logo-exonerados'>
                    <img src={logo_exonerados} alt="Logo exonerados" />
                    <p className='text-exonerados' >Cotizar vehículo como Exonerado</p>
                </div>
            </div>

        </div>
    </div>


)

export default Cartexonerados