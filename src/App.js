import './css/bootstrap.min.css';
import './css/style.css';
import Header from './Header'
import Cart from './Cart'

const App = () => ( 
    <>
      <Header />
      {window.location.pathname === "/cart" &&  <Cart /> }
    </>
)

export default App;

