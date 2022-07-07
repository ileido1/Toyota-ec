
import logo_exonerados from '../../../images/exonerados/logo-exonerados.svg'
import raize_exonerados from '../../../images/exonerados/raize-exonerados.png'

import { motion, useViewportScroll } from "framer-motion"

const variants = {
    hidden: { opacity: 0.1 },
    visible: { opacity: 1 },
}


const Cartexonerados = () => (

    <div className="auto-individual container-fluid" >
        <div className="row" id="auto-exonerados" >

            <div className="col-12 col-sm-6"  >
                <motion.img src={raize_exonerados} alt="logo auto exonerados" variants={variants} initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5, default: { duration: 1 } }} />
            </div>

            <div className="col-12 col-sm-6 logo-exonerados "  >
            
                <div className='contenedor-logo-exonerados'>

                <motion.img src={logo_exonerados} variants={variants} initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5, default: { duration: 1 } }} />                    
                <motion.p className='text-exonerados' variants={variants} initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5, default: { duration: 1 } }} >Cotizar vehículo como Exonerado</motion.p>

                </div>
            </div>

        </div>
    </div>


)

export default Cartexonerados

