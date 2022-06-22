import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './css/bootstrap.css.map';
import './css/bootstrap.min.css'
import './css/style.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

