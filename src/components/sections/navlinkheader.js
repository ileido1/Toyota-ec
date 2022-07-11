import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'

function Navlinkheader({ uri, title, iteracion }) {
    return (
        <>
            <li className="nav-item " >
                <NavLink to={uri} className="nav-link" key={iteracion}>{title}</NavLink>
            </li>
            {iteracion === 2 &&
                <a className="d-none d-lg-block" href="https://toyota-ec.247.com.ec/"><img src={logo} /></a>
            }
        </>
    );
}

export default Navlinkheader;




