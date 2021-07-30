import React, { useCallback, useState} from 'react';
import './Message.css';

export const MessageList = (props) =>{

    const [messages,setMessage] = useState([]);

    const answerMessage = useCallback(() => {
        const newMessageBot = {author:"Bot", text:"Отстань"};
        setMessage([...messages, newMessageBot]);
    }, [messages]);

    const pushMessage = useCallback(() => {
        const newTextMessage = document.getElementById('textMessage').value;
        const newMessage = {author:"Вася", text: newTextMessage};
        setMessage([...messages, newMessage]);
        document.getElementById("textMessage").value = "";
    }, [messages]);

    return(
        <>
        {messages.map((mess) =>
            <div>
                <h3>{mess.author}</h3>
                <p>{mess.text}</p>
            </div>)
        }   <input type="text" id="textMessage"></input>
            <button className="counter-button" onClick={pushMessage}>push</button>
        </>
    );

}
export default MessageList;