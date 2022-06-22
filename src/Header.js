import logo from './images/logo.png';

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
						<a className="d-none d-lg-block" href="http://toyota-site.247.com.ec/"><img src={logo} /></a>
						<li className="nav-item">
							<a className="nav-link" href="#">TOYOTA SIEMPRE NUEVO</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">TOYOTA <span >GO</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#"><i className="fa-solid fa-magnifying-glass" ></i>BUSCAR</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>

	);
}

export default Header;