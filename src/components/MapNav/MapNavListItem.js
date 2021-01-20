import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const NavListItem = ({ date, clickHandler }) => {
  return (
    <ListItem
      button
      onClick={() => {
        clickHandler(true, date);
      }}
    >
      <ListItemText primary={date} />
    </ListItem>
  );
};

export default NavListItem;
