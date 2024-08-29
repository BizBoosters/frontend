import React from 'react'
import Home from './Pages/Home'
import {Route, Routes} from "react-router-dom";
import Blogs from './Pages/Blogs';
// import { ProductTwo } from './Components/Cards1'
// import { Card } from '@material-tailwind/react'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
    </Routes>
    </>
  )
}

export default App