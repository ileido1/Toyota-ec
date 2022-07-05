import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import useFetch from '../../hooks/useFetch';
import Headerli from './Headerli'

function Header() {
	let llenar_header = 'global/menu-principal'
	const [menu, error2] = useFetch(llenar_header);
	return (
		<>
			<header>
				<nav className="navbar navbar-expand-lg ">
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon">.</span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">

						{
							menu ? (
								<>
									{

										menu.map(c => {

											return <Headerli menu={c.field_url_menu_principal}></Headerli>
										}
										)
									}
								</>
							) : (
								<span> Cargando...</span>
							)
						}


					</div>
				</nav>
			</header>
		</>
	);
}

export default Header;