import React from 'react'
import Cards from './Components/Cards'
import { SidebarWithContentSeparator } from './Components/SideBar'
import { NavbarSimple } from './Components/Navbar'
// import { HorizontalCard } from './Components/Cards'
// import { DefaultGallery } from './Pages/Gallery'
function App() {
  return (
    <>
      <NavbarSimple/>
      <SidebarWithContentSeparator/>
      <Cards />
    </>
  )
}

export default App