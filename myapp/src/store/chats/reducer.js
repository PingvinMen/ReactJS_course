import { ADD_CHAT, SEND_MESSAGE } from "./actionTypes";

const initialState = {
  chat1: {
  messages: [],
    name: "Chat 1",
    id: "chat1",
  }
};

export const chatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CHAT: {
      return {
        ...state,
        [payload.chatId]: {
          name: payload.name,
          id: payload.chatId,
          messages: [],
        },
      };
    }
    case SEND_MESSAGE: {
      return {
        ...state,
        [payload.chatId]: {
          ...state[payload.chatId],
          messages: [...state[payload.chatId].messages, payload.message],
        },
      };
    }
    default:
      return state;
  }
};