import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../views/Home/Home";
import About from "../views/About/About";
import Map from "../containers/Map/Map";

import { getDatesAvailableList, getNewsLatest } from "../api";
import { paths } from "../config/paths";

import "../styles/main.scss";

const HomePage = lazy(() => import("../views/Home/Home"));
const AboutPage = lazy(() => import("../views/About/About"));
const MapPage = lazy(() => import("../containers/Map/Map"));

const App = () => {
  const [datesAvailable, setDatesAvailable] = useState([]);
  const [initialNews, setInitialNews] = useState(null);

  useEffect(() => {
    async function getData() {
      const dates = await getDatesAvailableList();
      const latestNews = await getNewsLatest();
      setDatesAvailable(dates);
      setInitialNews(latestNews);
    }
    getData();
  }, []);

  return (
    <Router>
      <div id="App">
        <Switch>
          <Suspense
            fallback={() => {
              return (
                <p>
                  "This element will be displayed while the component(s) for the
                  page are loaded upon page request"
                </p>
              );
            }}
          >
            <Route path={paths.home} exact component={HomePage} />
            <Route path={paths.about} exact component={AboutPage} />
            <Route
              path={paths.map}
              exact
              component={() => (
                <MapPage
                  datesAvailable={datesAvailable}
                  initialNews={initialNews}
                />
              )}
            />
          </Suspense>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
