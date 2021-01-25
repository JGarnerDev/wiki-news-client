import React, { useState, useEffect } from "react";

import ReactMapGL, { Marker, Popup } from "react-map-gl";

import MapNav from "../../components/MapNav/MapNav";
import NewsIcon from "../../assets/newsIcon.svg";

import { getNewsByDate } from "../../api";

import "./Map.scss";
//REACT_APP_MAPBOX_TOKEN;

const Map = ({ datesAvailable, initialNews }) => {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 1,
    width: "100%",
    height: "100%",
  });

  const [newsData, setNewsData] = useState(initialNews);
  const [currentDate, setCurrentDate] = useState(initialNews);
  const [newsList, setNewsList] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    if (!newsData) {
      return;
    }
    const list = [];
    const categories = Object.keys(newsData);
    categories.shift();
    categories.forEach((category) => {
      newsData[category].forEach((newsItem) => {
        if (newsItem.coords) {
          list.push(newsItem);
        }
      });
    });
    setNewsList(list);
  }, [newsData]);

  const handleUpdate = async (date) => {
    if (date === currentDate) {
      return;
    }
    const newsData = await getNewsByDate(date);
    setCurrentDate(date);
    setNewsData(newsData);
  };

  const renderNewsList = () => {
    return newsList.map((newsItem) => {
      if (newsItem.coords.lat && newsItem.coords.lng) {
        return renderNewsItemMarker(newsItem);
      }
    });
  };

  const renderNewsItemMarker = (newsItem) => {
    return (
      <Marker
        latitude={parseInt(newsItem.coords.lat)}
        longitude={parseInt(newsItem.coords.lng)}
      >
        <img
          className="news-icon"
          src={NewsIcon}
          onClick={() => {
            if (selectedNews && selectedNews.title === newsItem.title) {
              setSelectedNews(null);
            } else {
              setSelectedNews(newsItem);
            }
          }}
        />
      </Marker>
    );
  };

  return (
    <>
      <MapNav datesAvailable={datesAvailable} handleUpdate={handleUpdate} />
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapStyle={"mapbox://styles/eljeffe345/ckkcxbasl27f517rz3u9n41wt"}
      >
        {renderNewsList()}
        {selectedNews ? (
          <>
            <Popup
              latitude={selectedNews.coords.lat}
              longitude={selectedNews.coords.lng}
              onClose={() => {
                setSelectedNews(null);
              }}
              width={"50vw"}
            >
              <h2>{selectedNews.title}</h2>
              <br />
              <p>{selectedNews.content[0]}</p>
              <br />
              <a href={selectedNews.href}>Link to article</a>
            </Popup>
          </>
        ) : null}
      </ReactMapGL>
    </>
  );
};

export default Map;
