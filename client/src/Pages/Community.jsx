import React, {useState} from 'react'
import { SidebarWithSearch } from '../Components/SideBar'
import Navbar from '../Components/Navbar'
import NotificationPanel from '../Components/NotificationPanel'

const Community = () => {
  const [showNotifications, setShowNotification] = useState(true); 
  const toggleNotifications = () => setShowNotification(!showNotifications);

  return (
    <div className="flex h-screen overflow-hidden bg-bgWhite">
    {/* Sidebar */}
    
    <SidebarWithSearch />
    


    {/* Main Content */}
    <main className="flex flex-col flex-grow">
      {/* Navbar */}
      <div className={`${showNotifications? "w-[948px]": "w-full"}`}>
        <Navbar toggleNotifications={toggleNotifications} />
      </div>
      

      {/* Scrollable content */}
      <section className="overflow-y-auto p-6 mt-2">
        <div className="w-full">
            <p>Community</p> 
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

export default Community