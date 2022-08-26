

const Cartmenu = ({ url }) => (

<div className="auto-individual container-fluid video-cart d-none d-sm-none d-md-block d-xl-block d-lg-block menu-portada-vehiculos" id="menu-portada-vehiculos" >
    <div className="row menu-sticky" id="menu-producto" >
        <div className="col-10"  >
            <ul >
                <li><a href="#basic-navbar-nav">VERSIONES</a></li>
                <li className="plmenu" >  <a href="#content-feature">CARACTERÍSTICAS</a> </li>
                <li className="plmenu" ><a href="#content-diseno">DISEÑO</a></li>
                <li className="plmenu" > <a href="#tecnologia">TECNOLOGÍA</a> </li>
            </ul>
        </div>
        <div className="col-1" >
            <span className="btn btn-cotizat-menu-autos" onClick={abrirModal} >COTIZAR</span>
        </div>
    </div>
</div>


)

export default Cartmenu

function abrirModal() {
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the button that opens the modal
    var btn = document.getElementById("cotizar-vehiculo");
    modal.style.display = "block";
}