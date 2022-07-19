import Navlinkfooter from "./navlinkfooter";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

function Footerli({ title, field_url_menu_secundario, i }) {
    return (
        <>
            <div className="col d-none d-sm-block">
                <h3 className="tfooter">{title}</h3>
                <ul className="lifooter">
                    {
                        field_url_menu_secundario ? (
                            <section>
                                {

                                    field_url_menu_secundario.map(c => {
                                        return < Navlinkfooter key={c.uri} url={c.uri} title={c.title} ></Navlinkfooter>
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

            <Accordion className="d-block d-sm-none">
                <Accordion.Item eventKey={i}>
                    <Accordion.Header>{title}</Accordion.Header>
                    <Accordion.Body>
                        <ul className="lifooter">
                            {
                                field_url_menu_secundario ? (
                                    <section>
                                        {

                                            field_url_menu_secundario.map(c => {
                                                return < Navlinkfooter key={c.uri} url={c.uri} title={c.title} ></Navlinkfooter>
                                            }
                                            )
                                        }
                                    </section>
                                ) : (
                                    <span> Cargando...</span>
                                )
                            }
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default Footerli;

