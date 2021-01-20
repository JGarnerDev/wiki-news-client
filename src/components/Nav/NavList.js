import React from "react";

import NavListItem from "./NavListItem";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const NavList = ({ clickHandler }) => {
  const lis = ["Home", "About", "Map"];

  return (
    <div role="presentation">
      <List>
        <NavListItem text="Home" link="/" clickHandler={clickHandler} />
      </List>
    </div>
  );
};

export default NavList;
