import React, { useEffect, useState } from "react";

import { getDatesAvailableList, getNewsLatest, getNewsByDate } from "../api";

const App = () => {
  const [datesAvailable, setDatesAvailable] = useState([]);

  useEffect(() => {
    async function getData() {
      const dates = await getDatesAvailableList();
      setDatesAvailable(dates);
    }
    getData();
  }, []);

  return <div></div>;
};

export default App;
