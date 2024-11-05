import React from 'react'
import Navbar from './Components/Navbar'
import { CardThree } from './Components/Cards'
import { FooterFour } from './Components/Footer'
import { FeatureTwo } from './Components/Feature'
import Search from './Components/Search'
import Chatbot from './Components/Chatbot'
import Home from './Pages/Home'

// import { ProductTwo } from './Components/Cards1'
// import { Card } from '@material-tailwind/react'
function App() {
  return (
    <>
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