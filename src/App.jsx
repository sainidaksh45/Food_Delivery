import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Placeorder from './pages/placeorder/Placeorder'
import Home from './pages/Home/Home.jsx'; // Adjust the path based on your project structure
import Cart from './pages/cart/Cart.jsx';
import Footer from './components/Footer/Footer.jsx';
import LoginPopUp from './components/LoginPopUp/LoginPopUp.jsx';
//import Placeorder from './pages/placeorder/Placeorder';
const App = () => {
  const[showLogin,setShowLogin]=useState(false)
  return (
    <>
     {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<Placeorder/>}/>
     
      


      </Routes>
     
    </div>
    <Footer/>
    </>
  )
}

export default App