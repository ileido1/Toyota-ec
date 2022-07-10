import '../css/bootstrap.min.css'
import '../css/style.css';
import '../css/all.css'
import Header from './sections/Header'
import Cart from './Cart'
import Footer from './sections/Footer';
import Home from './pages/home'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import useFetch from '../hooks/useFetch';


const App = () => {
  let peticion = "global/toyota-info"

  const [footer, error] = useFetch(peticion);

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/raize" element={<Cart />} />
          <Route path="/rav4" element={<Cart />} />
          <Route path="/hilux" element={<Cart />} />
          <Route path="/yaris-sedan" element={<Cart />} />
          <Route path="/yaris-cross" element={<Cart />} />
          <Route path="/rush" element={<Cart />} />
          <Route path="/rush" element={<Cart />} />
          <Route path="/land-cruiser-prado" element={<Cart />} />
          <Route path="/land-cruiser-prado" element={<Cart />} />
          <Route path="/land-cruiser-300" element={<Cart />} />
          <Route path="/hilux-cd" element={<Cart />} />
          <Route path="/hilux-cs" element={<Cart />} />
          <Route path="/hilux-cs" element={<Cart />} />
          <Route path="/corolla-sedan" element={<Cart />} />
          <Route path="/c-hr" element={<Cart />} />
          <Route path="/" element={<Home />} />
        </Routes>
        {
          footer ? (
            <section>
              {

                footer.map(c => {
                  let urls = c.logos_footer.split(',');
                  return < Footer key='1' logotoyota={'https://backend-toyota.247.com.ec/' + urls[0]} toyotago={'https://backend-toyota.247.com.ec/' + urls[1].trim()} toyotasiempre={'https://backend-toyota.247.com.ec/' + urls[2].trim()}
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

