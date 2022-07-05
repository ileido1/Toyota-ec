import logo from '../../images/logo.png'

function Navlinkheader({ uri, title, iteracion }) {
    return (
        <>
            <li className="nav-item " >
                <a className="nav-link" href={uri}>
                    {title}

                </a>
            </li>
            {iteracion === 2 &&
                <a className="d-none d-lg-block" href="https://toyota-ec.247.com.ec/"><img src={logo} /></a>
            }
        </>
    );
}

export default Navlinkheader;




