import banner from "../images/bg1.jpg"
import carro from "../images/auto-raize-completo (1).png"
import logo from "../images/logo-raize (1).svg"
function Bannerhome() {
    return (
        <div>
            <div className="container-fluid contenedor" style={{ backgroundImage: `url(${banner})` }} >

                <div className="row" >
                    <div className="col-6">
                        <img src={carro}></img>
                    </div>
                    <div className="col-6">
                        <h1 className="Tbanner">NUEVO</h1>
                        <img src={logo}></img>

                    </div>
                </div>
            </div>
        </div >
    )

}
export default Bannerhome;