import React from "react";
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import Home from '../Home';

export const Router = () => {
    return(
        <BrowserRouter>
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
        </ul>

        <Switch>
            <Route path='/home'>
               <Home />
            </Route>
        </Switch>
        </BrowserRouter>
    )
}