// import Navbar from "../Components/Navbar";
// import { SidebarWithSearch } from "../Components/SideBar";
// import React, { useState } from "react";
// import NotificationPanel from "../Components/NotificationPanel";

// const Messaging = () => {
//   const [showNotifications, setShowNotification] = useState(false); 
//   const toggleNotifications = () => setShowNotification(!showNotifications);

//   return (
//     <div className="flex h-screen overflow-hidden bg-bgWhite">
//       {/* Sidebar */}
      
//       <SidebarWithSearch />
      


//       {/* Main Content */}
//       <main className="flex flex-col flex-grow">
//         {/* Navbar */}
//         <div className={`${showNotifications? "w-[1048px]": "w-full"}`}>
//           <Navbar toggleNotifications={toggleNotifications} />
//         </div>
        

//         {/* Scrollable content */}
//         <section className="overflow-y-auto p-6 mt-2">
//           <div className="w-full">
//             {/* place the messaging here */}
//           </div>
//         </section>
//       </main>

//       {/* Notifications Container */}
//       {showNotifications && (
//           <NotificationPanel />
//       )}

      
//     </div>
//   );
// };

// export default Messaging;


import Navbar from "../Components/Navbar";
import { SidebarWithSearch } from "../Components/SideBar";
import React, { useState, useEffect } from "react";
import NotificationPanel from "../Components/NotificationPanel";

const Messaging = () => {
  const [showNotifications, setShowNotification] = useState(false);
  const [messages, setMessages] = useState([]); // Stores the conversation
  const [inputMessage, setInputMessage] = useState(""); // Controlled input for new messages
  const [currentUserType, setCurrentUserType] = useState("Investor"); // Mock current user type
  const [receiverType, setReceiverType] = useState("Entrepreneur"); // Opposite user type
  
  const toggleNotifications = () => setShowNotification(!showNotifications);

  // Fetch existing messages from the back end
  useEffect(() => {
    // Simulated API call to fetch messages
    const fetchMessages = async () => {
      // Replace this with your actual API call
      const mockMessages = [
        { sender: "Investor", content: "Hello, I'm interested in your project.", timestamp: "11:00 AM" },
        { sender: "Entrepreneur", content: "Hi! Thank you for reaching out.", timestamp: "11:05 AM" },
      ];
      setMessages(mockMessages);
    };

    fetchMessages();
  }, []);

  // Handle sending a new message
  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") return;

    const newMessage = {
      sender: currentUserType,
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    // Simulate back-end integration
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputMessage("");

    // Replace this with actual API call to send message
    // await sendMessageAPI(newMessage);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-bgWhite">
      {/* Sidebar */}
      <SidebarWithSearch />

      {/* Main Content */}
      <main className="flex flex-col flex-grow">
        {/* Navbar */}
        <div className={`${showNotifications ? "w-[1048px]" : "w-full"}`}>
          <Navbar toggleNotifications={toggleNotifications} />
        </div>

        {/* Scrollable content */}
        <section className="overflow-y-auto p-6 mt-2">
          <div className="w-full">
            <div className="flex flex-col gap-4">
              {/* Chat Messages */}
              <div className="flex flex-col gap-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.sender === currentUserType ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`p-4 max-w-[320px] rounded-lg ${
                        message.sender === currentUserType
                          ? "bg-blue-500 text-white rounded-br-none"
                          : "bg-gray-100 text-gray-900 rounded-bl-none"
                      }`}
                    >
                      <p>{message.content}</p>
                      <span className="text-xs text-gray-500">{message.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="flex-grow p-2 border rounded-lg"
                  placeholder={`Type a message to ${receiverType}...`}
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Notifications Container */}
      {showNotifications && <NotificationPanel />}
    </div>
  );
};

export default Messaging;
