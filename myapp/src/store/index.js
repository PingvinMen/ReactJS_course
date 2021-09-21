import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import  thunk  from 'redux-thunk';
import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);