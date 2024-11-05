import React, { useEffect } from "react";

const ChatbaseChatbot = () => {
  useEffect(() => {
    // Define the chatbot configuration
    window.embeddedChatbotConfig = {
      chatbotId: "2MGVcxx6jTMSbEL_sxHXh",
      domain: "www.chatbase.co"
    };

    // Create the script tag to load the chatbot script
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.setAttribute("chatbotId", "2MGVcxx6jTMSbEL_sxHXh");
    script.setAttribute("domain", "www.chatbase.co");
    script.defer = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Function to inject custom CSS into the iframe
    const injectCSS = () => {
      const iframe = document.querySelector('iframe[src*="chatbot-iframe"]');
      if (iframe) {
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        const style = iframeDocument.createElement("style");
        style.innerHTML = `
          .chatbase-message-bubbles{ 
            display: none;
          }
        `;
        iframeDocument.head.appendChild(style);
      }
    };

    // Wait for the iframe to load and then inject the CSS
    const iframeLoadInterval = setInterval(() => {
      injectCSS();
    }, 10000000000);

    // Clean up interval and script when component unmounts
    return () => {
      clearInterval(iframeLoadInterval);
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component does not render anything visible
};

export default ChatbaseChatbot;
