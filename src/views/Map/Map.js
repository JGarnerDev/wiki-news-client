import React, { useState } from "react";

import Nav from "../../components/Nav/Nav";

const Map = ({ datesAvailable }) => {
  const [news, setNews] = useState();

  const handleUpdate = () => {};

  return (
    <>
      <Nav datesAvailable={datesAvailable} />
    </>
  );
};

export default Map;
