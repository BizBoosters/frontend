import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Cookies from "js-cookie";

const socket = io("http://localhost:9000", {
    transports: ["websocket", "polling"],
});

const Messaging = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
    const [selectedChat, setSelectedChat] = useState(null);
    const [chats, setChats] = useState([]);
    const [currentUserType, setCurrentUserType] = useState(Cookies.get("stoken"));
    const [receiverType, setReceiverType] = useState(Cookies.get("receivertoken"));

    useEffect(() => {
        fetch(`http://localhost:3000/users/${currentUserType}`)
            .then((response) => response.json())
            .then((chats) => setChats(chats))
            .catch((error) => console.error("Error fetching data:", error));
    }, [currentUserType]);

    useEffect(() => {
        socket.emit("joinRoom", currentUserType);
        socket.emit("fetchConversation", {
            sender: currentUserType,
            receiver: receiverType,
        });

        socket.on("message", (newMessage) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        });

        socket.on("conversationHistory", (fetchedMessages) => {
            setMessages(fetchedMessages);
        });

        return () => {
            socket.off("message");
            socket.off("conversationHistory");
        };
    }, [currentUserType, receiverType]);

    const handleSendMessage = () => {
        if (inputMessage.trim() === "") return;

        const newMessage = {
            sender: currentUserType,
            receiver: receiverType,
            content: inputMessage,
        };

        socket.emit("message", newMessage);
        setInputMessage(""); // Clear input
    };

    const handleChatSelection = (chatUser) => {
        setReceiverType(chatUser._id);
        Cookies.set("receivertoken", chatUser._id);
        setSelectedChat(chatUser); // Set the selected chat

        socket.emit("fetchConversation", {
            sender: currentUserType,
            receiver: chatUser._id,
        });
    };

    const receiverName = selectedChat ? selectedChat.name : "Recipient"; // Default name if no chat selected

    return (
        <section className="flex flex-grow overflow-hidden">
            {/* Chat Panel Sidebar */}
            <div className="w-1/4 bg-bgWhite border-r overflow-y-auto">
                <h2 className="text-lg font-semibold pl-6 mt-4">Chats</h2>
                <div className="flex flex-col p-3">
                    {chats.map((chat, index) => (
                        <div
                            key={index}
                            onClick={() => handleChatSelection(chat)} // Handle chat selection
                            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer mb-4 ${
                                selectedChat && selectedChat._id === chat._id
                                    ? "bg-blue-500 text-white"
                                    : "hover:bg-gray-100"
                            }`}
                        >
                            <img
                                className="w-10 h-10 rounded-full"
                                src={chat.profileImage}
                                alt={chat.name}
                            />
                            <div className="flex flex-col">
                                <span
                                    className={`font-semibold ${
                                        selectedChat && selectedChat._id === chat._id
                                            ? "text-white"
                                            : "text-gray-900"
                                    }`}
                                >
                                    {chat.name}
                                </span>
                                <span
                                    className={`text-sm ${
                                        selectedChat && selectedChat._id === chat._id
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
                                message.sender === currentUserType
                                    ? "justify-end"
                                    : "justify-start"
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
                        placeholder={`Type a message to ${receiverName}...`} // Updated placeholder
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
    );
};

export default Messaging;
