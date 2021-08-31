import React, { useState } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Profile from "../Profile";
import Home from "../Home";
import { ThemeContext } from "../../utils/ThemeContext";

export const Router = () => {
  return (
    <ThemeContext.Provider>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/home">Dialog</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>

        <Switch>
          <Route
            path="/profile"
            render={(data) => <Profile match={data.match} history={data.history} />}
          ></Route>
          <Route path="/home/:chatId?">
            <Home />
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