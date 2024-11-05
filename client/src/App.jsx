import React from 'react'
import Navbar from './Components/Navbar'
import { CardThree } from './Components/Cards'
import { FooterFour } from './Components/Footer'
import { FeatureTwo } from './Components/Feature'
import Search from './Components/Search'
import Chatbot from './Components/Chatbot'
import Home from './Pages/Home'
import {Route, Routes} from "react-router-dom";
import Blogs from './Pages/Blogs';
import Chatbot from './Components/Chatbot'; 
import Chatbot1 from './Components/Chatbot1';
import Investment from './Pages/Investment1';
// import { ProductTwo } from './Components/Cards1'
// import { Card } from '@material-tailwind/react'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/Chatbot' element={<Chatbot/>}/> */}
      <Route path='/Chatbot1' element={<Chatbot1/>}/>
      <Route path='/Invest' element={Investment} />
    </Routes>
=======
    <Home/>
    {/* <div className='flex flew-wrap flex-col'>
        <div className='flex flex-wrap justify-center w-full'>
            <NavbarDefault/>
        </div>
        <div className='mt-20'>
          <Search/>
        </div>
        <div className='flex flex-wrap flex-row '>
            <div>
              <CardThree/>
            </div>
        </div>
        <FeatureTwo/>
        <FooterFour/>
    </div> */}
      {/* <nav> */}
        
        {/* <Home/> */}
        {/* <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/community">Community</Link>
        <Link to="/raisefunds">Raise Funds</Link> */}
      {/* </nav> */}
    </>
  )
}

export default App