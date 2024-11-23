import React, {useState} from 'react'
import { SidebarWithSearch } from '../Components/SideBar'
import Navbar from '../Components/Navbar'
import NotificationPanel from '../Components/NotificationPanel'

const RaiseFunds = () => {
  const [showNotifications, setShowNotification] = useState(false); 
  const toggleNotifications = () => setShowNotification(!showNotifications);

  return (
    <div className="flex h-screen overflow-hidden bg-bgWhite">
    {/* Sidebar */}
    
    <SidebarWithSearch />
    


    {/* Main Content */}
    <main className="flex flex-col flex-grow">
      {/* Navbar */}
      <div className={`${showNotifications? "w-[1048px]": "w-full"}`}>
        <Navbar toggleNotifications={toggleNotifications} />
      </div>
      

      {/* Scrollable content */}
      <section className="overflow-y-auto p-6 mt-2">
        <div className="w-full">
            <p>hello</p> 
          </div>
        
      </section>
    </main>

    {/* Notifications Container */}
    {showNotifications && (
        <NotificationPanel />
    )}
    
  </div>
  )
}

export default RaiseFunds