import React from 'react'
import { NavbarDefault } from './Components/Navbar'
import { CardThree } from './Components/Cards'
import { FooterFour } from './Components/Footer'
import { FeatureTwo } from './Components/Feature'
import { ProductTwo } from './Components/Cards1'
function App() {
  return (
    <>
    <div className='flex flew-wrap flex-col'>
        <div className='flex flex-wrap justify-center w-full'>
            <NavbarDefault/>
        </div>
        <div className='flex flex-wrap flex-row '>
            <div>
              <ProductTwo/>
            </div>
        </div>
        <FeatureTwo/>
        <FooterFour/>
    </div>
    </>
  )
}

export default App