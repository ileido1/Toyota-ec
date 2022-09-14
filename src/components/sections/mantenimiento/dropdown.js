import React, {Component } from 'react'
import axios from 'axios';
import cerrar from '../../../images/cotizacion/cerrar.svg'
export class CascadingDropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
        StateId: '',
        CountryId: '',
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

    axios.get('https://www.toyota.com.ec/api/v2/mantenimiento/tipo_mantenimiento/?q='+e.target.value+'&model='+modelo+'' + e.target.value).then(response => {
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

    var select_km = document.getElementById('mant_km');
    var km = select_km.options[select_km.selectedIndex].value;
    
    console.log(e.target.value)
    console.log(km)

    axios.get('https://www.toyota.com.ec/api/v2/mantenimiento/tipo_mantenimiento/?q='+e.target.value+'&model='+modelo+'' + e.target.value).then(response => {   
        
    this.setState({

    ModalPdfData: km

    });
    });
}

render() {  
return (  
<>  

    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mant-campo-buscador" >

        <label for="mant_modelo">Seleccione el modelo</label>
        <select id="mant_modelo" name="country" value={this.state.id} onChange={this.ChangeteState} >

        {this.state.CountryData.map((e, key) => {  
            return <option key={key} value={e.id}>{e.name}</option>;  
        })} 

        </select>
                            
    </div>

    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mant-campo-buscador" >

        <label for="mant_versiones">Versiones</label>
        <select id="mant_versiones" name="state" value={this.state.id} onChange={this.ChangeCity} >

        {this.state.StateData.map((e, key) => {  
            return <option key={key} value={e.id}>{e.name}</option>;  
        })}  

        </select>
                            
    </div>

    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mant-campo-buscador" >

        <label for="mant_km">Tipo de Mantenimiento ó Km</label>
        <select id="mant_km" name="city" value={this.state.CityData} onChange={this.ChangeKm} >  
            {this.state.CityData.map((e, key) => {  
            return <option data-pdf={e.pdf} key={key} value={e.pdf}>{e.km}</option>;  
            })}  
        </select>
                            
    </div>

    <p onClick={abrirModalKm} > Abrir modal </p>

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