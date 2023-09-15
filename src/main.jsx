import React from 'react'
import ReactDOM from 'react-dom/client'
import { CarritoApp } from './CarritoApp'
import { BrowserRouter } from 'react-router-dom'
import './styles/card.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <CarritoApp />
    </React.StrictMode>
  </BrowserRouter>

)
