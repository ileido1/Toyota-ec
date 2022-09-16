
import useFetch from '../../hooks/useFetch';
import Navlinkheader from './navlinkheader';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../images/logo.png'
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
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
													url_nav = c.url_menu_principal.replace("admin/", "")
													return (
														<>
															{i === 2 ?
																<Dropdown>
																	<Dropdown.Toggle variant="" id="dropdown-basic">
																		{c.nombre_menu_superior}
																	</Dropdown.Toggle>

																	<Dropdown.Menu>
																		<Dropdown.Item href="/post-venta">Postventa</Dropdown.Item>
																		<Dropdown.Item href="/mantenimiento">Mantenimiento</Dropdown.Item>
																	</Dropdown.Menu>
																</Dropdown>
																: <Nav.Link key={i} href={url_nav} className={""} >{c.nombre_menu_superior}</Nav.Link>
															}



															{i === 2 &&
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