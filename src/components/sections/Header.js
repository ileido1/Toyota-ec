import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
function Header() {
	return (

		<header>
			<nav className="navbar navbar-expand-lg ">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon">.</span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav mx-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">VEHÍCULOS <span className="sr-only">.</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">CONCESIONARIOS</a>
						</li>

						<li className="nav-item">
							<a className="nav-link" href="#">POSTVENTA</a>
						</li>
						<a className="d-none d-lg-block" href="https://toyota-ec.247.com.ec/"><img src={logo} /></a>
						<li className="nav-item">
							<a className="nav-link" href="#">TOYOTA SIEMPRE NUEVO</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">TOYOTA <span className='spango' >GO</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#"><FontAwesomeIcon icon={faMagnifyingGlass} className='iconsearch'></FontAwesomeIcon>BUSCAR</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>

	);
}

export default Header;