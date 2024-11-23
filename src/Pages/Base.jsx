// src/components/Base.jsx
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {SidebarWithSearch} from "../Components/SideBar.jsx";
import NotificationPanel from "../Components/NotificationPanel.jsx"; // Assuming you're using React Router
import Navbar from "../Components/Navbar";
import ChatbaseChatbot from "../Components/Chatbot1";

const Base = ({children}) => {
    const [showNotifications, setShowNotification] = useState(false);
    const toggleNotifications = () => setShowNotification(!showNotifications);

    return (
        <div className="flex h-screen overflow-hidden bg-bgWhite ">
            <SidebarWithSearch/>
            {/* Main Content */}
            <main className="flex flex-col flex-grow">
                <div className={`${showNotifications ? "w-[1048px]" : "w-full"}`}>
                    <Navbar toggleNotifications={toggleNotifications}/>
                </div>
                {children} {/* This will render the specific page content */}
            </main>

            {showNotifications && <NotificationPanel/>}
            <ChatbaseChatbot/>
        </div>
    );
};

export default Base;
