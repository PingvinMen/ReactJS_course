import { SEND_MESSAGE } from "./chats/actionTypes";
import { sendMessage } from "./chats/actions";
import { AUTHORS } from "./../constants"

export const middleware = (store) => (next) => (action) => {
    if(
        action.type === SEND_MESSAGE &&
        action.payload.message.autor !== AUTHORS.robot
    ){
        setTimeout(() => {
            store.dispatch(sendMessage(action.payload.chatId, {
                text: "generated",
                author: AUTHORS.robot
            }));
        }, 1000);
    }

    return next(action);
}