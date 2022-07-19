
import useFetch from '../../hooks/useFetch';
import Navlinkheader from './navlinkheader';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../images/logo.png'
import Container from 'react-bootstrap/Container';

function Header() {
	let llenar_header = 'v1/global/menu-principal'
	const [menu, error2] = useFetch(llenar_header);
	return (
		<>
			<header>
				<Navbar collapseOnSelect expand="lg" >
					<Container fluid>
						<a className="d-block d-sm-none" href="https://toyota-ec.247.com.ec/"><img src={logo} /></a>

						<Navbar.Toggle aria-controls="basic-navbar-nav" />

						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">

								{

									menu ? (
										<>

											{



												menu.map((c, i) => {

													return (
														<>

															<Nav.Link key={i} href={c.url_menu_principal} >{c.nombre_menu_superior}</Nav.Link>
															{i === 2 &&
																<a className="d-none d-lg-block" href="https://toyota-ec.247.com.ec/"><img src={logo} /></a>
															}
														</>

													)

												}
												)


											}



										</>
									) : (
										null
									)
								}


							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>

			</header>
		</>
	);
}

export default Header;