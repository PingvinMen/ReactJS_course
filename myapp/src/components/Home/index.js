import "./Home.css";
import { useCallback } from "react";
import { MessageList } from "../MessageList";
import { Form } from "../Form";
import { ChatList } from "../ChatList";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sendMessageWithReplay } from "../../store/chats/actions";
import { selectName } from "../../store/profile/selectors";

function Home() {
  const { chatId } = useParams();

  const chats = useSelector(state => state.chats);
  const name = useSelector(selectName);
  const dispatch = useDispatch();

  const handleSendMessage = useCallback(
    (newMessage) => {
      dispatch(sendMessageWithReplay(chatId, {...newMessage, author: name}));
    },
    [chatId]
  );

  return (
    <div className="root">
      <ChatList chats={chats} />
      {!!chatId && (
        <div>
          <MessageList messages={chats[chatId].messages} />
          <Form onSendMessage={handleSendMessage} />
        </div>
      )}
    </div>
  );
}

export default Home;