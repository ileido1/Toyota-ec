import { useEffect, useState } from 'react';
import { get } from 'axios';
import imgir from '../../../images/concesionarios/Group.png'


const Detalleconcesionarios = ({ ciudad }) => {

    const [concesionarios, setConcesionarios] = useState();
    useEffect(() => {
        const getItems = async () => {
            let endpoint = 'v2/concesionarios/toyota/?q=' + ciudad;
            const result = await get(`https://www.toyota.com.ec/api/${endpoint}`);
            const allItems = result.data;
            setConcesionarios(allItems);

        }
        getItems();

    }, [ciudad])



    return (
        <>

            {
                ciudad ? (
                    <>
                        <div className='container concecesionariosdetalle'>
                            <div className='row'>
                                {

                                    concesionarios.map((c, i) => (
                                        <>


                                            <div className="col-sm-4 col-12 borderdetalle margindetalle">
                                                <div className='cuadrodetalle'>
                                                    <h1 className='nombreconcesionario'>{c.nombre}</h1>
                                                    <p className='ubicacionconce'>{c.ciudad},{c.provincia}</p>
                                                    <a className='detallecon' target="_blank" href={c.map}>{c.direccion} <img src={imgir}></img></a>
                                                    <a className='detallecon' target="_blank" href={"tel:" + c.telefono}>{c.telefono}<img src={imgir}></img></a>
                                                    <a href={c.web} target="_blank" className='detallecon'>{c.web}<img src={imgir}></img></a>
                                                    <p className='horariocon'>{c.horarios}</p>
                                                    <p className='slogancon'>{c.slogan}</p>
                                                </div>

                                            </div>

                                        </>
                                    )

                                    )
                                }
                            </div>
                        </div>
                    </>
                ) : (
                    null
                )

            }


        </>

    )
}



export default Detalleconcesionarios;