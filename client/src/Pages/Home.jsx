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

const Home = () => {
  const [showNotifications, setShowNotification] = useState(true); 
  const toggleNotifications = () => setShowNotification(!showNotifications);

  return (
    <div className="flex h-screen overflow-hidden bg-bgWhite">
      {/* Sidebar */}
      
      <SidebarWithSearch />
      


      {/* Main Content */}
      <main className="flex flex-col flex-grow">
        {/* Navbar */}
        <Navbar toggleNotifications={toggleNotifications}/>

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
                  <h3 className="text-gray-700 text-sm font-medium">Total Users</h3>
                  {/* Graph Component */}
                  <div className="mt-4 h-32 bg-gray-200 rounded-lg"></div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {/* Traffic by Device */}
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-gray-700 text-sm font-medium">Traffic by Device</h3>
                    {/* Traffic Chart Placeholder */}
                    <div className="mt-4 h-32 bg-gray-200 rounded-lg"></div>
                  </div>
                  {/* Traffic by Location */}
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-gray-700 text-sm font-medium">Traffic by Location</h3>
                    {/* Location Chart Placeholder */}
                    <div className="mt-4 h-32 bg-gray-200 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Notifications Container */}
      {showNotifications && (
        <div className="w-full bg-white shadow-md top-0 right-0 h-screen p-6 transition-width duration-300">
          {/* Notifications */}
          <h3 className="text-gray-700 text-sm font-medium">Notifications</h3>
          <ul className="mt-4 space-y-4">
            {/* Notification Item */}
            <li className="flex items-center justify-between">
              <div className="text-gray-600 text-sm">You completed a task.</div>
              <div className="text-gray-500 text-xs">Just now</div>
            </li>
            <li className="flex items-center justify-between">
              <div className="text-gray-600 text-sm">Your request was approved.</div>
              <div className="text-gray-500 text-xs">1 hour ago </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="text-gray-600 text-sm">Bizboost reached 1000 users.</div>
              <div className="text-gray-500 text-xs">2 days ago</div>
            </li>
            <li className="flex items-center justify-between">
              <div className="text-gray-600 text-sm">New update available.</div>
              <div className="text-gray-500 text-xs">5 days ago</div>
            </li>
            <li className="flex items-center justify-between">
              <div className="text-gray-600 text-sm">Team meeting scheduled.</div>
              <div className="text-gray-500 text-xs">1 week ago</div>
            </li>
            {/* Repeat for other notifications */}
          </ul>

          {/* Activities */}
          <h3 className="mt-8 text-gray-700 text-sm font-medium">Activities</h3>
          <ul className="mt-4 space-y-4">
            {/* Activity Item */}
            <li className="flex items-left">
              {/* <img className="h-6 w-6 rounded-full" src="./src/assets/chat-bot.svg" alt="User Avatar" /> */}
              <div className="text-sm text-gray-600">🔄&emsp;Alex updated the project description.</div>
            </li>
            <li className="flex items-left">
              {/* <img className="h-6 w-6 rounded-full" src="./src/assets/chat-bot.svg" alt="User Avatar" /> */}
              <div className="text-sm text-gray-600">🎉&emsp;Rajiv added a new milestone.</div>
            </li>
            <li className="flex items-left">
              {/* <img className="h-6 w-6 rounded-full" src="./src/assets/chat-bot.svg" alt="User Avatar" /> */}
              <div className="text-sm text-gray-600">🛠️&emsp;Sneha fixed a login issue.</div>
            </li>
            <li className="flex items-left">
              {/* <img className="h-6 w-6 rounded-full" src="./src/assets/chat-bot.svg" alt="User Avatar" /> */}
              <div className="text-sm text-gray-600">🎨&emsp;Nina redesigned the dashboard.</div>
            </li>
            <li className="flex items-left">
              {/* <img className="h-6 w-6 rounded-full" src="./src/assets/chat-bot.svg" alt="User Avatar" /> */}
              <div className="text-sm text-gray-600">✅&emsp;Ayesha completed the initial setup.</div>
            </li>
            {/* Repeat for other activities */}
          </ul>

          {/* Contacts */}
          <h3 className="mt-8 text-gray-700 text-sm font-medium">Contacts</h3>
          <ul className="mt-4 space-y-4">
            {/* Contact Item */}
            <li className="flex items-center">
              <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/100?u=mike" alt="User Avatar" />
              <div className="ml-3 text-sm text-gray-600">Rahul Jain — Online</div>
            </li>
            <li className="flex items-center">
              <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/100?u=sarah" alt="User Avatar" />
              <div className="ml-3 text-sm text-gray-600">Emma Smith — Offline</div>
            </li>
            <li className="flex items-center">
              <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/100?u=face" alt="User Avatar" />
              <div className="ml-3 text-sm text-gray-600">David Chen — Away</div>
            </li>
            <li className="flex items-center">
              <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/100?u=natali" alt="User Avatar" />
              <div className="ml-3 text-sm text-gray-600">Lily Thompson — Busy</div>
            </li>
            <li className="flex items-center">
              <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/100?u=face-2" alt="User Avatar" />
              <div className="ml-3 text-sm text-gray-600">Maria Lopez — Online</div>
            </li>
            {/* Repeat for other contacts */}
          </ul>
        </div>
      )}
      
    </div>
  );
};

export default Home;
