// <<<<<<< HEAD
import React, {useState, useEffect} from 'react'
import { SidebarWithSearch } from '../Components/SideBar'
import Navbar from "../Components/Navbar";
import PostCard from '../Components/PostBlog';
import NotificationPanel from "../Components/NotificationPanel";
import ChatbaseChatbot from "../Components/Chatbot1";
import {BackgroundBlogCard} from '../Components/Cards';
// import FeaturedCard from '../Components/FeaturedCards';
import RelatedPost from '../Components/RelatedPost';
import Programs from '../Components/programs';
import FeaturedCard from '../Components/FeaturedCard';
const Blogs = () => {

  
const [data, setData] = useState([]);
const [datay,setDatay] = useState([]);

useEffect(() => {
  fetch("../../public/post.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
}, []);

useEffect(() => {
  fetch("http://localhost:3000/getblogs")
      .then((response) => response.json())
      .then((datay) => setDatay(datay)) // Use setDatay here
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
        <div className="flex flex-row" >
        <div className="">
          <PostCard post={data}/>
        </div>
        <div className='flex flex-col' >
          <RelatedPost/>
          <Programs/>
        </div>
      </div> 

  <div className='flex flex-row mt-10 px-4 gap-8 md:col-span-3'>
  {/* <div className="">
        <BackgroundBlogCard/>
        </div>
        <div className="">
        <BackgroundBlogCard/>
        </div>
        <div className="">
        <BackgroundBlogCard/>
        </div> */}
        {datay.slice(0, 3).map((post, index) => (
    <FeaturedCard key={index} post={post} />
))}


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