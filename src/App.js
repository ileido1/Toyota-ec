import logo from './logo.svg';
import './App.css';
import './css/style.css'
import './css/bootstrap.min.css';

import Header from './Header'
import Car from './Car'

const App = () => (
  <>
    <Header />
    {window.location.pathname === "/car" && <Car />}
  </>
)

export default App;
