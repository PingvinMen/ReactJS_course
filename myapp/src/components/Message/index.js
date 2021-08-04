import React from "react";
//import { usePrev } from "../utils";

export const Message = ({ text, author }) => (
  <div className="message__item">
    {author}: {text}
  </div>
);