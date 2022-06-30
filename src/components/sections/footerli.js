import Navlinkfooter from "./navlinkfooter";

function Footerli({ title, field_url_menu_secundario }) {
    return (
        <div className="col">
            <h3 className="tfooter">{title}</h3>
            <ul className="lifooter">
                {
                    field_url_menu_secundario ? (
                        <section>
                            {

                                field_url_menu_secundario.map(c => {
                                    return < Navlinkfooter key={c.uri} title={c.title} ></Navlinkfooter>
                                }
                                )
                            }
                        </section>
                    ) : (
                        <span> Cargando...</span>
                    )
                }
            </ul>
        </div>

    );
}

export default Footerli;

