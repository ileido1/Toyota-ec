import bg from '../images/bg.svg'
import bg2 from '../images/auto.png'
import Slider from './slider';
const tabs = () => (
    <div className="contenedortabs" style={{ backgroundImage: `url(${bg})` }} >
        <h3 className="titulotabs">CONOCE NUESTROS VEHÍCULOS </h3>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">AUTOMOVILES</button>
            </li>
            <li className="nav-item">
                <button class="nav-link " id="suv-tab" data-bs-toggle="tab" data-bs-target="#SUV" type="button" role="tab" aria-controls="SUV" >SUV</button>

            </li>
            <li className="nav-item">
                <button class="nav-link " id="hibridos-tab" data-bs-toggle="tab" data-bs-target="#HIBRIDOS" type="button" role="tab" aria-controls="HIBRIDOS" >HIBRIDOS</button>

            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="" tabindex="-1" aria-disabled="true">CAMIONETAS</a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                <Slider></Slider>

            </div>
            <div class="tab-pane fade" id="SUV" role="tabpanel" aria-labelledby="profile-tab">...</div>
            <div class="tab-pane fade" id="HIBRIDOS" role="tabpanel" aria-labelledby="contact-tab">...</div>
        </div>
    </div>

)

export default tabs;