export default function Filtros() {
    return (
        <div className="container-fluid">
            <div className='row'>
                <div className='col-12 centrar'>
                    <p>TOYOTA</p>
                    <h1>ALARGA LA VIDA DE TU VEHÍCULO</h1>
                </div>
                <div className='col-4'>
                    <p>ALARGA LA VIDA DE TU VEHÍCULO</p>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                </div>
                <div className='col-4'>
                    <p>ALARGA LA VIDA DE TU VEHÍCULO</p>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>


                </div>
                <div className='col-4'>
                    <button>consultar</button>

                </div>

            </div>
        </div>
    )
}