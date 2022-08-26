import pic1 from '../../../images/seccion-tecnologia/tec1.png'
import pic2 from '../../../images/seccion-tecnologia/tec2.png'
import pic3 from '../../../images/seccion-tecnologia/tec3.png'
import pic4 from '../../../images/seccion-tecnologia/tec4.png'

const MundoHibridoTecnologia = () => (

    <div id="tecnologia-mundo-hibrido" className="tecnologia-mundo-hibrido container-fluid d-block d-sm-block d-md-block d-xl-block d-lg-block col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 titulo-galeria-h sinpadding" >
        
        <div className="col-12"  >
            <p class="text-color-diseno2 secciones-subtitulos h-tit">TECNOLOGÍA HÍBRIDA</p>

            <p className="subtitulo-mundo-hibrido" >Toyota, pionera en el desarrollo de tecnología híbrida, la que resulta de la combinación de un motor de combustión con un motor eléctrico.</p>

        </div>

        <div className="col-12 "  >
            <div className="row contenedor-seccion-tecnologia" >
                <div className='col-12 col-sm-12 col-md-6' >

                    <img className='img-titulo-tecnologia img-fluid' src={pic1} alt="HYBRID SYNERGY DRIVE " />
                    <p className='item-titulo-tecnologia' >HYBRID SYNERGY DRIVE</p>
                    <p className='item-parrafo-tecnologia' >El Toyota HSD (Hybrid Synergy Drive) combina la potencia de los motores: eléctrico y de combustión; el desempeño de este sistema es equivalente a un automóvil de 2.400 cc, altamente eficiente. </p>
                    
                </div>
                <div className='col-12 col-sm-12 col-md-6' >

                    <img className='img-titulo-tecnologia img-fluid' src={pic2} alt="FRENADO REGENERATIVO " />
                    <p className='item-titulo-tecnologia' >FRENADO REGENERATIVO</p>
                    <p className='item-parrafo-tecnologia' >Al presionar el freno, el motor eléctrico entra en
‘modo de marcha atrás’, Mientras esto ocurre,
el motor actúa como generador eléctrico,
produciendo energía que recargará las baterías.</p>

                </div>
                <div className='col-12 col-sm-12 col-md-6' >

                    <img className='img-titulo-tecnologia img-fluid' src={pic3} alt="AMIGABLE CON EL AMBIENTE" />
                    <p className='item-titulo-tecnologia' >AMIGABLE CON EL AMBIENTE</p>
                    <p className='item-parrafo-tecnologia' >Al combinar dos tipos de generadores de energía:
uno de combustión y un motor eléctrico, se requiere
menos combustible para mover el auto lo
que se traduce en menos emisiones al ambiente. </p>

                </div>
                <div className='col-12 col-sm-12 col-md-6' >

                    <img className='img-titulo-tecnologia img-fluid' src={pic4} alt="BATERÍA CON 8 AÑOS DE GARANTÍA" />
                    <p className='item-titulo-tecnologia' >BATERÍA CON 8 AÑOS DE GARANTÍA</p>
                    <p className='item-parrafo-tecnologia' >Toyota utiliza dos tipos de baterías: unas son de
ion-litio y otras, de níquel-metal, ambas con
características y prestaciones similares. En caso
de avería, cuentan con una serie de garantías
para protegerte tanto a ti como a tu auto.</p>

                </div>
            </div>

        </div>
        
    </div>
    
    
    )
    
    export default MundoHibridoTecnologia