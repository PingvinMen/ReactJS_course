import { List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withThemeContext } from "../Message";
import { AddChat } from "./AddChat";

const Chats = ({ chats }) => {
  return (
    <>
      
      <List>
        {Object.values(chats).map((c) => (
          <ListItem key={c.id}>
            <Link to={`/home/${c.id}`}>{c.name}</Link>
          </ListItem>
        ))}
        <ListItem>
          <AddChat />
        </ListItem>
      </List>
    </>
  );
};

export const ChatList = withThemeContext(Chats);