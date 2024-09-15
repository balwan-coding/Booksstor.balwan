import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import './App.css'
import './index.css'
import Navbar from './Components/Navbar.jsx'
// import Item from './Components/Item.jsx'
import ProductsList from './Components/ProductsList.jsx'
import About from './Components/About.jsx'
import Footer from './Components/Footer.jsx'
import ContactPage from './Components/ContactPage.jsx'
import ProductsdetailsPage from './Components/ProductsdetailsPage'
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<ProductsList />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/ContactPage' element={<ContactPage />} ></Route>
        <Route path='/ProductsdetailsPage' element={<ProductsdetailsPage/>} ></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
