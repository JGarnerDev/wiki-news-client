import React, { useState } from "react";
import { Link } from "react-router-dom";

import MapNavListItem from "./MapNavListItem";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";

const MapNav = ({ datesAvailable, handleUpdate }) => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNavAndUpdate = (shouldUpdateMap = false, newsDate) => {
    setOpenNav(!openNav);
    if (shouldUpdateMap) {
      handleUpdate(newsDate);
    }
  };

  const renderNewsDates = () =>
    datesAvailable.map((date) => (
      <MapNavListItem
        date={date}
        clickHandler={toggleNavAndUpdate}
        key={date}
      />
    ));

  return (
    <nav id="MapNav">
      <Button
        onClick={() => {
          toggleNavAndUpdate();
        }}
      >
        Hello
      </Button>

      <SwipeableDrawer
        anchor={"right"}
        open={openNav}
        onClose={() => {
          toggleNavAndUpdate();
        }}
        onOpen={() => {
          toggleNavAndUpdate();
        }}
      >
        <>
          <List>{renderNewsDates()}</List>
        </>
      </SwipeableDrawer>
    </nav>
  );
};

export default MapNav;
