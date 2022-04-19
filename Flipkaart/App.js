import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Product from './Product'
import Products from './Products'
import Contact from './Contact'
import './App.css'
export const App= () => {
  return (
    <div>
      <Router>
     <Navbar/>
      <Routes>
      <Route path='Home' element={<Home/>}  />
      <Route path='products' element={<Product/>}  />
      <Route path='product/:id' element={<Products/>}/>
      <Route path='Contact' element={<Contact/>}/>

      </Routes>
      </Router>
    </div> 
  )
}
export default App