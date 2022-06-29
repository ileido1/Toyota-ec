

import '../css/bootstrap.min.css'
import '../css/style.css';
import Header from './sections/Header'
import Cart from './Cart'
import Footer from './sections/Footer';
import Home from './pages/home'

import Baneer from './Banner'
import Urd from './urd';
import { Link } from "react-router-dom";

import Tabs from './tabs';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect, useState } from 'react';

const App = () => {

  const [footer, setFooter] = useState();

  useEffect(() => {
    fetch("https://backend-toyota.247.com.ec/api/global/toyota-info").then(response => response.json())
      .then(data => setFooter(data))
      .then(data => console.log(data));
  }, [])
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
        </Routes>
        {
          footer ? (
            <section>
              {

                footer.map(c => {
                  let urls = c.logos_footer.split(',');
                  return < Footer logotoyota={'https://backend-toyota.247.com.ec/' + urls[0]} toyotago={'https://backend-toyota.247.com.ec/' + urls[1].trim()} toyotasiempre={'https://backend-toyota.247.com.ec/' + urls[2].trim()}
                  />
                }
                )
              }
            </section>
          ) : (
            <span> Cargando...</span>
          )
        }

      </BrowserRouter>
    </>
  )
}

export default App;

