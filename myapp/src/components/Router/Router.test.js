import React from "react";
import ReactDOM from "react-dom";
import Router from "./index";

it('render Router', () => {
    const div =document.createElement('div');
    ReactDOM.render(<Router />, div);
    ReactDOM.unmountComponentAtNode(div);
});