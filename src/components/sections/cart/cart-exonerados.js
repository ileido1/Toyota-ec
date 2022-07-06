
import logo_exonerados from '../../../images/exonerados/logo-exonerados.svg'
import raize_exonerados from '../../../images/exonerados/raize-exonerados.png'

import { motion } from "framer-motion"
const variants = {
    hidden: { opacity: 0.1 },
    visible: { opacity: 1 },
}

const Cartexonerados = () => (

    <div className="auto-individual container-fluid" >
        <div className="row" id="auto-exonerados" >

            <div className="col-12 col-sm-6"  >
               <img src={raize_exonerados} alt="logo auto exonerados" />
            </div>

            <div className="col-12 col-sm-6 logo-exonerados "  >
            
                <div className='contenedor-logo-exonerados'>

                    <motion.img src={logo_exonerados} initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.2, default: { duration: 3 }, }} />
                    
                    <p className='text-exonerados' >Cotizar vehículo como Exonerado</p>
                </div>
            </div>

        </div>
    </div>


)

export default Cartexonerados