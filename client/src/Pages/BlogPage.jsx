// <<<<<<< HEAD
import React, {useState, useEffect} from 'react'
import { SidebarWithSearch } from '../Components/SideBar'
import Navbar from "../Components/Navbar";
import PostCard from '../Components/PostBlog';
import NotificationPanel from "../Components/NotificationPanel";
import ChatbaseChatbot from "../Components/Chatbot1";
import {BackgroundBlogCard} from '../Components/Cards'

const Blogs = () => {

  
const [data, setData] = useState([]);

useEffect(() => {
  fetch("../../public/post.json")
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.error("Error fetching data:", error));
}, []);


  const [showNotifications, setShowNotification] = useState(true); 
  const toggleNotifications = () => setShowNotification(!showNotifications);

  return (
    <div className="flex h-screen overflow-hidden bg-bgWhite ">
      {/* Sidebar */}
      <SidebarWithSearch/>
      {/* Main Content */}
      <main className="flex flex-col flex-grow">
        {/* Navbar */}
        <div className={`${showNotifications? "w-[948px]": "w-full"}`}>
          <Navbar toggleNotifications={toggleNotifications} />
        </div>
        

        {/* Scrollable content */}
        <section className="overflow-y-auto w-full p-6 mt-2">
        <div className="flex flex-row" >
    <div>
    </div>
    <div className="">
        {/* Cards for Statistics */}
        <PostCard post={data}/>
      </div>
  </div> 

  <div className='flex flex-row mt-10 px-4 gap-8 md:col-span-3'>
  <div className="">
        <BackgroundBlogCard/>
        </div>
        <div className="">
        <BackgroundBlogCard/>
        </div>
        <div className="">
        <BackgroundBlogCard/>
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
