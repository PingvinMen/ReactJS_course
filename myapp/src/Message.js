import React, { useCallback, useEffect, useState} from 'react';
import './Message.css';
//import { Button } from '@material-ui/core';

export const MessageList = (props) =>{

    const [messages,setMessage] = useState([]);

    useEffect(() => {
        if(messages.length && messages[messages.length - 1].author !== "Bot"){
            const newMessageBot = {author:"Bot", text:"Отстань"};
            setTimeout(function(){
                setMessage([...messages, newMessageBot]);
                console.log(messages);
            },1500)
        }
    }, [messages]);

    const pushMessage = useCallback(() => {
        const newTextMessage = document.getElementById('textMessage').value;
        const newMessage = {author:"Вася", text: newTextMessage};
        setMessage([...messages, newMessage]);
        document.getElementById("textMessage").value = "";
    }, [messages]);

    return(
        <>
        <div className="messenger__chat">
        {messages.map((mess) =>
            <div className="messenger__message">
                <div className="messenger__name">{mess.author}:</div>
                <div className="messenger__text">{mess.text}</div>
            </div>)
        }
        </div>
        <div className="messenger__control">
        <input type="text" className="messenger__text-str" id="textMessage"></input>
        <button className="messenger__button" onClick={pushMessage}>Отправить</button>
        </div>
        </>
    );
}
export default MessageList;