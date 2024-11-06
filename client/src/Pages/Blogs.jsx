// <<<<<<< HEAD
import React, {useState} from 'react'
import { SidebarWithSearch } from '../Components/SideBar'
import { CardThree } from '../Components/Cards'
// import { NavbarDefault } from '../Components/Navbar'
import Navbar from "../Components/Navbar";
import Statscard from "../Components/Statscard";
import RiseIcon from "../assets/Rise.svg";
import FallIcon from "../assets/Fall.svg";
import bgImage1 from '../assets/bgImage1.svg';
import bgImage2 from '../assets/bgImage2.svg';
import bgImage3 from '../assets/bgImage3.svg';
import bgImage4 from '../assets/bgImage4.svg';
import NotificationPanel from "../Components/NotificationPanel";
import ChatbaseChatbot from "../Components/Chatbot1";
const Blogs = () => {
  const [showNotifications, setShowNotification] = useState(true); 
  const toggleNotifications = () => setShowNotification(!showNotifications);

  return (
    <div className="flex h-screen overflow-hidden bg-bgWhite">
      {/* Sidebar */}
      {/* Main Content */}
      <main className="flex flex-col flex-grow">
        {/* Navbar */}
        <div className={`${showNotifications? "w-[948px]": "w-full"}`}>
          <Navbar toggleNotifications={toggleNotifications} />
        </div>
        

        {/* Scrollable content */}
        <section className="overflow-y-auto p-6 mt-2">
        <div className="flex flex-row" >
    <div>
    <SidebarWithSearch/>
    </div>
     <div>
        <div className='flex flew-wrap flex-col'>
        <div className='flex flex-wrap justify-center w-full'>
            {/* <NavbarDefault/> */}
        </div>
        <div className='mt-20'>
          {/* <Search/> */}
        </div>
        <div className='flex flex-wrap flex-row '>
            <div>
              <CardThree/>
            </div>
        </div>
        {/* <FeatureTwo/>
        <FooterFour/> */}
    </div>
    </div>
  </div> 
        </section>
      </main>

      {/* Notifications Container */}
      {showNotifications && (
          <NotificationPanel />
      )}

      <ChatbaseChatbot/>
      
    </div>
  );
};

export default Blogs;
