import React from "react";
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import Chat from '../Chat';
import { Profile } from '../Profile';

export const Router = () => {
    return(
        <BrowserRouter>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/chat">Chat</Link>
                </li>
                <li>
                    <Link to="/profile">profile</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path='/'>
                    <h2>Home</h2>
                </Route>
                <Route exact path='/chat'>
                    <Chat />
                </Route>
                <Route exact path="/profile">
                    <Profile />
                </Route>
                <Route exact path="*">
                    <h1>404</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}