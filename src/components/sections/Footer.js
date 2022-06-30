import useFetch from '../../hooks/useFetch';
import Footerli from './footerli';
const Footer = ({ logotoyota, toyotago, toyotasiempre }) => {
    let llenarlista = 'global/menu-secundario/'
    const [listafooter, error2] = useFetch(llenarlista);
    return (
        <footer>
            <div className="container-fluid">
                <div className="row footersup">
                    <div className="col-3">
                        <img src={logotoyota}></img>
                    </div>
                    <div className="col-3">
                        <img src={toyotago}></img>
                    </div>
                    <div className="col-3">
                        <img src={toyotasiempre}></img>
                    </div>
                    <div className="col-3 centrar" >

                        <div class="input-wrapper">
                            <input type="text" className="inputemail" placeholder="E-mail" />

                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Acepto <span className="spanckeck">aviso de privacidad</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row footerdown" >

                    {
                        listafooter ? (
                            <>
                                {

                                    listafooter.map(c => {
                                        return < Footerli title={c.title.map(h => h.value)} field_url_menu_secundario={c.field_url_menu_secundario}></Footerli>
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

