import porque from './images/Por-que.png';
import q from './images/Q.png';
import d from './images/D.png';
import r from './images/R.png';
import esla from './images/Es-la-marca.png'
import { Helmet } from "react-helmet";
import testjs from "./js/webflow"
import './css/normalize.css'
import './css/prueba-0d12ec.webflow.css'
import './css/webflow.css'



const urd = () => (
    <div data-w-id="52432a1b-449f-0cf1-3f48-41aa8a432955" className="track-1 wf-section">
        <div className="camera-1">
            <div className="frame-1">
                <div className="item-1"><img src={porque} loading="lazy" sizes="(max-width: 1383px) 100vw, 1383px" alt=""></img></div>
                <div className="item-1"><img src={q} loading="lazy" sizes="(max-width: 1383px) 100vw, 1383px" alt="" className="image-13"></img></div>
                <div className="item-1"><img src={d} loading="lazy" sizes="(max-width: 1383px) 100vw, 1383px" alt="" className="image-12"></img></div>
                <div className="item-1"><img src={r} loading="lazy" sizes="(max-width: 1384px) 100vw, 1384px" alt="" className="image-11"></img></div>
                <div className="item-1"><img src={esla} loading="lazy" sizes="(max-width: 1383px) 100vw, 1383px" alt="" className="image-14"></img></div>
            </div>
        </div>
        <Helmet>
            <script
                src="https://code.jquery.com/jquery-3.3.1.min.js"
                integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
                crossorigin="anonymous"
            />
            {/* <script src={testjs} type='javascript' /> */}
        </Helmet>

    </div>

)
export default urd;