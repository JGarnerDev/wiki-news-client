import React, { useState } from "react";
import { Link } from "react-router-dom";

import NavListItem from "./NavListItem";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuRounded from "@material-ui/core/Menu";
import NavList from "./NavList";

const Nav = ({ datesAvailable, handleUpdate }) => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const renderNewsDates = () =>
    datesAvailable.map((date) => (
      <NavListItem date={date} clickHandler={toggleNav} />
    ));

  return (
    <nav id="Nav">
      <Button
        onClick={() => {
          toggleNav();
        }}
      >
        Hello
      </Button>

      <SwipeableDrawer
        anchor={"right"}
        open={openNav}
        onClose={() => {
          toggleNav();
        }}
        onOpen={() => {
          toggleNav();
        }}
      >
        <>
          <List>{renderNewsDates()}</List>
        </>
      </SwipeableDrawer>
    </nav>
  );
};

export default Nav;
