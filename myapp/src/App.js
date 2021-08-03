//import PropTypes from "prop-types";
//import { Button } from "@material-ui/core";

import "./App.css";
import { /*useRef,*/ useEffect, useState, useCallback } from "react";
//import { Message } from "./components/Message";
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
    <div>
      <MessageList messages={messages} />
      <Form onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
