import Navbar from "../Components/Navbar";
import Statscard from "../Components/Statscard";
import RiseIcon from "../assets/Rise.svg";
import FallIcon from "../assets/Fall.svg";
import bgImage1 from '../assets/bgImage1.svg';
import bgImage2 from '../assets/bgImage2.svg';
import bgImage3 from '../assets/bgImage3.svg';
import bgImage4 from '../assets/bgImage4.svg';
import { SidebarWithSearch } from "../Components/SideBar";
import React, { useState } from "react";
import { Avatar } from "@material-tailwind/react";
import {
  CheckCircleIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  Square3Stack3DIcon,
}from "@heroicons/react/24/solid"
import NotificationPanel from "../Components/NotificationPanel";
import ChatbaseChatbot from "../Components/Chatbot1";
import graph1 from '../assets/graph1.svg';
import Onboarding from '../assets/Onboarding.svg'
import Profits from '../assets/Profits.svg'
import Sales from '../assets/Sales.svg'
import ActiveVisitors from '../assets/ActiveVisitors.svg'
import ConversionRate from '../assets/ConversionRate.svg'

const Home = () => {
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Section */}
              <div className="lg:col-span-2">
              <div className="flex flex-row justify-between space-x-4">
                {/* Cards for Statistics */}
                <div className="flex-1">
                  <Statscard bgImage={bgImage1} percentage="24" statsName="Revenue" value="$12,000" icon={CurrencyDollarIcon} color="#6A5FFF" />
                </div>
                <div className="flex-1">
                  <Statscard bgImage={bgImage2} percentage="18" statsName="Profit" value="$2,000" icon={CheckCircleIcon} color="#07B3EE" />
                </div>
                <div className="flex-1">
                  <Statscard bgImage={bgImage3} percentage="10" statsName="EBIDTA" value="20%" icon={ChartBarIcon} color="#FF888A" />
                </div>
                <div className="flex-1">
                  <Statscard bgImage={bgImage4} percentage="08" statsName="Gross Margin" value="40%" icon={Square3Stack3DIcon} color="#5182FE" />
                </div>
              </div>


                <div className="mt-6 bg-white p-6 rounded-lg shadow">
                  {/* Total Users Graph */}
                  {/* <h3 className="text-gray-700 text-sm font-medium">Total Users</h3> */}
                  {/* Graph Component */}
                  <div className="flex mt-4 rounded-lg cursor-pointer gap-1">
                    <img src={graph1} className="bg-cover"/>
                    <div className="flex flex-col h-full justify-between">
                      <img src={Onboarding}/>
                      <img src={Profits}/>
                      <img src={Sales}/>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {/* Traffic by Device */}
                  <div className="bg-white p-6 rounded-lg shadow">
                    {/* <h3 className="text-gray-700 text-sm font-medium">Traffic by Device</h3> */}
                    {/* Traffic Chart Placeholder */}
                    <div className="mt-4 rounded-lg cursor-pointer">
                      <img src={ActiveVisitors}/>
                    </div>
                  </div>
                  {/* Traffic by Location */}
                  <div className="bg-white p-6 rounded-lg shadow">
                    {/* <h3 className="text-gray-700 text-sm font-medium">Traffic by Location</h3> */}
                    {/* Location Chart Placeholder */}
                    <div className="mt-4 rounded-lg cursor-pointer">
                      <img src={ConversionRate}/>
                    </div>
                  </div>
                </div>
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

export default Home;
