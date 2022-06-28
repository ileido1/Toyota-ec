

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
    fetch("https://pokeapi.co/api/v2/pokemon/ditto").then(response => response.json())
      .then(data => setFooter(data));
  }, [])
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App;

