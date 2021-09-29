import { AUTHORS } from "../../constants";
import { ADD_CHAT, SEND_MESSAGE } from "./actionTypes";

export const addChat = (chatId, name) => ({
  type: ADD_CHAT,
  payload: {
    chatId,
    name,
  },
});

export const sendMessage = (chatId, message) => ({
  type: SEND_MESSAGE,
  payload: {
    chatId,
    message,
  },
});

let timeout;

export const sendMessageWithReplay = (chatId, message) => (dispatch) => {
  dispatch(sendMessage(chatId, message));

  if(timeout){
    clearTimeout(timeout);
  }

  timeout = setTimeout(() => {
    dispatch(sendMessage(chatId, {author: AUTHORS.robot, text: "Отстань"}))
  }, 1000);
};