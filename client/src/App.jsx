import React from 'react'
import { SidebarWithSearch } from './Components/SideBar'
import { NavbarDefault } from './Components/Navbar'
// import { DefaultGallery } from './Components/Gallery'
// import { BookingCard } from './Components/Cards'
import { CardThree } from './Components/Cards'
// import { HorizontalCard } from './Components/Cards'
// import { DefaultGallery } from './Pages/Gallery'
function App() {
  return (
    <>
    <div className='flex flew-wrap flex-col'>
        <div className='top  flex flex-wrap justify-center w-full'>
            <NavbarDefault/>
        </div>
        <div className='flex flex-wrap flex-row '>
            <div>
              <SidebarWithSearch/>
            </div>
            <div>
              <CardThree/>
            </div>
        </div>
    </div>
    </>
  )
}

export default App