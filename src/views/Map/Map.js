import React, { useState } from "react";

import Nav from "../../components/MapNav/MapNav";

import { getNewsByDate } from "../../api";

const Map = ({ datesAvailable, initialNews }) => {
  const [news, setNews] = useState(initialNews);
  const [currentDate, setCurrentDate] = useState(initialNews);

  const handleUpdate = async (date) => {
    if (date === currentDate) {
      return;
    }
    const news = await getNewsByDate(date);
    setCurrentDate(date);
    setNews(news);
  };

  console.log(news);
  return (
    <>
      <Nav datesAvailable={datesAvailable} handleUpdate={handleUpdate} />
    </>
  );
};

export default Map;
