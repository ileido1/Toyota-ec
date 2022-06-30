import banner_tsn from '../../../images/tecnologia/banner-tsn.png'
import icon_hac from '../../../images/tecnologia/icon-HAC.svg'
import icon_trc from '../../../images/tecnologia/icon-trc.svg'
import icon_vsc from '../../../images/tecnologia/icon-vsc.svg'

const Carttecnologia = () => (

<>


        <div class="row mt40" id="tecnologia " >
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sin-padding-lr" >
                <p class="text-color-tecnologia" >TECNOLOGIA RAIZE</p> 
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
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sin-padding-lr"  >
            <img className="img-fluid" src={banner_tsn} width="100%" alt="Banner Tecnologia" />
            </div>
        </div>

</>


)

export default Carttecnologia