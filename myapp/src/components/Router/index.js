import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Profile from "../Profile";
import Home from "../Home";
import { News } from "../News";
import { ThemeContext } from "../../utils/ThemeContext";

export const Router = () => {
  return (
    <ThemeContext.Provider>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/dialog">Dialog</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/profile" render={(data) => <Profile match={data.match} history={data.history} />}>

          </Route>
          <Route path="/dialog/:chatId?">
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/" exact>
            <h2>WELCOME</h2>
          </Route>
          <Route path="*">
            <h2>404</h2>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};