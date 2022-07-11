import Header from "./Header";
import Navlinkheader from "./navlinkheader";

function Headerli({ menu }) {
    return (
        <>
            {
                menu ? (
                    <ul className="navbar-nav mx-auto">

                        {

                            menu.map((c, i) => {

                                return (


                                    < Navlinkheader key={i} uri={c.url_menu_principal} title={c.nombre_menu_superior} iteracion={i} >

                                    </Navlinkheader>

                                )

                            }
                            )
                        }
                    </ul>
                ) : (
                    <span> Cargando...</span>
                )
            }

        </>

    );
}

export default Headerli;

