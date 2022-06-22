import './css/bootstrap.min.css';
import './css/style.css';
import Header from './Header'
import Cart from './Cart'
import Footer from './Footer';
import Baneer from './Banner'

const App = () => (
  <>
    <Header />
    {window.location.pathname === "/cart" && <Cart />}
    {window.location.pathname === "/" && <Baneer />}
    <Footer></Footer>
  </>
)

export default App;

