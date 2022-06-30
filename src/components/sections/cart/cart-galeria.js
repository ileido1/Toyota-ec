import { Component } from "react"
import video_galeria_play from "../../../videos/video-raize-galeria.mp4"

const photos = [
    {
      src: 'http://example.com/example/img1.jpg',
      width: 1,
      height: 1
    },
    {
      src: 'http://example.com/example/img2.jpg',
      width: 1,
      height: 1
    }
  ];

class Cartgaleria extends Component {

    constructor(props) {
        super(props)
            this.state = {
                mostrar_video: true,
                mostrar_exterior: false,
                mostrar_interior: false
        }
    }


    render() { 

        var vis_video = ""
        var vis_exterior = ""
        var vis_interior = ""

        return(
        <>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 titulo-galeria" >
                    <p className="text-color-diseno2 secciones-subtitulos" >GALERIA RAIZE</p>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pestana-galeria"  >
                    <ul id="menu-galeria" >
                        <li> <span id="automovil-video cp" onClick={videoGaleria} >VIDEO</span> </li>
                        <li> <span id="automovil-exterior cp" onClick={exteriorGaleria} >EXTERIOR</span> </li>
                        <li> <span id="automovil-interior cp" onClick={interiorGaleria} >INTERIOR</span> </li>
                    </ul>
                </div>
            </div>

            <div className="row">

            <div id="content-automovil-video" className="col-12 col-sm-12 content-automovil-video pestaba-cuerpo-galeria mostrar" >
                <div>
                    <video width="100%" controls >
                        <source src={video_galeria_play} type="video/mp4" />
                        Your browser does not support HTML video.
                    </video>
                </div>
            </div>     
            
            <div id="content-automovil-exterior" className="col-12 col-sm-12 content-automovil-exterior ocultar"  >
            
            </div>
            <div id="content-automovil-interior" className="col-12 col-sm-12 content-automovil-interior ocultar" >

            </div>
        </div>
        
        </>
        )
    }

}

export default Cartgaleria;

function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}

function videoGaleria(){   

    var element_video = document.getElementById("content-automovil-video");
    var element_exterior = document.getElementById("content-automovil-exterior");
    var element_interior = document.getElementById("content-automovil-interior");

    element_video.classList.remove("ocultar");
    element_exterior.classList.add("ocultar");
    element_interior.classList.add("ocultar");
    
}

function exteriorGaleria(){
      
    var element_video = document.getElementById("content-automovil-video");
    var element_exterior = document.getElementById("content-automovil-exterior");
    var element_interior = document.getElementById("content-automovil-interior");

    element_video.classList.add("ocultar");
    element_exterior.classList.remove("ocultar");
    element_interior.classList.add("ocultar");

    CrearGaleriaExterior()
   
}

function interiorGaleria(){   

    var element_video = document.getElementById("content-automovil-video");
    var element_exterior = document.getElementById("content-automovil-exterior");
    var element_interior = document.getElementById("content-automovil-interior");

    element_video.classList.add("ocultar");
    element_exterior.classList.add("ocultar");
    element_interior.classList.remove("ocultar");

    CrearGaleriaInterior()
    
}

function CrearGaleriaExterior(){

    let result = '<div class="row" >'
    let images = importAll(require.context('../../../images/galeria/raize/exterior', false, /\.(png|jpe?g|svg)$/));

    for (const [key, value] of Object.entries(images)) 
    {

      result += '<div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-4 nopadding" ><img src="'+value+'" class="img-fluid imagen-galeria-fotos" /></div>';
      
    }

    result += '</div>'
    
    return document.getElementById("content-automovil-exterior").innerHTML = result
}

function CrearGaleriaInterior(){

    let result = '<div class="row" >'
    let images = importAll(require.context('../../../images/galeria/raize/interior', false, /\.(png|jpe?g|svg)$/));

    for (const [key, value] of Object.entries(images)) 
    {

      result += '<div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-4 nopadding" ><img src="'+value+'" class="img-fluid imagen-galeria-fotos" /></div>';
      
    }

    result += '</div>'
    
    return document.getElementById("content-automovil-interior").innerHTML = result
}