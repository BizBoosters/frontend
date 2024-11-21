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
    // Join room for the current user
    socket.emit("joinRoom", currentUserType);

    // Fetch conversation history
    socket.emit("fetchConversation", {
      sender: currentUserType,
      receiver: receiverType,
    });

    // Listen for real-time messages
    socket.on("message", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    // Listen for conversation history
    socket.on("conversationHistory", (fetchedMessages) => {
      setMessages(fetchedMessages);
    });

    return () => {
      socket.off("message");
      socket.off("conversationHistory");
    };
  }, [currentUserType, receiverType]);

  // Handle sending a new message
  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    const newMessage = {
      sender: currentUserType,
      receiver: receiverType,
      content: inputMessage,
    };

    // Emit the message event to the backend
    socket.emit("message", newMessage);

    setInputMessage(""); // Clear input
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
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSendMessage(); // Call the function when Enter is pressed
                        }
                      }}
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
        {showNotifications && <NotificationPanel/>}
      </div>
  );
};

export default Messaging;
