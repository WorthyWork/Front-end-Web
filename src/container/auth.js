import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import Login from "../pages/login";
import { Transition, Grow } from "./StyleComponent"

export default function Auth() {
  let match = useRouteMatch();
  return (
    <Grow>
      <Transition>
        <Switch>
          <Route path={`${match.path}login`}>
            <Login />
          </Route>
          <Redirect from="/" to={`${match.path}login`} />
        </Switch>
      </Transition>
    </Grow>
  );
}
