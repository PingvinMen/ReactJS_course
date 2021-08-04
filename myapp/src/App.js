import "./App.css";
import { /*useRef,*/ useEffect, useState, useCallback } from "react";
import { MessageList } from "./components/MessageList";
import { Form } from "./components/Form";
import { AUTHORS } from "./components/constants";

function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = useCallback(
    (newMessage) => {
      setMessages([...messages, newMessage]);
    },
    [messages]
  );

  useEffect(() => {
    if (
      !messages.length ||
      messages[messages.length - 1].author === AUTHORS.bot
    ) {
      return;
    }

    const timeout = setTimeout(() => {
      const newMessage = {
        text: "Отстань",
        author: AUTHORS.bot,
        id: Date.now(),
      };

      setMessages([...messages, newMessage]);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [messages]);

  return (
    <div className="message">
      <div className="message__dialogs">
      
      </div>
      <div className="message__chat">
        <div className="message__list">
          <MessageList messages={messages} />
        </div>
        <div className="message__control">
          <Form onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}

export default App;
