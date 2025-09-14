import { useState } from 'react'
import './App.css'
import ProductCard from './ProductCard'
import NavBar from './NavBar.jsx'
import SignUp from './SignUp.jsx'

function App() {

  return (
    <div>
      <NavBar/>
      <SignUp/>
      {/* <ProductCard/> */}
    </div>
  )
}

export default App
