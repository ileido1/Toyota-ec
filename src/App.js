

import './css/bootstrap.min.css'
import './css/style.css';
import Header from './Header'
import Cart from './Cart'
import Footer from './Footer';

import Baneer from './Banner'
import Urd from './urd';

const App = () => (
  <>
    <Header />
    {window.location.pathname === "/cart" && <Cart />}
    {window.location.pathname === "/" && <Baneer />}
    <Urd></Urd>
    <Footer></Footer>
  </>
)

export default App;

