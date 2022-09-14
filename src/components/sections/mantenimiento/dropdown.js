import React, {Component } from 'react'
import axios from 'axios';
import cerrar from '../../../images/cotizacion/cerrar.svg'

let valor_modelo = ''
let valor_version = ''
export class CascadingDropdown extends Component {

    constructor(props) {
        super(props)
        this.state = {
        StateId: '',
        CountryId: '',
        CityId: '',
        CountryData: [],
        StateData: [],
        CityData: [],
        ModalPdfData: []
    }

}

componentDidMount() {

axios.get('https://www.toyota.com.ec/api/v2/mantenimiento/modelos/').then(response => {
        //console.log(response.data);
        this.setState({
            CountryData: response.data
        });
    });
}

ChangeteState = (e) => {
    this.setState({
        CountryId: e.target.value
        });
        
        this.setState({
            StateData: []
            });

        axios.get('https://www.toyota.com.ec/api/v2/mantenimiento/versiones/?q=' + e.target.value).then(response => {
        //console.log(response.data);
        this.setState({
        StateData: response.data,
        });

    });
}

ChangeCity = (e) => {
    
    this.setState({
        StateId: e.target.value
    });

    var select = document.getElementById('mant_modelo');
    var modelo = select.options[select.selectedIndex].value;

    axios.get('https://www.toyota.com.ec/api/v2/mantenimiento/tipo_mantenimiento/?q='+e.target.value+'&model='+modelo).then(response => {
    //console.log(response.data);
    this.setState({
        CityData: response.data
    });
    });
}

ChangeKm = (e) => {

    this.setState({
        CityId: e.target.value
    });

    var select = document.getElementById('mant_modelo');
    var modelo = select.options[select.selectedIndex].value;

    var select_versiones = document.getElementById('mant_versiones');
    var valor_version = select_versiones.options[select_versiones.selectedIndex].value;
    
    this.setState({

        ModalPdfData: e.target.value
    
    });

    abrirModalKm()

}

render() {  
return (  
<>  

    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mant-campo-buscador" >

        <label for="mant_modelo" className='label-mant-buscador label-alin-left' >Seleccione el modelo</label>
        <select id="mant_modelo" name="country" class="form-control" value={this.state.id} onChange={this.ChangeteState} >
        <option value=""  selected="true">Seleccione el modelo</option>

        {this.state.CountryData.map((e, key) => {  
            return <option key={key} value={e.id}>{e.name}</option>;  
        })} 

        </select>
                            
    </div>

    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mant-campo-buscador" >

        <label for="mant_versiones"  className='label-mant-buscador label-alin-center'  >Versiones</label>
        <select id="mant_versiones" name="state" class="form-control" value={this.state.id} onChange={this.ChangeCity} >
        <option value=""  selected="true">Versiones</option>

        {this.state.StateData.map((e, key) => {  
            return <option key={key} value={e.id}>{e.name}</option>;  
        })}  

        </select>
                            
    </div>

    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mant-campo-buscador" >

        <label for="mant_km"  className='label-mant-buscador label-alin-left' >Tipo de Mantenimiento ó Km</label>
        <select id="mant_km" class="form-control" name="city" value={this.state.CityData} onChange={this.ChangeKm} >  
        <option value="" selected="true">Tipo de Mantenimiento ó Km</option>
        
            {this.state.CityData.map((e, key) => {  
                return <option data-pdf={e.pdf} key={key} value={e.pdf}>{e.km}</option>;  
            })}  
        </select>
                            
    </div>

    <div>

          

        <div id="myModalKm" className="modal">
            
        <div className="modal-content cuerpo-modal">       

            <div className='container-fluid' >
                <div className="row" >
                    <div className="col-12" >
                        <p className="close cerrar-modal-km" onClick={cerrarModalKm} >CERRAR <img src={cerrar} /> </p>
                    </div>
                </div>
            </div>

            <div className="container-fluid " >

                <div className="row">
                    <div className='col-12' >
                        
                        <iframe src={this.state.ModalPdfData} width="100%" height="600px" />
                        
                    </div>
                </div>

                <div className="row">
                    <div className='col-12 content-btn-descargar' >
                         
                        <a href={this.state.ModalPdfData} download="true" className='mant-enlace-descargar' target="_blank" >DESCARGAR</a>
                        <a href="https://api.whatsapp.com/send?phone=593992475060&text=Hola" target="_blank" class="compartir-ws">COMPARTIR</a>
                    </div>
                </div>


            </div>
        </div>

        </div>

        
    </div>
 
</>

 
)  
}  
}  
export default CascadingDropdown

function cerrarModalKm() {
    var modal = document.getElementById("myModalKm");
    modal.style.display = "none";
}

function abrirModalKm() {
    var modal = document.getElementById("myModalKm");
    modal.style.display = "block";
}