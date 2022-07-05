import logo_raize_2 from "../../../images/diseno/logo-raize.svg"
import documento from "../../../images/diseno/icono-documento.svg"

import negro from "../../../images/diseno/negro.svg"
import plata from "../../../images/diseno/plata.svg"
import gris from "../../../images/diseno/gris.svg"
import blanco from "../../../images/diseno/blanco.svg"
import turquesa from "../../../images/diseno/turquesa.svg"
import rojo from "../../../images/diseno/rojo.svg"

import raize_negro from "../../../images/diseno/raize-negro.png"
import raize_gris from "../../../images/diseno/raize-gris.png"
import raize_plata from "../../../images/diseno/raize-plata.png"
import raize_blanco from "../../../images/diseno/raize-blanco.png"
import raize_turquesa from "../../../images/diseno/raize-turquesa.png"
import raize_rojo from "../../../images/diseno/raize-rojo.png"

const Cartdiseno = () => (
<>
<div className="container-fluid " id="content-diseno" >
<div className="row"  >
    <div className="col-12">
            <div id="diseno" className="row pd100"  >
                <div className="col-4">

                    <div className="content-text">

                        <img src={logo_raize_2} width="200px" alt="" className="  " />
                        <p className="text-cotizar " > El nuevo Toyota Raize llega para expresar la energía y fuerza de quien lo conduce.</p>

                    </div>

                    <div className="content-cotizar">
                        <a href="#" className="btn btn-cotizar " >COTIZAR</a>
                    </div>

                    <div className="content-descarga">
                        <img src={documento} width="28px" className="  " alt="" /> <span className="text-descargar-catalogo" >DESCARGAR CATÁLOGO</span>
                    </div>

                </div>
                <div className="col-8">
                    <img id="imagen-auto-diseno" className=" img-fluid   " src={raize_negro} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <p className="text-color-diseno secciones-subtitulos" >COLOR</p>
                </div>
            </div>
            <div className="row pd50" >
                <div className="col-2">
                    <img className="icono-color"  data-auto={raize_negro}  src={negro} width="50px" alt="Negro" onClick={cambiarAuto} />
                </div>
                <div className="col-2">
                    <img className="icono-color" data-auto={raize_gris}  src={gris} width="50px" alt="Gris" onClick={cambiarAuto} />
                </div>
                <div className="col-2">
                    <img className="icono-color" data-auto={raize_plata}  src={plata} width="50px" alt="Plata" onClick={cambiarAuto} />
                </div>
                <div className="col-2">
                    <img className="icono-color" data-auto={raize_blanco}  src={blanco} width="50px" alt="Blanco" onClick={cambiarAuto} />
                </div>
                <div className="col-2">
                    <img className="icono-color" data-auto={raize_turquesa}  src={turquesa} width="50px" alt="Turquesa" onClick={cambiarAuto} />
                </div>
                <div className="col-2">
                    <img className="icono-color" data-auto={raize_rojo} src={rojo} width="50px" alt="Rojo" onClick={cambiarAuto} />
                </div>
            </div>
        </div>
    </div>
</div>
</>

)

export default Cartdiseno;

function cambiarAuto(e){
    var imagen = e.target.dataset.auto   
    var automovil = document.getElementById('imagen-auto-diseno')
    automovil.src = imagen
}
