import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Service from './Components/Services/Service'
import Product from './Components/Product/Product'
import Stories from './Components/Stories/Stories'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>    
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/service' element={<Service/>} />
          <Route exact path='/product' element={<Product/>} />
          <Route exact path='/stories' element={<Stories/>} />
          <Route exact path='/contact' element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App