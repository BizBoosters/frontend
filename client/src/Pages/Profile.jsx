// import React, { useState } from 'react'
// import { SidebarWithSearch } from '../Components/SideBar';
// import Navbar from '../Components/Navbar';
// import NotificationPanel from '../Components/NotificationPanel';
// import bgImage1 from '../assets/bgImage1.svg';


// const Profile = () => {
//     const [showNotifications, setShowNotification] = useState(false); 
//     const toggleNotifications = () => setShowNotification(!showNotifications);
  
//     return (
//       <div className="flex h-screen overflow-hidden bg-bgWhite">
//         {/* Sidebar */}
        
//         <SidebarWithSearch />
        
  
  
//         {/* Main Content */}
//         <main className="flex flex-col flex-grow">
//           {/* Navbar */}
//           <div className={`${showNotifications? "w-[948px]": "w-full"}`}>
//             <Navbar toggleNotifications={toggleNotifications} />
//           </div>
          
  
//           {/* Scrollable content */}
//           <section className="overflow-y-auto p-6 mt-2">
//             <div className="w-full">
            
//             <div className='flex gap-3 align-middle'>
//                 <div className="rounded-2xl size-20 bg-cover bg-center overflow-hidden">
//                     <img src={bgImage1} alt="image description" className="w-full h-full object-cover" />
//                 </div>
//                 <div className='flex flex-col gap-[2px]'>
//                     <p className='font-bold'>Company Name</p>
//                     <p>Our vision is a world where every real estate transaction is simple, certain, and satisfying everyone.</p>
//                     <p className='text-sm italic text-black-300'>500-1001 employees</p>
//                 </div>
//             </div>

                

//             </div>
//           </section>
//         </main>
  
//         {/* Notifications Container */}
//         {showNotifications && (
//             <NotificationPanel />
//         )}
  
        
//       </div>
//     );
// }

// export default Profile

import React, { useState } from 'react';
import { SidebarWithSearch } from '../Components/SideBar';
import Navbar from '../Components/Navbar';
import NotificationPanel from '../Components/NotificationPanel';
import bgImage1 from '../assets/bgImage1.svg';

const Overview = () => (
    <section className="p-4">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p>Our vision is a world where every real estate transaction is simple, certain, and satisfying everyone.</p>
        {/* Placeholder for videos or images */}
    </section>
);

const People = () => (
    <section className="p-4">
        <h2 className="text-xl font-semibold">People</h2>
        <div className="flex gap-4">
            {/* Placeholder for team cards with social links */}
        </div>
    </section>
);

const CultureBenefits = () => (
    <section className="p-4">
        <h2 className="text-xl font-semibold">Culture & Benefits</h2>
        <ul>
            {/* Example of using icons and values */}
            <li className="flex items-center gap-2">
                <img src="path_to_icon" alt="Icon" className="w-4 h-4" />
                <span>Innovation</span>
            </li>
        </ul>
    </section>
);

const Funding = () => (
    <section className="p-4">
        <h2 className="text-xl font-semibold">Funding</h2>
        <p>Funding details so far...</p>
        {/* Placeholder for funding timeline */}
    </section>
);

const Stats = () => (
    <section className="p-4">
        <h2 className="text-xl font-semibold">Stats</h2>
        {/* Placeholder for graphs, charts, and stats */}
    </section>
);

const Profile = () => {
    const [showNotifications, setShowNotification] = useState(false); 
    const toggleNotifications = () => setShowNotification(!showNotifications);

    return (
      <div className="flex h-screen overflow-hidden bg-bgWhite">
        {/* Sidebar */}
        <SidebarWithSearch />

        {/* Main Content */}
        <main className="flex flex-col flex-grow">
          {/* Navbar */}
          <div className={`${showNotifications ? "w-[948px]" : "w-full"}`}>
            <Navbar toggleNotifications={toggleNotifications} />
          </div>

          {/* Scrollable Content */}
          <section className="overflow-y-auto p-6 mt-2 flex gap-4">
            {/* Left Container with Company Info */}
            <div className="flex-grow">
              <div className="flex gap-3 align-middle mb-6">
                <div className="rounded-2xl size-20 bg-cover bg-center overflow-hidden">
                  <img src={bgImage1} alt="image description" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold">Company Name</p>
                  <p>Our vision is a world where every real estate transaction is simple, certain, and satisfying everyone.</p>
                  <p className="text-sm italic text-gray-500">500-1001 employees</p>
                </div>
              </div>
              <Overview />
              <People />
              <CultureBenefits />
              <Funding />
              <Stats />
            </div>

            {/* Right Container - Stats or Sticky Section */}
            <div className="w-1/3 sticky top-0 p-4 bg-gray-100 rounded-lg shadow">
                <h2 className="text-lg font-semibold">Company Info</h2>
                {/* Additional information here */}
            </div>
          </section>
        </main>

        {/* Notifications Panel */}
        {showNotifications && <NotificationPanel />}
      </div>
    );
};

export default Profile;
