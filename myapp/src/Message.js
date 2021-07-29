import React, { useState } from 'react';
import './Message.css';

function MessageList(){

    const [messages] = useState([
        {author : "Ваяс", text : "Сообщение 1"},
        {author : "Bot", text : "Сообщение 2"},
        {author : "Ваяс", text : "Сообщение 3"},
        {author : "Bot", text : "Сообщение 4"}
    ]);

    return messages.map((message) =>
        <div>
            <h3>Сообщение от: {message.author}</h3>
            <p>{message.text}</p>
        </div>
    );
}
/*
function Message(props) {
    const [count, setCount] = useState(0);

    const updateCount = () => {
      setCount(count + 1);
    }

    return (
    <div className="Message">
        <p className="Message-p">Сообщение от: {props.name}</p>

        <span className="counter">{count}</span>
        <button className="counter-button" onClick={updateCount}>push</button>

    </div>
    );
}
*/
export default MessageList;
//export default Message;