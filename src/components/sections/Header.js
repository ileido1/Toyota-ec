import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import useFetch from '../../hooks/useFetch';
import Navlinkheader from './navlinkheader';

function Header() {
	let llenar_header = 'v1/global/menu-principal'
	const [menu, error2] = useFetch(llenar_header);
	return (
		<>
			<header>
				<nav className="navbar navbar-expand-lg ">
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon">.</span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav mx-auto">


							{

								menu ? (
									<>

										{



											menu.map((c, i) => {

												return (


													< Navlinkheader key={i} uri={c.url_menu_principal} title={c.nombre_menu_superior} iteracion={i} >

													</Navlinkheader>

												)

											}
											)


										}



									</>
								) : (
									null
								)
							}
						</ul>


					</div>
				</nav>
			</header>
		</>
	);
}

export default Header;