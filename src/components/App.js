

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

