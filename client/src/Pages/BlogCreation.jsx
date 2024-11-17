// <<<<<<< HEAD
import React, {useState, useEffect} from 'react'
import { SidebarWithSearch } from '../Components/SideBar'
import Navbar from "../Components/Navbar";
import PostCard from '../Components/PostBlog';
import NotificationPanel from "../Components/NotificationPanel";
import ChatbaseChatbot from "../Components/Chatbot1";
import CommentsForm from '../Components/Comment';
import FeaturedCard from '../Components/FeaturedCard';
const BlogCreation = () => {

  //crrate
const [data, setData] = useState([]);

useEffect(() => {
  fetch("http://localhost:3000/getblogs/")
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.error("Error fetching data:", error));
}, []);




  const [showNotifications, setShowNotification] = useState(false); 
  const toggleNotifications = () => setShowNotification(!showNotifications);

  return (
    <div className="flex h-screen overflow-hidden bg-bgWhite ">
      {/* Sidebar */}
      <SidebarWithSearch/>
      {/* Main Content */}
      <main className="flex flex-col flex-grow">
        {/* Navbar */}
        <div className={`${showNotifications? "w-[1048px]": "w-full"}`}>
          <Navbar toggleNotifications={toggleNotifications} />
        </div>
        

        {/* Scrollable content */}
        <section className="overflow-y-auto w-full p-6 mt-2">
        
        <CommentsForm/>


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

export default BlogCreation;
