

import './css/bootstrap.min.css'
import './css/style.css';
import Header from './Header'
import Cart from './Cart'
import Footer from './Footer';

import Baneer from './Banner'
import Urd from './urd';

import Tabs from './tabs';

const App = () => (
  <>
    <Header />
    {window.location.pathname === "/cart" && <Cart />}
    {window.location.pathname === "/" && <Baneer />}
    {window.location.pathname === "/" && <Tabs />}
    {window.location.pathname === "/" && <Urd />}

    <Footer></Footer>
  </>
)

export default App;

