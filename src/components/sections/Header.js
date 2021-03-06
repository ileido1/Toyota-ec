
import useFetch from '../../hooks/useFetch';
import Navlinkheader from './navlinkheader';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../images/logo.png'
import Container from 'react-bootstrap/Container';

function Header() {
	let llenar_header = 'v1/global/menu-principal'
	let url_nav = ''
	const [menu, error2] = useFetch(llenar_header);
	return (
		<>
			<header>
				<Navbar collapseOnSelect expand="lg" >
					<Container fluid>
						<a className="d-block d-sm-none" href="https://toyota.com.ec/"><img src={logo} /></a>

						<Navbar.Toggle aria-controls="basic-navbar-nav" />

						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">

								{

									menu ? (
										<>

											{



												menu.map((c, i) => {
													url_nav = c.url_menu_principal.replace("admin/","")
													return (
														<>

															<Nav.Link key={i} href={url_nav} className={i === 1 || i === 3 ? "d-none" : ""} >{c.nombre_menu_superior}</Nav.Link>
															{i === 3 &&
																<a className="d-none d-lg-block" href="https://www.toyota.com.ec/"><img src={logo} /></a>
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