import { useState } from 'react'
import './App.css'
import ProductCard from './ProductCard'
import NavBar from './NavBar.jsx'
import SignUp from './SignUp.jsx'
import SignIn from './SignIn.jsx'
import Home from './Home.jsx'
import Blog from './Blog.jsx'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Signin' element={<SignIn />} />
      <Route path='/Signup' element={<SignUp />} />
      
    </Routes>
  )
}

export default App
