import React from 'react'
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
    </>
  )
}

export default App