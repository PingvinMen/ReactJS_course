import React, { useContext } from "react";
/*import { usePrev } from "../../utils";*/
import { ThemeContext } from "../../utils/ThemeContext";

export const MessageDef = ({ text, author,  }) => {
  return (
    <div>
      {author}: {text}
    </div>
  );
};


export const withThemeContext = (Component) => {
  return (props) => {
    const theme = useContext(ThemeContext);
    return <Component {...props} theme={theme} />;
  };
};

export const Message = withThemeContext(MessageDef);