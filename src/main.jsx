// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import Navbar from './Components/Navbar.jsx'
 import App from './App.jsx'
// import Item from './Components/Item.jsx'
// import Footer from './Components/Footer.jsx'
// import ProductsList from './Components/ProductsList.jsx'
import {BrowserRouter} from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
)
