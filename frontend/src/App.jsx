import { useState } from 'react'
import './App.css'
import ProductCard from './ProductCard'
import NavBar from './NavBar.jsx'
import SignUp from './SignUp.jsx'
import SignIn from './SignIn.jsx'
import Home from './Home.jsx'
import Blog from './Blog.jsx'

function App() {


  return (
    <div>
      <NavBar/>
      {/* <SignUp/> */}
      {/* <SignIn/> */}
      <Home />  
      {/* <ProductCard/> */}
    </div>
  )
}

export default App
