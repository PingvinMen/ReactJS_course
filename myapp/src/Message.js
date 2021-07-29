import './Message.css';

function Message(props) {
    return (<div className="Message">
      <p className="Message-p">Сообщение от: {props.name}</p>
      </div>);
}

export default Message;