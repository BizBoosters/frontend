import Navbar from "../Components/Navbar";
import { SidebarWithSearch } from "../Components/SideBar";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import NotificationPanel from "../Components/NotificationPanel";
import Cookies from "js-cookie";
const socket = io("http://localhost:9000", {
  transports: ["websocket", "polling"],
});


const Messaging = () => {
  const [showNotifications, setShowNotification] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  // const queryParams = new URLSearchParams(window.location.search);
  
  const [selectedChat, setSelectedChat] = useState(null);

  // const chats = [
  //   { userType: "Entrepreneur1", name: "John Doe", profilePicture: "/path/to/image1.jpg" },
  //   { userType: "Entrepreneur2", name: "Jane Smith", profilePicture: "/path/to/image2.jpg" },
  //   { userType: "Entrepreneur3", name: "Alice Johnson", profilePicture: "/path/to/image3.jpg" },
  // ];

  const [chats, setChats] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
        .then((response) => response.json())
        .then((chats) => setChats(chats))
        .catch((error) => console.error("Error fetching data:", error));
  }, []);


  // const queryParams = new URLSearchParams(window.location.search);
  const userTypeFromQuery = Cookies.get("stoken"); //queryParams.get("userType");
  const [currentUserType, setCurrentUserType] = useState(userTypeFromQuery);
  Cookies.set("receivertoken", "Entre");
  const [receiverType, setReceiverType] = useState(Cookies.get("receivertoken"));

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

  const handleChatSelection = (chatUser) => {
    // Update the receiver type and reset messages
    setReceiverType(chatUser._id);
    Cookies.set("receivertoken", chatUser._id);
    setSelectedChat(chatUser);

    // Fetch the conversation for the newly selected chat
    socket.emit("fetchConversation", {
      sender: currentUserType,
      receiver: chatUser._id,

    });
    socket.on("message", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });
  };

  return (
    <div className="flex h-screen overflow-hidden bg-bgWhite">
      <SidebarWithSearch /> {/* Main Menu Sidebar */}
      <main className="flex flex-col flex-grow">
        <div className={`${showNotifications ? "w-[1048px]" : "w-full"}`}>
          <Navbar toggleNotifications={toggleNotifications} />
        </div>
        <section className="flex flex-grow overflow-hidden">
          {/* Chat Panel Sidebar */}
          <div className="w-1/4 bg-bgWhite border-r overflow-y-auto">
            <h2 className="text-lg font-semibold pl-6 mt-4">Chats</h2>
            <div className="flex flex-col p-3">
              {chats.map((chat, index) => (
                <div
                  key={index}
                  onClick={() => handleChatSelection(chat)}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
                    selectedChat?.userType === chat.userType
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={chat.profilePicture}
                    alt={chat.name}
                  />
                  <div className="flex flex-col">
                  <span
                    className={`font-semibold ${
                      selectedChat?.userType === chat.userType
                        ? "text-white"
                        : "text-gray-900"
                    }`}
                  >
                    {chat.name}
                  </span>
                  <span
                    className={`text-sm ${
                      selectedChat?.userType === chat.userType
                        ? "text-gray-200"
                        : "text-gray-600"
                    }`}
                  >
                    {chat.userType}
                  </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Messages Section */}
          <div className="flex flex-col flex-grow p-6 justify-end">
            <div className="flex flex-col gap-4 overflow-y-auto">
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
            <div className="flex items-center gap-2 mt-4">
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
        </section>
      </main>
      {showNotifications && <NotificationPanel />}
    </div>
  );
};

export default Messaging;
