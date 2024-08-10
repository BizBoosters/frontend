"use client"

import React from 'react'
import { Link } from 'react-router-dom';
import {Navbar} from './Components/Navbar'
// import Chatbot from './Components/Chatbot'
// import Footer from './Components/Footer'
import Home from './Pages/Home'

const App = () => {
  return (
    <>
      <nav>
        <Home/>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/community">Community</Link>
        <Link to="/raisefunds">Raise Funds</Link>
      </nav>
    </>
  )
}

export default App