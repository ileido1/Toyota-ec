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


                                    < Navlinkheader key={i} uri={c.uri} title={c.title} iteracion={i} >

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

