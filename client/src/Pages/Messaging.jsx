import Navbar from "../Components/Navbar";
import { SidebarWithSearch } from "../Components/SideBar";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import NotificationPanel from "../Components/NotificationPanel";

const socket = io('http://localhost:9000', {
  transports: ['websocket', 'polling'],
});
const Messaging = () => {
  const [showNotifications, setShowNotification] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const queryParams = new URLSearchParams(window.location.search);
  const userTypeFromQuery = queryParams.get("userType");
  const [currentUserType, setCurrentUserType] = useState(userTypeFromQuery || "Investor");
  const [receiverType, setReceiverType] = useState(
      userTypeFromQuery === "Investor" ? "Entrepreneur" : "Investor"
  );

  const toggleNotifications = () => setShowNotification(!showNotifications);

  useEffect(() => {
    // Join a room based on user type (or other unique identifier)
    socket.emit("joinRoom", currentUserType);

    // Listen for new messages from the server
    socket.on("message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off("message");
    };
  }, [currentUserType]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    const newMessage = {
      sender: currentUserType,
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    // Emit the message to the server
    socket.emit("message", { userId: receiverType, message: newMessage });

    // Update UI immediately
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputMessage("");
  };

  return (
      <div className="flex h-screen overflow-hidden bg-bgWhite">
        <SidebarWithSearch />
        <main className="flex flex-col flex-grow">
          <div className={`${showNotifications ? "w-[1048px]" : "w-full"}`}>
            <Navbar toggleNotifications={toggleNotifications} />
          </div>
          <section className="overflow-y-auto p-6 mt-2">
            <div className="w-full">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  {messages.map((message, index) => (
                      <div
                          key={index}
                          className={`flex ${
                              message.sender === currentUserType ? "justify-end" : "justify-start"
                          }`}
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
        {showNotifications && <NotificationPanel />}
      </div>
  );
};

export default Messaging;
