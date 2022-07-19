import useFetch from '../../hooks/useFetch';
import Footerli from './footerli';
const Footer = ({ logotoyota, toyotago, toyotasiempre }) => {
    let llenarlista = 'global/menu-secundario/'
    const [listafooter, error2] = useFetch(llenarlista);
    return (
        <footer>
            <div className="container-fluid">
                <div className="row footersup destopk">
                    <div className="col-3">
                        <img src={logotoyota} className="imgfooter"></img>
                    </div>
                    <div className="col-3">
                        <img src={toyotago} className="imgfooter" ></img>
                    </div>
                    <div className="col-3">
                        <img src={toyotasiempre} className="imgfooter"></img>
                    </div>
                    <div className="col-3 centrar" >

                        <div className="input-wrapper">
                            <input type="text" className="inputemail" placeholder="E-mail" />

                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Acepto <span className="spanckeck">aviso de privacidad</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row footersupmobile d-block d-sm-none">
                    <h3>No te pierdas de nada</h3>
                    <p>Registrate para recibir las ultimas actualizaciones </p>
                    <div className="input-wrapper">
                        <input type="text" className="inputemail" placeholder="E-mail" />

                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Acepto <span className="spanckeck">aviso de privacidad</span>
                        </label>
                    </div>

                </div>
                <div className="row footerdown" >

                    {
                        listafooter ? (
                            <>
                                {

                                    listafooter.map((c, i) => {
                                        return < Footerli title={c.title.map(h => h.value)} field_url_menu_secundario={c.field_url_menu_secundario} i={i}></Footerli>
                                    }
                                    )
                                }
                            </>
                        ) : (
                            <span> Cargando...</span>
                        )

                    }
                    <hr className='hrfooter'></hr>
                </div>


            </div>
        </footer>
    );
}

export default Footer;

