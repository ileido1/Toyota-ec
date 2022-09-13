import React, {Component } from 'react'
import axios from 'axios';

export class CascadingDropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
        StateId: '',
        CountryId: '',
        CountryData: [],
        StateData: [],
        CityData: []
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
    
        console.log(e.target.value)
        console.log(modelo)

        axios.get('https://www.toyota.com.ec/api/v2/mantenimiento/tipo_mantenimiento/?q='+e.target.value+'&model='+modelo+'' + e.target.value).then(response => {   
        this.setState({
        ModalPdfData: response.data

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
            return <option data-pdf={e.pdf} key={key} value={e.id}>{e.km}</option>;  
            })}  
        </select>
                            
    </div>

    <div>


        {this.state.ModalPdfData.map((e, key) => {  
            return  <p>{e.pdf}</p>  ;  
        })}  

        
    </div>
 
</>

 
)  
}  
}  
export default CascadingDropdown

function abrirModalMantenimiento(id){
    console.log(id);
}