import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../views/Home/Home";
import About from "../views/About/About";
import Map from "../views/Map/Map";

import { getDatesAvailableList, getNewsLatest } from "../api";
import { paths } from "../config/paths";

import "../styles/main.scss";

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
          <Route path={paths.home} exact component={Home} />,
          <Route path={paths.about} exact component={About} />,
          <Route
            path={paths.map}
            exact
            component={() => (
              <Map datesAvailable={datesAvailable} initialNews={initialNews} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
