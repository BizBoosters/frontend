// import React, { useState } from 'react';

// const Chatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleChatbot = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       {/* Chatbot Button */}
//       <button
//         onClick={toggleChatbot}
//         className={`fixed bottom-4 right-4 w-16 h-16 rounded-full bg-black text-white flex items-center justify-center cursor-pointer border border-gray-300 hover:bg-gray-700 hover:text-white transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
//       >
//         <span className="text-sm font-medium">
//           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24" fill="none"
//             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
//             className="animate-spin">
//             <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
//           </svg>
//         </span>
//       </button>

//       {/* Chat Window */}
//       {isOpen && (
//         <div
//           className="fixed bottom-20 right-4 bg-white w-80 h-96 p-4 rounded-lg shadow-lg border border-gray-300 transition-all duration-300"
//           style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)' }}
//         >
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-semibold">Chatbot</h2>
//             <button
//               onClick={toggleChatbot}
//               className="text-gray-400 hover:text-gray-600"
//             >
//               &#10005;
//             </button>
//           </div>
//           <div className="flex flex-col h-full">
//             <div className="flex-1 overflow-y-auto">
//               {/* Messages would go here */}
//               <div className="text-sm text-gray-600 my-2">AI: How can I help you today?</div>
//               <div className="text-sm text-gray-600 my-2">User: Tell me about your services.</div>
//             </div>
//             <div className="mt-4 flex items-center">
//               <input
//                 type="text"
//                 className="flex-grow border border-gray-300 rounded-md p-2 text-sm focus:outline-none"
//                 placeholder="Type a message..."
//               />
//               <button
//                 className="ml-2 bg-black text-white rounded-md px-4 py-2 text-sm hover:bg-gray-800"
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Chatbot;


// import React, { useState } from 'react';

// // Message Component
// const Message = ({ text, sender }) => (
//   <div className={`p-2 my-2 rounded ${sender === 'bot' ? 'bg-gray-200' : 'bg-blue-200'} max-w-xs`}>
//     {text}
//   </div>
// );

// // MessageList Component
// const MessageList = ({ messages }) => (
//   <div className="flex flex-col space-y-2">
//     {messages.map((msg, index) => (
//       <Message key={index} text={msg.text} sender={msg.sender} />
//     ))}
//   </div>
// );

// // Input Component
// const Input = ({ sendMessage }) => {
//   const [text, setText] = useState('');

//   const handleSend = () => {
//     if (text.trim()) {
//       sendMessage(text);
//       setText('');
//     }
//   };

//   return (
//     <div className="flex">
//       <input
//         className="border rounded-l p-2 flex-grow"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type a message"
//       />
//       <button className="bg-blue-500 text-white p-2 rounded-r" onClick={handleSend}>
//         Send
//       </button>
//     </div>
//   );
// };

// // Chatbot Component
// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [isOpen, setIsOpen] = useState(false);

//   const sendMessage = (text) => {
//     const newMessage = { text, sender: 'user' };
//     setMessages([...messages, newMessage]);
//     // Simulate bot response
//     setTimeout(() => {
//       setMessages((prev) => [...prev, { text: "Bot's response", sender: 'bot' }]);
//     }, 1000);
//   };

//   return (
//     <div className="fixed bottom-4 right-4">
//       <button
//         className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? 'Close' : 'Chat'}
//       </button>
//       {isOpen && (
//         <div className="bg-white border rounded-3xl shadow-lg p-4 w-[378px] h-[598px] mt-2">
//           <MessageList messages={messages} />
//           <Input sendMessage={sendMessage} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;


import React, { useState, useRef, useEffect } from 'react';
import SendIcon from '../assets/arrow-up.svg';
import BotIcon from '../assets/chat-bot.svg';
import Cross from '../assets/cancel.svg';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const messagesEndRef = useRef(null);

  const sendMessage = (text) => {
    if (text.trim()) {
      const newMessage = { text, 
        sender: 'user',
        timestamp: new Date().toLocaleString('en-US',{
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        }),
       };
      setMessages([...messages, newMessage]);

      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [...prev, { 
          text: "Bot's response", 
          sender: 'bot',
          timestamp: new Date().toLocaleString('en-US',{
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            weekday: 'short',
            month: 'short',
            day: 'numeric',
          }),
         },
        ]);
      }, 1000);
    }
  };

  useEffect(() => {
    if(messagesEndRef.current){
      messagesEndRef.current.scrollIntoView({behavior: 'smooth'});
    }
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 drop-shadow-md hover:drop-shadow-lg">
      {!isOpen && (
      <button
        className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={BotIcon} alt="Bot Icon" className="w-8 h-8"/>
      </button>
      )}
      {isOpen && (
        <div className="bg-white border rounded-2xl shadow-lg p-4 w-[378px] h-[598px] flex flex-col justify-between relative overflow-x-hidden">
          {/* Close Button */}
          <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-row gap-2 items-center'>
              <button className=" w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-400">
                <img src={BotIcon} alt="Bot Icon" className="w-6 h-6"/>
              </button>
              <p className='text-gray-700'>BizBoost Bot</p>
            </div>
            <button
              className="w-8 h-8 hover:bg-black-50 rounded-full flex items-center justify-center p-2"
              onClick={() => setIsOpen(false)}
            >
              <img src={Cross} alt='Cross' className='w-6 h-6'/> {/* Cross icon */}
            </button>
          </div>

          {/* Message List */}
          <div className="flex-grow overflow-y-auto overflow-x-hidden mb-2 mt-8 px-1 pt-2 pb-10">
            <div className="flex flex-col space-y-2">
              {messages.map((msg, index) => (
                <div key={index} className="flex flex-col">
                  <div
                  className={`py-2 px-3 mt-2 mb-1 rounded-lg max-w-64 min-w-20 text-left text-wrap ${
                    msg.sender === 'bot' 
                    ? 'bg-gray-200 self-start' 
                    : 'bg-blue-200 self-end'
                  }`}
                >
                  {msg.text}
                </div>
                <span 
                className={`text-xs text-black-100 mt-1] ${
                  msg.sender === 'bot' ? 'self-start' : 'self-end'
                }`}
                >
                  {msg.timestamp}
                  </span>
                </div>
              ))}
              <div ref={messagesEndRef}/>
            </div>
          </div>

          {/* Input Field */}
          <div className="flex relative ">
            <textarea
              className="border border-black-50 w-full p-2 rounded-lg shadow-md focus:outline-none focus:ring-0 focus:ring-blue-500 focus:border-blue-500 resize-none overflow-y-auto max-h-24 pr-10 leading-tight placeholder:text-black-100"
              placeholder="Ask me anything..."
              rows="1"
              style={{lineHeight: '1.5rem'}}
              // type="text"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage(e.target.value);
                  e.target.value = '';
                }
              }}
            />
            <button
              className="absolute right-[2px] bottom-[2px] bg-blue-500 text-white p-2 rounded-lg justify-center align-middle h-9 w-9"
              onClick={() => {
                const inputField = document.querySelector('textarea');
                sendMessage(inputField.value);
                inputField.value = '';
              }}
            >
              <img src={SendIcon} alt="Send Icon" className="w-6 h-6"/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
