import '../css/style.css';
import '../css/all.css'
import Header from './sections/Header'
import Cart from './Cart'
import Vehiculos from './pages/vehiculos';
import Footer from './sections/Footer';
import Home from './pages/home'
import Posventa from './pages/post-venta'
import Terminosycondiciones from './pages/terminos'
import Concesionarios from './pages/concesionarios';
import SiempreNuevo from './pages/siempre-nuevo';
import MundoHibrido from './pages/mundo-hibrido';
import Blog from './pages/blog';
import Mantenimiento from './pages/mantenimiento';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import useFetch from '../hooks/useFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import LoadingSpinner from './sections/loading';
import Campanaservicios from './pages/campana-servicios';
import Terminos from './pages/campana-servicios';
import BlogDetail from './pages/blog-detail';
import BlogTags from './pages/blog-tags';

const App = () => {
  let peticion = "global/toyota-info"

  const [footer, error] = useFetch(peticion);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? <LoadingSpinner></LoadingSpinner> : <>  <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/blog/:slug" element={< BlogDetail />} />
          <Route path="/blog/tag/:slug" element={< BlogTags />} />
          <Route path="/post-venta-en-stand-by" element={<Posventa />} />
          <Route path="/raize" element={<Cart />} />
          <Route path="/rav4" element={<Cart />} />
          <Route path="/hilux" element={<Cart />} />
          <Route path="/hilux-cd" element={<Cart />} />
          <Route path="/hilux-cs" element={<Cart />} />
          <Route path="/yaris-sedan" element={<Cart />} />
          <Route path="/yaris-cross" element={<Cart />} />
          <Route path="/yaris-sport" element={<Cart />} />
          <Route path="/rush" element={<Cart />} />
          <Route path="/rush" element={<Cart />} />
          <Route path="/land-cruiser-prado" element={<Cart />} />
          <Route path="/land-cruiser-300" element={<Cart />} />
          <Route path="/corolla-sedan" element={<Cart />} />
          <Route path="/corolla-cross" element={<Cart />} />
          <Route path="/c-hr" element={<Cart />} />
          <Route path="/fortuner" element={<Cart />} />
          <Route path="/hilux-cd-4x2" element={<Cart />} />
          <Route path="/hilux-cd-4x4" element={<Cart />} />
          <Route path="/hilux-cd-4x4-at" element={<Cart />} />
          <Route path="/hilux-cd-4x4-mt" element={<Cart />} />
          <Route path="/corolla-hybrid" element={<Cart />} />
          <Route path="/vehiculos" element={<Vehiculos />} />
          <Route path="/concesionarios" element={<Concesionarios />} />
          <Route path="/tempsiemprenuevo" element={<SiempreNuevo />} />
          <Route path="/siemprenuevo" element={<SiempreNuevo />} />
          <Route path="/tempmundohibrido" element={<MundoHibrido />} />
          <Route path="/mundohibrido" element={<MundoHibrido />} />
          <Route path="/post-venta" element={<Campanaservicios />} />
          <Route path="/terminos-y-condiciones" element={<Terminosycondiciones />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/mantenimiento" element={<Mantenimiento />} />
        </Routes>
        {
          footer ? (
            <section>
              {

                footer.map(c => {
                  let urls = c.logos_footer.split(',');
                  return < Footer key='1' logotoyota={'https://www.toyota.com.ec/' + urls[0]} toyotago={'https://www.toyota.com.ec/' + urls[1].trim()} toyotasiempre={'https://www.toyota.com.ec/' + urls[2].trim()}
                  />
                }
                )

              }
            </section>
          ) : (
            <span> Cargando...</span>
          )
        }

      </BrowserRouter></>}

    </>
  )
}

export default App;

