import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Quotes } from "../components/Screens/Quotes.jsx";
import { Authors } from "../components/Screens/Authors.jsx";

export const AppRouter = () => {
  return (
    <>
      <div className="page">
        <div className="page__inner">
          <Router>
            <Switch>
              <Route exact component={Quotes} path="/quotes" />
              <Route
                exact
                component={Authors}
                path="/authors/:authorName"
              />
              <Redirect to="/quotes" />
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
};
