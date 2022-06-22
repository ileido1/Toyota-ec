import './css/bootstrap.min.css';
import './css/style.css';
import Header from './Header'
import Car from './Car'

const App = () => ( 
    <>
      <Header />
      {window.location.pathname === "/car" &&  <Car /> }
    </>
)

export default App;
