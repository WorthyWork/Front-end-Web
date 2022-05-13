import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from "./container/main/index";
const url = process.env.REACT_APP_ROUTER_BASE;

export default function IndexRouter() {

  return (
    <Router basename={url}>
      <Switch>
        <Route path="/">
          <Main />
        </Route>
        {/* <Redirect from="/login" to="/" /> */}
      </Switch>
    </Router>
  );
}
