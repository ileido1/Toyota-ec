import './css/bootstrap.min.css';
import './css/style.css';
import Header from './Header'
import Cart from './Cart'
import Footer from './Footer';

const App = () => (
  <>
    <Header />
    {window.location.pathname === "/cart" && <Cart />}
    <Footer></Footer>
  </>
)

export default App;

