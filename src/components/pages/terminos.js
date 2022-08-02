import useFetch from "../../hooks/useFetch";

export default function Cartslider() {
    
    let url_api = 'v1/basic_page/223'
    const [respuesta, error] = useFetch(url_api);
    let terminos = ''

    if(respuesta){
        

        respuesta.map(c => {

            terminos = c.body_page

        }
        )
    }
    
    return (
        <> 
          <div className="contenedor-terminos-condiciones" >   

            <p className="titulo-terminos" >Términos y Condiciones</p>
            <p>Toyota del Ecuador usa un sistema de seguridad llamado SSL (Secure Socket Layer), que actualmente es el estándar usado por las compañías más importantes del mundo para realizar navegaciones seguras, lo que significa que toda tu información personal no podrá ser leída ni capturada por terceros mientras viaja por la red.</p> <p><strong>1. Declaración de Privacidad</strong></p> <p>Es importante que sepas que Toyota del Ecuador no traspasará, bajo ninguna modalidad y a ninguna empresa que no pertenezca al grupo datos personales de los clientes registrados en su pagina, y te asegura que estos serán manejados en forma absolutamente confidencial y conforme lo dispone la legislación vigente.</p> <p><strong>2. Compromiso con la Seguridad</strong></p> <p>En relación a nuestro sitio web www.toyota.com.ec hace esta declaración de seguridad y privacidad para demostrar y comunicar su compromiso con una práctica de negocios de alto nivel ético y dotada de los controles internos apropiados.</p> <p><strong>3. Información requerida del usuario</strong></p> <p>Los distintos formularios de nuestro sitio web, pide a los usuarios información como su nombres, cédula, dirección electrónica, número telefónico. Esta información es usada para responder las consultas acerca de nuestros productos y servicios. También se utiliza para mantener contacto con nuestros clientes. Bajo ninguna circunstancia, esta información es compartida con terceros.</p>

         </div>               
        </>
    );
}