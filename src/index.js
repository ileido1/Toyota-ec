import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './css/bootstrap.min.css';
import './css/style.css';
import Header from './Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Header />
  </StrictMode>
);

