import Accordion from 'react-bootstrap/Accordion';

const FaqsVehiculos = () => (

<div id="faqs-mundo-hibrido" className="vehiculos-mundo-hibrido container-fluid d-none d-sm-none d-md-block d-xl-block d-lg-block col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sinpadding" >

   <div className="col-12 contenedor-seccion-vehiculos-h"  >
        
        <p className="text-color-diseno2 secciones-subtitulos titulo-faqs">PREGUNTAS FRECUENTES<span className='fuente-azul' > SOBRE HÍBRIDOS</span> </p> 
        
        <div className='row' >

            <Accordion className="d-block faqs-acordeon">
                <Accordion.Item eventKey="1" >
                    <Accordion.Header className='titulo-faqs' >¿Cómo funciona un vehículo híbrido?</Accordion.Header>
                    <Accordion.Body>
                            <p className='parrafo-faqs' >
                            Un vehículo híbrido funciona gracias a la energía que le proveen sus dos motores: por un lado, un eficiente motor de combustión y por otro, un potente motor eléctrico. El exclusivo sistema híbrido Toyota HSD (Hybrid Synergy Drive) combina o alterna la potencia de ambos, moviéndose de una forma más económica y sostenible sin perder las prestaciones de un vehículo convencional.
                            </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" >
                    <Accordion.Header className='titulo-faqs' >¿Qué garantía de cobertura híbrida tengo en mi Toyota?</Accordion.Header>
                    <Accordion.Body>
                            <p className='parrafo-faqs' >
                            Los vehículos híbridos están diseñados para que su batería dure toda su vida útil*.
En caso de avería, cuentan con una serie de garantías para protegerte tanto a ti
como al modelo.
El tiempo de cobertura de la garantía es de 8 años o 160.000 kilómetros.

*El desgaste de las baterías es muy poco con el paso del tiempo. Pero su duración estimada supera
siempre la vida útil del propio vehículo.

                            </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" >
                    <Accordion.Header className='titulo-faqs' >¿El motor eléctrico puede funcionar solo si la gasolina se agota?</Accordion.Header>
                    <Accordion.Body>
                            <p className='parrafo-faqs' >
                            El sistema híbrido está diseñado para que ambos motores: tanto el eléctrico,
como el de combustión funciones combinada o alternada. Si las baterías están
recargadas y no tiene combustible, lo más probable es que el auto se apague en
el tiempo de duración de sus baterías. 
Es recomendable tener siempre combustible y evitar daños futuros en el sistema
híbrido y sus baterías.

                            </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" >
                    <Accordion.Header className='titulo-faqs' >¿Qué sucede si la batería de mi vehículo híbrido se agota?</Accordion.Header>
                    <Accordion.Body>
                            <p className='parrafo-faqs' >
                            En velocidad constante o cuando la batería está descargada, los híbridos
aprovechan la energía generada por el motor de combustión para recargar la
batería. Es en estos momentos, cuando el generador eléctrico se alimenta y
recupera la electricidad que envía a la batería.

                            </p>
                    </Accordion.Body>
                </Accordion.Item>
                                <Accordion.Item eventKey="5" >
                    <Accordion.Header className='titulo-faqs' >¿El mantenimiento es más costoso?</Accordion.Header>
                    <Accordion.Body>
                            <p className='parrafo-faqs' >
                            El mantenimiento de un vehículo híbrido resulta más económico si se lo compara
con un vehículo convencional de combustión interna. 

Con los  vehículos híbridos de Toyota logras ahorro por todos lados, tanto por
consumo como por mantenimiento. Nuestros coches híbridos eléctricos prescinden
de elementos mecánicos (sujetos a desgaste) propios de los coches convencionales,
haciendo que su mantenimiento sea mucho menos frecuente y mucho más sencillo.

Las baterías de los autos híbridos de Toyota no se cambian de forma preventiva
cada cierto tiempo. Además, las baterías de nuestros híbridos no tienen una
duración determinada. Olvídate de eso de la obsolescencia programada.


                            </p>
                    </Accordion.Body>
                </Accordion.Item>
                
            </Accordion>


            
        </div>
       
    </div> 
   
</div>
    
    
    )
    
    export default FaqsVehiculos